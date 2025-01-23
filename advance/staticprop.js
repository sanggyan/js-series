class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`${this.username} has logged in`);
    }

    createId(){
        console.log("123");
    }
}

class teacher extends user{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const tea1 = new teacher("sanggyan","sangyanbc@gamil.com");

tea1.lo