import { CartItem } from "./CartItemClass";
import { Product } from "./ProductClass";

export class Cart {
    items: CartItem[] = [];

    addItem(product: Product, quantity: number) {
        const existing = this.items.find(item => item.product.name === product.name);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
    }

    getTotal(): number {
        return this.items.reduce((sum, item) => sum + item.getTotal(), 0);
    }

    printBill() {
        console.log("\n=== HÓA ĐƠN CỦA BẠN ===");
        this.items.forEach((item, idx) => {
            const itemTotal = item.getTotal();
            console.log(`${idx + 1}. ${item.product.name} - ${item.quantity} kg x ${item.product.price.toLocaleString()} VND = ${itemTotal.toLocaleString()} VND`);
        });
        console.log(`Tổng số tiền phải trả: ${this.getTotal().toLocaleString()} VND`);
    }
}