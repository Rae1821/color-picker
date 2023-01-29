const colorBtn = document.getElementById('color-btn');

colorBtn.addEventListener('click', function() {
    const currentColor = document.getElementById('currentColor').value.slice(1,7)
    const colorMode = document.getElementById('color-mode').value.toLowerCase()

    fetch(`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${colorMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            let html = ''
            for (let i = 0; i < 5; i++) {
                html+= `
                    <div>
                        <div class="colors" style="background-color:${data.colors[i].hex.value}"></div>
                        <p id="hex-code${i}">${data.colors[i].hex.value}</p>
                    </div>
                `
            }
            document.getElementById('color-palette').innerHTML = html
        })
})