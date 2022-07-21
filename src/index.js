import { a } from "./a.js";
const b = import('./b.js')
import { JsxDemo } from "./jsx-demo.jsx";

const hi = () => {
    console.log(a)
    console.log(b)
    console.log(JsxDemo)
    console.log(Promise.resolve('test promise'))
}

hi()