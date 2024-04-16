"use strict";

let page1radios = 0
let page3radios = 0
let page4boolean = false
let page5radios = 0
let page6radios = 0
let page7radios = 0
let inputText8_1 = null
let inputText8_2 = null
let page8radios = 0
let inputText9_1 = null
let inputText9_2 = null
let inputText9_3 = null
let inputText9_4 = null
let inputText9_5 = null
let inputText9_6 = null
let inputText9_7 = null
let inputText9_8 = null
let inputText9_9 = null
let page9checkbox1 = false
let page9checkbox2 = false
let page9checkbox3 = false
let page9checkbox4 = false
let page9checkbox5 = false
let page9checkbox6 = false
let page9checkbox7 = false
let page9checkbox8 = false
let page9unitsPower = 0
let page9consumptionMeter = 0
let page9consumptionWatt = 0
let page10radiosF = 0
let page10radiosG = 0

const containerLoc = document.querySelector(".container")
const formPagesLoc = document.querySelector(".form-pages")
const formPageArrLoc = document.querySelectorAll(".form-page")
const buttonNextArrLoc = document.querySelectorAll(".button.next")
const buttonPrevArrLoc = document.querySelectorAll(".button.prev")

const page1errorMessageLoc = document.querySelector(".page1 .error-message")
const page1radioArrLoc = document.querySelectorAll(".page1 .tile")

const page2ListElemArrLoc = document.querySelectorAll(".page2 .list ul li")

const page3radioArrLoc = document.querySelectorAll(".page3 .radios input")
const page3noticeContentArrLoc = document.querySelectorAll(".page3 .notice-content")

const page4addApplicantBtnLoc = document.querySelector(".page4 .button.add")
const page4removeApplicantBtnLoc = document.querySelector(".page4 .button.remove")
const page4additionalApplicantLoc = document.querySelector(".page4 .form-box.additional")
const page4peselBtnArrLoc = document.querySelectorAll(".page4 .pesel-button")

const page4input_fname4_1 = document.querySelector(".page4 #fname4_1")
const page4input_sname4_2 = document.querySelector(".page4 #sname4_2")
const page4input_ID4_3 = document.querySelector(".page4 #ID4_3")
const page4input_address4_4 = document.querySelector(".page4 #address4_4")
const page4input_postcode4_5 = document.querySelector(".page4 #postcode4_5")
const page4input_locality4_6 = document.querySelector(".page4 #locality4_6")
const page4input_email4_7 = document.querySelector(".page4 #email4_7")
const page4input_phone4_8 = document.querySelector(".page4 #phone4_8")

const page4input_fname4_9 = document.querySelector(".page4 #fname4_9")
const page4input_sname4_10 = document.querySelector(".page4 #sname4_10")
const page4input_ID4_11 = document.querySelector(".page4 #ID4_11")
const page4input_address4_12 = document.querySelector(".page4 #address4_12")
const page4input_postcode4_13 = document.querySelector(".page4 #postcode4_13")
const page4input_locality4_14 = document.querySelector(".page4 #locality4_14")
const page4input_email4_15 = document.querySelector(".page4 #email4_15")
const page4input_phone4_16 = document.querySelector(".page4 #phone4_16")

const inputsPage4Array1 = [page4input_fname4_1, page4input_sname4_2, page4input_ID4_3, page4input_address4_4, page4input_postcode4_5, page4input_locality4_6, page4input_email4_7, page4input_phone4_8]
const inputsPage4Array2 = [page4input_fname4_9, page4input_sname4_10, page4input_ID4_11, page4input_address4_12, page4input_postcode4_13, page4input_locality4_14, page4input_email4_15, page4input_phone4_16]

const page5radioArrLoc = document.querySelectorAll(".page5 .radios input")
const page5formLoc = document.querySelector(".page5 .form-box")

