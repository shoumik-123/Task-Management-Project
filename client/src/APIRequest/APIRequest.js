import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";

const BaseURL = "http://localhost:3000/api/v1"



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
                if(res.data['data']['keyPattern']['email'] ===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else {
                    ErrorToast("Something Wrongx")
                    return false;
                }
            }
            else {
                SuccessToast("Registration Successful")
                return true;
            }
        }
        else {
            ErrorToast("Something Wrongy")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Wrongz")
        return false;
    })
}