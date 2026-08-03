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


// console.log("one")
// // for( i=1;i<100000;i++){  // sync
// //      console.log("two")
// // }
// setTimeout(()=>{           //asyn
//     console.log("two")
// },1000)



// console.log("three")


// setTimeout(() => {
//     console.log("one");

//     setTimeout(() => {
//         console.log("two");

//         setTimeout(() => {
//             console.log("three");

//             setTimeout(() => {
//                 console.log("four");

//                  setTimeout(() => {
//                 console.log("five");

//                     setTimeout(() => {
//                 console.log("six");
//                  }, 1000);

//               }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);







// const myPromise = new Promise((resolve, reject) => {
//     const username = "ptomer40";
//     const password = "12345";

//     if (username === "ptomer40" && password === "12345") {
//         resolve("Success");
//     } else {
//         reject("Username or password incorrect");
//     }
// });



// // myPromise.then((msg)=>{
// //     console.log(msg)
// // }).catch((msg)=>{
// //     console.log(msg)
// // }).finally(()=>{
// //     console.log("all done")
// // })


// async function handleData() {
//     try {
//         console.log("hiiii");

//         const msg = await myPromise;
//         console.log(msg);

//         console.log("hello");
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("All done");
//     }
// }

// handleData();


// const orderPromise = new Promise((resolve, reject) => {
//     const paymentSuccessful = true; 

//     if (paymentSuccessful) {
//         resolve("Order Accepted");
//     } else {
//         reject(" Order Declined");
//     }
// });


// const orderrecieve = new Promise((resolve, reject) => {
//     resolve("Order Accepted");
// });

// async function handleData() {
//     try {
//         const msg = await myPromise;

//         if (msg === "Success") {
//             const orderStatus = await orderrecieve;
//             console.log(orderStatus);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

// handleData();

// async function placeOrder() {
//     try {
//         const message = await orderPromise;
//         console.log(message);
//         console.log("Preparing your order...");
//     } catch (error) {
//         console.log(error);
//         console.log("Please try placing the order again.");
//     } finally {
//         console.log("Thank you for shopping with us!");
//     }
// }

// placeOrder();


// function orderRecieve() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order received");
//         }, 1000);
//     });
// }

// async function orderHandler(){
//     try{
//     const status=await orderRecieve();
//     console.log(status)
//     }catch(err){
//         console.log(err)
//     }
// }
// orderHandler();




// orderRecieve()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Finally done");
//     });

// function orderRecieve() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order received");
//         }, 1000);
//     });
// }

// async function orderHandler(){
//     try{
//     const status=await orderRecieve();
//     console.log(status)
//     }catch(err){
//         console.log(err)
//     }
// }

// orderHandler();

// function orderPrepared() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order prepared");
//         }, 1000);
//     });
// }


// function orderDispatched() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order dispatched");
//         }, 1000);
//     });
// }

// function orderDelivered() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order delivered");
//         }, 1000);
//     });
// }

// async function orderHandler() {
//     try {
//         console.log(await orderRecieve());
//         console.log(await orderPrepared());
//         console.log(await orderDispatched());
//         console.log(await orderDelivered());

//         console.log("Thank you for shopping with us!");
//     } catch (err) {
//         console.log(err);
//     }
// }

// orderHandler();



const button=document.getElementById('btn');
console.log(button)
async function fetchData(){
   const serverData= await fetch('https://fakestoreapi.com/products')
    const jsonData=await serverData.json();
   console.log(jsonData)
}
button.addEventListener('click',fetchData)
fetchData();