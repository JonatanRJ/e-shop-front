( async () => {
    //DOM variables
    let elementProduct = document.getElementById("products");
    let elementCategory = document.getElementById('category');
    let elementSearchProduct = document.getElementById('searchProduct');
    let elementInputProduct = document.getElementById('inputProduct');


    //Params
    const params = new URLSearchParams(window.location.search);


    //Event search product by name
    elementSearchProduct.addEventListener( 'click', () => {
        let product = elementInputProduct.value
        if(product.length > 0){
            window.location.assign(`${window.location.pathname}?product=${product}`)
        }
    })
        
    //Products
    var products = [];

    // Make the navegation bar with DB categories
    const categories = await getCategories();
    categories.forEach(category => {
        elementCategory.innerHTML += `<a href="index.html?category=${category.name}">
            <li>${category.name.toUpperCase()}</li>
        </a>`
    })

    // Get products by name
    if(params.has("product") ){
        products = await getProductsByName( params.get("product") );
    }
    // Get products by category
    else if (params.has("category") ){
        products = await getProductsByCategory( params.get("category") );
    }
    // Get all profducts
    else{
        products = await getProducts();
    }

    // Make the catalogue of products
    if( products.length > 0 ){
        products.forEach(product => {
            let card = new Card(product.url_image, product.name, product.price, product.discount);
            elementProduct.innerHTML += card.getCardHTML();
        });
    }
    // Not found
    else{
        elementProduct.innerHTML += `<h1>Productos no encontrados</h1>`;
    }
})()