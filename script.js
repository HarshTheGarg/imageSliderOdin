const images = document.querySelectorAll('.img')
const container = document.querySelector('.images')
const sideBars = document.querySelectorAll('.sb')

sideBars.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.style.opacity = 0.4
    })
    element.addEventListener('mouseleave', () => {
        element.style.opacity = 0
    })
})

document.querySelector('.sbLeft').addEventListener('click', () => {
    prevImage()
})

document.querySelector('.sbRight').addEventListener('click', () => {
    nextImage()
})

function nextImage() {
    imgArr = Array.from(images)
    
    let flag = false

    for(let i = 0; i < imgArr.length; i++){
        if(imgArr[i].classList.contains('imgVis')){
            imgArr[i].classList.remove('imgVis')
            imgArr[i].parentElement
            flag = true
            if(i == imgArr.length - 1) {
                imgArr[0].classList.add('imgVis')
            }
            continue
        }
        if(flag) {
            imgArr[i].classList.add('imgVis')
            break
        }
    }
}

function prevImage() {
    imgArr = Array.from(images)
    
    let flag = false

    for(let i = (imgArr.length - 1); i >= 0; i--){
        if(imgArr[i].classList.contains('imgVis')){
            imgArr[i].classList.remove('imgVis')
            imgArr[i].parentElement
            flag = true
            if(i == 0) {
                imgArr[(imgArr.length - 1)].classList.add('imgVis')
            }
            continue
        }
        if(flag) {
            imgArr[i].classList.add('imgVis')
            break
        }
    }
}

// var autoNextImage = window.setInterval(nextImage, 6000)

var autoImage = (() => {
    let autoNextImage
    let start = () => {
        autoNextImage = window.setInterval(nextImage, 4000)
    }
    let stop = () => {
        clearInterval(autoNextImage)
    }

    return {start, stop}
})()

autoImage.start()

container.addEventListener('mouseenter', () => {
    autoImage.stop()
})

container.addEventListener('mouseleave', () => {
    autoImage.start()
})
