//another way of declaring object

//const tinderUser = new Object();-> singleton object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sanggyan";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

//nesting of object with in a object
const personalInfo = {
    name: "sanggyan",
    address : {
        street : "pepsicola",
        municipality: "kageshwori manohara",
        district: "Kathmandu"
    }
};

//console.log(personalInfo.address.district);

//objects within an array

students = [
    {
        name: "sangyan" ,
        age: 20 ,
        address: "jhapa"

    },
   
    {
        name: "Bikash",
        age : 21,
        address: "Kathmandu"
    },

    {
        name: "sushant",
        age : 24,
        address: "pokhara"
    }
];

//console.log(students[0].age);

//used to print keys of an object

//console.log(Object.keys(personalInfo));//-> gives result in the form of array

//console.log(Object.values(personalInfo)); //returns values of an object

//console.log(Object.entries(personalInfo)); // returns both key and values

//****object destructuring */

const course = {
    name: "complete web development course",
    price: 1500,
    courseInstructor : "Sangyan Bhandari"
};

const {courseInstructor: instructor } = course;

//console.log(courseInstructor);
console.log(instructor);
