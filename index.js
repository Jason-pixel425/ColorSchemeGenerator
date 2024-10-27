// console.log('I\'m working!')
fetch('https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&mode=analogic&count=6')
    .then(resp => resp.json())
    .then(data => {
        console.log(data.colors)
        for (color of data.colors){
            console.log(color.hex.value)
        }
    })