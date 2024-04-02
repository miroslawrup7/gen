"use strict";

// przewijanie stron

const containerLoc = document.querySelector(".container")
const formPagesLoc = document.querySelector(".form-pages")
const buttonNextArrLoc = document.querySelectorAll(".button.next")
const buttonPrevArrLoc = document.querySelectorAll(".button.prev")

buttonNextArrLoc.forEach((elem) => {
    elem.addEventListener("click", ()=> {
        const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
        const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
        const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
        const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

        const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
        const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

        const containerWidthWithoutBorder = containerWidth - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
        const newLeftValue = actualPosition - containerWidthWithoutBorder

        formPagesLoc.style.left = newLeftValue + "px"
    })
})

buttonPrevArrLoc.forEach((elem) => {
    elem.addEventListener("click", ()=> {
        const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
        const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
        const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
        const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

        const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
        const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

        const containerWidthWithoutBorder = containerWidth - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
        const newLeftValue = actualPosition + containerWidthWithoutBorder

        formPagesLoc.style.left = newLeftValue + "px"
    })
})

// zaznaczanie kafelków - strona 1

const tileArrLoc = document.querySelectorAll(".tile")

tileArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        if (e.target.classList.contains("active")) {
            console.log("kliknięty element był aktywny")
            e.target.classList.remove("active")
        } else {
            console.log("kliknięty element był nieaktywny")
            tileArrLoc.forEach((el) => {
                el.classList.remove("active")
            })
            e.target.classList.add("active")
        }
    })
})