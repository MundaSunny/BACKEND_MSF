import { catchAsyncErrors} from "./middlewares/catchAsyncErrors.js";
import {Message} from "../modelsmessageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
export const sendMessage = catchAsyncErrors(async(req,resizeBy,next) => {
    const {firstName,lastName,email,phone,message} =req.body;
if(!firstName || lastName || email || phone || message){
    return next(new ErrorHandler("Please fill the complete form",400));
    
}
    await Message.create({firstName,lastName,email,phone,message});
    res.status(200).json({
        success:true,
        message: "Message Send successfully",
    });


})