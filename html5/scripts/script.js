import './utils.js'

export function changeElementOnType(element, dateFormat=''){
    element.addEventListener('keyup',()=>{
    if(ValidateInput(element.name, element.value, dateFormat)){
        element.nextElementSibling.classList.remove('red')
        element.nextElementSibling.classList.add('green')
    } else {
        element.nextElementSibling.classList.remove('green')
        element.nextElementSibling.classList.add('red')
    }
})
}

function ValidateInput(inputType, string, dateFormat){
    const isValid = new Boolean(false)
    if(inputType==='simple-input'){
        isValid = ValidateSimpleInput(string)
    }
    if(inputType==='password'){
        isValid = ValidatePassword(string)
    }
    if(inputType==='phone'){
        isValid = ValidatePhone(string)
    }
    if(inputType==='date'){
        isValid  = ValidateDate(string,dateFormat)
    }
    if(inputType==='emial'){
        isValid = ValidateEmail(string)
    }
    return isValid
}