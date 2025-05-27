
import { StatusAppointment } from "../../entity/IAppointment";
import { repositoryAppointment } from "../../repositories/repository.appointment"

const appointmentStatus = async ( id: number ): Promise<number> => {
    const appointment = await repositoryAppointment.findOne({
        where: { id },
    })

    if (!appointment) {
        throw new Error("Appointment not found");
    }

    appointment.status = StatusAppointment.CANCELLED;

    const updatedAppointment = await repositoryAppointment.save(appointment);

    return updatedAppointment.id;
}