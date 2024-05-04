import {EntitySchema} from 'typeorm';

export interface category{
    id:number,
    name:string
}

//we can also  create this way => table 
export const categoryEntity=new EntitySchema<category>({
     name:"Category",
     columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
        },
        name:{
            type:String,
        }
     }

})