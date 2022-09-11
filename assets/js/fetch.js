//Get all products
const getProducts = async () => {
    return await fetch(`https://api-bsale-shop.herokuapp.com/api/products`)
    .then(response => response.json())
    .then(data => data);
}

//Get all categories
const getCategories = async () => {
    return await fetch(`https://api-bsale-shop.herokuapp.com/api/products/category/all`)
    .then(response => response.json())
    .then(data => data);
}

//Get the products by name
const getProductsByName = async ( product ) => {
    return await fetch(`https://api-bsale-shop.herokuapp.com/api/products/${product}`)
    .then(response => response.json())
    .then(data => data);
} 

//Get the products by category
const getProductsByCategory = async ( category ) =>{
    return await fetch(`https://api-bsale-shop.herokuapp.com/api/products/category/${category}`)
    .then(response => response.json())
    .then(data => data);
}
