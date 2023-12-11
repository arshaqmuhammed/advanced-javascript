class Product{
    constructor(name, price){
        this.name = name;
        this.price = price; 
    }
    get_product_details(){
        return `Product: ${this.name} , Price: ${this.price}`
    }

    calculate_discount(){
        console.log('this method must be implemented by subclasses')
    }
}

class ElectronicProducts extends Product{
    constructor(name, price, warranty){
        super(name, price);
        this.warranty = warranty;
    }
    get_product_details(){
        return `${super.get_product_details()}, warranty: ${this.warranty}`
    }

    calculate_discount(disc_percentage){
        const disc_price = this.price - (this.price * disc_percentage)/100;
        return `Discounted price for ${this.name} : $${disc_price}`
    }
}

class BookProduct extends Product{
    constructor(name, price, author){
        super(name, price);
        this.author = author;
    }
    get_product_details(){
        return `${super.get_product_details()}, Author: ${this.author}`
    }
    calculate_discount(disc_percentage){
        const disc_price = this.price - (this.price * disc_percentage)/100;
        return `Discounted price for ${this.name} : $${disc_price}`
    }
}

product1 = new ElectronicProducts('Fan', 4500, '2 Years');
product2 = new BookProduct('IKIGAI', 1200, 'hanshi');

console.log(product1.get_product_details())
console.log(product1.calculate_discount(10))

console.log(product2.get_product_details())
console.log(product2.calculate_discount(10))