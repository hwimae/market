import { Product } from "./ProductClass";

export class CartItem {
    product: Product;
    quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotal(): number {
        return this.product.price * this.quantity;
    }
}
