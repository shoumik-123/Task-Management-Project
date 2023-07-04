class SessionHelper{
    setToken(token){
        localStorage.setItem("token" , token)
    }
    getToken(){
        return localStorage.getItem("token")
    }

    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails" ,JSON.stringify(UserDetails))
    }
    setUserDetails(UserDetails){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }
}

export const {setToken , getToken , setUserDetails } = new SessionHelper();