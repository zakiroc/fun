alert('blue , red , yellow , black')
let color = "blue"
let color_2 = "black"
let color_3 = "red"
let color_4 = "yellow"
let pr = prompt('color')
let pr_2= prompt('background')

function heloo (){
    if(pr==color){
        let body = document.querySelector('body')
        body.style.color = "blue"
    } if(pr_2==color_2){
        let body = document.querySelector('body')
        body.style.background = "black"
    }
    if(pr==color_3){
        let body = document.querySelector('body')
        body.style.color = "red"
    }if(pr_2==color_4){
        let body = document.querySelector('body')
        body.style.background = "yellow"
    } if(pr==color_4){
        let body = document.querySelector('body')
        body.style.color = "yellow"
    } if(pr_2==color){
        let body = document.querySelector('body')
        body.style.background = "blue" 
    } if(pr_2==color_3){
        let body = document.querySelector('body')
        body.style.background = "red" 
    }




}
heloo()