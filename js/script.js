import { createNavBar } from "../components/navBar/js/script.js"
import { createSection1 } from "../components/section1/js/script.js"
import { createSection2 } from "../components/section2/js/script.js"

const body = document.body
const main = document.createElement('main')

export function createEl(tag, text, id, elClass, href) {
    let el = document.createElement(tag)

    text ? el.textContent = text : null

    id ? el.id = id : null

    elClass ? el.classList.add(elClass) : null

    href ? el.href = href : null

    return el
}

function App() {
    const navBar = createNavBar()
    const section1 = createSection1()
    const section2 = createSection2()

    body.appendChild(navBar)
    body.appendChild(section1)
    body.appendChild(section2)

    body.appendChild(main)
}

App()