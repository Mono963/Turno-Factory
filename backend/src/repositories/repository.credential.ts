import { AppDataSource } from "../config/data.source";
import { ICredentialEntity } from "../entity/ICredential";



export const repositoryCredential = AppDataSource.getRepository<ICredentialEntity>(ICredentialEntity);