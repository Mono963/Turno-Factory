import { IAppointmentEntity } from "../../entity/IAppointment";
import { repositoryAppointment } from "../../repositories/repository.appointment";



const usersBringEverything = async (): Promise<IAppointmentEntity[]> => {
    const appointmentAll = await repositoryAppointment.find({
        relations: {
            user_id: true
        }
    });
    return appointmentAll;
}


export default usersBringEverything;