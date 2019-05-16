<?php

namespace App\Http\Controllers\CustomerAuth;

use App\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\GeoProv;
use App\Mail\SendMail;
use Mail;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    
    // protected $redirectTo = '/registro-completo';
    protected function redirectTo()
    {
        $customer = auth()->guard('customer')->user();
        // If group 3 put register to hold
        // if($customer->group == '3' && $customer->status == '0' ){
        //     return '/registro-en-proceso';
        // } else {
        //     return '/registro-completo';
        // }
        return '/tienda';
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => 'required|string|max:20|unique:customers',
            'email' => 'required|string|email|max:255|unique:customers',
            'password' => 'required|string|min:6|confirmed',
            'phone' => 'required'
        ],[
            'username.required'    => 'Debe ingresar un nombre de usuario',
            'username.max'         => 'El nombre de usuario puede contener hasta 20 caracteres',
            'username.unique'      => 'El nombre de usuario ingresado ya existe, debe elegir otro',
            'email.unique'         => 'Ya hay un usuario registrado con el email ingresado, debe utilizar uno distinto',
            'phone.required'       => 'Debe ingresar un número de teléfono'
        ]);
    }
        
    protected function create(array $data)
    {
        $status = '1';
        $group = '2'; // Min 
        if(isset($data['group']))
            $group = $data['group'];
        
        return Customer::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'group' => $group,
            'status' => $status,
            'password' => bcrypt($data['password'])
        ]);
    }

    protected function guard(){
        return auth()->guard('customer');
    }

    public function showRegistrationForm(){
        // $geoprovs = GeoProv::pluck('name','id');
        return view('store.register');
            // ->with('geoprovs',$geoprovs);
    }

    // public function showRegistrationFormReseller(){
    //     $geoprovs = GeoProv::pluck('name','id');
        
    //     return view('store.register-reseller')
    //     ->with('geoprovs',$geoprovs);
    // }


    public function register(Request $request)
    {
        if($request->group != '2' && $request->group != '3')
            return back()->withErrors('No se ha seleccionado un tipo de usuario');

        $this->validator($request->all())->validate();
        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);
     
        // try{
        //     if($user->group == '3'){
        //         $subject = 'Solicitud de cliente mayorísta';
        //         $message = 'Un usuario ha solicitado ser cliente mayorísta';
        //     } else {
        //         $subject = 'Nuevo usuario registrado';
        //         $message = 'Nuevo usuario registrado';
        //     }
        //     // Mail::to(APP_EMAIL_1)->send(new SendMail($subject, 'SimpleMail', $message));
        // } catch (\Exception $e) {
        //     dd($e->getMessage());
        // }

        return $this->registered($request, $user)
                        ?: redirect($this->redirectPath())->with("message", "Bienvenid@! Gracias por registrarte!");
    }
}
