const getApiLink = () => {
    let api_link = 'https://codeketch-backend.onrender.com/'
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
