@extends('vadmin.partials.main')

@section('title', 'Vadmin | Creación de Cliente')

@section('header')
	@component('vadmin.components.header')
		@slot('breadcrums')
			<li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item"><a href="{{ route('customers.index')}}">Listado de Clientes</a></li>
            <li class="breadcrumb-item active">Nuevo Cliente</li>
		@endslot
		@slot('actions')
			<div class="list-actions">
				<h1>Nuevo Cliente</h1>
			</div>
		@endslot
	@endcomponent
@endsection

@section('content')
	<div class="inner-wrapper">
		{!! Form::open(['route' => 'customers.store', 'method' => 'POST', 'class' => 'row big-form']) !!}	
			{{ csrf_field() }}
			@include('vadmin.customers.form')
			<div class="form-actions right">
				<a href="{{ route('customers.index')}}">
					<button type="button" class="btn btnRed">
						<i class="icon-cross2"></i> Cancelar
					</button>
				</a>
				<button type="submit" class="btn btnGreen">
					<i class="icon-check2"></i> Guardar
				</button>
			</div>
		{!! Form::close() !!}
	</div>
@endsection

@section('scripts')
	<script type="text/javascript" src="{{ asset('plugins/validation/parsley.min.js') }}" ></script>
	<script type="text/javascript" src="{{ asset('plugins/validation/es/parsley-es.min.js') }}" ></script>
	@include('vadmin.components.bladejs')
@endsection

@section('custom_js')
	<script>
		// Check for locality
		$(document).ready(function(){
            $('.GeoProvSelect').on('change', function(){
                let prov_id = $(this).val();
                getGeoLocs(prov_id);
            });
        });
	</script>
@endsection
