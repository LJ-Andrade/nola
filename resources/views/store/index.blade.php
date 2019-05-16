@extends('store.partials.main')

@section('styles')
	<link rel="stylesheet" href="{{ asset('plugins/owl/assets/owl.carousel.min.css') }}">
@endsection

@section('header-image')
	<div class="owl-carousel">
		<img src="{{ asset('images/web/home-banner.jpg')}}" alt="Klekas Home Banner">
	</div>
@endsection

@section('content')
	<div id="main" class="main-container container-fluid padding-bottom-3x mb-1">
		{{-- Home Items --}}
		<div class="container">
			<div class="row home-items">
				<div class="col-xs-12 col-md-4 item">
					<img src="{{ asset('images/web/icons/home-icon-1.png')}}" alt="Card Icon">
					<div class="text">Showroom en CABA <br> con cita previa</div>
				</div>
				<div class="col-xs-12 col-md-4 item">
					<img src="{{ asset('images/web/icons/home-icon-2.png')}}" alt="Card Icon">
					<div class="text">Envíos a todo el Páís</div>
				</div>
				<div class="col-xs-12 col-md-4 item">
					<img src="{{ asset('images/web/icons/home-icon-3.png')}}" alt="Card Icon">
					<div class="text">Sitio seguro <br> Protejemos todos tus datos</div>
				</div>
			</div>
		</div>
		<div class="row">
			{{-- col-xs-12 col-lg-9 col-sm-8 col-md-8 --}}
			<div id="MainContent" class="col-xs-12 col-sm-12">
				<!-- Products Grid -->
				@include('store.partials.filterbar')	
				<div class="row articles-container">
					@foreach($articles as $article)
						<div class="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-2 article">
							<div class="inner">
								{{-- =========== Discount Badge =========== --}}
								{{-- ====================================== --}}
								
								{{-- Reseller Discount --}}
								@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '2')
									{{-- Normal Customer Discount --}}
									@if($article->discount > 0)
										<div class="overlay-ribbon top-right-ribbon">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->discount }} <br> off !!</div>
										</div> 
									@endif
								@else
									@if($article->reseller_discount > 0)
										<div class="overlay-ribbon top-right-ribbon">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->reseller_discount }} <br> off !!</div>
										</div> 
									@endif
								@endif

								{{-- Reseller Discount --}}
								{{-- @if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
									@if($article->reseller_discount > 0)
										<div class="overlay-ribbon top-right-ribbon">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->reseller_discount }} <br> off !!</div>
										</div> 
									@endif
								@else --}}
									{{-- Normal Customer Discount --}}
									{{-- @if($article->discount > 0)
										<div class="overlay-ribbon top-right-ribbon">
											<div class="triangle"></div>
											<div class="text">	%{{ $article->discount }} <br> off !!</div>
										</div> 
									@endif
								@endif --}}
								
								{{-- =============== Image ================ --}}
								{{-- ====================================== --}}
								<div class="image">
									{{-- @if($article->stock < $article->stockmin)
										<div class="overlay-ribbon bottom-left-ribbon">
											<div class="triangle"></div>
											<div class="text">Bajo <br>Stock</div>
										</div> 
									@endif --}}
									<img onerror="imgError(this);" src="{{ asset($article->featuredImageName()) }}" alt="Producto del Catálogo">
									@if(Auth::guard('customer')->check())
									{{--  Check if product is in favs  --}}
									<a class="AddToFavs add-to-favs fa-icon fav-icon-nofav fav-btn
										@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
										data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
									</a>
									@endif
									<a href="{{ url('tienda/articulo/'.$article->id) }}">
										<div class="overlay text-center">
											Ver producto
										</div>
									</a>
								</div>
								{{-- ============== Content =============== --}}
								{{-- ====================================== --}}
								<div class="content">
									{{-- ============ Title-Info ============== --}}
									<div class="title-info">
										<a href="{{ url('tienda/articulo/'.$article->id) }}">
											<h3 class="product-title max-text"><b>{{ $article->name }} {{ $article->color }}</b></h3>
										</a>
										{{-- <h3 class="product-title max-text"> {{ $article->color}} |
										@foreach($article->atribute1 as $atribute) 	{{ $atribute->name }} @endforeach
										</h3> --}}
									</div>
									{{-- =============== Footer =============== --}}
									<div class="footer">
										<div class="col-price pad0">
											{{-- Reseller prices first --}}
											@if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '2')
												@if($article->discount > 0)
													<del>$ {{ $article->price + 0 }}</del>
													<span class="price">
														$ {{ calcValuePercentNeg($article->price, $article->discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->price + 0 }}</span>
												@endif
											@else
												@if($article->reseller_discount > 0)
													<del>$ {{ $article->reseller_price + 0 }}</del> 
													<span class="price">
														$ {{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->reseller_price + 0 }}</span>
												@endif
											@endif
											
											{{-- Estandar prices first --}}
											{{-- @if(Auth::guard('customer')->check() && Auth::guard('customer')->user()->group == '3')
												@if($article->reseller_discount > 0)
													<del>$ {{ $article->reseller_price + 0 }}</del> 
													<span class="price">
														 $ {{ calcValuePercentNeg($article->reseller_price, $article->reseller_discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->reseller_price + 0 }}</span>
												@endif
											@else
												@if($article->discount > 0)
													<del>$ {{ $article->price + 0 }}</del>
													<span class="price">
														$ {{ calcValuePercentNeg($article->price, $article->discount + 0) }}
													</span>
												@else
													<span class="price">$ {{ $article->price + 0 }}</span>
												@endif
											@endif --}}
										</div>
										<div class="col-add pad0">
											{{-- @if(Auth::guard('customer')->check()) --}}
											{{--  Check if product is in favs  --}}
											{{-- <a class="AddToFavs fa-icon fav-icon-nofav fav-btn
												@if(in_array($article->id, $favs['articleFavs'])) fav-icon-isfav @endif"
												data-id="{{ $article->id }}" data-toggle="tooltip" title="Agregar a Favoritos">
											</a>
											@endif --}}
											{{-- ADD TO CART | SIZES AND QUANTITY SELECTOR --}}
											@if(Auth::guard('customer')->check())
												{{-- Use this to implement AJAX AddToCart --}}
												{{-- {!! Form::open(['class' => 'AddToCart price']) !!}	 --}}
											
												{!! Form::open(['route' => 'store.addtocart', 'method' => 'POST', 'class' => 'price']) !!}	
													{{ csrf_field() }}
													<input type="number" min="1" max="{{ $article->stock }}" name="quantity" class="quantity-input" value="1"
													data-toggle="tooltip" data-placement="top" title="Stock máximo {{ $article->stock }}">
													{{-- If single size --}}
													@if(count($article->atribute1) == 1 )  
														<select class="input-select" disabled>
															@foreach($article->atribute1 as $size)
																<option value="{{ $size->id}}">{{ $size->name }}</option>
															@endforeach
														</select>
														<input type="hidden" value="{{ $article->atribute1->first()->id }}" name="size_id">
													@else
													{{-- If multiple sizes --}}
														<select name="size_id" class="input-select">
															@foreach($article->atribute1 as $size)
																<option value="{{ $size->id}}">{{ $size->name }}</option>
															@endforeach
														</select>
													@endif
													<input type="submit" class="input-button" value="Agregar" data-toggle="tooltip" data-placement="top" title="Stock máximo {{ $article->stock }}">
													
													<input type="hidden" value="{{ $article->id }}" name="articleId">
												{!! Form::close() !!}
											@else
												<a href="{{ url('tienda/articulo/'.$article->id) }}" class="btn btn-outline-primary btn-sm">Ver detalles</a>
											@endif
										</div>
									</div>
								</div>
							</div>
						</div>
					@endforeach
				</div>
				<div class="col-md-12">
					@if($articles->count() != '0')
					<div class="pagination-results">
						<span class="title"><b>Resultados por página:</b></span>
						<a href="{{ route('store', ['results' => '24']) }}">24</a> | 
						<a href="{{ route('store', ['results' => '96']) }}">96</a> |
						<a href="{{ route('store', ['results' => '142']) }}">142</a>
					</div>
					@endif
					{!! $articles->appends(request()->query())->render()!!}
				</div>
			</div>
		</div>
	</div>

	<div id="Error"></div>
@endsection

@section('scripts')
	@include('store.components.bladejs')
	<script type="text/javascript" src="{{ asset('plugins/owl/owl.carousel.min.js') }}" ></script>
	<script>
		$(document).ready(function(){
			$('.owl-carousel').owlCarousel({
				stagePadding: 0,
				items: 1,
				loop: true,
				margin: 0,
				singleItem: true,
				nav: false,
				dots: false,
				navText: [
					// "<i class='fa fa-caret-left'></i>",
					// "<i class='fa fa-caret-right'></i>"
				],
				dots:true
			});
		});

	</script>
@endsection


