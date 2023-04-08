// let str="Anupam Kuamr";
// for(let i=0;i<str.length;i++)
// {
//     console.log(str[i]);
// }


// let str="Anupam kumar";
// let ans="";
// for(let i=0;i<str.length;i++)
// {
//     // ans+=str[i]; 

//     // we can write in one line but with coma and space
//     ans+=str[i]+", ";
// }
// console.log(ans);
// -------print the Assic value-------
// let str="Bhavesh Bansal";
// for(let i=0;i<str.length;i++)
// {
//     console.log(str.charCodeAt(i));
// }
// count the number of b
// let str="jdcdhcnuevbudbreuriubwiir"; 
// console.log(str.split("e").length - 1)
// 
// let str="anusieiofcew";
// let count=1;
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]===str[i+1])
//     {
//         count++;
//     }
//     else{
//         console.log('${str[i]} occur ${count}times');
//         count=1;
//     }
// }


	// JavaScript code for the above approach... for frequency count
	
	// let countCharacters = (string) => {
	// let count = 1;
	// for (let i = 0; i < string.length; i++) {
	// 	if (string[i] === string[i + 1]) {
	// 	count++;
	// 	} else {
	// 	console.log(`${string[i]} occur ${count} times`);
	// 	count = 1;
	// 	}
	// }
	// };
	
	// countCharacters("hello");
// if number is in string then how to conver in integer
    // let number="12";
    // console.log(parseInt(number));
// yellow out mean it seen like string


// FIND SUM OF STRING IN 

// let str="23473678546";
// let sum=0;
// for(let i=0;i<str.length;i++)
// {
//    sum+=parseInt(str[i]);
// }
// console.log(sum);


// IF WE WANT TO FIND SUM OF NUAMBER

// let str="27473678546";
// let ans=0;
// for(let i=0;i< str.length;i+=2)
// {
//     ans+=parseInt(str.substr(i,2));
// }
// console.log(ans);

//  let str="23456";
//  let ans=0;
//  for(let i=0;i<str.length;i+=2)
//  {
//     console.log(str.substr(i,2));
//     ans+=parseInt(str.substr(i,2));
//  }
//  console.log(ans);
// find sum of element in char of its number

// let str="1A2";
// let ans=0;
// for(let i=0;i<str.length;i++)
// {
//     if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)
//     { 
//          ans+=parseInt(str[i]);

//     }
//     else{
//         ans+=str.charCodeAt(i);
//     }
// }
// console.log(ans);

// let str="1A2";
// let ans=0;
// for(let i=0;i<str.length;i++)
// {
//     if(!isNaN(str[i]))
//     {
//         ans+=parseInt(str[i]);
//     } else{
//         ans +=str.charCodeAt(i);
//     }
// }
// console.log(ans);
// reverse string in javascript


// let str="anupam kumar";
// ans="";
// for(let i=str.length-1;i >=0;i--)
// {
//     ans+=str[i]; 
// }
// console.log(ans);


// reverse the string by word in javascript
// let str="anupam kumar";
// let revstr="";
// for(let i=str.length-1;i >=0;i--)
// {
// revstr+=str[i];
// }
// let sp=undefined;
// let ep=revstr.length;

// let ans="";
// for(let i=revstr.length-1;i>=0;i--)
// {
//  if(revstr[i] == " ")
//  {
//     sp=i+1;
//      ans+=revstr.substring(sp,ep);
//  }

// }

// let str="Anupam Kumar";
// let revstr="";
// for(let i=str.length-1;i>=0;i--)
// {
// 	revstr +=str[i];
// }
// let sp=undefined;
// let ep=revstr.length;
// ans="";
// for(let i=revstr.length-1;i>=0;i--)
// {
// if(revstr[i]==" ")
// {
// 	sp=i+1;
// 	ans+=revstr.substring(sp,ep)+ " ";
// 	ep=i;
// 	sp=undefined;
//  }else if(i==0)
//  {
//   sp=0;
//   ans+= revstr.substring(sp,ep);
//  }
//  console.log(ans);
// }
// let str="Anupam Kumar";
// let revstr="";
//  for(let i=str.length-1;i>=0;i--)
// {
//  	revstr +=str[i];
//  }
// let sp=0;
// let ep=undefined;
// let ans="";
// for(let i=0;i<=revstr.lenght-1;i++)
// {
// 	console.log(i);
// 	if(revstr[i]=="")
// 	{
// 		ep=i;
// 		ans=" "+revstr.substring(sp,ep)+ans;
// 		ep=undefined;
// 		sp=i+1;
// 	}
// 	else if(i==(reverse.lenght))
// 	{
// 		ep=revstr.length;
// 		ans=revstr.substring(sp,ep)+ans;
// 	}
	
// }
// console.log(ans);


let str="abbba";
let ans=true;
for(let i=0,j=str.length-1;i<=j ;i++,j--)
{
	if(str[i] !=str[j])
	{
       ans=false;
	   break;
	}
}
console.log(ans);