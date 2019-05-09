@extends('store.partials.main')

@section('header-image')
	<div class="index-header">
		
	</div>
@endsection

@section('content')

    <div class="container info-container">
		<div class="row">
            <div class="deco-title">
                <span>
                    <div class="deco deco-left"><img src="{{ asset('images/web/icons/icon-deco-left.png') }}" alt="Deco"></div>
                    Preguntas Frecuentes
                    <div class="deco deco-right"><img src="{{ asset('images/web/icons/icon-deco-right.png') }}" alt="Deco"></div>
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 item">
                <hr>
                <br>
                <h4>¿Cuál es el mínimo de compra?</h4>
                <p>El mínimo es de {{ $settings->reseller_min}} prendas surtidas, para las reposiciones se respetará el mismo mínimo de prendas.</p>
                <h4>¿Cómo es el talle de las prendas? </h4>
                <p> Trabajamos un talle único amplio que va bien hasta un talle L. El talle de la modelo es un S/M. En algunos artículos tenemos publicado un dibujo con las medidas de la prenda, si tenés dudas sobre las medidas de algún producto podés consultarnos por whataspp al 1167618867.</p>
                <h4>¿Cómo accedo a los productos y precios mayoristas? </h4>
                <p> Los precios que figuran en la web son los precios mayoristas. </p>
                <h4>¿Cómo realizo mi pedido? </h4>
                <p> Vas agregando al carrito todos los productos que te interesen y al finalizar la compra vas a poder elegir el método de pago y el método de envío. Cuando finalices tu compra nosotras recibimos la notificación del pedido y nos ponemos en contacto dentro de las 48hs para coordinar el pago y envío.</p>
                <h4>¿Está todo en stock? </h4>
                <p> Tratamos de mantener el stock lo más actualizado posible, como tenemos otros canales de ventas, puede haber algún desfasaje. Por lo tanto el pedido lo confirmamos siempre antes con el cliente. Si falta algún artículo nos ponemos en contacto para avisarte y ofrecerte reemplazar por otra cosa o dar de baja el faltante. </p>
                <h4>¿Cuánto demoran en despacharme? </h4>
                <p>Las terminación de las prendas tiene un proceso de estampado o costura artesanal por lo que la preparación del pedido demora de 2 a 4 días hábiles. Los días que realizamos envíos al interior son los días miércoles y viernes exclusivamente. Para retirar por el showroom estamos de lunes a sábado con cita previa (la dirección es Independencia 2419, CABA). <br>
                <h4>Día de envío y cómo despachamos</h4>
                <p>Los envíos de mercadería se realizan los días miércoles y viernes. Trabajamos con las siguientes empresas: via cargo, buspack, andesmar, plusmar, autotransporte san juan, la veloz del norte, flecha bus, nuevo expreso, singer, md cargas,integral, urquiza, balut, morteros. para envíos por correo trabajamos con oca. Si trabajás habitualmente con otra empresa te podemos enviar también, pero tendremos que adicionar el costo de envío hasta el depósito de la empresa, dicho costo es de $150. </p>
                <h4>¿Tienen local para comprar personalmente?  </h4>
                <p> Tenemos showroom en el barrio de balvanera, CABA (Independencia 2419). Estamos de lunes a viernes con cita previa.</p>
                <h4>¿Qué pasa si me llegan productos con fallas? </h4>
                <p> En el caso de que llegue un producto con fallas, deberá ser informado dentro de la semana de recibido el pedido con foto de la falla por mail a nola.indumentaria@gmail.com. Podés optar por la devolución del importe del artículo fallado o por un crédito para tu próxima compra. </p>
                <h4>¿Puedo realizar cambios o devoluciones? </h4>
                <p>Sólo aceptamos cambios o devoluciones por fallas en el producto.</p>
                


            </div>
        </div>
    </div>
@endsection


