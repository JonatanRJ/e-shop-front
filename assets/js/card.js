//Class to make the card catalogue of products
class Card{
    constructor(imageUrl, name, price, discount ){
        if(imageUrl !== "" && imageUrl !== null){
            this.imageUrl = imageUrl;
        }
        else{
            this.imageUrl = "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1";
        }
        this.name = name,
        this.price = price,
        this.discount = discount;
        
    }

    // function to create html template of products catalogue
    getCardHTML(){
        return `<div class="card">
            <img class="card-img-top" src="${this.imageUrl}" alt="${this.name}">
            <div class="card-body">
                <h6 class="card-title">${this.name}</h6>
            </div>
            <div class="card-footer">
                ${this.discount > 0 ? 
                    '<del>$'+this.price+'</del><h6>$'+ this.price* ( (100-this.discount) / 100 ) +'</h6>' : 
                    '<h6>$'+this.price+'</h6>'
                }
                <i class="fa fa-shopping-cart"></i>
            </div>
        </div>`
    }
}