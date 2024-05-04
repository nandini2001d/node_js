import {DataSource} from "typeorm";
import dotev from "dotenv";
import {data_user} from './Entity/data_user';

dotev.config();

 export const connectDB = new DataSource({
 type:"mysql",
 host:"todolist.cpygkmakwokt.eu-north-1.rds.amazonaws.com",
 port:3306,
 //url:"jdbc:mysql://todolist.cpygkmakwokt.eu-north-1.rds.amazonaws.com:3306/data_use",
 password:"pritiraju",
 username:"root",
 database:"data_use",

 //show all sql and form operation on the database
 //logging:true,

 synchronize:true,

 //it crates the table 
 //for multiple entity classes are present
 entities:[
    './Entity/*.ts'
 ]
//for single entity class is present
//  entities:[
//     data_user
//  ]

 })


