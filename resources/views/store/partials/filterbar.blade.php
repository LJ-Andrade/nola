<div class="store-filters">
    <ul class="filters-navigation">
        <li class="filter-nav-item" data-name="FilterOrder">ORDENAR POR</li>
        <li class="filter-nav-item" data-name="FilterTags">ETIQUETAS</li>
        <li class="filter-nav-item" data-name="FilterCategories">CATEGORÍAS</li>
        <li class="filter-nav-item" data-name="FilterSearch">BÚSQUEDA</li>
    </ul>

    <div class="FiltersContainer filters-container">
        <div class="close-filter">X</div>
        <ul id="FilterOrder" class="filters-items">
            <li><a href="{{ route('store', ['precio' => 'menor']) }}">Menor Precio</a></li>
            <li><a href="{{ route('store', ['precio' => 'mayor']) }}">Mayor Precio</a></li>
            <li><a href="{{ route('store', ['filtrar' => 'descuentos']) }}">Con Descuentos</a></li>
            <li><a href="{{ route('store', ['filtrar' => 'populares']) }}">Populares</a></li>
        </ul>
        <ul id="FilterTags" class="filters-items">
            @foreach($tags as $tag)
                <li><a href="{{ route('store.search.tag', $tag->name) }}"> {{ $tag->name }} </a></li>
            @endforeach
        </ul>       
        <ul id="FilterCategories" class="filters-items">
            @foreach($categories as $category)
                <li><a href="{{ route('store', 'categoria=').$category->id }}"> {{ $category->name }}</a></li>
            @endforeach
        </ul>     
        <ul id="FilterSearch" class="filters-items filter-form">
            {!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group search-input']) !!}
                <div class="search-input">
                    <input class="form-control" name="buscar" type="search" placeholder="BUSCAR...">
                    <button type="submit"><i class="icon-search"></i></button>
                </div>
            {!! Form::close() !!}
        </ul>     
    </div>
</div>



<div id="SearchFiltersTrigger" class="row trigger-filter-mobile">
    <div class="inner">
        {!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group search-input']) !!}
            <span class="input-group-btn">
                <button type="submit"><i class="icon-search"></i></button>
            </span>
            <input class="form-control" name="buscar" type="search" placeholder="BUSCAR...">
        {!! Form::close() !!}
        <a onclick="openFilters()"><i class="fas fa-sliders-h"></i></a>
    </div>
</div>

<div id="SearchFilters" class="row search-filters">
    <div class="column trigger-column">
        <select class="form-control item" name="order" onchange="location = this.value;">
            <option value="Orden" selected disabled>ORDENAR POR</option>
            <option value="{{ route('store', ['precio' => 'menor']) }}">Menor precio</option>
            <option value="{{ route('store', ['precio' => 'mayor']) }}">Mayor precio</option>
            <option value="{{ route('store', ['filtrar' => 'descuentos']) }}">Con Descuento</option>
            <option value="{{ route('store', ['filtrar' => 'populares']) }}">Populares</option>
        </select> 
        <div class="trigger-btn">
            <a onclick="openFilters()"><i class="fas fa-sliders-h"></i></a>
        </div>
    </div>

    <div class="column">
        <select class="form-control item" name="tags" onchange="location = this.value;">
            <option value="Etiquetas" selected disabled>ETIQUETAS</option>
            @foreach($tags as $tag)
                <option value="{{ route('store.search.tag', $tag->name) }}"> {{ $tag->name }} </option>
            @endforeach
        </select>
    </div>

    <div class="column">
        <select class="form-control item" name="categories" onchange="location = this.value;">
            <option value="Categories" selected disabled>CATEGORÍAS</option>
            @foreach($categories as $category)
                <option value="{{ route('store', 'categoria=').$category->id }}"> {{ $category->name }} </option>
            @endforeach
        </select>
    </div>


    <div class="column">
        {!! Form::open(['route' => 'store', 'method' => 'GET', 'class' => 'input-group form-group search-input']) !!}
            <span class="input-group-btn">
                <button type="submit"><i class="icon-search"></i></button>
            </span>
            <input class="form-control" name="buscar" type="search" placeholder="BUSCAR...">
        {!! Form::close() !!}
    </div>
    
    @if(isset($search) && $search == true || count($_GET) > 0 && !isset($_GET['results']))
        <div class="column">
            <div class="back-to-list-desktop">
                <a href="{{ url('tienda') }}" class="form-control filter-button" type="button"><i class="fas fa-angle-left"></i> VOLVER AL LISTADO</a>
            </div>
        </div>
    @endif
</div>
@if($articles->count() == '0')
    <div class="no-articles">
        <h3>No se han encontrado artículos</h3>
    </div>
@endif 
