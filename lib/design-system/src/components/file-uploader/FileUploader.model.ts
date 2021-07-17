export enum FILETYPE {
    PDF =0,
    DOC
}

export interface IFile {
    fileName: string;
    fileType: string;
    file: File;
}
 
export interface IFileUploaderState {
     files: Array<IFile>;
 }
 
export interface IFileUploaderProps {

}