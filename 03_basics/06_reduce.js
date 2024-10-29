const shoppingCart = [
    {
        courseName: "Js course",
        price: 2999
    },

    {
        courseName: "Py course",
        price: 999
    },

    {
        courseName: "mobiel dev course",
        price: 5999
    },

    {
        courseName: "data science course",
        price: 12999
    },
]

const totalCart = shoppingCart.reduce((acc , item)=>(acc + item.price),0);
console.log(totalCart);