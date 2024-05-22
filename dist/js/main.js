"use strict";

let page1radios = 0

let page3radios = 0

let inputText4_1 = ""
let inputText4_2 = ""
let button4_1 = false
let select4_1 = ""
let inputText4_3 = ""
let inputText4_4 = ""
let inputText4_5 = ""
let inputText4_6 = ""
let inputText4_7 = ""
let inputText4_8 = ""
let page4boolean = false
let inputText4_9 = ""
let inputText4_10 = ""
let button4_2 = false
let select4_2 = ""
let inputText4_11 = ""
let inputText4_12 = ""
let inputText4_13 = ""
let inputText4_14 = ""
let inputText4_15 = ""
let inputText4_16 = ""

const body = document.querySelector("body")

let page5radios = 0
let inputText5_1 = ""
let inputText5_2 = ""
let inputText5_3 = ""
let inputText5_4 = ""

let page6radios = 0
let inputText6_1 = ""
let inputText6_2 = ""
let date6_1 = ""

let page7radios = 0

let inputText7_1 = ""
let inputText7_2 = ""
let inputText7_3 = ""
let inputText7_4 = ""
let inputText7_5 = ""
let inputText7_6 = ""
let inputText7_7 = ""

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

let date10_1 = ""
let date10_2 = ""

let page10radiosF = 0
let page10radiosG = 0

let page10checkbox10_1 = false

let page10file10_1 = ""

let page11radios = 0

let page12checkbox12_1 = false

let inputText12_1 = ""
let inputText12_2 = ""
let inputText12_3 = ""

let page13radios = 0

let page14radiosJ = 0
let page14radiosK = 0
let page14radiosL = 0
let page14radiosM = 0
let page14radiosN = 0
let page14radiosO = 0
let page14radiosP = 0

let textarea16_1 = ""

let page4formValidatePerformed = false
let page5formValidatePerformed = false
let page6formValidatePerformed = false
let page7formValidatePerformed = false
let page8formValidatePerformed = false
let page9formValidatePerformed = false
let page12formValidatePerformed = false


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
const page4select_IDType4_1 = document.querySelector(".page4 #IDType4_1")
const page4input_ID4_3 = document.querySelector(".page4 #ID4_3")
const page4input_address4_4 = document.querySelector(".page4 #address4_4")
const page4input_postcode4_5 = document.querySelector(".page4 #postcode4_5")
const page4input_locality4_6 = document.querySelector(".page4 #locality4_6")
const page4input_email4_7 = document.querySelector(".page4 #email4_7")
const page4input_phone4_8 = document.querySelector(".page4 #phone4_8")

const page4input_fname4_9 = document.querySelector(".page4 #fname4_9")
const page4input_sname4_10 = document.querySelector(".page4 #sname4_10")
const page4select_IDType4_2 = document.querySelector(".page4 #IDType4_2")
const page4input_ID4_11 = document.querySelector(".page4 #ID4_11")
const page4input_address4_12 = document.querySelector(".page4 #address4_12")
const page4input_postcode4_13 = document.querySelector(".page4 #postcode4_13")
const page4input_locality4_14 = document.querySelector(".page4 #locality4_14")
const page4input_email4_15 = document.querySelector(".page4 #email4_15")
const page4input_phone4_16 = document.querySelector(".page4 #phone4_16")

const inputsPage4Array1 = [page4input_fname4_1, page4input_sname4_2, page4input_ID4_3, page4input_address4_4, page4input_postcode4_5, page4input_locality4_6, page4input_email4_7, page4input_phone4_8]
const inputsPage4Array2 = [page4input_fname4_9, page4input_sname4_10, page4input_ID4_11, page4input_address4_12, page4input_postcode4_13, page4input_locality4_14, page4input_email4_15, page4input_phone4_16]
const inputsPage4Array3 = [page4select_IDType4_1, page4select_IDType4_2]

const page5radioArrLoc = document.querySelectorAll(".page5 .radios input")
const page5formLoc = document.querySelector(".page5 .form-box")

const page5input_name5_1 = document.querySelector(".page5 #name5_1")
const page5input_address5_2 = document.querySelector(".page5 #address5_2")
const page5input_postcode5_3 = document.querySelector(".page5 #postcode5_3")
const page5input_locality5_4 = document.querySelector(".page5 #locality5_4")

const inputsPage5Array = [page5input_name5_1, page5input_address5_2, page5input_postcode5_3, page5input_locality5_4]

const page6radioArrLoc = document.querySelectorAll(".page6 .radios input")
const page6formLoc = document.querySelector(".page6 .form-box")
const page6noticeLoc = document.querySelector(".page6 .notice")

const page6input_name6_1 = document.querySelector(".page6 #name6_1")
const page6input_pesel6_2 = document.querySelector(".page6 #pesel6_2")
const page6input_date6_3 = document.querySelector(".page6 #date6_3")

const inputsPage6Array = [page6input_name6_1, page6input_pesel6_2, page6input_date6_3]

// const page7radiosLoc = document.querySelector(".page7 .radios")
const page7PPGLoc = document.querySelector(".page7 .PPG")
// const page7radioArrLoc = document.querySelectorAll(".page7 .radios input")
// const page7formLoc = document.querySelector(".page7 .form-box")

const page7input_condition7_1 = document.querySelector(".page7 #condition7_1")
const page7input_ppg7_2 = document.querySelector(".page7 #ppg7_2")
const page7input_locality7_3 = document.querySelector(".page7 #locality7_3")
const page7input_postcode7_4 = document.querySelector(".page7 #postcode7_4")
const page7input_street7_5 = document.querySelector(".page7 #street7_5")
const page7input_houseno7_6 = document.querySelector(".page7 #houseno7_6")
const page7input_parcelno7_7 = document.querySelector(".page7 #parcelno7_7")

const inputsPage7Array1 = [page7input_condition7_1, page7input_ppg7_2, page7input_locality7_3, page7input_postcode7_4, page7input_street7_5]
const inputsPage7Array2 = [page7input_condition7_1, page7input_locality7_3, page7input_postcode7_4, page7input_street7_5]
const inputsPage7Array3 = [page7input_houseno7_6, page7input_parcelno7_7]

const page8radioArrLoc = document.querySelectorAll(".page8 .radios input")

const page8input_area8_1 = document.querySelector(".page8 #area8_1")
const page8input_people8_2 = document.querySelector(".page8 #people8_2")

const inputsPage8Array = [page8input_area8_1, page8input_people8_2]




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
const page9inputText9_9Loc = document.querySelector(".page9 #input-text9_9")






const page10inputRadiosGArrLoc = document.querySelectorAll(".page10 .radiosG input")
const page10fileUploadContainerLoc = document.querySelector(".page10 .file-upload-container")

const page10inputRadiosFArrLoc = document.querySelectorAll(".page10 .radiosF input")
const page10contractPeriodFormLoc = document.querySelector(".page10 .contract-period")

const page10input_contractdate10_1 = document.querySelector(".page10 #contractdate10_1")
const page10input_deliverydate10_2 = document.querySelector(".page10 #deliverydate10_2")

const inputsPage10Array1 = [page10input_deliverydate10_2]
const inputsPage10Array2 = [page10input_contractdate10_1, page10input_deliverydate10_2]

const checkboxPage10checkbox10_1 = document.querySelector(".page10 .checbox10_1")

const page10file10_1Loc = document.querySelector(".page10 #file1")

const page11inputRadiosArrLoc = document.querySelectorAll(".page11 .radiosH input")

const page12inputSelectContainerArrLoc = document.querySelectorAll(".page12 .input-select-container")
const page12chevronArrLoc = document.querySelectorAll(".page12 .chevron")
const page12customOptionArrLoc = document.querySelectorAll(".page12 .custom-select .custom-option")

const page12input_company12_1 = document.querySelector(".page12 #company12_1")
const page12input_address12_2 = document.querySelector(".page12 #address12_2")
const page12input_court12_3 = document.querySelector(".page12 #court12_3")

const inputsPage12Array = [page12input_company12_1, page12input_address12_2, page12input_court12_3]

const checkboxPage12checkbox12_1 = document.querySelector(".page12 .checbox12_1")

const page13inputRadiosArrLoc = document.querySelectorAll(".page13 .radiosI input")

const page14inputRadiosJArrLoc = document.querySelectorAll(".page14 .radiosJ input")
const page14inputRadiosKArrLoc = document.querySelectorAll(".page14 .radiosK input")
const page14inputRadiosLArrLoc = document.querySelectorAll(".page14 .radiosL input")
const page14inputRadiosMArrLoc = document.querySelectorAll(".page14 .radiosM input")
const page14inputRadiosNArrLoc = document.querySelectorAll(".page14 .radiosN input")
const page14inputRadiosOArrLoc = document.querySelectorAll(".page14 .radiosO input")
const page14inputRadiosPArrLoc = document.querySelectorAll(".page14 .radiosP input")

const page16textAreaLoc = document.querySelector(".page16 #textarea16_1")
const page16file16_1Loc = document.querySelector(".page16 #file2")

const singleInputAppendixArrLoc = document.querySelectorAll("input.appendix")
const singleFileUploadArrLoc = document.querySelectorAll(".file-upload")
const multiInputAppendixArrLoc = document.querySelectorAll("input.appendix-multi")
const multiFileUploadArrLoc = document.querySelectorAll(".file-upload-multi")

const navButtonsArrLoc = document.querySelectorAll(".fixed-buttons")

const loadingWrapper = document.querySelector(".loading-wrapper")
const thanksContainer = document.querySelector(".page17 .thanks")
const getPDFFormContainer = document.querySelector(".page17 .getPDFForm")

const minContractTerm = document.querySelector("#min-contract-term")

const today = new Date();
const todayFormat = today.toLocaleDateString()

const dateForYear = new Date((new Date().setFullYear(new Date().getFullYear() + 1) + 86400000)).toLocaleDateString()

