@extends('layouts.app')

@section('template_title')
    {{ $tarea->name ?? "{{ __('Show') Tarea" }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Tarea</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('tareas.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Nombre Tarea:</strong>
                            {{ $tarea->nombre_tarea }}
                        </div>
                        <div class="form-group">
                            <strong>Descripcion:</strong>
                            {{ $tarea->descripcion }}
                        </div>
                        <div class="form-group">
                            <strong>Id Users:</strong>
                            {{ $tarea->id_users }}
                        </div>
                        <div class="form-group">
                            <strong>Correo:</strong>
                            {{ $tarea->correo }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
