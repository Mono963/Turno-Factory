import { IUserDto } from "../../Dto/User.Dto";
import { IUserEntity } from "../../entity/IUser";
import { repositoryUser } from "../../repositories/repository.user";
import createCredential from "../service.credential/credential.create";


const usersCreate = async (user: IUserDto): Promise<IUserEntity> => {
    const userDto: IUserEntity = await repositoryUser.create({
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni
    })

    if(userDto){
        const credential = await createCredential({
            username: user.username,
            password: user.password
        });
           userDto.credential = credential;
    }

   const newUser = await repositoryUser.save(userDto);
   return newUser;
}

export default usersCreate;