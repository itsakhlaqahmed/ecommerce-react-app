import cookie from "js-cookie";


// set in cookies

export const setCookie = (key, value) => {
    if(window){
        cookie.set(key, value, {
            expires: 1
        })
    }
}

// get from cookies

export const getCookie = (key) => {
    if(window){
        cookie.get(key);
    }
}


// remove from cookies

export const removeCookie = (key) => {
    if(window){
        cookie.remove(key);
    }
}

// set in local storage 

export const setLocalStorage = (key, value) => {
    if(window){
        localStorage.setItem(key, JSON.stringify(value))
    }
}


// remove from local storage 

export const removeLocalStorage = (key) => {
    if(window){
        localStorage.removeItemItem(key)
    }
}


// save user info while signin in cookie and local storage

export const authenicate = (response, next) => {
    setCookie('token', (response.data.token))
    setLocalStorage('user', response.data.token)
    next();
}

// signout

export const signOut = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();
}




// access user info form localstorage

export const isAuth = () => {
    if(window){
        const cookieChecked = getCookie('token');
        if(cookieChecked){
            let user = localStorage.getItem('user')
            if(user){
                return JSON.parse(user);
            }
        } 
    }

    return false;
}


