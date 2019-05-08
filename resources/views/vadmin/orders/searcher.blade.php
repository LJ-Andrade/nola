@php
$status = request()->status;
if($status == null)
    $status = 'no-status';
@endphp

{{-- /Search --}}
<div id="SearchFilters" class="row search-filters horizontal-filters">
    {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => 'orders.index', 'class' => 'inline pad0', 'role' => 'search']) !!} 
        {{-- <div class="filter-input">
            <label for="">Código</label>
            {!! Form::number('id', null, ['class' => 'form-control', 'aria-describedby' => 'search', 'placeholder' => '']) !!}
        </div> --}}
        <div class="filter-input">
            <label for="">Nombre, email o usuario</label>
            {!! Form::text('customer', null, ['class' => 'form-control', 'aria-describedby' => 'search', 'placeholder' => '']) !!}
        </div>
        <div class="filter-input">
            <label for="">Estado</label> <br>
            {!! Form::select('status',
            ['Process' => 'Esperando Acción', 'Approved' => 'Aprobado', 
            'Canceled' => 'Cancelado', 'Finished' => 'Finalizado', 'Active' => 'Activos', 'All' => 'Todos'], $status,
            ['class' => 'form-control', 'aria-describedby' => 'search']) !!}
        </div>
        {{-- <input type="hidden" name="status" value ="{{ $status }}"> --}}
        <br>
        <button type="submit" class="btn btnMain submit-btn-filter">Buscar</button>
    {!! Form::close() !!}
    <div class="btnClose btn-close"><i class="icon-android-cancel"></i></div>		
</div>
    

    

{{-- <div id="SearchFilters" class="search-filters">
    <div class="row">
        {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => 'orders.index', 'class' => 'col-sm-2 pad0', 'role' => 'search']) !!} 
            <div class="form-control">
                {!! Form::label('id', 'Pedido #') !!}
                <div class="input-group">
                    {!! Form::number('id', null, ['class' => 'form-control', 'aria-describedby' => 'search']) !!}
                    <input type="hidden" name="status" value ="{{ $status }}">
                    <div class="input-group-append">
                        <button type="submit" id="SearchFiltersBtn" class="btnSm btnMain appendBtn"><i class="icon-search"></i></button>
                    </div>
                </div>
            </div>
        {!! Form::close() !!}
        {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => 'orders.index', 'class' => 'col-sm-4 col-md-3 pad0', 'role' => 'search']) !!} 
            <div class="form-control">
                {!! Form::label('customer', 'Cliente') !!}
                <div class="input-group">
                    {!! Form::text('customer', null, ['class' => 'form-control', 'aria-describedby' => 'search']) !!}
                    <input type="hidden" name="status" value ="{{ $status }}">
                    <div class="input-group-append">
                        <button type="submit" id="SearchFiltersBtn" class="btnSm btnMain appendBtn"><i class="icon-search"></i></button>
                    </div>
                </div>
            </div>
        {!! Form::close() !!}
        {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => 'orders.index', 'class' => 'col-md-3 col-xs-12 pad0', 'role' => 'search']) !!} 
            <div class="form-control">
                {!! Form::label('status', 'Estado') !!}
                <div class="input-group">
                    {!! Form::select('status', 
                        ['Process' => 'Esperando Acción', 'Approved' => 'Aprobado', 'Canceled' => 'Cancelado', 'Finished' => 'Finalizado', 'Active' => 'Activos', 'All' => 'Todos'], 
                        ['class' => 'form-control', 'aria-describedby' => 'search']) !!}
                        <input type="hidden" name="status" value ="{{ $status }}">
                    <div class="input-group-append">
                        <button type="submit" id="SearchFiltersBtn" class="btnSm btnMain appendBtn"><i class="icon-search"></i></button>
                    </div>
                </div>
            </div>
        {!! Form::close() !!}
    </div>
    <div class="btnClose btn-close"><i class="icon-android-cancel"></i></div>		
</div> --}}

