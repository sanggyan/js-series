function sum(a,b){
    return (a+b);
}

//console.log(sum(3,4));

function userInfo(username = "sanggyan"){ //this gives the default value
    if(!username){
        console.log("enter a user name");
        return 0;
    }
    else{
        console.log(`${username} just logged in`);
        
    }
}

//userInfo();

const newUserInfo = {
    username: "sanggyan",
    semester: 3
};

function basicUserInfo(anyobject){
    console.log(`username is ${anyobject.username} and semester is ${anyobject.semester}.`);
    return 0;
}


basicUserInfo(newUserInfo);
