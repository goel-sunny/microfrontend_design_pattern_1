import { SyntheticEvent } from 'react';
import { IFile } from '../FileUploader.model';
import './SelectDrop.scss';

interface ISelectDropProps {
    onFileInput: Function;
}

function parseEventFiletoIFile(file: File): IFile {
    return {
        fileName: file.name,
        fileType: file.type,
        file: file
    }
}

export function SelectDrop(props:ISelectDropProps){

    const onDropEvent = (event: SyntheticEvent)=>{
        props.onFileInput(event);
        event.preventDefault();
    }

    const onInputEvent = (event: any)=>{
        const fileList = event.target.files;
        props.onFileInput(parseEventFiletoIFile(fileList[0]));
        event.preventDefault();
    }

    const allowDrop = (event: SyntheticEvent) => {
        event.preventDefault();
      }
      
    return (
        <div className="selectDrop-wrapper">
            <div className="selectDrop"  onDrop={onDropEvent} onDragOver={allowDrop}>
                <h1><label className="selectDrop__input"  htmlFor="selectDropInputSelect">Select<input type="file" onInput={onInputEvent} id="selectDropInputSelect"  hidden/></label> or Drop the Item Here. </h1>
            </div>
        </div>
    )
}