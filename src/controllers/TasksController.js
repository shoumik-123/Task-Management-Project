const TasksModel = require("../models/TasksModel");



exports.createTask =(req, res)=>{

    let reqBody = req.body;
    let email = req.headers['email'];

    TasksModel.create({...reqBody , Email:email})
        .then((result) => {
            res.status(200).json({status: "Success", data: result})
        })
        .catch((err) => {
            res.status(400).json({status: "Fail", data: err})
        })
}


exports.deleteTask =(req,res)=>{
    let id = req.params.id;
    let Query = {_id:id}

    TasksModel.deleteOne(Query)
        .then((data)=>{
            res.status(200).json({status: "Deleted", data: data})
        })
        .catch((err)=>{
            res.status(400).json({status: "Fail", data: err})
        });
}
//
// exports.updateTaskStatus =(req,res)=>{
//     let id = req.params.id;
//     let status = req.params.status;
//     let Query = {_id:id}
//     let reqBody = {status:status}
//
//     TasksModel.updateOne(Query , reqBody)
//         .then((result) => {
//             console.log(result.acknowledged)
//
//             if (result.acknowledged) {
//                 res.status(200).json({ status: "Success", data: result });
//             } else {
//                 res.status(400).json({ status: "Fail", message: "Operation not acknowledged" });
//             }
//         })
//         .catch((err) => {
//             res.status(400).json({ status: "Fail", data: err });
//         });
// }
exports.updateTaskStatus = (req, res) => {
    let id = req.params.id;
    let status = req.params.status;
    let Query = { _id: id }
    let reqBody = { status: status }

    TasksModel.updateOne(Query, reqBody)
        .then((result) => {
            console.log(result.acknowledged) // <-- print the value of acknowledged to the console
            if (result.acknowledged) {
                res.status(200).json({ status: "Success", data: result });
            } else {
                res.status(400).json({ status: "Fail", message: "Operation not acknowledged" });
            }
        })
        .catch((err) => {
            res.status(400).json({ status: "Fail", data: err });
        });
}



// exports.updateTaskStatus = (req, res) => {
//     let id = req.params.id;
//     let status = req.params.status === 'true'; // Convert status to boolean
//     let query = { _id: id };
//     let update = { $set: { status: status } }; // Update status field with new value
//
//     TasksModel.updateOne(query, update)
//         .then((result) => {
//             console.log(result.acknowledged)
//
//             if (result.acknowledged) {
//                 res.status(200).json({ status: "Success", data: result });
//             } else {
//                 res.status(400).json({ status: "Fail", message: "Operation not acknowledged" });
//             }
//         })
//         .catch((err) => {
//             res.status(400).json({ status: "Fail", data: err });
//         });
// };
