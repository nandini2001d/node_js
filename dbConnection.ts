import {DataSource} from "typeorm";
import dotev from "dotenv";
import {data_user} from './Entity/data_user';

dotev.config();

 export const connectDB = new DataSource({
 type:"mysql",
 host:"127.0.0.1",
 port:3306,
 url:"jdbc:mysql://127.0.0.1:3306/data_user",
 password:"pritiraju",
 username:"root",
 database:"data_user",

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


