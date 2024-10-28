const colorForm = document.getElementById('color-form');

document.addEventListener('submit', (e) => {
    handleSubmit(e);
})

const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(colorForm);
    const selectedColor = data.get('color').slice(1)
    const mode = data.get('scheme-mode')
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${mode}&count=5`)
    .then(resp => resp.json())
    .then(scheme => {
        renderScheme(scheme)
    })
}


 const renderScheme = (scheme) => {
    let renderHTML = ''
    let rowTwo = ''
    for (color of scheme.colors){
        renderHTML += `<div class="scheme" style="background-color:${color.hex.value}"></div>`
        rowTwo += `<p>${color.hex.value}</p>`
    }
    renderHTML += rowTwo
    document.getElementById('generated-scheme').innerHTML = renderHTML;
 }