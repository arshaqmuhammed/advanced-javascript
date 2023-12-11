class Category{
    constructor(category){
        this.category = category;
    }
    get_category(){
        return this.category;
    }
}

class Product extends Category{
    static count = 0;
    constructor(name, category, price){
        super(category);
        this.name = name;
        this.price = price;
        Product.count = Product.count + 1;
    }
    display_products(){
        console.log("name: ",this.name);
        console.log("category: ",this.get_category());
        console.log("price: ",this.price);
    }
    product_count(){
        console.log('no.of products: ',Product.count);
    }
}

prod1 = new Product('bat','sports', 2500);
prod1.display_products();
prod1.product_count();