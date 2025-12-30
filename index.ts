import { CartItem } from "./entity/CartItemClass";
import { Product } from "./entity/ProductClass";
const readline = require("readline");

const products: Product[] = [
    new Product("Táo", 20000),
    new Product("Cam", 15000),
    new Product("Chuối", 12000),
    new Product("Nho", 30000),
    new Product("Dưa hấu", 25000)
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cart: CartItem[] = [];

function showMenu() {
    console.log("\n=== CỬA HÀNG HOA QUẢ ===");
    products.forEach((product, idx) => {
        console.log(`${idx + 1}. ${product.name} - ${product.price.toLocaleString()} VND/kg`);
    });
    console.log("Nhập 'q' để thoát và thanh toán.");
}

function askItem() {
    showMenu();
    rl.question("Chọn số thứ tự loại hoa quả: ", (itemInput: string) => {
        if (itemInput.trim().toLowerCase() === 'q') {
            printBill();
            rl.close();
            return;
        }
        const itemIdx = parseInt(itemInput) - 1;
        if (isNaN(itemIdx) || itemIdx < 0 || itemIdx >= products.length) {
            console.log("Lựa chọn không hợp lệ.");
            askItem();
            return;
        }
        rl.question("Nhập số lượng (kg): ", (qtyInput: string) => {
            const qty = parseFloat(qtyInput);
            if (isNaN(qty) || qty <= 0) {
                console.log("Số lượng không hợp lệ.");
                askItem();
                return;
            }
            const product = products[itemIdx];
            // Kiểm tra nếu sản phẩm đã có trong giỏ thì cộng dồn số lượng
            const existing = cart.find(item => item.product.name === product.name);
            if (existing) {
                existing.quantity += qty;
            } else {
                cart.push(new CartItem(product, qty));
            }
            console.log(`\nBạn đã chọn: ${product.name} (${qty} kg)`);
            console.log(`Đơn giá: ${product.price.toLocaleString()} VND/kg`);
            console.log(`Thành tiền: ${(product.price * qty).toLocaleString()} VND`);
            askItem();
        });
    });
}

function printBill() {
    console.log("\n=== HÓA ĐƠN CỦA BẠN ===");
    let total = 0;
    cart.forEach((item, idx) => {
        const itemTotal = item.getTotal();
        total += itemTotal;
        console.log(`${idx + 1}. ${item.product.name} - ${item.quantity} kg x ${item.product.price.toLocaleString()} VND = ${itemTotal.toLocaleString()} VND`);
    });
    console.log(`Tổng số tiền phải trả: ${total.toLocaleString()} VND`);
}

askItem();
