import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn,  } from "typeorm";
import { ICredentialEntity } from "./ICredential";
import { IAppointmentEntity } from "./IAppointment";


@Entity()
export class IUserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: number;

    @JoinColumn()
    @OneToOne(() => ICredentialEntity, (credential) => credential.id)
    credential: ICredentialEntity;

    @JoinColumn()
    @OneToMany(() => IAppointmentEntity, (appointment) => appointment.id)
    appointment: IAppointmentEntity[];
}