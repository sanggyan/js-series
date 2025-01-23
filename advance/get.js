
class info{
    constructor(email, password){
      this.email = email;
      this.password = password;
    }
    

    get email(){
        return `${this._email.replace("gmail.com","")}aiesec.net`
    }

    set email(value){
        this._email = value;
    }



    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const user = new info("sanggyan.bhandari@gmail.com","abc");
console.log(user.password);
console.log(user.email);