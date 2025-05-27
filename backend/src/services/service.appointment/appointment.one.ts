import { IAppointmentEntity } from "../../entity/IAppointment";
import { repositoryAppointment } from "../../repositories/repository.appointment";



const userOne = async ( id: number ): Promise<IAppointmentEntity> => {
    const appointment = await repositoryAppointment.findOne({
        where: { id },
        relations: {
            user_id: true
        }
    })

    if (!appointment) {
        throw new Error("No se contro el id de stes usuario");
    } else if (appointment !== null) {
        return appointment;
    }

throw new Error("No se encontro al usuario");
}

export default userOne;