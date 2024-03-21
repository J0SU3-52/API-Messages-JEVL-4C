import { Connection } from "mysql2/promise";

export interface UsersUtilsInterface {
    databaseConexion: Connection;

    enviarMensaje(id: string)
}