const page5input_name5_1 = document.querySelector(".page5 #name5_1")
const page5input_name5_2 = document.querySelector(".page5 #address5_2")
const page5input_name5_3 = document.querySelector(".page5 #postcode5_3")
const page5input_name5_4 = document.querySelector(".page5 #locality5_4")

const inputsPage5 = [page5input_name5_1, page5input_name5_2, page5input_name5_3, page5input_name5_4]

const page6radioArrLoc = document.querySelectorAll(".page6 .radios input")
const page6formLoc = document.querySelector(".page6 .form-box")
const page6noticeLoc = document.querySelector(".page6 .notice")

// const page7radiosLoc = document.querySelector(".page7 .radios")
const page7PPGLoc = document.querySelector(".page7 .PPG")
// const page7radioArrLoc = document.querySelectorAll(".page7 .radios input")
// const page7formLoc = document.querySelector(".page7 .form-box")

const page8radioArrLoc = document.querySelectorAll(".page8 .radios input")
const inputText8_1Loc = document.querySelector(".page8 .input-text8-1")
const inputText8_2Loc = document.querySelector(".page8 .input-text8-2")

const page9eqBoxArrLoc = document.querySelectorAll(".page9 .equipment-box")
const page9addBtnLoc = page9eqBoxArrLoc[0].querySelector(".page9 .equipment-box .button.add")
const page9removeBtnLoc = page9eqBoxArrLoc[1].querySelector(".page9 .equipment-box .button.remove")
const page9inputCheckboxArrLoc = document.querySelectorAll('.page9 .equipment-row input[type="checkbox"]')
const page9contractedPowerLowLoc = document.querySelector(".page9 .contracted-power-low")
const page9contractedPowerHighLoc = document.querySelector(".page9 .contracted-power-high")

let page9inputTextArrLoc

const page9powerRowArrLoc = document.querySelectorAll(".page9 .power-row")
const page9unitsPowerLoc = document.querySelector(".page9 .units-power")
const page9consumptionMeterLoc = document.querySelector(".page9 .consumption-meter")
const page9inputText9_9Loc = document.querySelector(".page9 #input-text9-9")

const page10inputRadiosGArrLoc = document.querySelectorAll(".page10 .radiosG input")
const page10fileUploadContainerLoc = document.querySelector(".page10 .file-upload-container")
const page10date1Loc = document.querySelector(".page10 #date1")
const page10date2Loc = document.querySelector(".page10 #date2")
const page10inputRadiosFArrLoc = document.querySelectorAll(".page10 .radiosF input")
const page10contractPeriodFormLoc = document.querySelector(".page10 .contract-period")

const page12inputSelectContainerArrLoc = document.querySelectorAll(".page12 .input-select-container")
const page12chevronArrLoc = document.querySelectorAll(".page12 .chevron")
const page12customOptionArrLoc = document.querySelectorAll(".page12 .custom-select .custom-option")

const singleInputAppendixArrLoc = document.querySelectorAll("input.appendix")
const singleFileUploadArrLoc = document.querySelectorAll(".file-upload")
const multiInputAppendixArrLoc = document.querySelectorAll("input.appendix-multi")
const multiFileUploadArrLoc = document.querySelectorAll(".file-upload-multi")

const navButtonsArrLoc = document.querySelectorAll(".fixed-buttons")


