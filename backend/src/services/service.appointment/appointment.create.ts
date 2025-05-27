import { IAppointmentDto } from "../../Dto/Appointment.Dto";
import { IAppointmentEntity, StatusAppointment } from "../../entity/IAppointment";
import { repositoryAppointment } from "../../repositories/repository.appointment";

const usersCreate = async ( appointment: IAppointmentDto ): Promise<IAppointmentEntity> => {
    const appointmentDto: IAppointmentEntity = repositoryAppointment.create({
        date: appointment.date,
        time: appointment.time,
        status: StatusAppointment.ACTIVATE,
        user_id: { id: appointment.user_id }
    });

   const newAppointment = await repositoryAppointment.save(appointmentDto)
   return newAppointment;
}

export default usersCreate;