export interface Corte{
    id: number;
    dineroRecolectado: number;
    fechaCorte: string;
    peluchesRestantes: number;
    porcentajePactado: number;
    costoPorPeluche: number;
    recargaPeluches: number;
    idUsuario: number;
    nombreUsuario: string;
    usernameUsuario: string;
    idAsignacion: number;
    idMaquina: number;
    idTienda: number;
    nombreTienda: string;
}