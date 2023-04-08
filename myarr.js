// new array creation
// let arr=[];
// // let arr=new Array();
// console.log(arr);


// let arr=["bhavesh",23,45.4,true,'b'];
// console.log(arr);


// // arr.push("hello");
// arr.push("hello");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.lenght);
// let arr=[];
// arr[25]=5;
// console.log(arr);


// let str1="Anupam";

// let str2="Anupam kumar";

// let str3="Apple,mango,Banana";

// console.log(str1.split(" "));

// console.log(str2.split(" "));

// console.log(str3.split(","));

// let arr=["a","b","c","d"];
// console.log(arr.join(""));
// console.log(arr.join('#'));
// console.log(arr.join("|"));
// let arr=[1,2,3,4,5,6];
// for(let i in arr)
// {
//     console.log(i);
//     // break;
// }



// console.log("a",1,2);


// let arr=[1,2,3,4,5,6];
// for(let i in arr)
// {
//     console.log(parseInt(1));

// }
// traverse and settle value
// let arr=[1,2,3,4,5,6];
// for(let i of arr)
// {
//     console.log(1);
// }
// console.log(1+2+"a"); //string

// console.log(1+2+"a"); //first integer addition then string concatenation

// console.log("a"+1+2);

 //first integer addition then string concationation

//  console.log(1+2+"a"); 
 //first integer addition then string concationation
 

// console.log(String.fromCharCode("a".charCodeAt(0)+1));

// most importants array
// let arr=[1,2,3,4,5,6];
// for(let i in arr)
// {

//     console.log(i);
// }

// convert string to integer is from parseInt
// let arr=[1,2,3,4,5,6];
// {


// console.log(parseInt(i));
// }


// for chaking this is string or not we use type casting

// let arr=[1,2,3,4];
 
// for( let i in arr)
// {
//     console.log(typeof(i));
// }


// for(let i>=0;i<arrayBuffer.lenght;i++)
// {

// }


// for find index we write both  value and index
// let arr=["a","b","c","d"];
// arr.forEach(function(value,index)
// {
//     console.log(value,index);
// })

// let arr=["a","b","c","d"];

// arr.forEach(function(data,index)
// {
//     arr[index]=data+index;
// })
// console.log(arr);
// console.log(Array.forEach)




// let arr=["a","b","c","d"];


// function temp (myarg,myarg2,data)
// {
//     console.log(myarg,myarg2,data);
    
// }
// arr.forEach(temp.bind( this,"hello","hello2"));

// function myForEach(array,callbackFn)
// {
//     for(let i=0;i<array.lenght;i++)
//     {
//         callbackFn(array[i],i,array);
//     }
// }


// let arr =[1,2,3,4];
// myForEach(arr,function(value,index,array)
// {
//     console.log(value,index,array);
// })

// function myForEach(array,callBackFn)
// {
//     for(let i=0;i<array.lenght;i++)
//     {
//         callBackFn(arr[i],i,array);
//     }
// }

// let arr=[1,2,3,4];
// myForEach(arr,callBackFn)
// function callBackFn(value,index,array)
// {
//     console.log(value,index,array);
// }


// let arr=[1,2,3,4];
// for(let i=0;i<arr.length;i++)
// {
//     arr[i]+=2;
// }

// let newarr=arr.map(function(value)
// {
//     return value+2;
// });


// arr=arr.map(function(value)
// {
//     return value+2;
// })
// console.log(arr);


// let arr=[1,2,3,4];
// console.log(arr.slice(1,3));
// arr.slice(1,3);
// console.log(arr);

// let newarr=arr.slice(1,3);
// console.log(newarr);

// let arr=[1,2,3,4];

// console.log(arr.slice(1,3));
// let deletedArray=arr.splice(1,1);
// console.log(deletedArray);
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9];
// for(let i=0;i<arr.length;i++)


// write a program in javascript to delete a odd numbers

// let arr=[1,2,3,4,5,6,7,8,9];

// for(let i=0;i<arr.length;i++)


// if(arr[i]%2==1)

// {
//     arr.splice(i,1);
// }
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9];

// for(let i in arr)
// {
//     if(arr[i]%2==0)
//     {
//         arr.splice(i,1);
//     }
    
