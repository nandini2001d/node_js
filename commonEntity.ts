import {Column,PrimaryGeneratedColumn} from 'typeorm';

//common colums which is present in all the tables 
export abstract class commonEntity{

    @PrimaryGeneratedColumn()
    "id":number;

    @Column()
    "name":string;

    @Column()
    "email":string;
     
    @Column()
    "password":string;
}