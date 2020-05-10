const images = document.querySelectorAll(" .item")
const image = document.querySelectorAll(" .items")
const upperimage = document.getElementById("upper")
const text = document.getElementById("text")
const outer = document.getElementById("outer")
upperimage.setAttribute('src', image[0].children[0].src)
text.textContent=image[0].children[1].textContent
image.forEach((element) => {
    element.addEventListener('click', () => {
       upperimage.setAttribute('src', element.children[0].src)
       text.textContent=element.children[1].textContent
    })
})
