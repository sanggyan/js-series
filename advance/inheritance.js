class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`hello my name is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username , course , password){
        super(username);
        this.email = course;
        this.password = password;
    }

    addcourse(){
       console.log(`${this.course} was added by ${this.username}`);
    }
}

const teacher1 = teacher("sanggyan","comp sci" , "sangyanb.c");
teacher1.addcourse();