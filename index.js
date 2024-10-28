// console.log('I\'m working!')
const colorForm = document.getElementById('color-form');

document.addEventListener('submit', (e) => {
    handleSubmit(e);
})

const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(colorForm);
    const selectedColor = data.get('color').slice(1)
    const mode = data.get('scheme-mode')
    console.log(data.get('color'))
    console.log(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${mode}&count=6`)
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${mode}&count=6`)
    .then(resp => resp.json())
    .then(scheme => {
        console.log(scheme)
        for (color of scheme.colors){
            console.log(color.hex.value)
        }
    })
}

// ?color-picker=%23e9afaf&scheme-mode=monochrome-light

