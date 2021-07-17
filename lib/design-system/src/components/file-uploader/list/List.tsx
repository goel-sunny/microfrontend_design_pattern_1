import { SyntheticEvent } from 'react';
import {IFile} from '../FileUploader.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './List.scss';


interface IListProps {
    files: Array<IFile>;
    removeFile?: Function
}

export function List(props: IListProps) {
    const onRemoveFileEvent = (event: SyntheticEvent)=>{
        console.log(event);
    } 
    
    const files = props.files.map((file)=>{
        return (
            <div className="list__item" key={file.fileName}>
                <span className="list__item__label">{file.fileName}</span>     
                <span className="list__item__action" onClick={onRemoveFileEvent}>
                    <FontAwesomeIcon icon={faTrash} />
                </span>     
            </div>  
        )
    });

    return (
        <section className="list-wrapper">
            <div role="list" aria-label="Uploaded File List"  className="list"> 
            <div className="list__header">
                <span className="list__header__label">File Name </span>     
                <span className="list__header__action" > Actions </span>     
            </div>
                {files}
            </div>
        </section>
    )
}