minContractTerm.innerText = dateForYear


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
            page4formValidatePerformed = true
            if (validatePage4()) {
                readValuesPage4()
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page5")) {
            page5formValidatePerformed = true
            if (validatePage5()) {
                readValuesPage5()
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

            page6formValidatePerformed = true

            if (validatePage6()) {
                readValuesPage6()
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page7")) {
            page7formValidatePerformed = true
            if (validatePage7()) {
                readValuesPage7()
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page8")) {
            page8formValidatePerformed = true
            if (validatePage8()) {
                readValuesPage8()
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page9")) {
            page9formValidatePerformed = true
            if (validatePage9()) {
                readValuesPage9()
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page10")) {
            if (validatePage10()) {
                readValuesPage10()
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page11")) {
            readValuesPage11()
            allowNext = true
        }

        if (actualPage.classList.contains("page12")) {
            page12formValidatePerformed = true
            if (validatePage12()) {
                readValuesPage12()
                allowNext = true
            }
        }

        if (actualPage.classList.contains("page13")) {
            readValuesPage13()
            allowNext = true
        }

        if (actualPage.classList.contains("page14")) {
            readValuesPage14()
            allowNext = true
        }

        if (actualPage.classList.contains("page15")) {
            allowNext = true
        }

        if (actualPage.classList.contains("page16")) {
            readValuesPage16()
            fillSendingForm()
            allowNext = false
            navButtonsArrLoc.forEach((el)=>{
                el.style.display = "none"
            })
            formPagesLoc.style.left = newLeftValue + "px"
            buttonSendLoc.click()
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

const fillSendingForm = ()=> {
    const sendingForm = document.querySelector("#hidden-summary-form")
    const sendingFormInputsArray = sendingForm.querySelectorAll("input")

    sendingFormInputsArray[0].value = page1radios
    sendingFormInputsArray[1].value = page3radios
    sendingFormInputsArray[2].value = inputText4_1
    sendingFormInputsArray[3].value = inputText4_2
    sendingFormInputsArray[4].value = select4_1
    sendingFormInputsArray[5].value = inputText4_3
    sendingFormInputsArray[6].value = inputText4_4
    sendingFormInputsArray[7].value = inputText4_5
    sendingFormInputsArray[8].value = inputText4_6
    sendingFormInputsArray[9].value = inputText4_7
    sendingFormInputsArray[10].value = inputText4_8
    sendingFormInputsArray[11].value = page4boolean
    sendingFormInputsArray[12].value = inputText4_9
    sendingFormInputsArray[13].value = inputText4_10
    sendingFormInputsArray[14].value = select4_2
    sendingFormInputsArray[15].value = inputText4_11
    sendingFormInputsArray[16].value = inputText4_12
    sendingFormInputsArray[17].value = inputText4_13
    sendingFormInputsArray[18].value = inputText4_14
    sendingFormInputsArray[19].value = inputText4_15
    sendingFormInputsArray[20].value = inputText4_16
    sendingFormInputsArray[21].value = page5radios
    sendingFormInputsArray[22].value = inputText5_1
    sendingFormInputsArray[23].value = inputText5_2
    sendingFormInputsArray[24].value = inputText5_3
    sendingFormInputsArray[25].value = inputText5_4
    sendingFormInputsArray[26].value = page6radios
    sendingFormInputsArray[27].value = inputText6_1
    sendingFormInputsArray[28].value = inputText6_2
    sendingFormInputsArray[29].value = date6_1
    sendingFormInputsArray[30].value = page7radios
    sendingFormInputsArray[31].value = inputText7_1
    sendingFormInputsArray[32].value = inputText7_2
    sendingFormInputsArray[33].value = inputText7_3
    sendingFormInputsArray[34].value = inputText7_4
    sendingFormInputsArray[35].value = inputText7_5
    sendingFormInputsArray[36].value = inputText7_6
    sendingFormInputsArray[37].value = inputText7_7
    sendingFormInputsArray[38].value = inputText8_1
    sendingFormInputsArray[39].value = inputText8_2
    sendingFormInputsArray[40].value = page8radios
    sendingFormInputsArray[41].value = page9checkbox1
    sendingFormInputsArray[42].value = page9checkbox2
    sendingFormInputsArray[43].value = page9checkbox3
    sendingFormInputsArray[44].value = page9checkbox4
    sendingFormInputsArray[45].value = page9checkbox5
    sendingFormInputsArray[46].value = page9checkbox6
    sendingFormInputsArray[47].value = page9checkbox7
    sendingFormInputsArray[48].value = page9checkbox8
    sendingFormInputsArray[49].value = inputText9_1
    sendingFormInputsArray[50].value = inputText9_2
    sendingFormInputsArray[51].value = inputText9_3
    sendingFormInputsArray[52].value = inputText9_4
    sendingFormInputsArray[53].value = inputText9_5
    sendingFormInputsArray[54].value = inputText9_6
    sendingFormInputsArray[55].value = inputText9_7
    sendingFormInputsArray[56].value = inputText9_8
    sendingFormInputsArray[57].value = page9unitsPower
    sendingFormInputsArray[58].value = page9consumptionMeter
    sendingFormInputsArray[59].value = inputText9_9
    sendingFormInputsArray[60].value = page10radiosF
    sendingFormInputsArray[61].value = date10_1
    sendingFormInputsArray[62].value = date10_2
    sendingFormInputsArray[63].value = page10checkbox10_1
    sendingFormInputsArray[64].value = page10radiosG
    sendingFormInputsArray[65].value = page11radios
    sendingFormInputsArray[66].value = page12checkbox12_1
    sendingFormInputsArray[67].value = inputText12_1
    sendingFormInputsArray[68].value = inputText12_2
    sendingFormInputsArray[69].value = inputText12_3
    sendingFormInputsArray[70].value = page13radios
    sendingFormInputsArray[71].value = page14radiosJ
    sendingFormInputsArray[72].value = page14radiosK
    sendingFormInputsArray[73].value = page14radiosL
    sendingFormInputsArray[74].value = page14radiosM
    sendingFormInputsArray[75].value = page14radiosN
    sendingFormInputsArray[76].value = page14radiosO
    sendingFormInputsArray[77].value = page14radiosP
    sendingFormInputsArray[78].value = textarea16_1

    sendingFormInputsArray[79].files = page10file10_1Loc.files
    sendingFormInputsArray[80].files = page16file16_1Loc.files
}

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

const validateEmpty = (value) => {
    if (!value) return [false, "To pole nie może być puste!"]
    return [true, ""]
}

const validateEmail = (value) => {
    if (!String(value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
       return [false, "Adres email jest nieprawidłowy!"]
    }
    return [true, ""]
}

const validatePhone = (value) => {
    value = value.replace(/\s|\-/g, '')
    if (!String(value).toLowerCase().match(/(?<!.)((\+48)?[ ]?\d{9})(?!.)/)){
        return [false, "Nr telefonu jest nieprawidłowy!"]
     }
     return [true, ""]
}

const validatePostCode = (value) => {
    if (!String(value).toLowerCase().match(/(?<!.)((\d{2})?[-]\d{3})(?!.)/)){
        return [false, "Kod pocztowy jest nieprawidłowy!"]
     }
     return [true, ""]
}

const validatePesel = (value) => {
    if (!String(value).toLowerCase().match(/^([0-9]{11})?$/)){
        return [false, "PESEL jest nieprawidłowy!"]
     }
     return [true, ""]
}

const validateDigits = (value) => {
    if (!String(value).toLowerCase().match(/(?<!.)(\d+)(?!.)/)){
        return [false, "Dopuszczalne tylko wartości liczbowe!"]
     }
     return [true, ""]
}

const validateCheckbox = (value)=> {
    if (!value.checked) return false
    return true
}

// zaznaczanie kafelków - strona 1

page1radioArrLoc.forEach((elem) => {
    elem.addEventListener("click", (e)=> {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            page1radios = 0
            addToLocalStorageObject("page1radios", page1radios)
        } else {
            page1radioArrLoc.forEach((el) => {
                el.classList.remove("active")
                // page1radios = 0
            })
          
            e.target.classList.add("active")
            page1errorMessageLoc.innerText = ""
            document.documentElement.style.setProperty("--exclamation", "")

            if (e.target.classList.contains("radio1")) {
                page1radios = 1
                addToLocalStorageObject("page1radios", page1radios)
            }
            if (e.target.classList.contains("radio2")) {
                page1radios = 2
                addToLocalStorageObject("page1radios", page1radios)
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
            addToLocalStorageObject("page3radios", page3radios)
        }
        if (e.target.value === "radio4") {
            page3radios = 2
            page3noticeContentArrLoc[1].classList.add("active")
            addToLocalStorageObject("page3radios", page3radios)
        }
    })
})

// dodaj/usuń wnioskodawcę - strona 4

page4addApplicantBtnLoc.addEventListener("click", ()=> {
    page4addApplicantBtnLoc.style.visibility = "hidden"
    page4additionalApplicantLoc.style.display = "flex"
    page4boolean = true
    addToLocalStorageObject("page4boolean", page4boolean)
    inputsPage4Array2.forEach((elem)=>{
        elem.parentElement.classList.remove("error")
        elem.classList.remove("error")
        elem.value = ""
        elem.nextElementSibling.innerText = ""
    })
    page4select_IDType4_2.options.selectedIndex = 0
    page4peselBtnArrLoc[1].classList.remove("active")

    page4select_IDType4_2.classList.add("pesel")
    page4select_IDType4_2.disabled = true
    page4select_IDType4_2.querySelector("optgroup > option").innerText = "PESEL"
    page4select_IDType4_2.selectedIndex = 0;
    // if (page4formValidatePerformed){
    //     validatePage4()
    // }
})

page4removeApplicantBtnLoc.addEventListener("click", ()=> {
    page4addApplicantBtnLoc.style.visibility = "visible"
    page4additionalApplicantLoc.style.display = "none"
    page4boolean = false
    addToLocalStorageObject("page4boolean", page4boolean)
    inputsPage4Array2.forEach((elem)=>{
        elem.parentElement.classList.remove("error")
        elem.classList.remove("error")
        elem.value = ""
        elem.nextElementSibling.innerText = ""
    })
    page4select_IDType4_2.options.selectedIndex = 0
    page4peselBtnArrLoc[1].classList.remove("active")

    page4select_IDType4_2.classList.add("pesel")
    page4select_IDType4_2.disabled = true
    page4select_IDType4_2.querySelector("optgroup > option").innerText = "PESEL"
    page4select_IDType4_2.selectedIndex = 0;
    // if (page4formValidatePerformed){
    //     validatePage4()
    // }

    inputsPage4Array2.forEach((elem)=>{
        addToLocalStorageObject(elem.dataset.var, "")
    })
    
    inputsPage4Array3.forEach((elem)=>{
        addToLocalStorageObject(elem.dataset.var, "PESEL")
    })

    addToLocalStorageObject("button4_2", false)

})

// posiadam / nieposiadam nr PESEL - strona 4
page4peselBtnArrLoc.forEach((elem, index)=>{
    elem.addEventListener("click", ()=>{
        elem.classList.toggle("active")
        const IDCardSelectLoc = elem.previousElementSibling.querySelector("select")
        if (elem.classList.contains("active")) {
            IDCardSelectLoc.classList.remove("pesel")
            IDCardSelectLoc.disabled = false
            IDCardSelectLoc.querySelector("optgroup > option").innerText = "Wybierz z listy..."
            if (index === 0) {
                button4_1 = true
                addToLocalStorageObject("button4_1", button4_1)
            }
            if (index === 1) {
                button4_2 = true
                addToLocalStorageObject("button4_2", button4_2)
            }
            if (page4formValidatePerformed){
                validatePage4()
            }
        } else {
            IDCardSelectLoc.classList.add("pesel")
            IDCardSelectLoc.disabled = true
            IDCardSelectLoc.querySelector("optgroup > option").innerText = "PESEL"
            IDCardSelectLoc.selectedIndex = 0
            if (index === 0) {
                button4_1 = false
                addToLocalStorageObject("button4_1", button4_1)
            }
            if (index === 1) {
                button4_2 = false
                addToLocalStorageObject("button4_2", button4_2)
            }
            if (page4formValidatePerformed){
                validatePage4()
            }
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

        let errorValidationFlag = true

        if (!validateEmpty(elem.value)[0]) {
            elem.parentElement.classList.add("error")
            elem.classList.add("error")
            elem.nextElementSibling.innerText = validateEmpty(elem.value)[1]
            validateSuccess = false
            errorValidationFlag = false
        } else {
            if (elem.name === "email") {
                if (!validateEmail(elem.value)[0]) {
                    elem.parentElement.classList.add("error")
                    elem.classList.add("error")
                    elem.nextElementSibling.innerText = validateEmail(elem.value)[1]
                    validateSuccess = false
                    errorValidationFlag = false
                } else {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            } 
            if (elem.name === "phone") {
                if (!validatePhone(elem.value)[0]) {
                    elem.parentElement.classList.add("error")
                    elem.classList.add("error")
                    elem.nextElementSibling.innerText = validatePhone(elem.value)[1]
                    validateSuccess = false
                    errorValidationFlag = false
                } else {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            }
            if (elem.name === "postcode") {
                if (!validatePostCode(elem.value)[0]) {
                    elem.parentElement.classList.add("error")
                    elem.classList.add("error")
                    elem.nextElementSibling.innerText = validatePostCode(elem.value)[1]
                    validateSuccess = false
                    errorValidationFlag = false
                } else {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            }
            if (elem.name === "pesel" && elem.parentElement.previousElementSibling.value === "PESEL") {
                if (!validatePesel(elem.value)[0]) {
                    elem.parentElement.classList.add("error")
                    elem.classList.add("error")
                    elem.nextElementSibling.innerText = validatePesel(elem.value)[1]
                    validateSuccess = false
                    errorValidationFlag = false
                } else {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            }
            if (errorValidationFlag) {
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
                elem.nextElementSibling.innerText = ""
            }
        }
    })

    inputsPage4Array3.forEach((elem)=>{
        if (elem.value === "Wybierz z listy...") {
            elem.classList.add("error")
            validateSuccess = false
        } else {
            elem.classList.remove("error")
        }
    })

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie - strona 4

inputsPage4Array1.concat(inputsPage4Array2).forEach((elem)=>{
    elem.addEventListener("input", () => {
        if (page4formValidatePerformed){
            validatePage4()
        }
        addToLocalStorageObject(elem.dataset.var, elem.value)
    })
})

inputsPage4Array3.forEach((elem)=>{
    elem.addEventListener("change", () => {
        if (page4formValidatePerformed){
            validatePage4()
        }
        addToLocalStorageObject(elem.dataset.var, elem.value)
    })
})

const readValuesPage4 = () => {
    if (!page4boolean) {
        inputText4_1 = page4input_fname4_1.value
        inputText4_2 = page4input_sname4_2.value
        select4_1 = page4select_IDType4_1.value
        inputText4_3 = page4input_ID4_3.value
        inputText4_4 = page4input_address4_4.value
        inputText4_5 = page4input_postcode4_5.value
        inputText4_6 = page4input_locality4_6.value
        inputText4_7 = page4input_email4_7.value
        inputText4_8 = page4input_phone4_8.value
    } else {
        inputText4_1 = page4input_fname4_1.value
        inputText4_2 = page4input_sname4_2.value
        select4_1 = page4select_IDType4_1.value
        inputText4_3 = page4input_ID4_3.value
        inputText4_4 = page4input_address4_4.value
        inputText4_5 = page4input_postcode4_5.value
        inputText4_6 = page4input_locality4_6.value
        inputText4_7 = page4input_email4_7.value
        inputText4_8 = page4input_phone4_8.value

        inputText4_9 = page4input_fname4_9.value
        inputText4_10 = page4input_sname4_10.value
        select4_2 = page4select_IDType4_2.value
        inputText4_11 = page4input_ID4_11.value
        inputText4_12 = page4input_address4_12.value
        inputText4_13 = page4input_postcode4_13.value
        inputText4_14 = page4input_locality4_14.value
        inputText4_15 = page4input_email4_15.value
        inputText4_16 = page4input_phone4_16.value

    }
}

// adres korespondencyjny inny niż zamieszkania - strona 5

page5radioArrLoc.forEach((elem, index) => {

    if (elem.checked) {
        page5radios = index + 1
    }
    
    elem.addEventListener("change", (e)=> {

        if (e.target.value === "radio5") {
            page5radios = 1
            page5formLoc.style.visibility = "hidden"
            addToLocalStorageObject("page5radios", page5radios)
            inputsPage5Array.forEach((elem)=>{
                addToLocalStorageObject(elem.dataset.var, "")
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
                elem.value = ""
                elem.nextElementSibling.innerText = ""
            })
        }
        if (e.target.value === "radio6") {
            page5radios = 2
            page5formLoc.style.visibility = "visible"
            addToLocalStorageObject("page5radios", page5radios)
            inputsPage5Array.forEach((elem)=>{
                addToLocalStorageObject(elem.dataset.var, "")
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
                elem.value = ""
                elem.nextElementSibling.innerText = ""
            })
        }
    })
})

// walidacja pól formularza - strona 5

const validatePage5 = ()=> {

    let validateSuccess = true

    let validatedArray = inputsPage5Array

    if (page5radios === 1) {
        validatedArray.forEach((elem)=>{
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
            elem.value = ""
        })
    }

    if (page5radios === 2) {

        let errorValidationFlag = true

        validatedArray.forEach((elem)=>{
            if (!validateEmpty(elem.value)[0]) {
                elem.parentElement.classList.add("error")
                elem.classList.add("error")
                elem.nextElementSibling.innerText = validateEmpty(elem.value)[1]
                validateSuccess = false
                errorValidationFlag = false
            } else {
                if (elem.name === "postcode") {
                    if (!validatePostCode(elem.value)[0]) {
                        elem.parentElement.classList.add("error")
                        elem.classList.add("error")
                        elem.nextElementSibling.innerText = validatePostCode(elem.value)[1]
                        validateSuccess = false
                        errorValidationFlag = false
                    } else {
                        elem.parentElement.classList.remove("error")
                        elem.classList.remove("error")
                        elem.nextElementSibling.innerText = ""
                    }
                }
                if (errorValidationFlag) {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            }
        })
    }

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie - strona 5

inputsPage5Array.forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (page5formValidatePerformed){
            validatePage5()
        }
        addToLocalStorageObject(elem.dataset.var, elem.value)
    })
})

const readValuesPage5 = ()=> {
    if (page5radios === 2) {
        inputText5_1 = page5input_name5_1.value
        inputText5_2 = page5input_address5_2.value
        inputText5_3 = page5input_postcode5_3.value
        inputText5_4 = page5input_locality5_4.value
    } else {
        inputText5_1 = ""
        inputText5_2 = ""
        inputText5_3 = ""
        inputText5_4 = ""
    }
}

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
            addToLocalStorageObject("page6radios", page6radios)
            inputsPage6Array.forEach((elem)=>{
                addToLocalStorageObject(elem.dataset.var, "")
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
                elem.value = ""
                elem.nextElementSibling.innerText = ""
            })
        }
        if (e.target.value === "radio8") {
            page6radios = 2
            page6formLoc.style.visibility = "visible"
            page6noticeLoc.style.visibility = "visible"
            addToLocalStorageObject("page6radios", page6radios)
            inputsPage6Array.forEach((elem)=>{
                addToLocalStorageObject(elem.dataset.var, "")
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
                elem.value = ""
                elem.nextElementSibling.innerText = ""
            })
        }
    })
})

// walidacja pól formularza - strona 6

const validatePage6 = ()=> {

    let validateSuccess = true

    let validatedArray = inputsPage6Array

    if (page6radios === 1) {
        validatedArray.forEach((elem)=>{
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
            elem.value = ""
        })
    }

    if (page6radios === 2) {

        validatedArray.forEach((elem)=>{

            let errorValidationFlag = true

            if (!validateEmpty(elem.value)[0]) {
                elem.parentElement.classList.add("error")
                elem.classList.add("error")
                elem.nextElementSibling.innerText = validateEmpty(elem.value)[1]
                validateSuccess = false
                errorValidationFlag = false
            } else {
                if (elem.name === "pesel") {
                    if (!validatePesel(elem.value)[0]) {
                        elem.parentElement.classList.add("error")
                        elem.classList.add("error")
                        elem.nextElementSibling.innerText = validatePesel(elem.value)[1]
                        validateSuccess = false
                        errorValidationFlag = false
                    } else {
                        elem.parentElement.classList.remove("error")
                        elem.classList.remove("error")
                        elem.nextElementSibling.innerText = ""
                    }
                }
                if (errorValidationFlag) {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            }
        })
    }

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie - strona 6

inputsPage6Array.forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (page6formValidatePerformed){
            validatePage6()
        }
        addToLocalStorageObject(elem.dataset.var, elem.value)
    })
})

const readValuesPage6 = ()=> {
    if (page6radios === 2) {
        inputText6_1 = page6input_name6_1.value
        inputText6_2 = page6input_pesel6_2.value
        date6_1 = page6input_date6_3.value
    } else {
        inputText6_1 = ""
        inputText6_2 = ""
        date6_1 = ""
    }
}

// walidacja pól formularza - strona 7

const validatePage7 = ()=> {

    let validateSuccess = true

    let validatedArray

    if (page1radios === 1) {
        validatedArray = inputsPage7Array1
    }

    if (page1radios === 2) {
        validatedArray = inputsPage7Array2
    }

    validatedArray.forEach((elem)=>{

        let errorValidationFlag = true

        if (!validateEmpty(elem.value)[0]) {
            elem.parentElement.classList.add("error")
            elem.classList.add("error")
            elem.nextElementSibling.innerText = validateEmpty(elem.value)[1]
            validateSuccess = false
            errorValidationFlag = false
        } else {
            if (elem.name === "postcode") {
                if (!validatePostCode(elem.value)[0]) {
                    elem.parentElement.classList.add("error")
                    elem.classList.add("error")
                    elem.nextElementSibling.innerText = validatePostCode(elem.value)[1]
                    validateSuccess = false
                    errorValidationFlag = false
                } else {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            }
            if (errorValidationFlag) {
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
                elem.nextElementSibling.innerText = ""
            }
        }
    })

    if (!validateEmpty(inputsPage7Array3[0].value)[0] && !validateEmpty(inputsPage7Array3[1].value)[0]) {
        inputsPage7Array3[0].parentElement.classList.add("error")
        inputsPage7Array3[1].parentElement.classList.add("error")
        inputsPage7Array3[0].classList.add("error")
        inputsPage7Array3[1].classList.add("error")
        inputsPage7Array3[0].nextElementSibling.innerText = "Nr budynku/lokalu lub nr działki muszą być wypełnione"
        inputsPage7Array3[1].nextElementSibling.innerText = "Nr budynku/lokalu lub nr działki muszą być wypełnione"

        validateSuccess = false
    } else {
        inputsPage7Array3[0].parentElement.classList.remove("error")
        inputsPage7Array3[1].parentElement.classList.remove("error")
        inputsPage7Array3[0].classList.remove("error")
        inputsPage7Array3[1].classList.remove("error")
        inputsPage7Array3[0].nextElementSibling.innerText = ""
        inputsPage7Array3[1].nextElementSibling.innerText = ""
    }

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie - strona 7

inputsPage7Array1.forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (page7formValidatePerformed){
            validatePage7()
        }
        addToLocalStorageObject(elem.dataset.var, elem.value)
    })
})

inputsPage7Array3.forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (page7formValidatePerformed){
            validatePage7()
        }
        addToLocalStorageObject(elem.dataset.var, elem.value)
    })
})

