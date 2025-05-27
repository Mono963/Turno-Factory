import { IUserEntity } from "../../entity/IUser";
import { repositoryUser } from "../../repositories/repository.user";


const userOne = async ( id: number ): Promise<IUserEntity> => {
    const user = await repositoryUser.findOne({
        where: { id }
    });

    if (!user) {
        throw new Error("No se contro el id de stes usuario");
    } else if (user !== null) {
        return user;
    }

throw new Error("No se encontro al usuario");
}

export default userOne;