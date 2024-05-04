//npm init   => generates the package.json file
//tsc --init   => ganerate the tsconfig.json file

//===>Packages (dependencies)
//npm i express @types/express nodemon ts-node @types/node typescript
//npm i mysql2 typeorm ,cors reflect-metadata 

// reflect-metadata => allow you to run time reflection on types => not requird to much

//nodemon => it automatically reload the terminal when we save the file
//(nodemon file_name)  => startingly this command have to pass in the terminal 
//afeter that when we changed code and save that code then automatically terminal run 

//cors => it allows the cross origin 

//==> have to uncomment in the tsconfig.json file
//"experimentalDecorators": true, 
//"emitDecoratorMetadata": true, 

//insert following in the package.json file where secipt object is presnt ==> to start the index.js file on nodemon 
//"start": "nodemon index.ts"
//then in terminal we pass the commamd "npm start"
// then it automatically run commad internally as the "nodemon index.ts"