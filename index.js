const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nhập tên của bạn: ", (name) => {
    console.log(`Xin chào, ${name}!`);
    rl.close();
});
