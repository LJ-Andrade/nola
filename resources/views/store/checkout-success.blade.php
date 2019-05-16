@extends('store.partials.main')

@section('content')

<div class="container padding-bottom-3x mb-2 marg-top-25">
	<div class="back-to-store"><a href="{{ url('tienda') }}"><i class="icon-arrow-left"></i> Volver a la tienda</a></div>
    <div class="row">
        <div class="container padding-bottom-3x mb-2">
            <div class="card text-center">
                <div class="card-block padding-top-2x">
                    <h2 class="card-title">Gracias por tu compra!</h2>
                    <h4 class="card-text">Tu pedido ya está en proceso.</h4>
                    <div class="short-divisor"><div class="inner"></div></div>
                    {{-- No te olvides de agendar el número: <b>#{{ $cart->id }}</b></p> --}}
                    {{-- No te olvides de agendar el número: <b>#34</b></p> --}}
                    Cómunicate con tu número de pedido (<b>{{ $cart->id }}</b>) a nuestro whatsapp <b>11-6761-8867</b><br>
                    para coordinar el pago y el envío de tu compra
                    <p class="card-text">
                        <br>
                        Podés revisar tus órdenes realizadas el <b><a href="{{ route('store.customer-orders') }}">siguiente link</a></b>.
                        <br><br>
                    </p>
                    <div class="padding-top-1x padding-bottom-1x">
                        <a class="btn btn-outline-primary btn-sm" href="{{ url('tienda/descargar-comprobante', [$cart->id, 'stream']) }}" target="_blank"><i class="icon-eye"></i> Ver Comprobante</a>
                        <a class="btn btn-outline-primary btn-sm" href="{{ url('tienda/descargar-comprobante', [$cart->id, 'download']) }}" target="_blank"><i class="icon-download"></i> Descargar Comprobante</a>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
<div id="Error"></div>
@endsection

@section('scripts')
	@include('store.components.bladejs')
    <script>
        // Prevent backbtn
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    </script>
@endsection
