@extends('vadmin.partials.main')
@section('title', 'Vadmin | Editar Cliente')

@section('header')
	@component('vadmin.components.header')
		@slot('breadcrums')
			<li class="breadcrumb-item"><a href="{{ url('vadmin')}}">Inicio</a></li>
            <li class="breadcrumb-item"><a href="{{ route('customers.index')}}">Clientes</a></li>
            <li class="breadcrumb-item active">Edición de Clientes</li>
		@endslot
		@slot('actions')
			<h2>Editando usuario: " {{ $customer->name }} "</h2>
		@endslot
	@endcomponent
@endsection

@section('content')
	<div class="inner-wrapper">
		{!! Form::model($customer, [
			'method' => 'PATCH',
			'url' => ['/vadmin/customers', $customer->id],
			'files' => true,
			'class' => 'row big-form'
		]) !!}
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
            var actualGeoProv = "{{ $customer->geoprov_id }}";
			
            if(actualGeoProv != ''){
                getGeoLocs(actualGeoProv);
            }
            
            $('.GeoProvSelect').on('change', function(){
                let prov_id = $(this).val();
                getGeoLocs(prov_id);
            });
        });

		// Activate Password Update Fields
		$('#UpdatePasswordBtn').on('click', function(){
			$('.UpdatePasswordLabel').addClass('Hidden');
			$(this).addClass('Hidden');
			$('.UpdatePasswordFields').removeClass('Hidden');
			$('.UpdatePasswordFields > div > input').prop('disabled', false);
			$('.WantUpdatePassword').val('1');
		});
		
	</script>
@endsection