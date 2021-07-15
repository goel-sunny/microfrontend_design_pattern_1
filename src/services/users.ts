import {  IUsersRequestModel } from "../models/domain/request/users.model";
import { IUserUIModel } from "../models/ui/user.ui.model";


export function getUsers(): Promise<Array<IUserUIModel>> {
    return fetch('https://randomuser.me/api/?results=50').then((res)=>res.json()).then((usersRequestModelData:IUsersRequestModel)=>{
            return usersRequestModelData.results                
    });
}