// przewijanie stron

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
            if (page1radios === 0) {
                page1errorMessageLoc.innerText = "Aby przejść dalej wybierz jedną z powyższych opcji."
                document.documentElement.style.setProperty("--exclamation", "url('../img/icons/exclamation.svg')")
            }
            if (page1radios === 1) {
                allowNext = true
                page1errorMessageLoc.innerText = ""
                document.documentElement.style.setProperty("--exclamation", "")
                page2ListElemArrLoc[0].innerText = "nr warunków technicznych lub nr poprzedniej umowy kompleksowej, jeżeli była zawarta z G.EN.GAZ. ENERGIA, lub nr PPG"

            }
            if (page1radios === 2) {
                allowNext = true
                page1errorMessageLoc.innerText = ""
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
            if (validatePage4()) {
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page5")) {
            if (validatePage5()) {
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page6")) {

            if (page1radios === 1) {
                page7PPGLoc.style.display = "flex"
            }
            if (page1radios === 2) {
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

        if (actualPage.classList.contains("page9")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page10")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page11")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page12")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page13")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page14")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page15")) {
            allowNext = true
        }

        if (allowNext) {
            formPagesLoc.style.left = newLeftValue + "px"
            e.target.closest(".form-page").nextElementSibling.scrollTo(0, 0);
            
            navButtonsArrLoc.forEach((el)=>{
                el.style.display = "none"
            })
            actualPage.nextElementSibling.querySelector(".fixed-buttons").style.display = "flex"
            
            allowNext = false
        }
        
    })
})

buttonPrevArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        const actualPosition = Number(getComputedStyle(formPagesLoc).left.slice(0, getComputedStyle(formPagesLoc).left.length-2))
        const containerWidth = Number(getComputedStyle(containerLoc).width.slice(0, getComputedStyle(containerLoc).width.length-2))
        const leftContainerBorder = Number(getComputedStyle(containerLoc).borderLeftWidth.slice(0, getComputedStyle(containerLoc).borderLeftWidth.length-2))
        const rightContainerBorder = Number(getComputedStyle(containerLoc).borderRightWidth.slice(0, getComputedStyle(containerLoc).borderRightWidth.length-2))

        const leftPagesBorder = Number(getComputedStyle(formPagesLoc).borderLeftWidth.slice(0, getComputedStyle(formPagesLoc).borderLeftWidth.length-2))
        const rightPagesBorder = Number(getComputedStyle(formPagesLoc).borderRightWidth.slice(0, getComputedStyle(formPagesLoc).borderRightWidth.length-2))

        const containerWidthWithoutBorder = containerWidth - leftContainerBorder - rightContainerBorder - leftPagesBorder - rightPagesBorder
        const newLeftValue = actualPosition + containerWidthWithoutBorder

        formPagesLoc.style.left = newLeftValue + "px"

        e.target.closest(".form-page").previousElementSibling.scrollTo(0, 0);

        const actualPage = e.target.closest(".form-page")

        navButtonsArrLoc.forEach((el)=>{
            el.style.display = "none"
        })
        actualPage.previousElementSibling.querySelector(".fixed-buttons").style.display = "flex"
        
    })
})

// walidacje

const validateEmpty = (value)=> {
    if (!value) return [false, "To pole nie może być puste!"]
    return [true, ""]
}

// zaznaczanie kafelków - strona 1

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
            page1errorMessageLoc.innerText = ""
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

page3radioArrLoc.forEach((elem, index) => {

    if (elem.checked) {
        page3radios = index + 1
    }
    
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

page4addApplicantBtnLoc.addEventListener("click", ()=> {
    page4addApplicantBtnLoc.style.visibility = "hidden"
    page4additionalApplicantLoc.style.display = "flex"
    page4boolean = true
    inputsPage4Array2.forEach((elem)=>{
        elem.parentElement.classList.remove("error")
        elem.classList.remove("error")
        elem.value = ""
    })
})

page4removeApplicantBtnLoc.addEventListener("click", ()=> {
    page4addApplicantBtnLoc.style.visibility = "visible"
    page4additionalApplicantLoc.style.display = "none"
    page4boolean = false
})

// posiadam / nieposiadam nr PESEL - strona 4
page4peselBtnArrLoc.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
        elem.classList.toggle("active")
        const IDCardSelectLoc = elem.previousElementSibling.querySelector("select")
        if (elem.classList.contains("active")) {
            IDCardSelectLoc.classList.remove("pesel")
            IDCardSelectLoc.disabled = false
            IDCardSelectLoc.querySelector("optgroup > option").innerText = "Wybierz z listy..."
        } else {
            IDCardSelectLoc.classList.add("pesel")
            IDCardSelectLoc.disabled = true
            IDCardSelectLoc.querySelector("optgroup > option").innerText = "PESEL"
            IDCardSelectLoc.selectedIndex = 0;
        }
    })
})

