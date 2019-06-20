@extends('vadmin.partials.main')

@section('title', 'Vadmin | Configuración')

@section('styles')
    {!! Html::style('plugins/jqueryFileUploader/jquery.fileuploader.css') !!}
	{!! Html::style('plugins/jqueryFileUploader/jquery.fileuploader-thumbnailtheme.css') !!}
@endsection

@section('content')
	<div class="dashboard">
		<div class="content-body">
			<h1>Personalización</h1>
            <hr class="softhr">
            <div class="row customize-banner">
                <div class="container-fluid">
                    <h2>Banner en página principal</h2>
                    <div class="banner-img">
                        <img src="{{ asset('images/web/'.$settings->home_banner ) }}" alt="">
                    </div>
                    {!! Form::open(['route' => 'vadmin.updateHomeBanner', 'method' => 'POST', 'files' => true, 'class' => '']) !!}	
                    <div class="card">
                        <div class="card-block">
                            <div class="row form-group">
                                <div class="col-md-12">
                                        <p>Tamaño recomendado: 1920 x 576 px <br>
                                            Peso recomendado: No más de 300Kb</p>
                                    {{--  Images Input  --}}
                                    {!! Form::file('image', array('multiple'=> false, 'id' => 'ImageUploader', 'required' => ' ')) !!}
                                    <div class="ErrorImage"></div>
                                </div>
                            </div>
                            <button type="submit" class="btn btnMain">Confirmar</button>
                        </div>
                        {!! Form::close() !!}
                    </div>
                    <p>	En caso de eventualidades cambiando el banner principal se puede activar provisoriamente un banner de backup hasta resolverlas.</p>
                    <a class="btn btnRed" href="{{ route('vadmin.restoreBackupBanner') }}" >Activar banner de respaldo</a>
                    <a class="btn btnMain" href="{{ route('vadmin.setBackupBanner') }}" >Guardar banner actual como respaldo</a>
                </div>
            </div>

            
        </div>
    <div id="Error"></div>
    


@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('plugins/chosen/chosen.jquery.min.js') }}" ></script>
    <script type="text/javascript" src="{{ asset('plugins/jqueryFileUploader/jquery.fileuploader.min.js')}} "></script>
    <script type="text/javascript" src="{{ asset('js/vadmin-forms.js') }}" ></script>
@endsection
