

export enum Cargo{
    ejecutivo = 'ejecutivo',
    desarrollador = 'desarrollador',
    disenador = 'disenador',
    director = 'director',
}

export interface Usuario{

    nombre: string,
    email: string,
    cargo: Cargo,
    password: string,
    create: Date,
    update: Date,
}