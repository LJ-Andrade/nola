<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Customer;
use App\Traits\CartTrait;
use App\Shipping;
use App\Payment;
use App\User;
use App\Cart;
use App\CartItem;
use App\CatalogArticle;
use PDF;
use Excel;
use Cookie;

class OrdersController extends Controller
{
    use CartTrait;

    /*
    |--------------------------------------------------------------------------
    | INDEX
    |--------------------------------------------------------------------------
    */

    public function index(Request $request)
    {   
        $pagination = $this->getSetPaginationCookie($request->get('results'));
        $status = $request->get('status');

    
        if($request->id != null)
        {
            $items = Cart::where('id', $request->id)->where('status', $status)->orderBy('id', 'ASC')->paginate($pagination); 
        } 
        else if($request->customer != null)
        {
            $items = Cart::searchCustomer($request->customer)->where('status', $status)->paginate($pagination);
        }
        else
        {
            $items = Cart::where('status', $status)->orderBy('created_at', 'DESC')->paginate($pagination);
        }
        

        return view('vadmin.orders.index')->with('items', $items);    
    }

    public function getSetPaginationCookie($request)
    {
        if($request)
        {
            $pagination = $request;
            Cookie::queue('stock-pagination', $pagination, 2000);
        }
        else
        {
            if(Cookie::get('stock-pagination') != null)
            {
                $pagination = Cookie::get('stock-pagination');
            }
            else
            {
                $pagination = 24;
            }
        }
        // dd($pagination);
        return $pagination;
    }

    /*
    |--------------------------------------------------------------------------
    | SHOW
    |--------------------------------------------------------------------------
    */

    public function show($id)
    {
        try
        {
            $cart = Cart::findOrFail($id);
        } 
        catch(\Exception $e)
        {
            return redirect()->back()->with('message', 'Error: '.$e->getMessage());
        }
        $customer = Customer::find($cart->customer_id);
        
        $order = $this->calcCartData($cart);
        return view('vadmin.orders.show')
            ->with('order', $order)
            ->with('customer', $customer);
    }

    /*
    |--------------------------------------------------------------------------
    | EXPORT
    |--------------------------------------------------------------------------
    */

    public function showUnifiedNewOrders($output)
    {
        if($output == 'inview')
        {
            $items = $this->unifyNewOrders();
            return view('vadmin.orders.new-orders')->with('items', $items);
        }
        else
        {
            return $this->exportToFile($output, 'Nola-pedidos-unificados', 'vadmin.orders.new-orders-invoice', $this->unifyNewOrders());
        }
    }

    public function exportToFile($filetype, $filename, $view, $data)
    {
        Excel::create($filename, function($excel) use($data, $view){
            $excel->sheet('Listado', function($sheet) use($data, $view) { 
                $sheet->getDefaultStyle()->getFont()->setName('Arial');
                $sheet->getDefaultStyle()->getFont()->setSize(12);
                $sheet->getColumnDimension()->setAutoSize(true);
                $sheet->loadView($view, 
                compact('data'));
            });
        })->export($filetype);
    }
    
    // Unify New Orders
    public function unifyNewOrders()
    {
        $orders = Cart::where('status', 'Process')->get();

        $collected = [];

        foreach($orders as $order)
        {
            foreach($order->items as $item)
            {
                if(array_key_exists($item->article_id, $collected))
                {
                    $collected[$item->article_id]['quantity'] = $collected[$item->article_id]['quantity'] + $item->quantity;
                }
                else
                {
                    $collected[$item->article_id] = [
                        'article_id' => $item->article_id,
                        'article_name' => $item->article_name,
                        'details' => $item->size.' , '.$item->textile.' , '.$item->color,
                        'quantity' => $item->quantity,
                        'price' => $item->final_price
                    ];                
                }
            }
        }
        // From Helpers
        sort_array_of_array($collected, 'article_name');
        // dd($collected);
        return $collected;
    }



