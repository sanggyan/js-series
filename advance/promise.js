const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('async is complete');
        resolve();//resolve is directly connceted with .then
    },1000)
})

//this part will never execute before the upper part as it is targeted by resolve
promiseOne.then(function(){
    console.log("promise consumed");
})

//another way of creating promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 consumed");
})

//passing values through resolve()

const promiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({username:"chai", email:"chai@example.com"})
     })
})

promiseThree.then(function(user){
    console.log(user)
});

//error based checking

const promiseFour = new Promise(function(resolve,reject){
    
    setInterval(function(){
        let error = true
        if(!error){
            resolve({username:"sangyan", password:'sangyanb.c'})
        }else{
            reject("ERROR!: SOMETHING WENT WRONG");
        }
    },1000)
})

promiseFour.then((user)=>{
     console.log(user);
     return user.username;

})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000);
})

//Declares an asynchronous function.
//Allows the use of await inside the function, which pauses the function execution until the promise resolves or rejects.
async function consumePromiseFive(){
    try {
        const response = await promiseFive// Awaits the resolution of promiseFive
        // resolution refers to the process by which a promise is completed, either successfully or unsuccessfully.
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();