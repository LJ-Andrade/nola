<div class="row">
    {{--  Name  --}}
    <div class="col-md-6 form-group">
        {!! Form::label('name', 'Nombre') !!}
        {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Título del artículo', 'id' => 'TitleInput', 
        'required' => '', 'maxlength' => '120', 'minlength' => '4']) !!}
    </div>
    {{--  Product Code  --}}
    {{-- <div class="col-md-2 form-group">
        {!! Form::label('code', 'Código') !!}
        {!! Form::text('code', null, ['id' => 'CodeInput', 'class' => 'form-control', 'placeholder' => 'Ingrese el código', 'required' => '']) !!}
    </div> --}}
    {{--  Sizes  --}}
    <div class="col-md-6 form-group">
        {!! Form::label('atribute1', 'Talle') !!}
        {!! Form::select('atribute1[]', $atribute1, null, ['class' => 'Select-Atribute form-control', '']) !!}
        <div class="slug2"></div>
    </div>
</div>
<div class="row">
    {{--  Textile  --}}
    <div class="col-md-3 form-group">
        {!! Form::label('textile', 'Textil') !!}
        {!! Form::text('textile', null, ['class' => 'form-control', 'placeholder' => 'Tipo de tela', 
        'required' => '', 'maxlength' => '50']) !!}
    </div>
    {{--  Color  --}}
    <div class="col-md-3 form-group">
        {!! Form::label('color', 'Color') !!}
        {!! Form::text('color', null, ['id' => 'ColorInput', 'class' => 'form-control', 'placeholder' => 'Ingrese un color', 
        'required' => '', 'maxlength' => '50']) !!}
    </div>
     <div class="col-md-3 form-group">
        {!! Form::label('stock', 'Stock') !!}
        {!! Form::number('stock', null, ['class' => 'form-control', 'placeholder' => 'Stock']) !!}
    </div>
    <div class="col-md-3  form-group">
        {!! Form::label('stockmin', 'Stock Mínimo') !!}
        {!! Form::number('stockmin', null, ['class' => 'form-control', 'placeholder' => 'Stock mínimo']) !!}
    </div>
</div>

<div class="row">
    {{-- Prices and Offers --}}
    <div class="col-md-6">
        <div class="row">
            {{--  Price  --}}
            <div class="col-md-6 form-group">
                {!! Form::label('price', 'Precio minorísta') !!}
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    {!! Form::number('price', null, ['class' => 'form-control', 'min' => '0', 'step' => 'any', 'required' => '']) !!}
                </div>
            </div>
            {{--  Discount  --}}
            <div class="col-md-6 form-group">
                {!! Form::label('discount', 'Oferta (Minorísta)') !!}
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">%</span>
                    </div>
                    {!! Form::number('discount', null, ['class' => 'form-control', 
                    'min' => '0', 'max' => '100', 'data-parsley-type' => 'integer', 'required' => '']) !!}
                </div>
            </div>
        </div>
        <div class="row">
            {{--  Reseller Price  --}}
            <div class="col-md-6 form-group">
                {!! Form::label('reseller_price', 'Precio Mayorísta') !!}
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    {!! Form::number('reseller_price', null, ['class' => 'form-control', 'min' => '0', 'step' => 'any', 'required' => '']) !!}
                </div>
            </div>
            {{-- Reseller Discount --}}
            <div class="col-md-6 form-group">
                {!! Form::label('reseller_discount', 'Oferta (Mayorísta)') !!}
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">%</span>
                    </div>
                    {!! Form::number('reseller_discount', null, ['class' => 'form-control',
                     'min' => '0', 'max' => '100', 'data-parsley-type' => 'integer', 'required' => '']) !!}
                </div>
            </div>
        </div>
        <div class="row">
            {{-- Season --}}
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    {!! Form::label('seasons', 'Temporada') !!}
                    {!! Form::select('seasons[]', $seasons, null, ['class' => ' Select-Tags form-control', 'multiple']) !!}
                </div>
            </div>
            {{-- <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    {!! Form::label('season_id', 'Temporada') !!}
                    {!! Form::select('season_id', $seasons, null, ['class' => 'form-control Select-Category-', 'placeholder' => 'Seleccione una opcion',
                    'required' => '']) !!}
                </div>
            </div> --}}
            {{-- Category --}}
            <div class="col-xs-12 col-sm-6 col-md-6">
                <div class="form-group">
                    {!! Form::label('category_id', 'Categoría') !!}
                    {!! Form::select('category_id', $categories, null, ['class' => 'form-control Select-Category-', 'placeholder' => 'Seleccione una opcion',
                    'required' => '']) !!}
                </div>
            </div>
            {{-- Tags--}}
            <div class="col-md-4 col-md-12 col-xs-12">
                <div class="form-group">
                    {!! Form::label('tags', 'Etiquetas') !!}
                    {!! Form::select('tags[]', $tags, null, ['class' => ' Select-Tags form-control', 'multiple', 'required' => '']) !!}
                </div>
            </div>
            {{-- Status--}}
            <div class="col-md-4 col-md-12 col-xs-12">
                <div class="form-group">
                    {!! Form::label('status', 'Publicación') !!}
                    {!! Form::select('status', ['1' => 'Activa','0' => 'Pausada'], null, ['class' => 'form-control']) !!}
                </div>
            </div>	
        </div>
    </div>
    {{-- Description --}}
    <div class="col-md-6">
        {!! Form::label('description', 'Descripción') !!}
        {!! Form::textarea('description', null, ['class' => 'form-control Textarea-Editor']) !!}
    </div>
