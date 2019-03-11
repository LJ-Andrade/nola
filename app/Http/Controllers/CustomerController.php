<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;
use App\GeoProv;
use Auth;
use Image;
use File;
use PDF;
use Excel;
use Cookie;

class CustomerController extends Controller
{

    /*
    |--------------------------------------------------------------------------
    | DISPLAY
    |--------------------------------------------------------------------------
    */
    public function index(Request $request)
    {    
        $pagination = $this->getSetPaginationCookie($request->get('results'));
        $group = $request->get('group');
        $status = $request->get('status');
        // Name is name, surname, username, email
        $name  = $request->get('name');
        
        $order = 'DESC';
        $orderBy = 'created_at';

        if($request->order)
            $order = $request->order;
        if($request->orderBy)
            $orderBy = $request->orderBy;

        if(isset($group) && isset($status)){
            $items = Customer::searchGroupStatus($group, $status)->orderBy($orderBy, $order)->paginate($pagination);    
        }
        elseif(isset($name))
        {
            $items = Customer::searchName($name)->orderBy($orderBy, $order)->paginate($pagination); 
        }
        elseif(isset($group))
        {
            $items = Customer::searchGroup($group)->orderBy($orderBy, $order)->paginate($pagination); 
        }
        else 
        {
            $items = Customer::orderBy($orderBy, $order)->paginate($pagination); 
        }


        return view('vadmin.customers.index')
            ->with('items', $items)
            ->with('name', $name)
            ->with('group', $group);
    }

    public function getSetPaginationCookie($request)
    {
       
        if($request)
        {
            Cookie::queue('store-pagination', $request, 2000);
            $pagination = $request;
        }
        else
        {   
            if(Cookie::get('store-pagination'))
            {
                $pagination = Cookie::get('store-pagination');
            }
            else{
                $pagination = 24;
            }
        } 
        return $pagination;
    }

    
    public function show($id)
    {
        $customer = Customer::findOrFail($id);
        return view('vadmin.customers.show', compact('customer'));
    }

    /*
    |--------------------------------------------------------------------------
    | EXPORT
    |--------------------------------------------------------------------------
    */

    public function exportPdf($params, $action)
    {   
        $items = $this->getData($params);
        $pdf = PDF::loadView('vadmin.customers.invoice-pdf', array('items' => $items));
        $pdf->setPaper('A4', 'landscape');
        if($action == 'stream')
            return $pdf->stream('listado-clientes.pdf');

        return $pdf->download('listado-de-clientes.pdf');
        
    }

    // public function exportXls($params)
    // {   
    //     $items = $this->getData($params);
    //     Excel::create('listado-de-clientes', function($excel) use($items){
    //         $excel->sheet('Listado', function($sheet) use($items) {   
    //             $sheet->loadView('vadmin.customers.invoice-excel', 
    //             compact('items'));
    //         });
    //     })->export('xls');         
    // }

    public function exportSheet($params, $format)
    {
        $items = $this->getData($params);
        Excel::create('listado-de-clientes', function($excel) use($items){
            $excel->sheet('Listado', function($sheet) use($items) {   
                $sheet->loadView('vadmin.customers.invoice-sheet', 
                compact('items'));
            });
        })->export($format);
    }


    public function getData($params)
    {
        if($params == 'all'){
            $items = Customer::orderBy('id', 'ASC')->get(); 
            return $items;
        }

        parse_str($params , $query);
        if(isset($query['name'])){
            return $items = Customer::searchname($query['name'])->orderBy('id', 'ASC')->get(); 
        }

        if(isset($query['group'])){
            return $items = Customer::searchGroup($query['group'])->orderBy('id', 'ASC')->get();
        } 
        

        $items = Customer::orderBy('id', 'ASC')->get(); 
        return $items;
    }

    /*
    |--------------------------------------------------------------------------
    | CREATE
    |--------------------------------------------------------------------------
    */

    public function create()
    {
        $geoprovs = GeoProv::pluck('name','id');
        return view('vadmin.customers.create')->with('geoprovs', $geoprovs);
    }