// walidacja pól formularza - strona 4

const validatePage4 = ()=> {

    let validatedArray

    let validateSuccess = true

    if (!page4boolean) {
        validatedArray = inputsPage4Array1
        inputsPage4Array2.forEach((elem)=>{
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
            elem.value = ""
        })
    } else {
        validatedArray = inputsPage4Array1.concat(inputsPage4Array2)
    }

    validatedArray.forEach((elem)=>{
        if (!validateEmpty(elem.value)[0]) {
            elem.parentElement.classList.add("error")
            elem.classList.add("error")
            document.documentElement.style.setProperty("--emptyError", `"${validateEmpty(elem.value)[1]}"`)
            validateSuccess = false
        } else {
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
            // document.documentElement.style.setProperty("--emptyError", `""`)
        }
    })

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie

inputsPage4Array1.concat(inputsPage4Array2).forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (elem.classList.contains("error")){
            validatePage4()
        }
    })
})

// adres korespondencyjny inny niż zamieszkania - strona 5

page5radioArrLoc.forEach((elem, index) => {

    if (elem.checked) {
        page5radios = index + 1
    }
    
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

// walidacja pól formularza - strona 5

const validatePage5 = ()=> {

    let validateSuccess = true

    let validatedArray = inputsPage5

    if (page5radios === 1) {
        validatedArray.forEach((elem)=>{
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
            elem.value = ""
        })
    }

    if (page5radios === 2) {

        validatedArray.forEach((elem)=>{
            if (!validateEmpty(elem.value)[0]) {
                elem.parentElement.classList.add("error")
                elem.classList.add("error")
                document.documentElement.style.setProperty("--emptyError", `"${validateEmpty(elem.value)[1]}"`)
                validateSuccess = false
            } else {
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
            }
        })
    }

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie

inputsPage5.forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (elem.classList.contains("error")){
            validatePage5()
        }
    })
})

// kto podpisuje umowę - strona 6

page6radioArrLoc.forEach((elem, index) => {

    if (elem.checked) {
        page6radios = index + 1
    }
    
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

// mam / nie mam WT - strona 7

// page7radioArrLoc.forEach((elem, index) => {

//     if (elem.checked) {
//         page7radios = index + 1
//     }
    
//     elem.addEventListener("change", (e)=> {

//         if (e.target.value === "radio9") {
//             page7radios = 1
//             page7formLoc.style.visibility = "hidden"
//         }
//         if (e.target.value === "radio10") {
//             page7radios = 2
//             page7formLoc.style.visibility = "visible"
//         }
//     })
// })

// form - strona 8

inputText8_1 = inputText8_1Loc.value
inputText8_2 = inputText8_2Loc.value

inputText8_1Loc.addEventListener("change", ()=>{
    inputText8_1 = inputText8_1Loc.value
    calculatePowerAndConsumption()
})

inputText8_2Loc.addEventListener("change", ()=>{
    inputText8_2 = inputText8_2Loc.value
    calculatePowerAndConsumption()
})

// czy znasz moc urządzeń - strona 8
// na tej podstawie typ power-row - strona 9

page8radioArrLoc.forEach((elem, index) => {

    if (elem.checked) {
        page8radios = index + 1
    }
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio11") {
            page8radios = 1
            page9powerRowSet()
            addinputTextListener()
        }
        if (e.target.value === "radio12") {
            page8radios = 2
            page9powerRowSet()
        }

        calculatePowerAndConsumption()
    })
})

