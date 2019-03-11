<div class="form-body">
    <div class="row">
        <div class="col-lg-4 col-md-6">
            <div class="form-group">
                {!! Form::label('username', 'Nombre de Usuario') !!}
                {!! Form::text('username', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el nombre del usuario', 'required' => '']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('name', 'Nombre') !!}
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el nombre', 'required' => '']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('surname', 'Apellido') !!}
                {!! Form::text('surname', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el apellido', 'required' => '']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('email', 'E-mail') !!}
                {!! Form::text('email', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el e-mail', 'required' => '']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('phone', 'Teléfono') !!}
                {!! Form::text('phone', null, ['class' => 'form-control', 'placeholder' => 'Ingrese un teléfono']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('phone2', 'Teléfono 2') !!}
                {!! Form::text('phone2', null, ['class' => 'form-control', 'placeholder' => 'Ingrese teléfono secundario']) !!}
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="form-group">
                {!! Form::label('cuit', 'CUIT') !!}
                {!! Form::text('cuit', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el CUIT']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('dni', 'DNI') !!}
                {!! Form::text('dni', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el DNI']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('address', 'Dirección') !!}
                {!! Form::text('address', null, ['class' => 'form-control', 'placeholder' => 'Ingrese la dirección']) !!}
            </div>
            <div class="form-group">
                {!! Form::label('cp', 'Código Postal') !!}
                {!! Form::text('cp', null, ['class' => 'form-control', 'placeholder' => 'Ingrese el código postal']) !!}
            </div>
            <div class="form-group">
                <div class="form-group">
                    <label>Provincia</label>
                    {!! Form::select('geoprov_id', $geoprovs, $customer->geoprov_id,
                    ['class' => 'GeoProvSelect form-control', 'placeholder' => 'Seleccione una opción']) !!}
                </div>
                <label>Localidad</label>
                <select id='GeoLocsSelect' name="geoloc_id" 
                    data-actualloc="" 
                    data-actuallocid="" 
                    class="form-control GeoLocsSelect" required>
                </select>
            </div>
        </div>
        <div class="col-lg-4 col-md-12">
            <div class="form-group">
                {{-- Group: 1 Member - 2 Client - 3 ClientBig --}}
                {!! Form::label('group', 'Tipo de Cliente') !!}
                {!! Form::select('group', [2 => 'Minorísta', 3 => 'Mayorísta'], null, ['class' => 'form-control', 'placeholder' => 'Seleccione una opcion']) !!}
            </div>
            @if(isset($section) && $section == 'customer-edit')
                <label class="UpdatePasswordLabel">Cambio de contraseña</label>
                <button type="button" id="UpdatePasswordBtn" class="btn btnMain">Deseo actualizar contraseña</button>
                <div class="UpdatePasswordFields Hidden">
                    <div class=" form-group">
                        {!! Form::label('password', 'Contraseña') !!}
                        {!! Form::password('password', ['class' => 'form-control', 'required' => '', 'disabled' => '', 'placeholder' => 'Ingrese la contraseña']) !!}
                    </div>
                    <div class="form-group">
                        {!! Form::label('password_confirmation', 'Confirme la contraseña') !!}
                        {!! Form::password('password_confirmation', ['class' => 'form-control', 'required' => '', 'disabled' => '', 'placeholder' => 'Ingrese la contraseña']) !!}
                    </div>
                </div>
                <input type="hidden" class="WantUpdatePassword" name="updatePassword" value="0">
            @else
                <div class=" form-group">
                    {!! Form::label('password', 'Contraseña') !!}
                    {!! Form::password('password', ['class' => 'form-control', 'required' => '', 'placeholder' => 'Ingrese la contraseña']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('password_confirmation', 'Confirme la contraseña') !!}
                    {!! Form::password('password_confirmation', ['class' => 'form-control', 'required' => '', 'placeholder' => 'Ingrese la contraseña']) !!}
                </div>
            @endif
        </div>
    </div>
</div>