const images = document.querySelectorAll('.img')
const container = document.querySelector('.imageContainer')
const sideBars = document.querySelectorAll('.sb')
const imageDotsContainer = document.querySelector('.dots')

container.addEventListener('mouseenter', () => {
    autoImage.stop()
    sideBars.forEach((ele) => {
        ele.style.opacity = 0.5
    })
})

container.addEventListener('mouseleave', () => {
    autoImage.start()
    sideBars.forEach((ele) => {
        ele.style.opacity = 0
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
    let ind

    for(let i = 0; i < imgArr.length; i++){
        if(imgArr[i].classList.contains('imgVis')){
            imgArr[i].classList.remove('imgVis')
            flag = true
            if(i == imgArr.length - 1) {
                imgArr[0].classList.add('imgVis')
                ind = 0
            }
            continue
        }
        if(flag) {
            imgArr[i].classList.add('imgVis')
            ind = i
            break
        }
    }
    updateDot(ind)
}

function prevImage() {
    imgArr = Array.from(images)
    
    let flag = false
    let ind

    for(let i = (imgArr.length - 1); i >= 0; i--){
        if(imgArr[i].classList.contains('imgVis')){
            imgArr[i].classList.remove('imgVis')
            flag = true
            if(i == 0) {
                imgArr[(imgArr.length - 1)].classList.add('imgVis')
                ind = imgArr.length - 1
            }
            continue
        }
        if(flag) {
            imgArr[i].classList.add('imgVis')
            ind = i
            break
        }
    }
    updateDot(ind)
}



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


images.forEach((element) => {
    const imgDot = document.createElement('div')
    imgDot.addEventListener('click', () => {
        showImage(element)
        let ind = Array.from(images).indexOf(element)
        updateDot(ind)
    })
    imageDotsContainer.appendChild(imgDot)
})

function showImage(ele) {
    for(let i = 0; i < images.length; i++){
        if(images[i].classList.contains('imgVis')){
            images[i].classList.remove('imgVis')
            break
        }
    }

    ele.classList.add('imgVis')
}

function updateDot(ind) {
    for(let i = 0; i < imageDotsContainer.children.length; i++) {
        if(imageDotsContainer.children[i].classList.contains('dotSelected')) {
            imageDotsContainer.children[i].classList.remove('dotSelected')
        }
    }
    imageDotsContainer.children[ind].classList.add('dotSelected')
}

imageDotsContainer.firstChild.classList.add('dotSelected')
