// import {toast} from "react-toastify";
//
// let emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
// let mobileRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
//
//
//
//
// class FormHelper {
//     IsEmpty(value){
//         return value.length===0;
//     }
//
//     IsMobile(value){
//         return mobileRegex.test(value);
//     }
//
//     IsEmail(value){
//         return emailRegex.test(value);
//     }
//
//     SuccessToast(msg){
//          toast.success(msg, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//         });
//     }
//     ErrorToast(msg){
//          toast.error(msg, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//         });
//
//     }
//
// }
//
//
// export const {
//     IsEmpty,
//     IsMobile,
//     IsEmail,
//     SuccessToast,
//     ErrorToast
// } = new FormHelper();




import { toast } from "react-toastify";

const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
const mobileRegex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
    IsEmpty(value) {
        return value.length === 0;
    }

    IsMobile(value) {
        return mobileRegex.test(value);
    }

    IsEmail(value) {
        return emailRegex.test(value);
    }
    ErrorToast = (msg) => {
        toast(msg+" Success ");
    };

    SuccessToast = (msg)=>{
        toast(msg+" Success ")
    }

}

export const {
    IsEmpty,
    IsMobile,
    IsEmail,
    SuccessToast,
    ErrorToast
} = new FormHelper();
