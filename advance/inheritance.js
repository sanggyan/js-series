class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`hello my name is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, course , password){
        super(username);
        this.course = course;
        this.password = password;
    }

    addcourse(){
       console.log(`${this.course} was added by ${this.username}`);
    }
}

const teacher1 = new teacher("sanggyan","comp sci" , "sangyanb.c");
teacher1.logMe();

const pet = new user("samak");
pet.logMe();

console.log(teacher1 instanceof teacher); 