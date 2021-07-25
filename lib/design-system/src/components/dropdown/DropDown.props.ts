import { ReactEventHandler } from "react";

export interface IOption<T> {
    name: string;
    id: string;
    value: T;
    disable?: boolean
}

export interface IValue<T> {
    id: string;
    value: T
}

export interface IDropDownProps {
    id?: string;
    label?: string;
    required?: boolean;
    options: Array<IOption<string | number>>;
    value?: IValue<string | number>;
    values?: IValue<Array<string | number>>;
    onChangeEvent?: Function;
}   