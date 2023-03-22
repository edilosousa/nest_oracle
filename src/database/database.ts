/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm"
import { T1 } from '../teste/teste.entity'

export class DatabaseOptions {

    OraclelDataSource = new DataSource({
        type: 'oracle',
        host: 'bsr186.cal-comp.com.br',
        port: 1521,
        username: 'MCP',
        password: 'SDI418',
        serviceName: 'BDMCP',
        entities: [T1],
        synchronize: false,
    })

    // PostgresDataSource = new DataSource({
    //     type: "postgres",
    //     host: "localhost",
    //     port: 5432,
    //     username: "test",
    //     password: "test",
    //     database: "test",
    //     entities: [
    //         // ....
    //     ],
    // })
}
