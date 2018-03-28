import {
    EntityRepository,
    Repository,
    EntityManager
} from "typeorm";

import { AuthorEntity } from "./model";


@EntityRepository(AuthorEntity)
export class AuthorRepository extends Repository<AuthorEntity> {

    createAndSave(firstName: string, lastName: string) {

        let author = new AuthorEntity(
            firstName,
            lastName
        );

        return this.manager.save(author);
    }

}