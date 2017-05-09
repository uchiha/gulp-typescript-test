import {sayHello} from "./greet";

// function hello(compiler: string) {
//     console.log(`Hello from ${compiler}`);
// }
// hello("TypeScript");
// console.log(sayHello("Lemon and green tea!"));

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");