    // DOWNLOAD INVOICE PDF
    public function downloadInvoice($id, $action)
    {
        $view = 'vadmin.orders.invoicePdf';
        // Return Options
        // return $pdf->dowload($filename.'.pdf');
        // return $pdf->stream($filename.'.pdf');
        $order = Cart::find($id);
        if($order != null){
            $cart = $this->calcCartData($order);
            $pdf = PDF::loadView($view, compact('order', 'cart'))->setPaper('a4', 'portrait');
            $filename = 'Comprobante-Pedido-N-'.$order->id;
            if($action == 'stream')
            {
                return $pdf->stream($filename.'.pdf');
            } else {
                return $pdf->download($filename.'.pdf');
            }
            die();

        } else {
            return redirect()->route('store')->with('message','Estás intentando una acción ilegal...');
        }
    }
    

    public function exportOrderXls($id)
    {   
        $order = $this->calcCartData(Cart::find($id));
        Excel::create('Nola-Pedido-'.$id, function($excel) use($order){
            $excel->sheet('Listado', function($sheet) use($order) { 
                $sheet->getDefaultStyle()->getFont()->setName('Arial');
                $sheet->getDefaultStyle()->getFont()->setSize(12);
                $sheet->getColumnDimension()->setAutoSize(true);
                $sheet->loadView('vadmin.orders.invoiceXls', 
                compact('order'));
            });
        })->export('xls');         
    }

    public function exportOrderCsv($id)
    {   
        $order = $this->calcCartData(Cart::find($id));
        $filename = 'Nola-Pedido-'.$id.'-Cliente-'.$order['rawdata']->customer->name.' '.$order['rawdata']->customer->surname;
        Excel::create($filename, function($excel) use($order){
            $excel->sheet('Listado', function($sheet) use($order) { 
                $sheet->getDefaultStyle()->getFont()->setName('Arial');
                $sheet->getDefaultStyle()->getFont()->setSize(12);
                $sheet->getColumnDimension()->setAutoSize(true);
                $sheet->getRowDimension(2)->setRowHeight(20);
                $sheet->loadView('vadmin.orders.invoiceXls', 
                compact('order'));
            });
        })->export('csv');         
    }

    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    public function create(Request $request)
    {
        $shippings = Shipping::orderBy('name', 'ASC')->pluck('name', 'id');
        $payment_methods = Payment::orderBy('name', 'ASC')->pluck('name', 'id');
        $sellers = User::pluck('name', 'id');

        return view('vadmin.orders.create')
            ->with('sellers', $sellers)
            ->with('shippings', $shippings)
            ->with('payment_methods', $payment_methods);
    }
    
    public function store(Request $request)
    {   
        // dd($request->all());

        // Store Cart
        $cart = new Cart();
        $cart->status = 'Approved';
        
        //Set Payment Method
        $cart->payment_method_id = $request->payment_method_id;
        $payment_percent = Payment::where('id', $request->payment_method_id)->first()->percent;
        $cart->payment_percent = $payment_percent;
 
        // Set Shipping Method
        $cart->shipping_id = $request->shipping_id;
        $shipping_price = Shipping::where('id', $request->shipping_id)->first()->price;
        $cart->shipping_price = $shipping_price;

        $cart->customer_id = $request->customer_id;
        $cart->status = "Process";
        $cart->save();
        
        
        $cart_id = $cart->id;
        
        
        foreach($request->item as $item)
        {
            $cartItem = new CartItem();
            $cartItem->cart_id = $cart_id;
            $cartItem->article_id = $item['id'];
            $cartItem->quantity = $item['quantity'];
            $cartItem->final_price = $item['final_price'];
            $article = CatalogArticle::where('id', $item['id'])->first();
            
            $cartItem->article_name = $article->name;
            $cartItem->color = $article->color;
            
            $cartItem->save();    
            $this->updateCartItemStock($cartItem->article_id, -$item['quantity']);
        }

        
        return redirect()->route('orders.index', ['status' => 'All'])->with('message','Pedido cargado exitosamente');
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */

    public function edit($id)
    {
        $order = Cart::find($id);
        return view('vadmin.orders.edit')->with('order', $order);
    }

    public function update(Request $request, $id)
    {
        $category = Category::find($id);

        $this->validate($request,[
            'name' => 'required|min:4|max:250|unique:categories,name,'.$category->id,
        ],[
            'name.required' => 'Debe ingresar un nombre a la categoría',
            'name.unique'   => 'La categoría ya existe'
        ]);
        
        $category->fill($request->all());
        $category->save();

        return redirect()->route('categories.index')->with('message','Categoría editada');
    } 

}