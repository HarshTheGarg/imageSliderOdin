const imagesContainer = document.querySelector('.images')
const sideBarsContainer = document.querySelector('.sideBarsContainer')
const sideBars = document.querySelectorAll('.sb')

window.addEventListener('resize', setSideBarHeight)

function setSideBarHeight() {
    sideBarsContainer.style.height = `${(imagesContainer.clientHeight - 4)}px`
}

setSideBarHeight()

sideBars.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.style.opacity = 0.4
    })
    element.addEventListener('mouseleave', () => {
        element.style.opacity = 0
    })
})