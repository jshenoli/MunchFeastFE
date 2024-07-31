import { baseResponse } from "./base.response";
import { userVM } from "./user.vm";

export interface userResponseVM extends baseResponse{
    content ?: userVM
}