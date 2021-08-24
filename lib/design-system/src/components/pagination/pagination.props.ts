export enum PageSize {
    TEN = 10,
    TWENTY = 20,
    FIFTY = 50,
    HUNDRED = 100
}

export interface IPaginationProps {
    currentPage?: number;
    totalCount: number;
    size?: PageSize;
}