const readValuesPage7 = ()=> {
    if (page1radios === 1) {
        inputText7_1 = page7input_condition7_1.value
        inputText7_2 = page7input_ppg7_2.value
        inputText7_3 = page7input_locality7_3.value
        inputText7_4 = page7input_postcode7_4.value
        inputText7_5 = page7input_street7_5.value
        inputText7_6 = page7input_houseno7_6.value
        inputText7_7 = page7input_parcelno7_7.value
    }
    if (page1radios === 2) {
        inputText7_1 = page7input_condition7_1.value
        inputText7_2 = ""
        inputText7_3 = page7input_locality7_3.value
        inputText7_4 = page7input_postcode7_4.value
        inputText7_5 = page7input_street7_5.value
        inputText7_6 = page7input_houseno7_6.value
        inputText7_7 = page7input_parcelno7_7.value
    }
}

// form - strona 8

inputText8_1 = page8input_area8_1.value
inputText8_2 = page8input_people8_2.value

page8input_area8_1.addEventListener("change", ()=>{
    inputText8_1 = page8input_area8_1.value
    calculatePowerAndConsumption()
})

page8input_people8_2.addEventListener("change", ()=>{
    inputText8_2 = page8input_people8_2.value
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
            addToLocalStorageObject("page8radios", page8radios)
        }
        if (e.target.value === "radio12") {
            page8radios = 2
            page9powerRowSet()
            addToLocalStorageObject("page8radios", page8radios)
        }

        calculatePowerAndConsumption()
    })
})

