
@php
$status = request()->status;
if($status == null)
    $status = 1;
@endphp

@php($route = 'catalogo.index')
@if(isset($inactiveCatalog) && $inactiveCatalog == true)
@php ($route = 'catalogo.index-inactive')
@endif

<div id="SearchFilters" class="search-filters">
    <div class="row">
        {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => $route, 'class' => 'col-md-2 col-xs-12 pad0', 'role' => 'search']) !!} 
            <div class="form-control">
                {!! Form::label('id', 'Buscar por código') !!}
                <div class="input-group">
                    {!! Form::text('id', null, ['class' => 'form-control', 'aria-describedby' => 'search']) !!}
                    <input type="hidden" name="status" value ="{{ $status }}">
                    <div class="input-group-append">
                        <button type="submit" id="SearchFiltersBtn" class="btnSm btnMain appendBtn"><i class="icon-search"></i></button>
                    </div>
                </div>
            </div>
        {!! Form::close() !!}
        {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => $route, 'class' => 'col-md-3 col-xs-12 pad0', 'role' => 'search']) !!} 
            <div class="form-control">
                {!! Form::label('name', 'Buscar por nombre') !!}
                <div class="input-group">
                    {!! Form::text('name', null, ['class' => 'form-control', 'aria-describedby' => 'search']) !!}
                    <input type="hidden" name="status" value ="{{ $status }}">
                    <div class="input-group-append">
                        <button type="submit" id="SearchFiltersBtn" class="btnSm btnMain appendBtn"><i class="icon-search"></i></button>
                    </div>
                </div>
            </div>
        {!! Form::close() !!}
        {!! Form::open(['id' => 'SearchForm', 'method' => 'GET', 'route' => $route, 'class' => 'col-md-3 col-xs-12 pad0', 'role' => 'search']) !!} 
            <div class="form-control">
                {!! Form::label('category', 'Buscar por categoría') !!}
                <div class="input-group">
                    <input type="hidden" name="status" value ="{{ $status }}">
                    {!! Form::select('category', $categories, ['class' => 'form-control', 'aria-describedby' => 'search']) !!}
                    <div class="input-group-append">
                        <button type="submit" id="SearchFiltersBtn" class="btnSm btnMain appendBtn"><i class="icon-search"></i></button>
                    </div>
                </div>
            </div>
        {!! Form::close() !!}
    </div>
    <div class="btnClose btn-close"><i class="icon-android-cancel"></i></div>		
</div>
