import { commonEntity } from '../commonEntity';
import {Entity,Column} from 'typeorm';

@Entity()
export class thired_table extends commonEntity{
   
    //id , name , email ,password are all comming from the commonEntity abstract class

    @Column()
    "city":string;

    @Column()
    "pincode":number;

}