// walidacja pól formularza - strona 8

const validatePage8 = ()=> {

    let validateSuccess = true

    let validatedArray = inputsPage8Array

    validatedArray.forEach((elem)=>{

        let errorValidationFlag = true

        if (!validateEmpty(elem.value)[0]) {
            elem.parentElement.classList.add("error")
            elem.classList.add("error")
            elem.nextElementSibling.innerText = validateEmpty(elem.value)[1]
            validateSuccess = false
            errorValidationFlag = false
        } else {
            if (elem.name === "digit") {
                if (!validateDigits(elem.value)[0]) {
                    elem.parentElement.classList.add("error")
                    elem.classList.add("error")
                    elem.nextElementSibling.innerText = validateDigits(elem.value)[1]
                    validateSuccess = false
                    errorValidationFlag = false
                } else {
                    elem.parentElement.classList.remove("error")
                    elem.classList.remove("error")
                    elem.nextElementSibling.innerText = ""
                }
            }
            if (errorValidationFlag) {
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
                elem.nextElementSibling.innerText = ""
            }
        }
    })
    
    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie - strona 8

inputsPage8Array.forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (page8formValidatePerformed){
            validatePage8()
        }
        addToLocalStorageObject(elem.dataset.var, elem.value)
    })
})

const readValuesPage8 = ()=> {
    inputText8_1 = page8input_area8_1.value
    inputText8_2 = page8input_people8_2.value
}

