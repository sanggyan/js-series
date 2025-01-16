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