</div>
{{-- Images--}}
<div class="row">
    {{-- <div class="col-md-3">
        @component('vadmin.components.catalogthumbnail')
            @slot('thumbnail')
                @if(isset($article) && $article->thumb != '')
                    <img class="CheckImg Featured-Image-Container" src="{{ asset('webimages/catalogo/'.$article->thumb) }}">
                @else
                    <img class="CheckImg Featured-Image-Container" src="{{ asset('webimages/gen/catalog-gen.jpg') }}">
                @endif
            @endslot
        @endcomponent
    </div> --}}
    @if(isset($inheritData) && count($inheritData->images) > 0)
        {{-- <div class="col-md-12 actual-images horizontal-list">
            <h3>Imágenes</h3>
            <ul>
                @foreach($inheritData->images->sortByDesc('featured') as $image)
                <li id="Img{{ $image->id }}" class="{{ $image->featured ? 'is-featured' : '' }}">	
                    <img class="CheckImg" src="{{ asset('webimages/catalogo/'.$image->name) }}">
                    <div class="overlayItemCenter">
                        <a><i class="Delete-Product-Img icon-ios-trash-outline delete-img" data-imgid="{{ $image->id }}"></i></a>
                        @if(!$image->featured)
                            <a href="{{ url('vadmin/article/'.$inheritData->id.'/images/setFeatured/'.$image->id) }}"><i class="icon-star"></i></a>
                        @endif
                    </div>
                </li>
                @endforeach
            </ul>
        <br>
        </div> --}}
    @else
        @if(isset($article) && count($article->images) > 0 )
            <div class="col-md-12 actual-images horizontal-list">
                <h3>Imágenes Publicadas</h3>
                <ul>
                    @foreach($article->images->sortByDesc('featured') as $image)
                    <li id="Img{{ $image->id }}" class="{{ $image->featured ? 'is-featured' : '' }}">	
                        <img class="CheckImg" src="{{ asset('webimages/catalogo/'.$image->name) }}">
                        <div class="overlayItemCenter">
                            <a><i class="Delete-Product-Img icon-ios-trash-outline delete-img" data-imgid="{{ $image->id }}"></i></a>
                            @if(!$image->featured)
                                <a href="{{ url('vadmin/article/'.$article->id.'/images/setFeatured/'.$image->id) }}"><i class="icon-star"></i></a>
                            @endif
                        </div>
                    </li>
                    @endforeach
                </ul>
            <br>
            </div>
        @endif
    @endif
    <div class="col-md-12">
        @include('vadmin.components.addimgsform')
    </div>
    
        {{-- Slug --}}
    <div class="col-md-4">
        <div class="form-group">
            {!! Form::label('slug', 'Url Amigable - Dirección web') !!}
            {!! Form::text('slug', null, ['class' => 'SlugInput form-control Display-Input-Modificable display-input-disabled', 'placeholder' => 'Dirección visible (en explorador)', 'id' => 'SlugInput', 'required' => '']) !!}
        </div>
    </div>
</div>{{--  /Row  --}}
