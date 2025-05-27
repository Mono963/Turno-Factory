import { DataSource } from "typeorm"
import { DB_LOCALHOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./env"
import { IUserEntity } from "../entity/IUser"
import { IAppointmentEntity } from "../entity/IAppointment"
import { ICredentialEntity } from "../entity/ICredential"




export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_LOCALHOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    // dropSchema:true, // Sirve para que cada ves que se inicialize se borre la base de datos anterior
    synchronize: true,
    logging: ["error"],
    entities: [IUserEntity, IAppointmentEntity, ICredentialEntity],
    subscribers: [],
    migrations: [],
})