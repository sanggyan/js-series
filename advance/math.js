
//getOwnPropertyDescriptor-> gives all the property of that particular object
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

const info = {
    name: 5,
    email: "abc@xyz.com"
}

const des2 = Object.getOwnPropertyDescriptor(info,"name");
console.log(des2);

Object.defineProperty(info , "name", {

writable: true,
enumerable: true
})

info.name=6;
console.log(info.name);
