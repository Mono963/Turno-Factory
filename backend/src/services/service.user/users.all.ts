import { IUserEntity } from "../../entity/IUser";
import { repositoryUser } from "../../repositories/repository.user";


const usersBringEverything = async (): Promise<IUserEntity[]> => {
    const usersAll = await repositoryUser.find({
        relations: {
            credential: true,
            appointment: true
        }
    });
    return usersAll;
}


export default usersBringEverything;