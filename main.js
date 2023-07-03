// console.log('Hello world from main-js')

// //variables

// let age = 24
// console.log(age)

// const salary = 25000
// console.log(salary)

// // const sum = 0
// // sum =5
// // console.log(sum)  // once a variable has been initialised its value cannot be altered

// let sum = 0
// sum = 1000
// console.log(sum)   // but in case of let the variable once initialised, its value can be altered

// const name = "Joshua"; // String name = "Joshua" we mention datatype in java but javascript itself takes datatype depending upon the value
// const city = "Raichur"; //stored in the variable. We only  need to add const or let to a variable.
                           //strings can have '',"",``
 
//Note: Javascript is a dynamically typed language which means we dont have to specify the datatype of variable when we declare it


// const PI = 3.142;
// const num = 1.2;

// const isBangloreCity = true;
// const isPrimeNumber = false;

// console.log(name, city, PI, num, isBangloreCity, isPrimeNumber);

// let res;
// console.log(res);

// const result = undefined;
// console.log(result);

// const data = null;
// console.log(data);

// const person = {
//   firstName: "Joshua",
//   lastName: "Swaroop",             //this is known as object literl which is used to store
//   age: 30,                         //  a collection of values, which is in form of key(properties) value
// };                             // pair, keys are always stirngs, where as values can be any datatype

// console.log(person.firstName);

// const oddNum = [1,3,5,7,9]
// console.log(oddNum[0])                // array


// let a = 19
// a = 'Joshua'
// a = true
// console.log(a)  // since javascript is dynamically typed language we need not mention the datatype, it'll automatically going to consider 
//                 //the datatye depending upon the value stoed in it. 


// let x = 10 // = assignment operator, [+,-,*,/] arithematic operators
// let y = 20
// console.log(x+y, x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)
// console.log(x++)
// console.log(x)
// console.log(++x)

// console.log(x==y)  // comparision operators
// let a = 10
// let b = 10
// console.log(a==b) //loose equality
// console.log(a===b)//strict equality also compares datatypes
// console.log(a!=b)

// let p = 10
// let q = 20
// console.log(p<q)
// console.log(p<=q)

// const isValidNum = 11>p && 11<q  //&& both conditions should satisfy
// console.log(isValidNum)

// const isValid = 11<p || 11<q    // || anyone condition can be true
// console.log(isValid)

//console.log('Joshua'+' '+ 'Swaroop')

// const remIsEven = 10%2===0?true : false
// console.log(remIsEven)

// const remIsOdd = 11%2===1 ? 'rem is odd': 'rem is even'
// console.log(remIsOdd)

// console.log(2+'3')
//console.log('2'+'2')    //when + is used, concatination is going to be done
// console.log(true +'1')
// console.log('2'-'1'  ,  '2'*'3'  ,  '6'/'3')  //When -,*,/ is used its going to do following operations
// console.log('joshua' - '2', 'joshua' - 'swaroop')
// console.log('5'-true, '5'- false, '5' - null)
// console.log(5+5, 5+undefined)

// console.log(Number('5'))       // to convert string type to int type
// console.log(Number(false))
// console.log(parseInt('5'))
// console.log(parseFloat('3.142'))
// console.log(String(500))           //converts 500 to string
// console.log((500).toString())      //null , undefined is not allowed
// console.log(Boolean(10))           //null, underfined , 0 , '', NaN all returns false,is not allowed

// const var1='test'
// const var2='test'
// console.log(var1==var2)
// console.log(var1===var2)

// const v1 = 0
// const v2 = '0'
// console.log(v1==v2) // allows coersion(automatically datatype convert)
// console.log(v1===v2)  // doesnt allow coersion

// const a1=0
// const a2=''
// console.log(a1==a2)
// console.log(a1===a2)

// const num= 5
// if(num>0){
//     console.log('Number is positive')
// }else{
//     console.log('Number is not positive')
// }


// const num1= 0
// if(num1>0){
//     console.log('Number is positive')
// }else if(num1<0){
//     console.log('Number is negative')
// }else{
//     console.log('Number is zero')
// }


// const color = 'yellow'

// switch(color){
//     case 'red':
//         console.log('Color is red')
//         break
//     case 'blue':
//         console.log('Color is blue')
//         break
//     case 'yellow':
//         console.log('Color is yellow')
//         break
//     default:
//         console.log('Color is not valid')    
// }

// for(let i = 1; i<=5; i++){                     //for(initializer ; condition ; final expression){
//     console.log('Numbers are: ' + i)           //   code to run
// }                                              //     }

// let i = 1                                      // initialzer 
// while(i<=5){                                   // while (condition){
//     console.log(i)                             // code to 
//     i++                                        //   run final expression  
//                                                //  }
// }

// let i = 1                                       //intializer 
// do{                                             // do{
//     console.log('Numbers are: '+ i)             //  code to run
//     i++                                         // final expression
// }while(i<=5)                                    // while(condition)

// let i = 10                                       
// do{                                       //itll execute do while loop once and gives op 10      
//     console.log('Numbers are: '+ i)        //next itll not exeute be it doesn't satisfy condition     
//     i++                                        
// }while(i<=5) 

// const numArray = [1,2,3,4,5]
// for (const num of numArray) {
//     console.log(num)
// }

// function greet(){                                //functions are same as methods in Java
//     console.log('Good Morning Joshua')          
// }

// greet()                                          //Calling of function, without calling it cannot work

// function greet(userName){                         //function parameter                    
//     console.log('Good Morning ' + userName)          
// }

// greet('Joshua')                                  //function conditions
// greet('Swaroop')

// function add(a,b){
//     return a+b
// }

// const sum =add(5,10)
// console.log(sum)

//----------------------------------------------------------------
//arrow functions
// const arrowNum = (a,b)=>{
//     return a+b
// }
// const sum =arrowNum(10,10)
// console.log(sum)

// const arrowNum1 = (a,b)=> a+b

// const sum1 =arrowNum1(10,10)
// console.log(sum1)

// const num = num=> num+5

// const a1=num(10)
// console.log(a1)
//-----------------------------------------------------------------


//blockscope
// if(true){
//     const name = 'Joshua'
//     console.log(name)
// }

// ///console.log(name)  cant use name variable(similar to local variable) outside the block
//--------------------------------------------------------------------------
//function scope
// function test(){
//     const name = 'Joshua'
//     console.log(name)
// }
// test()
///console.log(name) cant be used outside the function

//-------------------------------------------
//Global scope
// const num = 10
// const num1 = 100    // Globally declared variable cant override block or function scoped variable

// if(true){
//     const num1 = 1
//     console.log(num1) //local variable 
//     console.log(num)
// }

// function test(){
//     const num1 =2
//     console.log(num1)  //local variable 
//     console.log(num)
// }

// test()