// =========================================

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
        page9powerRowArrLoc.forEach((elx, index)=> {
            elx.innerHTML =  `Moc urządzenia: <input name='digit' type='text' data-var='inputText9_${index+1}'> kW`
            elx.insertAdjacentHTML("beforeend", '<div class="error-box"></div>')
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

const validatePage9 = () => {
    let validatedArray

    let validateSuccess = true

    page9inputTextArrLoc = document.querySelectorAll('.page9 .power-row input[type="text"]')

    if (page9inputTextArrLoc.length) {
        
        validatedArray = page9inputTextArrLoc

        validatedArray.forEach((elem)=>{

            if (elem.parentElement.previousElementSibling.querySelector("input").checked) {

                let errorValidationFlag = true
    
                if (!validateEmpty(elem.value)[0]) {
                    elem.parentElement.classList.add("error")
                    elem.classList.add("error")
                    elem.nextElementSibling.innerText = validateEmpty(elem.value)[1]
                    validateSuccess = false
                    errorValidationFlag = false
                } else {
                    if (elem.name === "digit") {
                        if (!validateDigits(elem.value)[0]) {
                            elem.parentElement.classList.add("error")
                            elem.classList.add("error")
                            elem.nextElementSibling.innerText = validateDigits(elem.value)[1]
                            validateSuccess = false
                            errorValidationFlag = false
                        } else {
                            elem.parentElement.classList.remove("error")
                            elem.classList.remove("error")
                            elem.nextElementSibling.innerText = ""
                        }
                    }
                    if (errorValidationFlag) {
                        elem.parentElement.classList.remove("error")
                        elem.classList.remove("error")
                        elem.nextElementSibling.innerText = ""
                    }
                }
            }
        })
    }

    const page9inputText9_9Loc = document.querySelector('.page9 #input-text9_9')

    let errorValidationFlag = true

    if (page9inputText9_9Loc.value != "") {
        if (page9inputText9_9Loc.name === "digit") {
            if (!validateDigits(page9inputText9_9Loc.value)[0]) {
                page9inputText9_9Loc.parentElement.classList.add("error")
                page9inputText9_9Loc.classList.add("error")
                page9inputText9_9Loc.parentElement.parentElement.querySelector(".error-box").innerText = validateDigits(page9inputText9_9Loc.value)[1]
                validateSuccess = false
                errorValidationFlag = false
            } else {
                page9inputText9_9Loc.parentElement.classList.remove("error")
                page9inputText9_9Loc.classList.remove("error")
                page9inputText9_9Loc.parentElement.parentElement.querySelector(".error-box").innerText = ""
            }
        }
        if (errorValidationFlag) {
            page9inputText9_9Loc.parentElement.classList.remove("error")
            page9inputText9_9Loc.classList.remove("error")
            page9inputText9_9Loc.parentElement.parentElement.querySelector(".error-box").innerText = ""
        }
    }

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}


page9inputText9_9Loc.addEventListener("input", ()=>{
    if (page9formValidatePerformed){
        validatePage9()
    }
    addToLocalStorageObject("inputText9_9", page9inputText9_9Loc.value)
})

// odczytaj wartości z inputów - jeżeli są - strona 9

const addinputTextListener = () => {
    page9inputTextArrLoc = document.querySelectorAll('.page9 .power-row input[type="text"]')
    if (page9inputTextArrLoc.length) {
        page9inputTextArrLoc.forEach((elem)=>{
            elem.addEventListener("input", ()=>{
                readPowerValues()
                calculatePowerAndConsumption()
                if (page9formValidatePerformed){
                    validatePage9()
                }
                addToLocalStorageObject(elem.dataset.var, elem.value)
            })
        })
    }
}

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        addinputTextListener()

        document.querySelector(".page1 .fixed-buttons").style.display = "flex"

        page4peselBtnArrLoc.forEach((elem)=>{
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
const readValuesPage9 = ()=> {
    page9unitsPower = page9unitsPowerLoc.innerText
    page9consumptionMeter = page9consumptionMeterLoc.innerText
    inputText9_9 = page9inputText9_9Loc.value
}

// ===============================

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

page10input_contractdate10_1.setAttribute("min", nextYear);
page10input_deliverydate10_2.setAttribute("min", tommorow);

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

// walidacja pól formularza - strona 10

const validatePage10 = ()=> {

    let validateSuccess = true
    let validatedArray

    if (page10radiosF === 1) { validatedArray = inputsPage10Array1 }
    if (page10radiosF === 2) { validatedArray = inputsPage10Array2 }

    validatedArray.forEach((elem)=>{
        if (!validateEmpty(elem.value)[0]) {
            elem.parentElement.classList.add("error")
            elem.classList.add("error")
            document.documentElement.style.setProperty("--validationError", `"${validateEmpty(elem.value)[1]}"`)
            validateSuccess = false
        } else {
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
        }
    })

    if (!validateCheckbox(checkboxPage10checkbox10_1)) {
        checkboxPage10checkbox10_1.nextElementSibling.classList.add("error")
        validateSuccess = false
    } else {
        checkboxPage10checkbox10_1.nextElementSibling.classList.remove("error")
    }

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie - strona 10

inputsPage10Array2.forEach((elem)=>{
    elem.addEventListener("input", ()=>{
        if (elem.classList.contains("error")){
            validatePage10()
        }
    })
})

checkboxPage10checkbox10_1.addEventListener("change", ()=>{
    if (checkboxPage10checkbox10_1.nextElementSibling.classList.contains("error")){
        validatePage10()
    }
})

const readValuesPage10 = ()=> {
    if (page10radiosF === 1) {
        date10_1 = ""
        date10_2 = page10input_deliverydate10_2.value
    }
    if (page10radiosF === 2) {
        date10_1 = page10input_contractdate10_1.value
        date10_2 = page10input_deliverydate10_2.value
    }

    page10checkbox10_1 = checkboxPage10checkbox10_1.checked
    
}

const readValuesPage11 = ()=> {
    if (page11inputRadiosArrLoc[0].checked) {
        page11radios = 1
    } else {
        page11radios = 2
    }
}

// combo - input text or select - strona 12

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
        if (page12formValidatePerformed){
            validatePage12()
        }
    })
})

page12inputSelectContainerArrLoc.forEach((elem)=>{
    elem.addEventListener("mouseleave", ()=>{
        elem.querySelector(".custom-select").style.display = "none"
    })
})

// walidacja pól formularza - strona 12

const validatePage12 = ()=> {

    let validateSuccess = true

    let validatedArray = inputsPage12Array

    validatedArray.forEach((elem)=>{

        let errorValidationFlag = true

        if (!validateEmpty(elem.value)[0]) {
            elem.parentElement.classList.add("error")
            elem.classList.add("error")
            validateSuccess = false
            errorValidationFlag = false
        } else {
            if (errorValidationFlag) {
                elem.parentElement.classList.remove("error")
                elem.classList.remove("error")
            }
        }
    })

    if (!validateCheckbox(checkboxPage12checkbox12_1)) {
        checkboxPage12checkbox12_1.nextElementSibling.classList.add("error")
        validateSuccess = false
    } else {
        checkboxPage12checkbox12_1.nextElementSibling.classList.remove("error")
    }

    if (validateSuccess) {
        return true
    } else {
        return false
    }
}

// walidacja sprawdzająca po błędzie - strona 12

inputsPage12Array.forEach((elem)=>{
    
    elem.addEventListener("input", ()=>{
        if (page12formValidatePerformed){
            validatePage12()
        }
    })
    elem.addEventListener("change", ()=>{
        if (page12formValidatePerformed){
            validatePage12()
        }
    })
})

checkboxPage12checkbox12_1.addEventListener("change", ()=>{
    if (checkboxPage12checkbox12_1.nextElementSibling.classList.contains("error")){
        validatePage12()
    }
})

const readValuesPage12 = ()=> {
    page12checkbox12_1 = checkboxPage12checkbox12_1.checked

    inputText12_1 = page12input_company12_1.value
    inputText12_2 = page12input_address12_2.value
    inputText12_3 = page12input_court12_3.value

}

const readValuesPage13 = ()=> {
    if (page13inputRadiosArrLoc[0].checked) {
        page13radios = 1
    } else {
        page13radios = 2
    }
}

const readValuesPage14 = ()=> {
    if (page14inputRadiosJArrLoc[0].checked) {
        page14radiosJ = 1
    } else {
        page14radiosJ = 2
    }
    if (page14inputRadiosKArrLoc[0].checked) {
        page14radiosK = 1
    } else {
        page14radiosK = 2
    }
    if (page14inputRadiosLArrLoc[0].checked) {
        page14radiosL = 1
    } else {
        page14radiosL = 2
    }
    if (page14inputRadiosMArrLoc[0].checked) {
        page14radiosM = 1
    } else {
        page14radiosM = 2
    }
    if (page14inputRadiosNArrLoc[0].checked) {
        page14radiosN = 1
    } else {
        page14radiosN = 2
    }
    if (page14inputRadiosOArrLoc[0].checked) {
        page14radiosO = 1
    } else {
        page14radiosO = 2
    }
    if (page14inputRadiosPArrLoc[0].checked) {
        page14radiosP = 1
    } else {
        page14radiosP = 2
    }
}

// działanie customowego input:file - strona 16

multiFileUploadArrLoc.forEach((elem)=> {
    elem.addEventListener("click", ()=>{
        elem.querySelector(".appendix-multi").click()
    })
})

multiInputAppendixArrLoc.forEach((elem)=> {
    elem.addEventListener("change", (e)=>{
        let file = e.target.value;
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

const readValuesPage16 = ()=> {
    textarea16_1 = page16textAreaLoc.value
}

// wysyłanie formularza

const buttonSendLoc = document.querySelector(".send-form")
const form = document.querySelector("#hidden-summary-form")
const sendMessage = document.querySelector(".send-message-container")

const validateAll = (e) => {
    e.preventDefault()

    let validationPass = true;

    // tu sprawdzanie czy wszystkie walidacje są OK - jeżeli nie validationPass = false;

    if (validationPass) {
        grecaptcha.ready(function() {
            grecaptcha.execute("6Lf2hcIpAAAAAO1sgP7bkMbS_dHflAHZV8bG8eFO", {action: "contact"})
            .then(async function(token){
                let recaptchaResponse = document.getElementById("recaptchaResponse")
                recaptchaResponse.value = token
                let response
                // fetch("./php/send.php", {method: "POST", body: new FormData(form)})
                // .then((response)=>{
                response = await fetch("./php/send.php", {method: "POST", body: new FormData(form)})
                    if (response.ok) {
                        const indexEqual = response.url.indexOf("=")
                        const status = (response.url).substr(indexEqual + 1, response.url.length - indexEqual);

                        if (status === "sent") {
                            loadingWrapper.style.display = "none"
                            thanksContainer.innerText = "Dziękujemy za wypełnienie formularza"
                            thanksContainer.style.display = "flex"
                            getPDFFormContainer.style.display = "flex"
                        } else {
                            loadingWrapper.style.display = "none"
                            thanksContainer.innerText = "E-mail nie został wysłany - spróbuj ponownie za chwilę"
                            thanksContainer.style.display = "flex"
                            getPDFFormContainer.style.display = "none"
                        }
                    } else {
                        loadingWrapper.style.display = "none"
                        thanksContainer.innerText = "E-mail nie został wysłany"
                        thanksContainer.style.display = "flex"
                        getPDFFormContainer.style.display = "none"
                    }
                // }) 
            }) 
        })
        page10file10_1Loc.value = ""
        page16file16_1Loc.value = "" 
    } else {
        loadingWrapper.style.display = "none"
        thanksContainer.innerText = "Walidacja nieprawidłowa!"
        thanksContainer.style.display = "flex"
        getPDFFormContainer.style.display = "none"
    }
}

buttonSendLoc.addEventListener("click", validateAll)

const createDataForPDF = ()=> {
    const style1 = 'style="display:flex;width:100%;height:auto;box-sizing:border-box;font-family:Arial;"'; // cały kontener
    const style2 = 'style="display:flex;width:4%;background-color:#FFDD00;"'; // kontener - lewy pasek żółty
    const style3 = 'style="display:flex;flex-direction:column;width:96%;background-color:transparent;padding-left:4%;"'; // kontener - prawa kolumna z treścią
    const style4 = 'style="display:flex;justify-content:center;font-size:23px;font-weight:bold;background-color:#000000;padding:10px;color:#ffffff;"'; // tytuł wniosku białe litery na czarnym tle

    const style5 = 'style="display:flex;justify-content:left;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;margin-top:20px;"'; // pierwszy wiersz na całą szerokość
    const style6 = 'style="display:flex;justify-content:left;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;border-top-style:none;"'; // kolejne wiersze na całą szerokość

    const style7 = 'style="display:flex;justify-content:left;font-size:16px;font-weight:bold;background-color:transparent;margin-top:15px;margin-bottom:15px;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;color:#ffffff;background-color:#585858;"'; // wiersz nagłówkowy

    const style8 = 'style="display:flex;flex-direction:row;"'; // dive kontener wiersza

    const style9 = 'style="display:flex;justify-content:left;flex-basis:50%;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;border-right-style:none;"'; // pierwszy wiersz po lewej
    const style10 = 'style="display:flex;justify-content:left;flex-basis:50%;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;"'; // pierwszy wiersz po prawej
    const style11 = 'style="display:flex;justify-content:left;flex-basis:50%;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;border-top-style:none;border-right-style:none;"'; // kolejne wiersze po lewej
    const style12 = 'style="display:flex;justify-content:left;flex-basis:50%;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;border-top-style:none;"'; // kolejne wiersze po prawej

    const style13 = 'style="display:flex;justify-content:left;flex-basis:100%;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;padding-top:0;color:#222222;"'; // sam tekst

    const style14 = 'style="display:flex;justify-content:center;flex-basis:50%;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;border-right-style:none;"'; // nagłówek tabeli lewy wyśrodkowany
    const style15 = 'style="display:flex;justify-content:center;flex-basis:50%;font-size:14px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;border-width:thin;border-style:solid;border-color:#585858;"'; // nagłówek tabeli prawy wyśrodkowany

    const style16 = 'style="display:flex;justify-content:left;flex-basis:100%;font-size:12px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;"'; // sam tekst oświadczeń w-100

    const style17 = 'style="display:flex;justify-content:left;flex-basis:85%;font-size:12px;font-weight:normal;background-color:transparent;padding:5px;color:#222222;"'; // sam tekst oświadczeń w-85
    const style18 = 'style="display:flex;justify-content:center;align-items:center;flex-basis:15%;font-size:14px;font-weight:bold;background-color:transparent;padding:5px;color:#222222;"'; // sam tekst oświadczeń w-15

    const style19 = 'style="color:#FF5050;"';
    const style20 = 'style="color:#222222;"';

    let var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13, var14, var15, var16, var17, var18

    if (page1radios == 1) {
        var1 = "Nie mam licznika gazowego, został zdemontowany";
    } else {
        var1 = "Mam nową instalację gazową, ale nie mam jeszcze licznika gazowego";
    }

    if (page3radios == 1) {
        var2 = "Online";
    } else {
        var2 = "Kurier DHL";
    }

    if (page4boolean = true) {
        var3 = "";
    } else {
        var3 = " 1";
    } 

    let msg = `
        <div ${style1}>
            <div ${style2}>&nbsp;</div>
            <div ${style3}>
                <div ${style4}>
                    WNIOSEK O ZAWARCIE UMOWY KOMPLEKSOWEJ DO 110 kWh/h
                </div>
                <div ${style5}>
                    <b>Umowa będzie podpisana:&nbsp;</b> ${var2}
                </div>
                <div ${style6}>
                    <b>Temat:&nbsp;</b> ${var1}
                </div>

                <div ${style7}>
                    Odbiorca ${var3}
                </div>
                <div ${style8}>
                    <div ${style9}><b>Imię</b></div>
                    <div ${style10}>${inputText4_1}</div>
                </div>
                <div ${style8}>
                    <div ${style11}><b>Nazwisko</b></div>
                    <div ${style12}>${inputText4_2}</div>
                </div>
                <div ${style8}>
                    <div ${style11}><b>${select4_1}</b></div>
                    <div ${style12}>${inputText4_3}</div>
                </div>
                <div ${style8}>
                    <div ${style11}><b>Adres zamieszkania</b></div>
                    <div ${style12}>${inputText4_4}</div>
                </div>
                <div ${style8}>
                    <div ${style11}><b>Kod pocztowy</b></div>
                    <div ${style12}>${inputText4_5}</div>
                </div>
                <div ${style8}>
                    <div ${style11}><b>Miejscowość</b></div>
                    <div ${style12}>${inputText4_6}</div>
                </div>
                <div ${style8}>
                    <div ${style11}><b>E-mail</b></div>
                    <div ${style12}>${inputText4_7}</div>
                </div>
                <div ${style8}>
                    <div ${style11}><b>Telefon</b></div>
                    <div ${style12}>${inputText4_8}</div>
                </div>
                `

    msg = `${msg}
        <div ${style7}>
            Adres korespondencyjny
        </div>
        `

    if (page5radios == 1) {
        msg = `${msg}
            <div ${style8}>
                <div ${style13}>Taki sam, jak adres zamieszkania</div>
            </div>
            `
    } else {
        msg = `${msg}
            <div ${style8}>
                <div ${style9}><b>Imię i nazwisko lub pełna nazwa</b></div>
                <div ${style10}>${inputText5_1}</div>
            </div>
            <div ${style8}>
                <div ${style11}><b>Adres korespondecyjny</b></div>
                <div ${style12}>${inputText5_2}</div>
            </div>
            <div ${style8}>
                <div ${style11}><b>Kod pocztowy</b></div>
                <div ${style12}>${inputText5_3}</div>
            </div>
            <div ${style8}>
                <div ${style11}><b>Miejscowość</b></div>
                <div ${style12}>${inputText5_4}</div>
            </div>
            `
    }

    msg = `${msg}
        <div ${style7}>
            Jak podpiszesz umowę?
        </div>
        `

    if (page6radios == 1) {
        msg = `${msg}
            <div ${style8}>
                <div ${style13}>Osobiście</div>
            </div>
        `
    } else {
        msg = `${msg}
            <div ${style8}>
                <div ${style13}>Za pośrednictwem pełnomocnika</div>
            </div>
            <div ${style8}>
                <div ${style9}><b>Imię i nazwisko</b></div>
                <div ${style10}>${inputText6_1}</div>
            </div>
            <div ${style8}>
                <div ${style11}><b>PESEL</b></div>
                <div ${style12}>${inputText6_2}</div>
            </div>
            <div ${style8}>
                <div ${style11}><b>Data pełnomocnictwa</b></div>
                <div ${style12}>${date6_1}</div>
            </div>
        `
    }

    msg = `${msg} 
        <div ${style7}>
            Dane miejsca odbioru paliwa
        </div>
        <div ${style8}>
            <div ${style9}><b>Nr warunków technicznych przyłączenia do sieci gazowej</b></div>
            <div ${style10}>${inputText7_1}</div>
        </div>
    `

    if (page1radios == 1) {
        msg = `${msg} 
            <div ${style8}>
                <div ${style11}><b>Nr PPG</b></div>
                <div ${style12}>${inputText7_2}</div>
            </div>
        `
    }
    
    msg = `${msg} 
    <div ${style8}>
        <div ${style11}><b>Miejscowość</b></div>
        <div ${style12}>${inputText7_3}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Kod pocztowy</b></div>
        <div ${style12}>${inputText7_4}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Ulica</b></div>
        <div ${style12}>${inputText7_5}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Nr budynku / lokalu</b></div>
        <div ${style12}>${inputText7_6}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Nr działki</b></div>
        <div ${style12}>${inputText7_7}</div>
    </div>
`

if (page8radios == 1) {
    var4 = "Wiem, jaka jest moc urządzeń, które chcę podłączyć"
} else {
    var4 = "Nie znam mocy urządzeń do podłączenia"
}

msg = `${msg}   
    <div ${style7}>
        Lokal, do którego chcesz podłączyć licznik
    </div>
    <div ${style8}>
        <div ${style9}><b>Jaką powierzchnię będziesz ogrzewał?</b></div>
        <div ${style10}>${inputText8_1}</div>
    </div>
    <div ${style8}>
        <div ${style11}> <b>Ile osób będzie mieszkać w domu?</b></div>
        <div ${style12}>${inputText8_2}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Jaką moc urządzeń planujesz podłączyć?</b></div>
        <div ${style12}>${var4}</div>
    </div>
`

msg = `${msg}   
    <div ${style7}>
        Wykaz urządzeń gazowych
    </div>
    <div ${style8}>
        <div ${style14}><b>Nazwa urządzenia gazowego</b></div>
        <div ${style15}><b>Moc w kW</b></div>
    </div>
`

const checkboxesArray = [page9checkbox1, page9checkbox2, page9checkbox3, page9checkbox4, page9checkbox5, page9checkbox6, page9checkbox7, page9checkbox8]
const equipmentsArray = ["Kuchenka gazowa","Kocioł gazowy dwufunkcyjny","Kocioł gazowy jednofunkcyjny","Gazowy podgrzewacz wody","Kuchenka gazowa","Kocioł gazowy dwufunkcyjny","Kocioł gazowy jednofunkcyjny","Gazowy podgrzewacz wody"]

let inputsTextArray

if (page8radios == 1) {
    inputsTextArray = [inputText9_1, inputText9_2, inputText9_3, inputText9_4, inputText9_5, inputText9_6, inputText9_7, inputText9_8];
} else {
    inputsTextArray = [7,21,21,4,7,21,21,4];
}

checkboxesArray.forEach((elem, index)=>{
    if (elem) {
        msg = `${msg}  
                <div ${style8}>
                    <div ${style11}>${equipmentsArray[index]}</div>
                    <div ${style12}>${inputsTextArray[index]}</div>
                </div>
            `
        }
    })

if (inputText9_9 == null) {
    inputText9_9 = "&nbsp;";
}

msg = `${msg}    
    <div ${style8}>
        <div ${style11}><b>Moc urzadzeń gazowych</b></div>
        <div ${style12}>${page9unitsPower}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Przybliżone wyliczone roczne zużycie gazu</b></div>
        <div ${style12}>${page9consumptionMeter}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Twoje deklarowane roczne zużycie gazu</b></div>
        <div ${style12}>${inputText9_9}</div>
    </div>
`

if (page10radiosF == 1) {
    var5 = "Nieoznaczony";
    var6 = `
        <div ${style8}>
            <div ${style9}><b>Proponowany termin rozpoczęcia dostarczania paliwa gazowego</b></div>
            <div ${style10}>${date10_2}</div>
        </div>
    `
} else {
    var5 = "Oznaczony";
    var6 = `
        <div ${style8}>
            <div ${style9}><b>Okres obowiązywania umowy</b></div>
            <div ${style10}>${date10_1}</div>
        </div>
        <div ${style8}>
            <div ${style11}><b>Proponowany termin rozpoczęcia dostarczania paliwa gazowego</b></div>
            <div ${style12}>${date10_2}</div>
        </div>
    `
}

if (page10checkbox10_1 == true) {
    var7 = "TAK";
} else {
    var7 = "NIE";
}

if (page10radiosG == 1) {
    var8 = "przesłałem do operatora sieci gazowej G.EN. Operator sp. z o.o.";
} else {
    var8 = "załączam poniżej (kompletnie uzupełniony i podpisany)";
}

msg = `${msg}
    <div ${style7}>
        Okres obowiązywania umowy
    </div>
    <div ${style8}>
        <div ${style13}>${var5}</div>
    </div>
    ${var6}
    <div ${style8}>
        <div ${style11}>Przyjmuję do wiadomości, że rozpoczęcie sprzedaży paliwa gazowego nastąpi w ciągu przynajmniej 21 dni od daty doręczenia do sprzedawcy podpisanego egzemplarza umowy kompleksowej dostarczania paliwa gazowego pod warunkiem spełnienia wymogów formalnych przez Wnioskującego oraz istnienia technicznej możliwości dostarczania paliwa gazowego do Obiektu Wnioskującego.</div>
        <div ${style12}>${var7}</div>
    </div>
    <div ${style8}>
        <div ${style11}><b>Wniosek o rozpoczęcie dostarczania paliwa gazowego</b></div>
        <div ${style12}>${var8}</div>
    </div>
`

if (page11radios == 1) {
    var9 = `<span>Oświadczam, że <b> posiadam tytuł prawny </b> do korzystania z Obiektu wskazanego w punkcie "Dane miejsca odbioru paliwa" i w ramach tego prawa mogę pobierać paliwo gazowe do urządzeń gazowych.</span>`;
} else {
    var9 = `<span>Oświadczam, że <b> nie posiadam tytułu prawnego </b> do korzystania z Obiektu wskazanego w punkcie "Dane miejsca odbioru paliwa".</span>`;
}

msg = `${msg}
    <div ${style7}>
        Oświadczenia Wnioskującego
    </div>
    <div ${style8}>
        <div ${style17}>${var9}</div>
        <div ${style18}>TAK</div>
    </div>
`

msg = `${msg}
    <div ${style8}>
        <div ${style17}><span>Równocześnie przyjmuję do wiadomości, że złożenie oświadczenia niezgodnego z prawdą może spowodować odpowiedzialność przewidzianą w przepisach prawa, w szczególności odpowiedzialność finansową, również w przypadku roszczeń osób trzecich wobec G.EN. GAZ ENERGIA Sp. z o.o., związanych z faktem zawarcia Umowy kompleksowej dostarczania paliwa gazowego z osobą, która nie posiadała tytułu prawnego do wskazanej powyżej Obiektu.</span></div>
        <div ${style18}>TAK</div>
    </div>
    `

if (page12checkbox12_1 == true) {
    var10 = `<span ${style20}>TAK</span>`
} else {
    var10 = `<span ${style19}>NIE</span>`
}

msg = `${msg}
    <div ${style8}>
        <div ${style17}><span>Oświadczam, że paliwo gazowe będzie wykorzystywane wyłącznie w celach opałowych na potrzeby gospodarstwa domowego, niezwiązanych z prowadzeniem działalności gospodarczej ani zawodowej, w ilościach paliwa gazowego wskazanych we Wniosku.</span></div>
        <div ${style18}>${var10}</div>
    </div>
`

msg = `${msg} 
    <div ${style8}>
        <div ${style17}>
            <span>Odbiorca niniejszym wskazuje ${inputText12_1} z siedzibą w ${inputText12_2}, wpisanego do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez ${inputText12_3} jako sprzedawcę rezerwowego w rozumieniu ustawy z dnia 10 kwietnia 1997 r. – Prawo energetyczne (tj. Dz. U. z 2022 r. poz. 1385 z późn. zm. – dalej: "Prawo energetyczne"), wybranego spośród podmiotów ujętych na liście sprzedawców oferujących sprzedaż rezerwową odbiorcom końcowym opublikowanej przez G.EN. Operator, działającego jako OSD, zgodnie z Prawem energetycznym oraz aktualnie obowiązującą Instrukcją Ruchu i Eksploatacji Sieci Dystrybucyjnej G.EN. Operator ("IRiESD").</span>
        </div>
        <div ${style18}>TAK</div>
    </div>

`

if (page13radios == 1) {
    var11 = `<span ${style20}>TAK</span>`;
} else {
    var11 = `<span ${style19}>NIE</span>`;
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}><span>W związku z zawarciem Umowy na odległość i art. 21 ust. 2 ustawy z dnia 30 maja 2014 r. o prawach konsumenta (tj. Dz. U. z 2020 r. poz. 287 ze zm.) żądam rozpoczęcia dostarczania Paliwa gazowego przed upływem 14 dni od dnia zawarcia Umowy. Żądanie powyższe oznacza, że w razie odstąpienia od Umowy, będę zobowiązany do zapłaty za świadczenie spełnione przez Sprzedawcę do chwili odstąpienia przeze mnie od umowy, według cen i stawek opłat wynikających z Taryfy, o której mowa w Umowie, o czym zostałem uprzednio pouczony.</span></div>
        <div ${style18}>${var11}</div>
    </div>
`

if (page14radiosJ == 1) {
    var12 = `<span ${style20}>TAK</span>`;
} else {
    var12 = `<span ${style19}>NIE</span>`;
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}><span>Wyrażam zgodę na przetwarzanie moich danych osobowych przez G.EN. GAZ ENERGIA Sp. z o.o. w celach marketingowych w zakresie produktów i usług własnych G.EN. GAZ ENERGIA Sp. z o.o., w tym również po zakończeniu Umowy.</span></div>
        <div ${style18}>${var12}</div>
    </div>
`

if (page14radiosK == 1) {
    var13 = `<span ${style20}>TAK</span>`
} else {
    var13 = `<span ${style19}>NIE</span>`
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}>Wyrażam zgodę na przetwarzanie moich danych osobowych przez G.EN. GAZ ENERGIA Sp. z o.o. w celach marketingowych w zakresie produktów i usług podmiotów powiązanych kapitałowo z G.EN. GAZ ENERGIA Sp. z o.o., w tym również po zakończeniu Umowy.</div>
        <div ${style18}>${var13}</div>
    </div>
`

if (page14radiosL == 1) {
    var14 = `<span ${style20}>TAK</span>`
} else {
    var14 = `<span ${style19}>NIE</span>`
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}>Wyrażam zgodę na otrzymywanie informacji handlowej przesyłanych przez G.EN. GAZ ENERGIA Sp. z o.o. poprzez e-mail lub konto eBOK, w tym również po zakończeniu Umowy.</div>
        <div ${style18}>${var14}</div>
    </div>
`

if (page14radiosM == 1) {
    var15 = `<span ${style20}>TAK</span>`
} else {
    var15 = `<span ${style19}>NIE</span>`
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}>Wyrażam zgodę na marketing bezpośredni przez G.EN. GAZ ENERGIA Sp. z o.o. poprzez SMS lub telefon, w tym również po zakończeniu Umowy.</div>
        <div ${style18}>${var15}</div>
    </div>
`

if (page14radiosN == 1) {
    var16 = `<span ${style20}>TAK</span>`
} else {
    var16 = `<span ${style19}>NIE</span>`
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}>Wyrażam zgodę na przetwarzanie moich danych osobowych przez G.EN. GAZ ENERGIA Sp. z o.o. w celach marketingowych w zakresie produktów i usług własnych G.EN. GAZ ENERGIA Sp. z o.o., w tym również po zakończeniu Umowy.</div>
        <div ${style18}>${var16}</div>
    </div>
`

if (page14radiosO == 1) {
    var17 = `<span ${style20}>TAK</span>`
} else {
    var17 = `<span ${style19}>NIE</span>`
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}>Wyrażam zgodę na marketing bezpośredni przez podmioty z grupy kapitałowej G.EN. GAZ ENERGIA Sp. z o.o. poprzez SMS lub telefon w tym również po zakończeniu Umowy.</div>
        <div ${style18}>${var17}</div>
    </div>
`

if (page14radiosP == 1) {
    var18 = `<span $style20>TAK</span>`
} else {
    var18 = `<span $style19>NIE</span>`
}

msg = `${msg} 
    <div ${style8}>
        <div ${style17}>Wyrażam zgodę na udostepnienie moich danych osobowych przez G.EN. GAZ ENERGIA Sp. z o.o. podmiotom z grupy kapitałowej G.EN. GAZ ENERGIA Sp. z o.o. w zakresie niezbędnym do podejmowania wobec mnie działań marketingowych.</div>
        <div ${style18}>${var18}</div>
    </div>
`
msg = `${msg} 
    <div ${style7}>
        Informacje o danych osobowych
    </div>
`
msg = `${msg} 
    <div ${style16}><span>1. Administratorem danych osobowych jest G.EN. GAZ ENERGIA Sp. z o.o. z siedzibą w Warszawie, ul. Domaniewska 37, 02-672, Warszawa. W razie pytań możecie się Państwo skontaktować z naszym Inspektorem Ochrony Danych, Maciejem Chwalińskim, za pomocą e-mail: iod@gen.com.pl lub wysyłając korespondencję na wskazany powyżej adres pocztowy z dopiskiem „ochrona danych osobowych”.</span>
    </div>
    `
msg = `${msg} 
    <div ${style16}>2. Wypełniając Wniosek o zawarcie umowy kompleksowej dostarczania paliwa gazowego nasza firma będzie przetwarzać dotyczące Państwa dane osobowe, w celu podjęcia działań prowadzących do zawarcia umowy. Podstawę prawną przetwarzania stanowi w takim wypadku art. 6 ust. 1 lit. B.</div>
    `
msg = `${msg} 
    <div ${style16}>3. Podanie danych jest dobrowolne, jednak niezbędne do zawarcia i realizacji umowy. Mogą Państwo zdecydować się na zawarcie umowy z G.EN. GAZ ENERGIA Sp. z o.o. drogą online, przy wykorzystaniu dedykowanego narzędzia. Jest to całkowicie dobrowolne, jednak w takim wypadku niezbędne będzie podanie adresu e-mail oraz numeru telefonu.</div>
    `
msg = `${msg} 
    <div ${style16}>4. Mogą Państwo żądać od nas: uzyskania dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu, przeniesienia Waszych danych osobowych, powszechnie używanym wycofania zgody wyrażonej na przetwarzanie danych osobowych. W przypadku zastrzeżeń związanych z przetwarzaniem danych osobowych mają Państwo prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</div>
`
msg = `${msg}  
    <div ${style16}><span>5. Pełne informacje na temat przetwarzania Państwa danych osobowych możecie uzyskać na naszej stronie internetowej: www.gen.com.pl w zakładce <a href="https://www.gen.com.pl/rodo">"Ochrona danych osobowych"</a>.</span></div>
    `

msg = `${msg} 
    <div ${style7}>
        Załączniki i dodatkowe informacje
    </div>
    `

msg = `${msg} 
    <div ${style16}>${textarea16_1}</div>
`

msg = `${msg}
    </div>
</div>
`

    return msg
}

const generatePDF = ()=> {

    html2pdf()
		.set({ html2canvas: { scale: 2 }, margin: 2, filename: 'WNIOSEK O ZAWARCIE UMOWY KOMPLEKSOWEJ DO 110 kWh/h.pdf' })
		.from(createDataForPDF())
		.save();
}

getPDFFormContainer.addEventListener("click", generatePDF)

// ustawienie zahaczenia tooltipów

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        
        const toolTipsArrLoc = document.querySelectorAll(".tooltip-text")
        
        toolTipsArrLoc.forEach((elem)=>{
            const formPageForThisToolTip = elem.closest(".form-page")
            const arrowForThisToolTip = elem.querySelector(".arrow")
            
            const right_in = elem.getBoundingClientRect().right
            const right_out = formPageForThisToolTip.getBoundingClientRect().right
        
            if (right_in > right_out) {
                const movingDist = right_in - right_out
                const currentLeft = Number(getComputedStyle(elem).left.slice(0, getComputedStyle(elem).left.length-2))
                
                elem.style.left = currentLeft - movingDist + "px" 
                
                const currentArrowLeft = Number(getComputedStyle(arrowForThisToolTip).left.slice(0, getComputedStyle(arrowForThisToolTip).left.length-2))
                arrowForThisToolTip.style.left = currentArrowLeft + movingDist + "px" 
            }

            const left_in = elem.getBoundingClientRect().left
            const left_out = formPageForThisToolTip.getBoundingClientRect().left
        
            if (left_in < left_out) {
                const movingDist = left_in - left_out
                const currentRight= Number(getComputedStyle(elem).left.slice(0, getComputedStyle(elem).left.length-2))
                
                elem.style.left = currentRight - movingDist + "px" 
                
                const currentArrowRight = Number(getComputedStyle(arrowForThisToolTip).left.slice(0, getComputedStyle(arrowForThisToolTip).left.length-2))
                arrowForThisToolTip.style.left = currentArrowRight + movingDist + "px" 
            }
        })

        // odczytaj dane formularza z LocalStorage

        readAndPlaceLocalStorageData()

    }
})



// LocalStorage

// RESET DB
// localStorage.clear();
    
// GET FROM DB
// JSON.parse(window.localStorage.getItem("??????"))
    
// SAVE IN DB
// window.localStorage.setItem("??????", JSON.stringify("zmienna-z-JS"))

const addToLocalStorageObject = (key, value) => {
	let existing = localStorage.getItem("gen-form")
	existing = existing ? JSON.parse(existing) : {};
	existing[key] = value;
	localStorage.setItem("gen-form", JSON.stringify(existing));
}

const readAndPlaceLocalStorageData = ()=> {

    const LSdata = JSON.parse(localStorage.getItem("gen-form"))

    // page 1

    if (LSdata.page1radios !== undefined) {page1radios = LSdata.page1radios}

    if (LSdata.page1radios === 1) {
        page1radioArrLoc[0].classList.add("active")
        page1radioArrLoc[1].classList.remove("active")
    }
    if (LSdata.page1radios === 2) {
        page1radioArrLoc[0].classList.remove("active")
        page1radioArrLoc[1].classList.add("active")
    }

    // page 3

    if (LSdata.page3radios !== undefined) {page3radios = LSdata.page3radios}

    if (LSdata.page3radios === 1) {
        page3radioArrLoc[0].checked = true
        page3noticeContentArrLoc[0].classList.add("active")
        page3noticeContentArrLoc[1].classList.remove("active")
    }
    if (LSdata.page3radios === 2) {
        page3radioArrLoc[1].checked = true
        page3noticeContentArrLoc[0].classList.remove("active")
        page3noticeContentArrLoc[1].classList.add("active")
    }

    // page 4

    if (LSdata.page4boolean  !== undefined) {page4boolean = LSdata.page4boolean}

    if (LSdata.page4boolean === true) {
        page4addApplicantBtnLoc.style.visibility = "hidden"
        page4additionalApplicantLoc.style.display = "flex"
        inputsPage4Array2.forEach((elem)=>{
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
            elem.value = ""
        })
        page4select_IDType4_2.options.selectedIndex = 0
        page4peselBtnArrLoc[1].classList.remove("active")
    
        page4select_IDType4_2.classList.add("pesel")
        page4select_IDType4_2.disabled = true
        page4select_IDType4_2.querySelector("optgroup > option").innerText = "PESEL"
        page4select_IDType4_2.selectedIndex = 0;
    } else {
        page4addApplicantBtnLoc.style.visibility = "visible"
        page4additionalApplicantLoc.style.display = "none"
        inputsPage4Array2.forEach((elem)=>{
            elem.parentElement.classList.remove("error")
            elem.classList.remove("error")
            elem.value = ""
        })
        page4select_IDType4_2.options.selectedIndex = 0
        page4peselBtnArrLoc[1].classList.remove("active")
    
        page4select_IDType4_2.classList.add("pesel")
        page4select_IDType4_2.disabled = true
        page4select_IDType4_2.querySelector("optgroup > option").innerText = "PESEL"
        page4select_IDType4_2.selectedIndex = 0;
    }

    if (LSdata.button4_1 !== undefined) {button4_1 = LSdata.button4_1}
    if (LSdata.button4_2 !== undefined) {button4_2 = LSdata.button4_2}

    page4peselBtnArrLoc.forEach((elem, index)=>{
        if (index === 0) {
            const IDCardSelectLoc = elem.previousElementSibling.querySelector("select")

            if (button4_1 === true) {
                elem.classList.add("active")
                IDCardSelectLoc.classList.remove("pesel")
                IDCardSelectLoc.disabled = false
                IDCardSelectLoc.querySelector("optgroup > option").innerText = "Wybierz z listy..."
            } else {
                elem.classList.remove("active")
                IDCardSelectLoc.disabled = true
                IDCardSelectLoc.querySelector("optgroup > option").innerText = "PESEL"
                IDCardSelectLoc.selectedIndex = 0
            }
        }
        if (index === 1) {
            const IDCardSelectLoc = elem.previousElementSibling.querySelector("select")

            if (button4_2 === true) {
                elem.classList.add("active")
                IDCardSelectLoc.classList.remove("pesel")
                IDCardSelectLoc.disabled = false
                IDCardSelectLoc.querySelector("optgroup > option").innerText = "Wybierz z listy..."
            } else {
                elem.classList.remove("active")
                IDCardSelectLoc.disabled = true
                IDCardSelectLoc.querySelector("optgroup > option").innerText = "PESEL"
                IDCardSelectLoc.selectedIndex = 0
            }
        }
    })

    if (LSdata.inputText4_1 !== undefined) {
        inputText4_1 = LSdata.inputText4_1
        page4input_fname4_1.value = inputText4_1
    }
    if (LSdata.inputText4_2 !== undefined) {
        inputText4_2 = LSdata.inputText4_2
        page4input_sname4_2.value = inputText4_2
    }
    if (LSdata.select4_1 !== undefined) {
        select4_1 = LSdata.select4_1
        page4select_IDType4_1.value = select4_1
    }
    if (LSdata.inputText4_3 !== undefined) {
        inputText4_3 = LSdata.inputText4_3
        page4input_ID4_3.value = inputText4_3
    }
    if (LSdata.inputText4_4 !== undefined) {
        inputText4_4 = LSdata.inputText4_4
        page4input_address4_4.value = inputText4_4
    }
    if (LSdata.inputText4_5 !== undefined) {
        inputText4_5 = LSdata.inputText4_5
        page4input_postcode4_5.value = inputText4_5
    }
    if (LSdata.inputText4_6 !== undefined) {
        inputText4_6 = LSdata.inputText4_6
        page4input_locality4_6.value = inputText4_6
    }
    if (LSdata.inputText4_7 !== undefined) {
        inputText4_7 = LSdata.inputText4_7
        page4input_email4_7.value = inputText4_7
    }
    if (LSdata.inputText4_8 !== undefined) {
        inputText4_8 = LSdata.inputText4_8
        page4input_phone4_8.value = inputText4_8
    }


    if (LSdata.inputText4_9 !== undefined) {
        inputText4_9 = LSdata.inputText4_9
        page4input_fname4_9.value = inputText4_9
    }
    if (LSdata.inputText4_10 !== undefined) {
        inputText4_10 = LSdata.inputText4_10
        page4input_sname4_10.value = inputText4_10
    }
    if (LSdata.select4_2 !== undefined) {
        select4_2 = LSdata.select4_2
        page4select_IDType4_2.value = select4_2
    }
    if (LSdata.inputText4_11 !== undefined) {
        inputText4_11 = LSdata.inputText4_11
        page4input_ID4_11.value = inputText4_11
    }
    if (LSdata.inputText4_12 !== undefined) {
        inputText4_12 = LSdata.inputText4_12
        page4input_address4_12.value = inputText4_12
    }
    if (LSdata.inputText4_13 !== undefined) {
        inputText4_13 = LSdata.inputText4_13
        page4input_postcode4_13.value = inputText4_13
    }
    if (LSdata.inputText4_14 !== undefined) {
        inputText4_14 = LSdata.inputText4_14
        page4input_locality4_14.value = inputText4_14
    }
    if (LSdata.inputText4_15 !== undefined) {
        inputText4_15 = LSdata.inputText4_15
        page4input_email4_15.value = inputText4_15
    }
    if (LSdata.inputText4_16 !== undefined) {
        inputText4_16 = LSdata.inputText4_16
        page4input_phone4_16.value = inputText4_16
    }

    // page 5

    if (LSdata.page5radios !== undefined) {page5radios = LSdata.page5radios}

    if (LSdata.page5radios === 1) {
        page5radioArrLoc[0].checked = true
        page5formLoc.style.visibility = "hidden"
    }
    if (LSdata.page5radios === 2) {
        page5radioArrLoc[1].checked = true
        page5formLoc.style.visibility = "visible"
    }

    if (LSdata.inputText5_1 !== undefined) {
        inputText5_1 = LSdata.inputText5_1
        page5input_name5_1.value = inputText5_1
    }
    if (LSdata.inputText5_2 !== undefined) {
        inputText5_2 = LSdata.inputText5_2
        page5input_address5_2.value = inputText5_2
    }
    if (LSdata.inputText5_3 !== undefined) {
        inputText5_3 = LSdata.inputText5_3
        page5input_postcode5_3.value = inputText5_3
    }
    if (LSdata.inputText5_4 !== undefined) {
        inputText5_4 = LSdata.inputText5_4
        page5input_locality5_4.value = inputText5_4
    }

    // page 6

    if (LSdata.page6radios !== undefined) {page6radios = LSdata.page6radios}

    if (LSdata.page6radios === 1) {
        page6radioArrLoc[0].checked = true
        page6formLoc.style.visibility = "hidden"
        page6noticeLoc.style.visibility = "hidden"
    }
    if (LSdata.page6radios === 2) {
        page6radioArrLoc[1].checked = true
        page6formLoc.style.visibility = "visible"
        page6noticeLoc.style.visibility = "visible"
    }

    if (LSdata.inputText6_1 !== undefined) {
        inputText6_1 = LSdata.inputText6_1
        page6input_name6_1.value = inputText6_1
    }
    if (LSdata.inputText6_2 !== undefined) {
        inputText6_2 = LSdata.inputText6_2
        page6input_pesel6_2.value = inputText6_2
    }
    if (LSdata.date6_1 !== undefined) {
        date6_1 = LSdata.date6_1
        page6input_date6_3.value = date6_1
    }

    // page 7

    if (LSdata.page7radios !== undefined) {page7radios = LSdata.page7radios}
 
    if (LSdata.inputText7_1 !== undefined) {
         inputText7_1 = LSdata.inputText7_1
         page7input_condition7_1.value = inputText7_1
    }
    if (LSdata.inputText7_2 !== undefined) {
         inputText7_2 = LSdata.inputText7_2
         page7input_ppg7_2.value = inputText7_2
    }
    if (LSdata.inputText7_3 !== undefined) {
        inputText7_3 = LSdata.inputText7_3
        page7input_locality7_3.value = inputText7_3
    }
    if (LSdata.inputText7_4 !== undefined) {
        inputText7_4 = LSdata.inputText7_4
        page7input_postcode7_4.value = inputText7_4
    }
    if (LSdata.inputText7_5 !== undefined) {
        inputText7_5 = LSdata.inputText7_5
        page7input_street7_5.value = inputText7_5
    }
    if (LSdata.inputText7_6 !== undefined) {
        inputText7_6 = LSdata.inputText7_6
        page7input_houseno7_6.value = inputText7_6
    }
    if (LSdata.inputText7_7 !== undefined) {
        inputText7_7 = LSdata.inputText7_7
        page7input_parcelno7_7.value = inputText7_7
    }

    
    // page 8

    if (LSdata.page8radios !== undefined) {page8radios = LSdata.page8radios}
 
    if (LSdata.inputText8_1 !== undefined) {
         inputText8_1 = LSdata.inputText8_1
         page8input_area8_1.value = inputText8_1
    }
    if (LSdata.inputText8_2 !== undefined) {
         inputText8_2 = LSdata.inputText8_2
         page8input_people8_2.value = inputText8_2
    }

    if (LSdata.page8radios === 1) {
        page8radioArrLoc[0].checked = true
        page9powerRowSet()
        addinputTextListener()
    }
    if (LSdata.page8radios === 2) {
        page9powerRowSet()
        page8radioArrLoc[1].checked = true
    }

        
    // page 9
 
    if (LSdata.inputText9_1 !== undefined) {
        inputText9_1 = LSdata.inputText9_1
        page9powerRowArrLoc[0].querySelector("input").value = inputText9_1
    }
    if (LSdata.inputText9_2 !== undefined) {
        inputText9_2 = LSdata.inputText9_2
        page9powerRowArrLoc[1].querySelector("input").value = inputText9_2
    }
    if (LSdata.inputText9_3 !== undefined) {
        inputText9_3 = LSdata.inputText9_3
        page9powerRowArrLoc[2].querySelector("input").value = inputText9_3
    }
    if (LSdata.inputText9_4 !== undefined) {
        inputText9_4 = LSdata.inputText9_4
        page9powerRowArrLoc[3].querySelector("input").value = inputText9_4
    }
    if (LSdata.inputText9_5 !== undefined) {
        inputText9_5 = LSdata.inputText9_5
        page9powerRowArrLoc[4].querySelector("input").value = inputText9_5
    }
    if (LSdata.inputText9_6 !== undefined) {
        inputText9_6 = LSdata.inputText9_6
        page9powerRowArrLoc[5].querySelector("input").value = inputText9_6
    }
    if (LSdata.inputText9_7 !== undefined) {
        inputText9_7 = LSdata.inputText9_7
        page9powerRowArrLoc[6].querySelector("input").value = inputText9_7
    }
    if (LSdata.inputText9_8 !== undefined) {
        inputText9_8 = LSdata.inputText9_8
        page9powerRowArrLoc[7].querySelector("input").value = inputText9_8
    }

    if (LSdata.inputText9_9 !== undefined) {
        inputText9_9 = LSdata.inputText9_9
        page9inputText9_9Loc.value = inputText9_9
    }
}