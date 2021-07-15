import { ILocationModel, IUserNameModel } from "../common/common.model";

export interface ICreateUserUIModel {
    name: IUserNameModel;
    gender: string;
    dob:string;
    email: string;
    address: Partial<ILocationModel>;
    phone:string;
}