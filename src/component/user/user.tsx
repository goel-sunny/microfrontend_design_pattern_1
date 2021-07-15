import {IUserUIModel} from '../../models/ui/user.ui.model';

interface IUserProp {
        user: IUserUIModel
}

export function User(props: IUserProp){
    return (<section>
                <div> Name : {props.user.name} </div>
                <div> Email : {props.user.email} </div>
        </section>);
}