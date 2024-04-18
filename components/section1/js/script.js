import { createEl } from "../../../js/script.js";

export function createSection1() {
    const container = createEl('div', null, null, 'container1')

    // const img = createEl('img', null, null, 'img-bg-section1')
    

    // container.appendChild(img)

    const qrCodeArea = createEl('div', null, null, 'qrCode-area')

    const textArea = createEl('div', null, null, 'text-area')
    const text1 = createEl('div', null, null, 'text1')
    const text2 = createEl('div', null, null, 'text2')

    text1.textContent = 'Plante uma árvore, escreva uma história. Com nosso serviço, você não apenas planta uma árvore, mas também deixa sua marca pessoal.'
    text2.textContent = 'Escaneie ou clique no QR Code para saber mais.'

    textArea.appendChild(text1)
    textArea.appendChild(text2)

    container.appendChild(qrCodeArea)
    container.appendChild(textArea)

    return container
}