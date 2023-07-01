import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";

const BaseURL = "http://localhost:8080/api/v1"



export function RegistrationRequest(firstName , lastName , mobile , email, password , photo) {
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
        ErrorToast("Something Wrong")
        return false;
    })
}