// }
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach(function(value,index)
// {
//     if(value %2==1)
//     {
//         arr.splice(index);
//     }
// })
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach(function(value,index)
// {
//     if(value%2==1)
//     {
//         arr.splice(index);
//     }
// })
// console.log(arr);


// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// let temp=[...arr];
// console.log(arr);

// let arr=[1,2,3,3,4,5,6,7,8,9];
// let temp=[...arr];
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==1)
//     {
//         temparr.splice(i,1);
//     }
// }


// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// let temparr=[...arr];
// for(let i=arr.length-1;i>=0;i--)
// {
//     if(arr[i]%2 ==1)
//     {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);
// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// arr=arr.filter(function(value)
// {
//     if(value % 2==1)
//     {
//         return false;
//     }
//     else
//     {
//         return true;
//     }
//     return value  % 2==0;
// })
// console.log(arr);


// let arr=[1,2,3,4];
// // for(let i=0;i<arr.length;i++)
// // {
// //     arr[i]+=2;
// // }
//  let newarr=map(function(value)
// {
//     return value+2;
// });
// console.log(arr);


// let arr=[1,2,3,4];
// function callbackFn(value)
// {
//     return value+2;
// }
// arr=arr.map(callbackFn);
// console.log(arr);

// Array.map(function())

// Array.spice(1,2);
// console.log(arr);
// console.log(arr.slice(1,3));
// let new arr=arr.slice(1,3);
// console.log(arr);

// console.log(arrslice(1,3));
// let deletedArray=arr.splice(1,1);
// console.log(deletedArray);
// console.log(arr);

// let arr=[1,2,3,3,4,5,6,7,8,9];
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i] %2 == 1)
//     {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


// let arr=[1,2,3,3,5,6,7,8,9];
// let temp=[...arr];
// console.log(arr);


// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// let temp=[...arr];
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==1)
//     {
//        temparr.splice(i,1);
//     }
// }

// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// let temparr=[...arr];
// for(let i=arr.length-1;i>=0;i++)
// {
//     if(arr[i] %2==1)
//     {
//         temparr.splice(i,1);

//     }
// }
// console.log(arr);


// arr=arr.filter(function(value)
// {
//     if(value % 2==1)
//     {
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// })
// console.log(arr);


// 
// let arr=[2,5,5,3,4,1];
// console.log(arr.sort(function(a,b)
// {
//     console.log(a,b);
//     if(a>b)
//     {
//         return -1;
//     }
//     else if(a==b)
//     {
//         return 0;
//     }
//       else{
//         return 1;
//       }
// }));


// let  arr=[1,2,3,4];

// for(let i=0;i<arr.length;i++)
// {
//   arr[i]+=2;

// }

// let newarr= arr.map(function(value)
// {
//    return value+2;
// });
// console.log(newarr);

// arr=arr.filter(function(value)
// {
//   if(value %2 ==1)
//   {
//     if(value %2 ==1)
//     {
//       return false;
//     }else
//     {
//       return true;
//     }
//   }
// })
// console.log(arr);

// let arr=[2,5,5,3,6,6,6,-2,-12,3,4,1,"a","b","abc"];
// console.log(arr.sort(function(a,b)
// {
  
//   if(a>b)
//   {
//     return 1;
//   }else if(a==b)
//   {
//     return 0;
//   }else
//   {
//     return -1;
//   }
  
// }));
// console.log(arr.sort());
// console.log
// function  print()
// {
//   // console.log("hello");
//   return undefined;
//   return hello;
// }
// console.log(print());

// const arr=[1,2,3,4,5,6];

// arr[3]=7;
// arr=[1,2,3];
// console.log(arr);



// let arr=["a","b","c","d"];
// arr.forEach(function(value,index,array)
// {
//   console.log(value,index,array);
// })

// let arr=["a","b","c","d"];
// arr.forEach((data,index,array,fourth)=>
// {
//   console.log(data,index,array,fourth);
// }) 

// Array.forEach(function(data,index)
// {
//   arr[index]=data+index;
// })
// console.log(arr);
// let arr=["a","b","c","d"];
// arr.forEach(function(data,inedx)
// {
//   // arr[index]=data+index;
//   console.log(arr);
// })
// console.log(Array+forEach);

// let arr=["a","b","c","d"];
// function temp(myarg,myarr2,data)
// {
//   console.log(myarg,myarg2,data);

// }
// arr.forEach(temp.bind(this,"hello2","hello3"));


// 
// function myForEach(array,callBackFn)
// {
//   for(let i=0;i<array.lenght;i++)
//   {
//     callBackFn(array[i],i,array);
//   }
// }

// let arr=[1,2,3,4];
// myForEach(arr,function(value,index,array)
// {
//   console.log(value,index,array);
// })

// function callBackFn(value,index,array)
// {
//   console.log(value,index,array);
// }

// function myForEach(array,callBackFn)
// {
//   for(let i=0;i<array.lenght;i++)
//   {
//     callBackFn(array[i],i,array);
//   }
// }
// let arr=[1,2,3,4];
// myForEach(arr,callBackFn)

