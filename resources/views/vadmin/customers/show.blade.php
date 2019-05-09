@extends('vadmin.partials.main')
@section('title', 'Vadmin | Perfil de Usuario')

@section('header')
	@component('vadmin.components.header')
		@slot('breadcrums')
			<li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item"><a href="{{ route('customers.index')}}">Clientes</a></li>
            <li class="breadcrumb-item active">Perfil de <b>@if($customer->name) {{ $customer->name }} {{ $customer->surname }} | @endif {{ $customer->username }}  </b></li>
		@endslot
		@slot('actions')
		@endslot
	@endcomponent
@endsection

@section('content')
    <div class="row">
        @component('vadmin.components.container')
            @slot('title')
                <span style="color: #ada8a8">@if($customer->name) {{ $customer->name }} @else - @endif
                     @if($customer->surname) {{ $customer->surname }} @endif | </span>{{ $customer->username }} (# {{ $customer->id }}) <br>
                
            @endslot
            @slot('content')
                <div class="row customer-profile">
                    <div class="col-sm-3 customer-image">
                        <img id="Avatar" src="{{ asset('webimages/customers/'.$customer->avatar ) }}" class="Image-Container" alt="Nola - Cliente {{ $customer->username }}">
                    </div>
                    <div class="col-sm-9 row-with-data">
                        <div class="data-row">
                            <p>Dirección: <b>@if($customer->address) {{ $customer->address }} @else - @endif</b> </p>
                            <p>@if(!$customer->geoprov) @else {{ $customer->geoprov->name }}@endif</b>
                                @if(!$customer->geoloc) @else | {{ $customer->geoloc->name }}@endif
                                @if($customer->cp) (C.p: {{ $customer->cp }}) @endif
                            </p>
                            <p>E-mail: <b>{{ $customer->email }}</b></p>
                            <p>Teléfono: <b>@if($customer->phone) {{ $customer->phone }} @else - @endif @if($customer->phone2) | {{ $customer->phone2 }} @endif </b></p>
                            <p>Cuit: <b>@if($customer->cuit) {{ $customer->cuit }} @else - @endif</b></p>
                            <p>Dni: <b>@if($customer->dni) {{ $customer->dni }} @else - @endif</b></p>
                            <p>Tipo de Cliente: <b>{{ clientGroupTrd($customer->group) }}</b></p>
                            <p>Fecha de ingreso: <b>{{ transDateT($customer->created_at) }}</b></p>
                        </div>
                        <div class="data-row">
                            <span class="small"> Compras realizadas: {{ $customer->staticstics('totalCarts')}} | </span>  
                            <span class="small"> Prendas compradas: {{ $customer->staticstics('totalItems')}} | </span>
                            <span class="small"> Total gastado: $ {{ $customer->staticstics('totalSpent')}}<br> </span>
                        </div>
                        <a href="{{ route('customers.edit', $customer->id) }}" class="btn btnMain">Editar</a>
                    </div>
                </div>
            @endslot                
        @endcomponent
    </div>
@endsection
            
            @section('custom_js')
            {{-- <script>
    	$(document).ready(function() {
            $('#Avatar').click(function(){
                $('#ImageInput').click();
			});       
		});
		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('.Image-Container').attr('src', e.target.result);
                    $('.ActionContainer').removeClass('Hidden');
				}
					reader.readAsDataURL(input.files[0]);
				}
			}
			$("#ImageInput").change(function(){
			readURL(this);
			$('.UpdateAvatarForm').removeClass('Hidden');
		});
	</script> --}}
@endsection