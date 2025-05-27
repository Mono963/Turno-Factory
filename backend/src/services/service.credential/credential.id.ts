import { ICredentialDto } from "../../Dto/Credential.Dto";
import { repositoryCredential } from "../../repositories/repository.credential";


const credentialId = async (credentialDto: ICredentialDto): Promise<number> => {
    const userCredential = await repositoryCredential.findOne({
        where: { username: credentialDto.username }
    }) 

    if (userCredential) {
        userCredential.password === credentialDto.password;
        return userCredential.id;
    } 

    throw new Error("La contraseña o el nombre de usuario en incorrecto");
}

export default credentialId;