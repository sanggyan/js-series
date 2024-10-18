const newobj = {
    name: "Sangyan",
    address: "Jhapa ,Nepal",
    sem: 3,
    subjects: ["phy102","math104"],
    "full name": "sangyan Bhandari" //this is also correct but this value cannot be accessed by dot operator
};

//console.log(newobj.name);
//console.log(newobj.subjects);
//console.log(newobj[sem]);-> this shows an error because sem is also treated as string

//console.log(newobj["sem"]);
//console.log(newobj["full name"]);

//symbol -> always different

let mySym1 = Symbol("sangyan");

let mySym2 = Symbol("sangyan");

//console.log(mySym1 == mySym2);

let mySym = Symbol("sanggyan")

const obj = {
    name: "Sangyan",
    [mySym]: mySym,
    address: "Jhapa ,Nepal",
    sem: 3,
    subjects: ["phy102","math104"],
    "full name": "sangyan Bhandari" //this is also correct but this value cannot be accessed by dot operator
};

console.log(obj[mySym]);


//to change the value

obj.name = "sanggyan";
console.log(obj["name"]);

//in order to stop any further change in the object

Object.freeze(obj);
obj.name = "sangyan"; //-> this is useless
console.log(obj["name"]);