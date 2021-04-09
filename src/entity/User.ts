import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    DOB: string;

    @Column()
    password: string;

    @Column()
    balance: string;

    @Column()
    phoneNumber: string;

    @Column()
    OTP: string;

}
