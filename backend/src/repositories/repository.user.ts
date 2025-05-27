import { AppDataSource } from "../config/data.source";
import { IUserEntity } from "../entity/IUser";


export const repositoryUser = AppDataSource.getRepository<IUserEntity>(IUserEntity);