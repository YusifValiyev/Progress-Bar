let circles = document.querySelectorAll('.circle')
let progress = document.querySelector(".progress-bar")
let prev_btn = document.querySelector('.btn-prev')
let next_btn = document.querySelector('.btn-next')
let currentActiveCircle = 1

next_btn.addEventListener('click',()=>{
    currentActiveCircle++
    if(currentActiveCircle>circles.length){
        currentActiveCircle = circles.length
    }
    Circle()
})

prev_btn.addEventListener('click',()=>{
    currentActiveCircle--;
    if(currentActiveCircle<1){
        currentActiveCircle = 1;
    }
    Circle()
})

function Circle(){
    circles.forEach((circle,index)=>{
        if(index<currentActiveCircle){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    let actives = document.querySelectorAll('.active')
    console.log((actives.length / circles.length)*100)
    progress.style.width = `${(actives.length-1) / (circles.length-1)*100}%`
    if(currentActiveCircle===1){
        prev_btn.disabled = true
    }else if(currentActiveCircle === circles.length){
        next_btn.disabled = true
    }else{
        prev_btn.disabled = false
        next_btn.disabled = false
    }
}



