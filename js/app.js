const colorSelectedImgEl = document.querySelector(".iphone_style_img img");
const Color = (path) => {
    colorSelectedImgEl.src = path;
}


// TABLE
const tBodyEl = document.querySelector("tbody");

let item = 0;
let count = 0;
let arr = [];

const addNewData = (data) => {
    count++;

    if (count > 9) {
        return null;
    }
    const product = data[item];
    const newRow = document.createElement("tr");

    newRow.innerHTML = 
    `
        <td>${product.date}</td>
        <td>${product.orderId}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.getTotal()}</td>
    `;
    item++;
    tBodyEl.appendChild(newRow);
    arr.push(newRow);
}

const delData = (arr) => {
    if (arr.length > 0) {
        const lastRow = arr.pop();
        tBodyEl.removeChild(lastRow);
        count = 0;
        item = 0;
    }
}

const data = [
    product1 = {
        date: "20.03.2024",
        orderId: 200397,
        name: "Samsung S8 Black",
        price: "756.00",
        quantity: 1,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product2 = {
        date: "11.03.2024",
        orderId: 200396,
        name: "GAme Consol Controller",
        price: "22.00",
        quantity: 2,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product3 = {
        date: "13.08.2024",
        orderId: 233039,
        name: "USB 3.0 Cable",
        price: "10.00",
        quantity: 2,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    }
]

// USER CARD
const userCardEl = document.querySelector(".user_card");

userCardEl.addEventListener("click", () => {
    userCardEl.classList.toggle("resize");
    console.log(10);

}) 