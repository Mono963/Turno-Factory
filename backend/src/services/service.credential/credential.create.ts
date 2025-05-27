import { ICredentialDto } from "../../Dto/Credential.Dto";
import { ICredentialEntity } from "../../entity/ICredential";
import { repositoryCredential } from "../../repositories/repository.credential";

const createCredential = async ( crendentialDto: ICredentialDto): Promise<ICredentialEntity> => {
    const crendential: ICredentialEntity = await repositoryCredential.create({
        username: crendentialDto.username,
        password: crendentialDto.password
    });

    const newCredential = await repositoryCredential.save(crendential);
    return newCredential;
}

export default createCredential;