const readPowerValues = ()=> {
    if (page9inputTextArrLoc) {
        if (page9inputTextArrLoc.length) {
            page9inputTextArrLoc.forEach((elem, index)=>{
                let elemValue = Number(elem.value)
                if (!elemValue) {elemValue = 0}
    
                if (index === 0) { inputText9_1 = elemValue }
                if (index === 1) { inputText9_2 = elemValue }
                if (index === 2) { inputText9_3 = elemValue }
                if (index === 3) { inputText9_4 = elemValue }
                if (index === 4) { inputText9_5 = elemValue }
                if (index === 5) { inputText9_6 = elemValue }
                if (index === 6) { inputText9_7 = elemValue }
                if (index === 7) { inputText9_8 = elemValue }
            })
        } else {
            inputText9_1 = 7
            inputText9_2 = 21
            inputText9_3 = 21
            inputText9_4 = 4
            inputText9_5 = 7
            inputText9_6 = 21
            inputText9_7 = 21
            inputText9_8 = 4
        }
    }
}

const page9powerRowSet = ()=> {

    if (page8radios === 1) {
        page9powerRowArrLoc.forEach((elx)=> {
            elx.innerHTML =  "Moc urządzenia: <input type='text'> kW"
        })
    }
    
    if (page8radios === 2) {
        page9powerRowArrLoc.forEach((elx, index)=> {
            if (index === 0 || index === 4) {
                elx.innerHTML =  "Średnia moc kuchenki to 7kW"
            }
            if (index === 1 || index === 5) {
                elx.innerHTML =  "Średnia moc kotła dwufunkcyjnego to 21kW"
            }
            if (index === 2 || index === 6) {
                elx.innerHTML =  "Średnia moc kotła jednofunkcyjnego to 21kW"
            } 
            if (index === 3 || index === 7) {
                elx.innerHTML =  "Średnia moc podgrzewacza to 4kW"
            }
        })
    }

    readPowerValues()
}

page9powerRowSet();

const page9readEquipmentChecked = (id, state)=> {

    if (id === 0) { page9checkbox1 = state }
    if (id === 1) { page9checkbox2 = state }
    if (id === 2) { page9checkbox3 = state }
    if (id === 3) { page9checkbox4 = state }
    if (id === 4) { page9checkbox5 = state }
    if (id === 5) { page9checkbox6 = state }
    if (id === 6) { page9checkbox7 = state }
    if (id === 7) { page9checkbox8 = state }
}

// wyświetlanie wiersza mocy urządzeń - strona 9

page9inputCheckboxArrLoc.forEach((elem, index)=> {

    elem.checked = false

    elem.addEventListener("change", (e)=> {
        if (e.target.checked) {
            e.target.closest(".equipment-row").nextElementSibling.style.display = "flex"
            page9readEquipmentChecked(index, true)
        } else {
            if (page8radios === 1) {e.target.closest(".equipment-row").nextElementSibling.querySelector("input").value = null}
            page9readEquipmentChecked(index, false)
            e.target.closest(".equipment-row").nextElementSibling.style.display = "none"
        }
        readPowerValues()
        calculatePowerAndConsumption()
    })
})

// odczytaj wartości z inputów - jeżeli są - strona 9

const addinputTextListener = ()=> {
    page9inputTextArrLoc = document.querySelectorAll('.page9 .power-row input[type="text"]')
        console.log(page9inputTextArrLoc)
    if (page9inputTextArrLoc.length) {
        page9inputTextArrLoc.forEach((elem, index)=>{
            elem.addEventListener("input", ()=>{
                console.log(elem)
                readPowerValues()
                calculatePowerAndConsumption()
            })
        })
    }
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        addinputTextListener()
        document.querySelector(".page1 .fixed-buttons").style.display = "flex"
    }
})

// dodanie dodatkowych urządzeń - strona 9

page9addBtnLoc.addEventListener("click", ()=>{
    page9eqBoxArrLoc[1].style.display = "block"
})

