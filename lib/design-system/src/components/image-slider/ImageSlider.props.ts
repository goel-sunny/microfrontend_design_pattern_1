export interface IImageSliderData {
    id: string;
    imgUrl: string;
    meta: string;
}

export interface IImageSliderProps{
    data: Array<Partial<IImageSliderData>>;
    defaultImage?: Partial<IImageSliderData>;
    auto?: boolean;
    duration?: number; // will be in milisecs
    random?: boolean
}