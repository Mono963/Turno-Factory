import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IUserEntity } from "./IUser";

export enum StatusAppointment {
    ACTIVATE = "active",
    CANCELLED = "cancelled"
}

@Entity()
export class IAppointmentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column({
        type: "enum",
        enum: StatusAppointment,
        default: StatusAppointment.ACTIVATE,
        enumName: "status::appointment"
    })
    status: StatusAppointment;

    @JoinColumn()
    @ManyToOne(()=> IUserEntity, (user) => user.id)
    user_id: IUserEntity;
}