page9removeBtnLoc.addEventListener("click", ()=>{
    page9eqBoxArrLoc[1].style.display = "none"
    if (page8radios === 1) {
        page9checkbox5 = false
        page9checkbox6 = false 
        page9checkbox7 = false 
        page9checkbox8 = false
        page9powerRowArrLoc[4].style.display = "none"
        page9powerRowArrLoc[5].style.display = "none"
        page9powerRowArrLoc[6].style.display = "none"
        page9powerRowArrLoc[7].style.display = "none" 

        page9powerRowArrLoc[4].querySelector("input").value = null
        page9powerRowArrLoc[5].querySelector("input").value = null
        page9powerRowArrLoc[6].querySelector("input").value = null
        page9powerRowArrLoc[7].querySelector("input").value = null
    }

    page9inputCheckboxArrLoc[4].checked = false
    page9inputCheckboxArrLoc[5].checked = false
    page9inputCheckboxArrLoc[6].checked = false
    page9inputCheckboxArrLoc[7].checked = false

    readPowerValues()
    calculatePowerAndConsumption()

})

const calculatePowerAndConsumption = ()=> {
    // console.log("kalkulator")
    // console.log("page1radios", page1radios)
    // console.log("page3radios", page3radios)
    // console.log("page4boolean", page4boolean)
    // console.log("page5radios", page5radios)
    // console.log("page6radios", page6radios)
    // console.log("page7radios", page7radios)
    // console.log("inputText8_1", inputText8_1)
    // console.log("inputText8_2", inputText8_2)
    // console.log("page8radios", page8radios)
    // console.log("page10radiosF", page10radiosF)
    // console.log("page10radiosG", page10radiosG)
    // console.log("inputText9_1", inputText9_1, page9checkbox1)
    // console.log("inputText9_2", inputText9_2, page9checkbox2)
    // console.log("inputText9_3", inputText9_3, page9checkbox3)
    // console.log("inputText9_4", inputText9_4, page9checkbox4)
    // console.log("inputText9_5", inputText9_5, page9checkbox5)
    // console.log("inputText9_6", inputText9_6, page9checkbox6)
    // console.log("inputText9_7", inputText9_7, page9checkbox7)
    // console.log("inputText9_8", inputText9_8, page9checkbox8)

    // obliczanie mocy urządzeń
    page9unitsPower = 0

    if (page8radios === 1) {
        page9inputTextArrLoc.forEach((elem, index)=>{
            if (page9inputCheckboxArrLoc[index]) { 
                page9unitsPower = page9unitsPower + Number(elem.value)
            }
        })
    } else {
        let unitPower = 0
        page9inputCheckboxArrLoc.forEach((elem, index)=>{
            if (elem.checked) {
                if (index === 0 || index === 4) {unitPower = 7}
                if (index === 1 || index === 5) {unitPower = 21}
                if (index === 2 || index === 6) {unitPower = 21}
                if (index === 3 || index === 7) {unitPower = 4}
                page9unitsPower = page9unitsPower + unitPower
            }
        })
    }

    page9unitsPowerLoc.innerText = page9unitsPower

    if (page9unitsPower * 1.25 < 110) {
        page9contractedPowerLowLoc.style.display = "flex"
        page9contractedPowerHighLoc.style.display = "none"
    } else {
        page9contractedPowerLowLoc.style.display = "none"
        page9contractedPowerHighLoc.style.display = "flex"
    }
  
    // obliczanie zużycia gazu w m3
    page9consumptionMeter = 0

    let elem1 = 0
    let elem2 = 0
    let elem3 = 0

    if (page9checkbox4 || page9checkbox2 || page9checkbox8 || page9checkbox6) {
        elem1 = inputText8_2 * 120
    }

    if (page9checkbox2 || page9checkbox3 || page9checkbox6 || page9checkbox7) {
        elem2 = inputText8_1 * 11
    }

    if (page9checkbox1) {
        elem3 = 100
    }

    if (page9checkbox5) {
        elem3 = elem3 + 100
    }

    page9consumptionMeter = elem1 + elem2 + elem3

    page9consumptionMeterLoc.innerText = page9consumptionMeter
    page9inputText9_9Loc.placeholder = page9consumptionMeter

}

