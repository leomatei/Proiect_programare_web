const ValidateSimpleInput = (string) => {
    if(string===''){
        return false
    }
    const validation = new RegExp("^[a-z0-9]*$")
    return validation.test(string)
}

const ValidatePassword = (string) => {
    if(string===''){
        return false
    }
    const validation = new RegExp("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!])")
    return validation.test(string)
}

const ValidateEmail = (string) => {
    if(string===''){
        return false
    }
    const validation = new RegExp("^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+[.]+[a-z]+$")
    return validation.test(string)
}

const ValidatePhone = (string) => {
    if(string===''){
        return false
    }
    const validation = new RegExp("^[(+40)]*[0-9]{9}$")
    return validation.test(string)
}

const ValidateDate = (string, format) => {
    if(string===''){
        return false
    }
    if(format==='zz/ll/aaaa'){
        const validation = new RegExp("^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19[0-9]{2}|20[0-9]{2})$")
        return validation.test(string)
    } else {
        const validation = new RegExp("^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19[0-9]{2}|20[0-9]{2})$")
        return validation.test(string)
    }
}