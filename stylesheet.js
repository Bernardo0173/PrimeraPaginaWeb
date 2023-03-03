function cuantosElementos(){
    elementos = document.getElementsByTagName('p')
    alert(elementos.lenght)
}

function cambiaColor(){
    element = document.getElementById("home")
    element.style.color = "white"
}

function cambiaBgColor() {
    color = document.body.style.backgroundColor;
    if (color = "white") {
        document.body.style.backgroundColor = "black"
    }
    if (color = "blue") {
        document.body.style.backgroundColor = "red"
    }
    if (color = "red") {
        document.body.style.backgroundColor = "blue"
    }
}

function cualColor() {
    let ActualColor = document.body.style.backgroundColor
    alert(color)
}
