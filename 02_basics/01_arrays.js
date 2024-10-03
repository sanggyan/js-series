//ways of declaring array
const myArr1 = [1,2,3,4,5];
const myArr2 = ["ironman","captain america","thor"];
const myArr3 = new Array("sangyan","bhandari");

/*console.log(myArr1);
console.log(myArr2);
console.log(myArr3);

console.log(typeof(myArr3)); */

//*********methods***** 
//push method
myArr1.push(69);//-> adds 69 in array
console.log(myArr1);

//pop-> removes the last element from an array

myArr1.pop();
console.log(myArr1);

//unshift -> adds one or more element in an array **array.unshift(element1, element2, ..., elementN)**

myArr1.unshift(0);
console.log(myArr1);

//shift(): Removes the first element from an array and returns that element.

myArr1.shift();
console.log(myArr1);

//includes(): Checks if an array contains a certain element. Returns true or false.

console.log(myArr1.includes(4));

//indexOf(): Returns the first index of a specified element, or -1 if not found.

console.log(myArr1.indexOf(3));


//joinning to arrays
//without concat
myArr1.push(myArr2);
console.log(myArr1);
console.log(myArr1.length);

//with concatenation

newArr = myArr1.concat(myArr2);
console.log(newArr);
console.log(newArr.length);


