import { createEl } from "../../../js/script.js"

export function createNavBar() {
    const navBar = createEl('header', null, null, 'navBar')

    const logo = createEl('div', null, null, 'logo')
    const logoImg = createEl('img', null, null, 'logo-img')
    logoImg.src = '../../../assets/forsolareslogo.png'
    const logoName = createEl('h1', 'Forsolares', null, 'logo-name')

    const btnGrid = createEl('ul', null, null, 'btnGrid')

    const liInicio = createEl('li', null, null)
    const btnInicio = createEl('a', 'Inicio', null, 'navBar-inicio', '#')

    const liSobre = createEl('li', null, null)
    const btnSobre = createEl('a', 'Sobre', null, 'navBar-sobre', '#')

    const liContato = createEl('li', null, null)
    const btnContato = createEl('a', 'Contato', null, 'navBar-contato', '#')

    logo.appendChild(logoImg)
    logo.appendChild(logoName)

    liInicio.appendChild(btnInicio)
    liSobre.appendChild(btnSobre)
    liContato.appendChild(btnContato)

    btnGrid.appendChild(liInicio)
    btnGrid.appendChild(liSobre)
    btnGrid.appendChild(liContato)

    navBar.appendChild(logo)
    navBar.appendChild(btnGrid)

    return navBar
}