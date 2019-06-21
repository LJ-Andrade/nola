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
                            <br><br>
                            <span style="color: #949494"><i class="fas fa-info-circle"></i>  Si luego de cambiar la imágen no se visualizan los cambios recordá apretar CTRL + F5 para borrar el caché del explorador.</span>
                        </div>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
            <div class="row customize-banner">
                <div class="container-fluid">
                    <h2>Banner de respaldo</h2>
                    <div class="banner-img">
                        <img src="{{ asset('images/web/home-banner-backup.jpg') }}" alt="">
                    </div>
                    <div class="card">
                        <div class="card-block">
                            <p>	En caso de eventualidades cambiando el banner principal se puede activar provisoriamente un banner de backup hasta resolverlas. 
                                - <a data-toggle="modal" data-target="#HelpBannerBackup"><i class="fas fa-info-circle"></i> Más info</a></p> 
                            <a class="btn btnRed" href="{{ route('vadmin.restoreBackupBanner') }}" >Activar banner de respaldo</a> 
                            <a class="btn btnMain" href="{{ route('vadmin.setBackupBanner') }}" >Guardar banner actual como respaldo</a>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
    <div id="Error"></div>
    
    <div class="modal fade" id="HelpBannerBackup" tabindex="-1" role="dialog" aria-labelledby="HelpBannerBackup">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4>Banner de respaldo</h4>
                    </div>
                    <div class="modal-body">
                        <b>Activar banner de respaldo:</b> <br>
                        Cada vez que se reemplaza el banner actual por uno nuevo se está sobreescribiendo la imágen del mismo. <br> 
                        Si hay alguna eventualidad al cargar la nueva imágen, como ser que no tenga el tamaño, la calidad necesaria u otro problema esto será un problema inmediato para la visual de la tienda.
                        Por lo tanto se puede activar provisoriamente un banner de respaldo mientras se consigue una imágen mejor. Este banner de respaldo viene precargado y se puede reemplazar.
                        <br><br>
                        <b>Establecer banner de respaldo:</b> <br>
                        El banner de respaldo mencionado anteriormente tambien puede ser establecido, una vez que tengamos un banner cargado de forma correcta y que nos hayamos
                        asegurado de que se esté viendo bien en la página principal se puede hacer click en el botón <i>"Guardar banner actual como respaldo"</i>.
                        Esto hará que ahora ante cualquier eventualidad podamos volver a usarlo.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('plugins/chosen/chosen.jquery.min.js') }}" ></script>
    <script type="text/javascript" src="{{ asset('plugins/jqueryFileUploader/jquery.fileuploader.min.js')}} "></script>
    <script type="text/javascript" src="{{ asset('js/vadmin-forms.js') }}" ></script>
@endsection
