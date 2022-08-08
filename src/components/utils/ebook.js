//import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

const GAS = 100000000000000;

export function createBook(book){
    book.price = parseNearAmount(book.price + "");
    return window.contract.addBook({ book });
}

export function getBooks() {
    return window.contract.getBooks();
}

export async function buyBook({ ISBN, buyPrice }) {
    await window.contract.buyBook({ ISBN: ISBN }, GAS, buyPrice);
}