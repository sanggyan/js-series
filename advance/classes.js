/*with class

class user {
    constructor(username, email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@gamil.com", 123);


console.log(chai.encryptPassword());
console.log(chai.changeUserName());*/



//without class

function user(username , email , password){
    
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

