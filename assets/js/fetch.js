//Get all products
const getProducts = async () => {
    return await fetch(`http://192.168.1.69:3000/api/products`)
    .then(response => response.json())
    .then(data => data);
}

//Get all categories
const getCategories = async () => {
    return await fetch(`http://192.168.1.69:3000/api/products/category/all`)
    .then(response => response.json())
    .then(data => data);
}

//Get the products by name
const getProductsByName = async ( product ) => {
    return await fetch(`http://192.168.1.69:3000/api/products/${product}`)
    .then(response => response.json())
    .then(data => data);
} 

//Get the products by category
const getProductsByCategory = async ( category ) =>{
    return await fetch(`http://192.168.1.69:3000/api/products/category/${category}`)
    .then(response => response.json())
    .then(data => data);
}
