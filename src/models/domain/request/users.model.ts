import { IInfoModel, IUserNameModel, ILocationModel, ILoginModel, IBirthRegTimeModel, IIdModel, IPictureModel } from "../../common/common.model";

export interface IUsersRequestModel{
    results: Array<IUserModel>;
    info: IInfoModel
}

export interface IUserModel {
    gender: string;
    name: IUserNameModel;
    location: ILocationModel;
    email: string;
    login: ILoginModel;
    dob: IBirthRegTimeModel;
    registered: IBirthRegTimeModel;
    phone:string;
    cell: string;
    id: IIdModel;
    picture: IPictureModel,
    nat: string
  }

