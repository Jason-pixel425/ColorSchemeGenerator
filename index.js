// console.log('I\'m working!')
const colorForm = document.getElementById('color-form');

document.addEventListener('submit', (e) => {
    handleSubmit(e);
})

const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(colorForm);
    console.log(data.get('color'))
}

// ?color-picker=%23e9afaf&scheme-mode=monochrome-light

fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.colors)
        for (color of data.colors){
            console.log(color.hex.value)
        }
    })