// 
// function myForEach(array,callBackFn)
// {
//   for(let i=0;i<array.lenght;i++)
//   {
//     callBackFn(array[i],i,array);
//   }
// }
// let arr=[1,2,3,4];
// myForEach

// let arr=[1,2,3,4];
// myFor(arr,call)
// function call(value,index,array)
// {
//   console.log(value,index,array);
// }
// let arr=[1,2,3,4];
// arr=arr.map(function(value)
// {
//   return value+2;
// });
// console.log(arr);

// function callbackFn(value)
// {
//   return value+2;
// }
// arr=arr.map();
// console.log(arr);
// let arr=[1,2,3,4];
// Array.map(function(value))

// slice 
// let arr=[1,2,3,4];
// arr.splice(arr);
// let arr=[1,2,3,4];
// console.log(arr.slice())
// {
//   arr.splice(1,3);
//   console.log(arr);
// }

// 
// console.log(arr.slice(1,1));
// let deletedArray=arr.splice(1,2);
// console.log(deletedArray);
// console.log(arr);

// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// let temp=[];
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]%2 ==1)
//   {
//     arr.splice(i,1);
//   }
// }
// console.log(arr);

// let arr=[1,2,3,3,5,4,5,6,,7,8,9];
// for(let i in arr)
// {
//   if(arr[i] % 2 !=0)
  
//   {
//     arr.splice(i,2);
//   }
// }
// console.log(arr);
// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// arr.forEach(function(value,index)
// {
//  if(value %2 ==1)
//  {
//    arr.splice(index);
//  }
// })
// console.log(arr);
// sparking an array
// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// let temp=[...arr];
// console.log(arr);
// let arr=[1,2,3,4,5,4,5,6,7,8,9];
// let temparr=[...arr];//copying an array
// for(let i=0;i<arr.length;i++)
// {
//   if(arr[i]%2 ==1)
//   {
//     temparr.splice(i,1);
//   }
// }
// console.log(arr);
// let arr=[1,2,3,3,5,4,5,6,7,8,9];
// for(let i=arr.lenght-1;i>=0;i--)
// {
//   if(arr[i]%2==1)
//   {
//     temparr.splice(i,1);
//   }
// }
// console.log(arr);
// arr=arr.filter(function(value)
// {
//   if(value %2 ==1)
//   {
//     return false;
//   }
//   else
//   {
//     return true;
//   }
// })
// console.log(arr);
// arr=arr.filter(function)
// let arr=[2,5,3,4,1];
// console.log(arr.sort(function(a,b)
// {
//    return a-b;
// }))
// let arr=[2,5,3,4,1];
// console.log(arr.sort(function(a,b)
// {
//   console.log(a,b);
//   if(a>b)
//   {
//     return 1;
//   }else if(a==b)
//   {
//     return 0;
//   }else
//   {
//     return -1;
//   }
// }))
// let arr=[2,5,5,3,6,6,6,-2,-12,4,1,"a","c","b",1,2,3,"abc"];
// console.log(arr.sort());
// let arr=[5,-1,-5,1,2,9,3,4,7];

// console.log(arr.sort());
// let arr=[100,20];
// console.log(arr.sort());
// arr["name"]="bhavesh";
// console.log(arr.lenght);
// arr["name"]="Bhavesh";
// console.log(arr["name"]);
// console.log(arr.lenght);

// arr["name"]="Bhavesh";
// console.log(arr.name);
// console.log(arr.lenght);

// console.log(Array.prototype.map)
// {

// }
// Array.prototype.name="Bahvesh";
// let arr=[1,2,3,4];
// console.log(arr.name);
// Array.prototype.name="Bhavesh";
// String.prototype.len=function(value)
// {
//   console.log(value);
// }
// let obj=
// {
//   "hello":function()
//   {
//     console.log("hello");
//   }
// }
// let obj=
// {
//   "hello":function()
//   {
//     console.log("hello");
//   }
// }
// obj.hello();
// let arr=[2,5,3,4,1];
// console.log(arr.sort(function(a,b)
// {
//   return a-b;
// }));
// let arr=[2,5,3,4,1];
// console.log(arr.sort(function(a,b)
// {
//   if(a>b)
//   {
//     return 1;
//   }else if(a==b)
//   {
//     return 0;
//   }
//   else{
//     return -1;
//   }
// }))
// let arr=[2,5,3,4,1];
// console.log(arr.sort(function(a,b)
// {
//   if(a>b)
//   {
//     return -1;
//   }else if(a==b)
//   {
//     return 0;
//   }
//   else{
//     return 1;
//   }
// }))
// let arr=[2,5,5,3,4,1];
// console.log(arr.sort());