// okres obowiązywania umowy - strona 10

page10inputRadiosFArrLoc.forEach((elem, index) => {

    if (elem.checked) {
        page10radiosF = index + 1
    }

    if (page10radiosF === 2) {
        page10contractPeriodFormLoc.style.display = "flex"
    } else {
        page10contractPeriodFormLoc.style.display = "none"
    }
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio13") {
            page10radiosF = 1
            page10contractPeriodFormLoc.style.display = "none"
        }
        if (e.target.value === "radio14") {
            page10radiosF = 2
            page10contractPeriodFormLoc.style.display = "flex"
        }
    })
})

// wymuszenie zakresów dat na input:date - strona 10

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
if (month < 10) {
    month = "0" + month
}
let year = date.getFullYear();

let tommorow = `${year}-${month}-${day + 1}`;
let nextYear = `${year + 1}-${month}-${day}`;

page10date1Loc.setAttribute("min", nextYear);
page10date2Loc.setAttribute("min", tommorow);

// działanie customowego input:file - strona 10

singleFileUploadArrLoc.forEach((elem)=> {
    elem.addEventListener("click", ()=>{
        elem.querySelector(".appendix").click()
    })
})

singleInputAppendixArrLoc.forEach((elem)=> {
    elem.addEventListener("change", (e)=>{
        let file = e.target.value;
        let fileName = file.split("\\");
        e.target.parentElement.parentElement.querySelector(".uploadedFileName").innerHTML = "Załączono plik: " + fileName[fileName.length - 1];
    })
})

// sposób dostarczenia wniosku - strona 10

page10inputRadiosGArrLoc.forEach((elem, index) => {

    if (elem.checked) {
        page10radiosG = index + 1
    }

    if (page10radiosG === 2) {
        page10fileUploadContainerLoc.style.display = "flex"
    } else {
        page10fileUploadContainerLoc.style.display = "none"
    }
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio15") {
            page10radiosG = 1
            page10fileUploadContainerLoc.style.display = "none"
        }
        if (e.target.value === "radio16") {
            page10radiosG = 2
            page10fileUploadContainerLoc.style.display = "flex"
        }
    })
})

// combo - input text or select

page12chevronArrLoc.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
        if (getComputedStyle(elem.nextElementSibling).display === "block") {
            elem.nextElementSibling.style.display = "none"
            elem.previousElementSibling.style.borderBottomStyle = "solid"
        } else {
            elem.nextElementSibling.style.display = "block"
            elem.previousElementSibling.style.borderBottomWidth = "none"
        }
    })
})

page12customOptionArrLoc.forEach((elem)=> {
    elem.addEventListener("click", ()=>{
        elem.parentElement.parentElement.querySelector("input").value = elem.innerText
        elem.parentElement.style.display = "none"
    })
})

page12inputSelectContainerArrLoc.forEach((elem)=>{
    elem.addEventListener("mouseleave", ()=>{
        elem.querySelector(".custom-select").style.display = "none"
    })
})

// działanie customowego input:file - strona 16

multiFileUploadArrLoc.forEach((elem)=> {
    elem.addEventListener("click", ()=>{
        elem.querySelector(".appendix-multi").click()
    })
})

multiInputAppendixArrLoc.forEach((elem)=> {
    elem.addEventListener("change", (e)=>{
        let file = e.target.value;
        console.log(e.target.files)
        let info
        if (e.target.files.length === 1) {
            let fileName = file.split("\\")
            info = "Załączono plik: " + fileName[fileName.length - 1]
        }
        if (e.target.files.length > 1 && e.target.files.length < 5) {
            info = `Załączono ${e.target.files.length} pliki`
        }

        if (e.target.files.length >= 5) {
            info = `Załączono ${e.target.files.length} plików`
        }

        e.target.parentElement.parentElement.querySelector(".uploadedFileName").innerHTML = info
        
    })
})
