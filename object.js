// let person=
// {
//     "name":"Bhavesh",
//     age:23,
//     0:"hello"

// // }
// // console.log(person["name"])
// console.log(person[0])
// let arr=[1,2,3,4];
// let obj={
//     0:1,
//     1:2,
//     2:3,
//     3:4
// }
// console.log(arr[0]);
// console.log(obj[0]);
// let person=
// {
//     "name":"Bhavesh",
//     age:23,
//     0:"hello"

// }
// person["company"]="pepcoding";
// person.gender="male";
// console.log(person);
// let arr=[1,2,3,4];
// arr["name"]="Bhavesh";
// console.log(arr);
// console.log(arr.lenght);

// Array.prototype.name="Bhavesh";
// let arr=[1,2,3,4];
// console.log(arr.name);

// Array.prototype.name="Bhavesh";
// String.prototype.len=function(value)
// {
// console.log(value);
// }
// let arr=[1,2,3,4];
// console.log(arr.name);
// Array.prototype.name="Bhavesh";
// String.prototype.len=functon()
// {
//     console.log(this.lenght);
// }
// let name="bhavesh bansal";
// str.len();
// let obj={
//     obj2:{
//         "hello":"1"
//     }
// }
// console.log(obj.obj2.hello);
// let obj=
// {
//     "hello":function()
//     {
//         console.log("hello");
//     }
// }
// obj.hello

// let newObj={};
// for(let key in [key])=="object"){
//     newObj[key]={};

// }else{
//     newObj[key]=obj[key];
// }
// }
// let newObj={};
// for(let key in obj)
// {
//     if(typeof(obj[key])=="object")
//     {
//         newObj[key]=obj[key]; 
//     }
// }
// let obj={
//     1:"hello1",
//     2:"hello2"
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// for(let i in obj)
// {
//     // console.log(i);
//     // console.log(key);
//     console.log(obj[key]);
// }
// for(let i=0;i<Object.keys(obj).length;i++)
// {
//     console.log(obj[Object.keys(obj)[i]]);


// }
// let obj={
//     obj1 :{
//         "obj1.1":{"obj1.1.1": "hello1"}
//     },
//     obj2:{
//         "obj2.1":"hello2.1",
//          "obj2.2":{} 
//     }
// }
// for(let key in obj)
// {
//     console.log(key);
//  if(typeof(obj[key])=="object")
//  {
//     for(let key2 in obj[key])
//     {
//      console.log(key2);   
//     }
//  }
// }  
// function printkeys(obj)
// {
//    for(let key in obj)
//    {
//     console.log(key);
//     if(typeof(obj[key])=="object")
//     {
//         printkeys(obj[key]);
//     }
//    } 
// }
// printkeys(obj);
// let obj={
//     "hello" :{},
//     "hello" :2
// }
// let newobj={...obj};
// // newobj.hello1="hello";
// newobj.hello["hello1.1"]="bhavesh";
// console.log(obj);

// let obj={
//     1:"hello",
//     2:"hello"
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// // for(let key in obj)
// // {
// //     console.log(obj[key]);
// // }
// for(let i=0;i<Object.keys(obj).length;i++)
// {
//     console.log(obj[Object.keys(obj)[i]]);
// }

// let obj={
//     obj1 :{
//         "obj1.1" :{}
//     },
//     obj:{
//         "obj2.1":{},
//         "obj2.2":{}
//     }
// }
// for(let key in obj)
// {
//     console.log(key);
//     // console.log(typeof(obj[key]));
//     // if(typeof(obj[key])=="object")
//     // {
//     //    for(let key2 in obj[key])
//     //    {
//     //        console.log(key2);
//     //    }  
//     // }
// }
// function printkeys(obj)
// {
//     for(let key in obj)
//     {
//         console.log(key);
//     }
//     if(typeof(obj[key])=="object")
//     {
//         printkeys(obj[key]);
//     }
// }
// let obj={
//     obj :{
//         "obj1.1":{"obj1.1.1" :"hello1"}
//     },
//     obj2:{
//         "obj2.1":"hello2.1",
//         "obj2.2" :"helo2.2"
//     }
// }




// function printkeys(obj)
// {
//     for(let key in obj)
//     {
//         console.log(key);
//     }
//     if(typeof(obj[key])=="object")
//     {
//         printkeys(obj[key]);
//     }
// }
// let obj={
//     "hello1":{},
//     "hello2":2
// }
// let newobj={...obj};
// // newobj.hello1="hello";
// newobj.hello1["hello1.1"]="bhavesh";

// console.log(obj);

// let newObj={};
// for(let key in obj )
// {
//     if(typeof(obj[key])=="object")
//     {
//       newObj[key]={};
//     }else
//     {
//         newObj[key]=obj[key]
//     }
// }   
     