import cookie from "js-cookie";


// set in cookies

export const setCookie = (key, value) => {
    if(window !== 'undefined'){
        cookie.set(key, value, {
            expires: 1
        })
    }
}

// get from cookies

export const getCookie = (key) => {
    // if(window !== 'undefined'){
        return cookie.get(key);
    // }
}


// remove from cookies

export const removeCookie = (key) => {
    if(window !== 'undefined'){
        cookie.remove(key);
    }
}

// set in local storage 

export const setLocalStorage = (key, value) => {
    if(window !== 'undefined'){
        localStorage.setItem(key, JSON.stringify(value))
    }
}


// remove from local storage 

export const removeLocalStorage = (key) => {
    if(window !== 'undefined'){
        localStorage.removeItemItem(key)
    }
}


// save user info while signin in cookie and local storage

export const authenicate = (response, next) => {
    setCookie('token', (response.data.id))
    setLocalStorage('user', response.data.id)
    console.log("cookie created", response.data.id)
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
    if(window !== 'undefined'){
        const cookieChecked = getCookie('token');
        if(cookieChecked){
            let user = localStorage.getItem('user')
            console.log(user)
            if(user){
                return JSON.parse(user);
            }
        } 
    }

    return false;
}


