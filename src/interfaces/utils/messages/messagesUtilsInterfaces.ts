import { Connection } from "mysql2/promise";

export interface MySqlQuery {

        rows: Array<any>; 
        fields: Array<any>

}
export type sendMessageFields = {
        id: string;
        message: string;
        type: string; 


}
export interface MessageUtilsInterfaces {
        sendMessage(params: sendMessageFields);
}