import express, { Request, Response } from "express";
import { data_user } from "../Entity/data_user";
import { DataSource } from "typeorm";
import { connectDB } from "../dbConnection";

const app =express();

app.use(express.json());

// export const homeDetails = async (req: Request, res: Response) => {
//   //.............insert...........
//   // let data= await connectDB.manager.insert(data_user,{
//   //     name:"nandini",
//   //     email:"jitcse.ndeshpande2001@gmail.com",
//   //     password:"pritiraju"
//   // });

//   //..............save..............
//   // let user = new data_user();
//   // user.name="swati";
//   // user.email="swati@gmail.com";
//   // user.password="swati";
//   // let data=await connectDB.manager.save(user);

//   //...................update.............
//   // let data = await connectDB.manager.update(data_user,3,{
//   //     name:"kartik",
//   //     email:"kartik@gmail.com",
//   //     password:"kartik"
//   // });

//   //...................delete............
//   //let data =await connectDB.manager.delete(data_user,3);

//   //...............find all................
//   //let  data = await connectDB.manager.find(data_user);

//   //.............find by perticular filed...............
//   let data = await connectDB.manager.findOneBy(data_user, {
//     id: 2,
//   });

//   //.............trucket the data----------
//  //let data =await connectDB.manager.clear(data_user);

//   //response show on server
//   res.json({
//     test: "Data Inserted",
//     data: data,
//   });
// };


//using repository 
export const homeDetails = async (req: Request, res: Response) => {

    const repository = await connectDB.getRepository(data_user);
    //.............insert...........
    //  let data= await repository.insert({
    //      name:"nandini",
    //      email:"jitcse.ndeshpande2001@gmail.com",
    //     password:"pritiraju"
    //  });
  
    //..............save..............
     //  let user = new data_user();
    //   user.name="swati";
    //   user.email="swati@gmail.com";
    //  user.password="swati";
    //   let data=await repository.save(user);
  
    //...................update.............
    //  let data = await repository.update(2,{
    //      name:"kartik",
    //     email:"kartik@gmail.com",
    //      password:"kartik"
    //  });
  
    //...................delete............
    //let data =await repository.delete(3);
  
    //...............find all................
    let  data = await repository.find();
  
    //.............find by perticular filed...............
    //let data = await repository.findOneBy({
      //id: 2,
    //});
  
    //.............trucket the data----------
    //let data =await repository.clear();
  
    //response show on server
    res.send(data)
  };
