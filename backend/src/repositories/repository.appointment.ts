import { AppDataSource } from "../config/data.source";
import { IAppointmentEntity } from "../entity/IAppointment";



export const repositoryAppointment = AppDataSource.getRepository<IAppointmentEntity>(IAppointmentEntity);