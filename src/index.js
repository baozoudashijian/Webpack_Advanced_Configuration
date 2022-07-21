import { a } from "./a.js";
const b = import('./b.js')
import { JsxDemo } from "./jsx-demo.jsx";
import { x } from './ts-demo.ts'
import { TsxDemo } from './tsx-demo.tsx'

console.log(x)
console.log(TsxDemo)

const hi = () => {
    console.log(a)
    console.log(b)
    console.log(JsxDemo)
    console.log(Promise.resolve('test promise'))
}

hi()