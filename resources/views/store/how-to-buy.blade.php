@extends('store.partials.main')

@section('header-image')
	<div class="index-header">		
	</div>
@endsection

@section('content')
    {{-- @if(Auth::guard('customer')->check())
    <div class="CheckoutCart checkout-cart checkout-cart-floating">
        @include('store.partials.checkout-cart')
    </div>
    @endif --}}
	<div class="container info-container">
		<div class="row">
            <div class="deco-title">
                <span>
                    <div class="deco deco-left"><img src="{{ asset('images/web/icons/icon-deco-left.png') }}" alt="Deco"></div>
                    Cómo comprar
                    <div class="deco deco-right"><img src="{{ asset('images/web/icons/icon-deco-right.png') }}" alt="Deco"></div>
                </span>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/web/icons/compra1.png') }} " alt="Compras">
                <p>Elegí el producto que deseás comprar y selecciona la cantidad de unidades (si te posicionas con el cursor sobre la cantidad, te va a indicar cuantas unidades tenemos disponibles para la compra)
                </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/web/icons/compra2.png') }} " alt="Compras">
                <p>Hacé clic en el botón de "Agregar al carrito". A partir de las 8 unidades vas a poder finalizar tu compra. Si querés ver más fotos de un producto, podés hacer click sobre la foto e ingresar al articulo para más detalles.
                </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 item">
                <img src="{{ asset('images/web/icons/compra3.png') }} " alt="Compras">
                <p>A la derecha de la pantalla vas a poder var el carrito, desde ahí podes modificar tu pedido, cambiando cantidades o eliminando productos. El monto total de tu compra se va calculando en tiempo real. Cuando hayas terminado, hacés click en “Continuar”.
                </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 item">
                <img src="{{ asset('images/web/icons/compra4.png') }} " alt="Compras">
                <p>Ahora tenés que completar los datos para el envío, asegurate de que tus datos estén bien porque son los que vamos a utilizar para despachar tu pedido. Revisa bien el nombre, apellido y DNI para no tener problemas al retirar tu paquete. Si necesitás aclarar alguna información adicional necesaria para el envío, podés utilizar el campo “Observaciones”.
                </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 item">
                <img src="{{ asset('images/web/icons/compra5.png') }} " alt="Compras">
                <p>¡Listo! En la pantalla siguiente podrás descargar un comprobante de tu compra. Nos estaremos contactando para coordinar tu pedido. Tené en cuenta que se despacha exclusivamente los días miércoles y viernes. Para retirar por el showroom de lunes a sábado con cita.</p>
            </div>
        </div>
        {{-- <div class="row-centered lone-item">
            <div class="col-md-8 item">
                <div class="text-center">
                    <img src="{{ asset('images/web/icons/compra7.png') }} " alt="Compras"><br>
                    <p>
                        ¡Listo! En la pantalla siguiente podrás descargar un comprobante de tu compra. Nos estaremos contactando para coordinar tu pedido. Tené en cuenta que se despacha una vez por semana, los días jueves. Una vez realizado el despacho te enviaremos la información para que
                    </p>
                </div>
            </div>
        </div> --}}
	</div>
@endsection


