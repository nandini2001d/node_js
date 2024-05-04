import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class data_user extends BaseEntity {
  @PrimaryGeneratedColumn()
  "id": number;

  @Column()
  "name": string;

  @Column()
  "email": string;

  @Column()
  "password": string;
}
