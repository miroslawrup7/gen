"use strict";

// przewijanie stron

const containerLoc = document.querySelector(".container")
const formPagesLoc = document.querySelector(".form-pages")
const buttonNextArrLoc = document.querySelectorAll(".button.next")
const buttonPrevArrLoc = document.querySelectorAll(".button.prev")
const page2ListElemArrLoc = document.querySelectorAll(".page2 .list ul li")

buttonNextArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
        const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
        const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
        const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

        const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
        const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

        const containerWidthWithoutBorder = containerWidth - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
        const newLeftValue = actualPosition - containerWidthWithoutBorder

       

        const actualPage = e.target.closest(".form-page")

        let allowNext = false

        if (actualPage.classList.contains("page1")) {

            const errorMessageLoc = document.querySelector(".page1 .error-message")
            if (page1SelectTile === 0) {
                errorMessageLoc.innerText = "Aby przejść dalej wybierz jedną z powyższych opcji."
                document.documentElement.style.setProperty("--exclamation", "url('../img/icons/exclamation.svg')")
            }
            if (page1SelectTile === 1) {
                allowNext = true
                errorMessageLoc.innerText = ""
                document.documentElement.style.setProperty("--exclamation", "")
                page2ListElemArrLoc[0].innerText = "nr warunków technicznych lub nr poprzedniej umowy kompleksowej, jeżeli była zawarta z G.EN.GAZ. ENERGIA, lub nr PPG"

            }
            if (page1SelectTile === 2) {
                allowNext = true
                errorMessageLoc.innerText = ""
                document.documentElement.style.setProperty("--exclamation", "")
                page2ListElemArrLoc[0].innerText = "nr warunków technicznych"
            }
            
        }

        if (actualPage.classList.contains("page2")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page3")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page4")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page5")) {
            allowNext = true
        }

        if (allowNext) {
            formPagesLoc.style.left = newLeftValue + "px"
            allowNext = false
        }
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

let page1SelectTile = 0

tileArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            page1SelectTile = 0
        } else {
            tileArrLoc.forEach((el) => {
                el.classList.remove("active")
                page1SelectTile = 0
            })

            e.target.classList.add("active")
            const errorMessageLoc = document.querySelector(".page1 .error-message")
            errorMessageLoc.innerText = ""
            document.documentElement.style.setProperty("--exclamation", "")

            if (e.target.classList.contains("tile1")) {
                page1SelectTile = 1
            }
            if (e.target.classList.contains("tile2")) {
                page1SelectTile = 2
            }
        }
    })
})

// podmiana tekstu UWAGA - strona 3

const radioArrP3Loc = document.querySelectorAll(".page3 .radio input")
const noticeContentArrP3Loc = document.querySelectorAll(".page3 .notice-content")

radioArrP3Loc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        const noticeContentLoc = document.querySelector(`.notice-content.${e.target.value}`)
        noticeContentArrP3Loc.forEach((el)=> {
            el.classList.add("disable")
        })
        noticeContentLoc.classList.remove("disable")
    })
})

// dodaj/usuń wnioskodawcę - strona 4

const addApplicantBtnLoc = document.querySelector(".page4 .button.add")
const removeApplicantBtnLoc = document.querySelector(".page4 .button.remove")
const additionalApplicantLoc = document.querySelector(".applicant-form-box.additional")

addApplicantBtnLoc.addEventListener("click", ()=> {
    additionalApplicantLoc.style.display = "flex"
})

removeApplicantBtnLoc.addEventListener("click", ()=> {
    additionalApplicantLoc.style.display = "none"
})

// adres korespondencyjny inny niż zamieszkania - strona 5

const theSameAddressRadioLoc = document.querySelector(".page5 #address-the-same")
const otherAddressRadioLoc = document.querySelector(".page5 #address-other")
const addressFormLoc = document.querySelector(".page5 .applicant-form-box")


theSameAddressRadioLoc.addEventListener("click", ()=> {
    if (theSameAddressRadioLoc.checked) {
        addressFormLoc.style.visibility = "hidden"
    }
})

otherAddressRadioLoc.addEventListener("click", ()=> {
    if (otherAddressRadioLoc.checked) {
        addressFormLoc.style.visibility = "visible"
    }
})

// kto podpisuje umowę - strona 6
const personallyRadioLoc = document.querySelector(".page6 #personally")
const proxyRadioLoc = document.querySelector(".page6 #proxy")
const formContainerPage6Loc = document.querySelector(".page6 .applicant-form-box")
const noticePage6Loc = document.querySelector(".page6 .notice")


personallyRadioLoc.addEventListener("change", ()=> {
    formContainerPage6Loc.style.visibility = "hidden"
    noticePage6Loc.style.visibility = "hidden"
})

proxyRadioLoc.addEventListener("change", ()=> {
    formContainerPage6Loc.style.visibility = "visible"
    noticePage6Loc.style.visibility = "visible"
})