    public function store(Request $request)
    {

        $customer = new Customer($request->all());
        $this->validate($request,[
            'name'           => 'required',
            'email'          => 'min:3|max:250|required|unique:customers,email',
            'password'       => 'min:4|max:12listado-usuarios0|required|',
            'group'          => 'required'
            
        ],[
            'email.required'    => 'Debe ingresar un email',
            'email.unique'      => 'El email ya existe',
            'password.required' => 'Debe ingresar una contraseña',
            'group.required'    => 'Debe ingresar un tipo de cliente'
        ]);

        if($request->file('avatar') != null){
            $avatar   = $request->file('avatar');
            $filename = $customer->name.'.jpg';
            Image::make($avatar)->encode('jpg', 80)->fit(300, 300)->save(public_path('images/customers/'.$filename));
            $customer->avatar = $filename;
        }

        $customer->password = bcrypt($request->password);
        $customer->status = '1';
        $customer->save();

        return redirect('vadmin/customers')->with('message', 'Cliente creado correctamente');
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATE
    |--------------------------------------------------------------------------
    */
    public function edit($id)
    {
        $geoprovs = GeoProv::pluck('name','id');
        $customer = Customer::findOrFail($id);
        $section = 'customer-edit';
        return view('vadmin.customers.edit')
            ->with('geoprovs', $geoprovs)
            ->with('customer', $customer)
            ->with('section', $section); 
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);
        if($request->updatePassword == '1')
        {
            $this->validate($request,[
                'name' => 'required|max:255',
                'name' => 'required|max:20|unique:customers,name,'.$customer->id,
                'email' => 'required|email|max:255|unique:customers,email,'.$customer->id,
                'password' => 'required|min:6|confirmed',
                
            ],[
                'name.required' => 'Debe ingresar un nombre',
                'name.required' => 'Debe ingresar un nombre de usuario',
                'name.unique' => 'El nombre de usuario ya está siendo utilizado',
                'email.required' => 'Debe ingresar un email',
                'email.unique' => 'El email ya existe',
                'password.min' => 'El password debe tener al menos :min caracteres',
                'password.required' => 'Debe ingresar una contraseña',
                'password.confirmed' => 'Las contraseñas no coinciden',
            ]);
        }
        else 
        {
            $this->validate($request,[
                'name' => 'required|max:255',
                'name' => 'required|max:20|unique:customers,name,'.$customer->id,
                'email' => 'required|email|max:255|unique:customers,email,'.$customer->id,
                
            ],[
                'name.required' => 'Debe ingresar un nombre',
                'name.required' => 'Debe ingresar un nombre de usuario',
                'name.unique' => 'El nombre de usuario ya está siendo utilizado',
                'email.required' => 'Debe ingresar un email',
                'email.unique' => 'El email ya existe',
            ]);
        }

        $customer->fill($request->all());

        $customer->password = bcrypt($request->password);
        if($request->file('avatar') != null){
            $avatar   = $request->file('avatar');
            $filename = $customer->Customername.'.jpg';
            Image::make($avatar)->encode('jpg', 80)->fit(300, 300)->save(public_path('images/customers/'.$filename));
            $customer->avatar = $filename;
        }

        $customer->save();

        return redirect('vadmin/customers')->with('Message', 'Usuario '. $customer->name .'editado correctamente');
    }


    // ---------- Update Avatar --------------- //
    public function updateCustomerAvatar(Request $request)
    {
        if ($request->hasFile('avatar')) {
            $customer = Customer::findOrFail(Auth::guard('customer')->user()->id);
            $avatar = $request->file('avatar');
            $filename = $customer->id.'.jpg';

            $path = public_path('webimages/customers/');
            try{
                if (!file_exists($path)) {
                    $oldmask = umask(0);
                    mkdir($path, 0777);
                    umask($oldmask);
                }
                
                Image::make($avatar)->encode('jpg', 80)->fit(300, 300)->save($path.$filename);
                $customer->avatar = $filename;
                $customer->save();

                return back();
            }   catch(\Exception $e){
                dd($e);
            }
        }
    }

    public function updateCustomerGroup(Request $request)
    {
        $customer = Customer::find($request->id);
        $customer->group = $request->group;
        $customer->save();

        return response()->json([
            'success'   => true,
            'message'   => 'Grupo actualizado'
        ]);    
    }
    /*
    |--------------------------------------------------------------------------
    | DESTROY
    |--------------------------------------------------------------------------
    */


    public function destroy(Request $request)
    {   
        
        $ids = json_decode('['.str_replace("'",'"',$request->id).']', true);
        
        try {
            foreach ($ids as $id) {
                $record = Customer::find($id);
                $record->delete();
            }
            return response()->json([
                'success'   => true,
            ]); 
        }  catch (\Exception $e) {
            return response()->json([
                'success'   => false,
                'error'    => 'Error: '.$e
            ]);    
        }
        
    }
}
