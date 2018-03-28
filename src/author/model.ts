import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm";


@Entity('author')
export class AuthorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {
        length: 100
    })
    firstName: string;

    @Column('varchar', {
        length: 100
    })
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}