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
            if (page1radios === 0) {
                errorMessageLoc.innerText = "Aby przejść dalej wybierz jedną z powyższych opcji."
                document.documentElement.style.setProperty("--exclamation", "url('../img/icons/exclamation.svg')")
            }
            if (page1radios === 1) {
                allowNext = true
                errorMessageLoc.innerText = ""
                document.documentElement.style.setProperty("--exclamation", "")
                page2ListElemArrLoc[0].innerText = "nr warunków technicznych lub nr poprzedniej umowy kompleksowej, jeżeli była zawarta z G.EN.GAZ. ENERGIA, lub nr PPG"

            }
            if (page1radios === 2) {
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

        if (actualPage.classList.contains("page6")) {

            const page7radiosLoc = document.querySelector(".page7 .radios")
            const page7PPGLoc = document.querySelector(".page7 .PPG")

            if (page1radios === 1) {
                page7radiosLoc.style.display = "none"
                page7PPGLoc.style.display = "flex"
            }
            if (page1radios === 2) {
                page7radiosLoc.style.display = "flex"
                page7PPGLoc.style.display = "none"
            }
            
            allowNext = true
        }

        if (actualPage.classList.contains("page7")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page8")) {
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

const page1radioArrLoc = document.querySelectorAll(".tile")

let page1radios = 0

page1radioArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            page1radios = 0
        } else {
            page1radioArrLoc.forEach((el) => {
                el.classList.remove("active")
                page1radios = 0
            })

            e.target.classList.add("active")
            const errorMessageLoc = document.querySelector(".page1 .error-message")
            errorMessageLoc.innerText = ""
            document.documentElement.style.setProperty("--exclamation", "")

            if (e.target.classList.contains("radio1")) {
                page1radios = 1
            }
            if (e.target.classList.contains("radio2")) {
                page1radios = 2
            }
        }
    })
})

// podmiana tekstu UWAGA - strona 3

const page3radioArrLoc = document.querySelectorAll(".page3 .radios input")
const page3noticeContentArrLoc = document.querySelectorAll(".page3 .notice-content")

let page3radios = 0

page3radioArrLoc.forEach((elem) => {
    
    elem.addEventListener("change", (e)=> {
        
        page3noticeContentArrLoc.forEach((el) => {
            el.classList.remove("active")
        })

        if (e.target.value === "radio3") {
            page3radios = 1
            page3noticeContentArrLoc[0].classList.add("active")
        }
        if (e.target.value === "radio4") {
            page3radios = 2
            page3noticeContentArrLoc[1].classList.add("active")
        }
        
    })
})

// dodaj/usuń wnioskodawcę - strona 4

const addApplicantBtnLoc = document.querySelector(".page4 .button.add")
const removeApplicantBtnLoc = document.querySelector(".page4 .button.remove")
const additionalApplicantLoc = document.querySelector(".page4 .form-box.additional")

let page4boolean = false

addApplicantBtnLoc.addEventListener("click", ()=> {
    addApplicantBtnLoc.style.visibility = "hidden"
    additionalApplicantLoc.style.display = "flex"
    page4boolean = true
})

removeApplicantBtnLoc.addEventListener("click", ()=> {
    addApplicantBtnLoc.style.visibility = "visible"
    additionalApplicantLoc.style.display = "none"
    page4boolean = false
})

// adres korespondencyjny inny niż zamieszkania - strona 5

const page5radioArrLoc = document.querySelectorAll(".page5 .radios input")
const page5formLoc = document.querySelector(".page5 .form-box")

let page5radios = 0

page5radioArrLoc.forEach((elem) => {
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio5") {
            page5radios = 1
            page5formLoc.style.visibility = "hidden"
        }
        if (e.target.value === "radio6") {
            page5radios = 2
            page5formLoc.style.visibility = "visible"
        }
    })
})

// kto podpisuje umowę - strona 6
const page6radioArrLoc = document.querySelectorAll(".page6 .radios input")
const page6formLoc = document.querySelector(".page6 .form-box")
const page6noticeLoc = document.querySelector(".page6 .notice")


let page6radios = 0

page6radioArrLoc.forEach((elem) => {
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio7") {
            page6radios = 1
            page6formLoc.style.visibility = "hidden"
            page6noticeLoc.style.visibility = "hidden"
        }
        if (e.target.value === "radio8") {
            page6radios = 2
            page6formLoc.style.visibility = "visible"
            page6noticeLoc.style.visibility = "visible"
        }
    })
})

// adres korespondencyjny inny niż zamieszkania - strona 7

const page7radioArrLoc = document.querySelectorAll(".page7 .radios input")
const page7formLoc = document.querySelector(".page7 .form-box")

let page7radios = 0

page5radioArrLoc.forEach((elem) => {
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio9") {
            page7radios = 1
            page7formLoc.style.visibility = "hidden"
        }
        if (e.target.value === "radio10") {
            page7radios = 2
            page7formLoc.style.visibility = "visible"
        }
    })
})

// czy znasz moc urządzeń - strona 8

const page8radioArrLoc = document.querySelectorAll(".page8 .radios input")

let page8radios = 0

page5radioArrLoc.forEach((elem) => {
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio11") {
            page8radios = 1
        }
        if (e.target.value === "radio12") {
            page8radios = 2
        }
    })
})

