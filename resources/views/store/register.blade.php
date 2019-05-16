@extends('store.partials.main')


@section('content')
<div class="container padding-bottom-3x">
	<div class="row centered-form">
        <form class="login-box form-simple inner" method="POST" action="{{ route('customer.process-register') }}">
            {{--  Check if reseller --}}
            {{ csrf_field() }}
            <h3 class="text-center">Registro de Usuario</h3>
            <hr>
            <br>
            <div class="row">
                {{-- Username --}}
                <div class="col-sm-6 form-group{{ $errors->has('username') ? ' has-error' : '' }}">
                    <label for="reg-fn">Nombre de Usuario (Apodo)</label>
                    <input id="username" type="text" name="username" class="form-control round" placeholder="Ingrese su nombre de usuario" value="{{ old('username') }}" required>
                    @if ($errors->has('username'))
                        <span class="help-block">
                            <strong>{{ $errors->first('username') }}</strong>
                        </span>
                    @endif
                </div> 	
                {{-- E-mail --}}
                <div class="col-sm-6 form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <label for="reg-fn">E-Mail</label>
                    <input type="text" name="email" class="form-control round" placeholder="Ingrese su email" value="{{ old('email') }}" required>
                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div> 
            </div>
            <div class="row">
                {{-- Phone --}}
                <div class="col-sm-12 form-group{{ $errors->has('phone') ? ' has-error' : '' }}">
                    <label for="reg-fn">Teléfono / Whatsapp</label>
                    <input id="phone" type="text" name="phone" class="form-control round" placeholder="Ingresá tu número de teléfono" value="{{ old('phone') }}" required>
                    @if ($errors->has('phone'))
                        <span class="help-block">
                            <strong>{{ $errors->first('phone') }}</strong>
                        </span>
                    @endif
                </div> 	
            </div>
            <div class="row">
                {{-- Password --}}
                <div class="col-sm-6 form-group{{ $errors->has('password') ? ' has-error' : '' }} position-relative has-icon-left">
                    <label for="reg-fn">Contraseña</label>
                    <input id="password" type="password" name="password" class="form-control round" placeholder="Contraseña" required>
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div> 	
                {{-- Password Confirmation --}}
                <div class="col-sm-6 form-group{{ $errors->has('password') ? ' has-error' : '' }} position-relative has-icon-left">
                    <label for="reg-fn">Confirmar Contraseña</label>
                    <input id="password-confirm" type="password" name="password_confirmation" class="form-control round" placeholder="Confirme Contraseña" required>
                    @if ($errors->has('password-confirm'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password-confirm') }}</strong>
                        </span>
                    @endif
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 group-selector">
                    <label for="">Cómo querés registrarte?</label>
                    <div class="btn-group-toggle" data-toggle="buttons">
                        <label class="SizeSelector btn btn-main-sm-hollow">
                            <input name="group" value="2" @if(old('2')) checked @endif type="radio" autocomplete="off" required> Minorísta
                        </label>
                        <label class="SizeSelector btn btn-main-sm-hollow">
                            <input name="group" value="3" @if(old('3')) checked @endif type="radio" autocomplete="off" required> Mayorísta
                        </label>
                    </div>
                </div>
            </div>            
            {{-- Submit --}}
            <button type="submit" class="btn btn-primary btn-block"><i class="icon-unlock"></i> Registrarse</button>
            <div class="bottom-text">Ya tiene cuenta? | <a href="{{ route('customer.login') }}">Ingresar</a></div>
        </form>
    </div>
</div>

@endsection
    
@section('scripts')
    @include('store.components.bladejs')
@endsection
