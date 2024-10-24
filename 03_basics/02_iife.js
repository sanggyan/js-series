//immediately invoked functions

(
    function sum(){
        console.log("sanggyan");
    }
)();

//using arrowhead function
(
    () => {
        console.log("sanggyan");
    }
)();

//passing arguments throough iife

(
    (username) => {
        console.log(`welcome to our website ${username}`)
    }
)("sanggyan");