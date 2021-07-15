
export interface IUserNameModel {
    title: string;
    first: string;
    last: string;
}

export interface ICoordinate {
    latitude : number;
    longitude: number
}

export interface ITimeZone {
    offset: number;
    description: string
}

export interface ILocationModel {
    street: string;
    city: string;
    state: string;
    postcode: number;
    coordinates:ICoordinate;
    timezone: ITimeZone;
  
}

export interface ILoginModel {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string
  
}

export interface IBirthRegTimeModel{
    date: string;
    age: number
}

export interface IIdModel {
    name: string,
    value: string
}

export interface IPictureModel {
    large: string;
    medium: string;
    thumbnail: string
}

export interface IInfoModel {
    seed: string,
    results: number,
    page: number,
    version: number
 } 

