// console.log("hello");
// console.log("heyy");

// let a=34;
// console.log("a="+a)
// let a=32;
// if(a>10)
// {
//     let a=40
//     console.log("inside the block"+a)
// }
// console.log("now outside the block"+a)

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30))
// const sum=(a,b)=>{return a+b};
// console.log(sum(12,30));

// const data =function(msg){
//     return "hello i am using js "+msg
// }
// data("and node ")

// // iife
// (()=>{console.log("this is iife")})();

//call back function 

// function sum(a,b){
//     return a+b;
// }

// function sumWithmsg(clbk,msg){
//     const result= clbk(2,6);
//     console.log("hey your result="+result+"!! well done "+msg)
// }

// sumWithmsg(sum,"Aditya")

function login(msg,error){
    if(error){
        console.log("error is"+error)
    }
    else {
        console.log(msg)

    }
}
function loginHandler(username,password,clbk){
    if(username=="ptomer40"&&password=="12345"){
        clbk("success",null)
    }
    else{
        clbk(null,"username or password is incorrect")
    }
}
loginHandler("ptomer4","12345",login)

