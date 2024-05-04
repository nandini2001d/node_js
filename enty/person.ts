import {EntitySchema} from 'typeorm';


//we can also  create this way => table 
export const personEntity=new EntitySchema({
     name:"Person",
     columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
        },
        name:{
            type:String,
            length:250,
            nullable:false
        },
        city:{
            type:String,
            length:250
        },
        number:{
            type:Number,
            unique:true
        }
     }
    })