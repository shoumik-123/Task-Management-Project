import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state/settings-slice";
import {setToken, setUserDetails} from "../helper/SessionHelper";

const BaseURL = "http://localhost:8080/api/v1"



export function RegistrationRequest(firstName , lastName , mobile , email, password , photo) {

    //api call start
    store.dispatch(ShowLoader())



    let URL = BaseURL + "/registration";
    let PostBody = {
        Email :email,
        FirstName :firstName,
        LastName :lastName,
        Mobile :mobile,
        Password :password,
        Photo :photo
    }



    return axios.post(URL,PostBody).then((res)=>{
        // api call end
        store.dispatch((HideLoader()))


        if(res.status===200){
            if(res.data['status'] === "fail"){
                if (res.data['data']['keyPattern']['email']) {
                    ErrorToast("Email Already Exists");
                    return false;
                } else {
                    ErrorToast("Something Went Wrong");
                    return false;
                }

            }
            else {
                SuccessToast("Registration Successful")
                return true;
            }
        }
        else {
            ErrorToast("Something Wrong")
            return false;
        }
    }).catch((err)=>{
        //api call end
        store.dispatch((HideLoader()))


        ErrorToast("Something Wrong")
        return false;
    })
}
export function LoginRequest(email,password) {

    //api call start
    store.dispatch(ShowLoader())

    let URL = BaseURL + "/login";
    let PostBody = {
        Email :email,
        Password :password
    }
    return axios.post(URL , PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            setToken(res.data['token'])
            setUserDetails(res.data['data'])
            SuccessToast("Login Success")
            return true;
        }
        else {
            ErrorToast("Invalid Email or Password")
            return false;
        }
    }).catch((err)=>{
        store.dispatch(HideLoader())
        ErrorToast("Something Wrong")
        return false;
    })
}