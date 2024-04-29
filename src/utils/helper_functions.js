const getApiLink = () => {
    let api_link = 'http://localhost:3001'
    return api_link
}

const saveKey = (key,value) => {
    window.localStorage.setItem(key,value)
}

const getValue = (key) => {
    return window.localStorage.getItem(key)
}

const USER_IDENTIFIER_KEY = 'codeketch_token'

export {
    getApiLink,
    saveKey,
    getValue,
    USER_IDENTIFIER_KEY
}