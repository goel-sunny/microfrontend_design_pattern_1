import React from "react";
import styles from './create-user.module.scss';

export interface ICreateUserProps {
}

export class CreateUser extends React.Component{
    
    constructor(props:ICreateUserProps){
        super(props);
    }

    componentDidMount(){

    }


    render(){
        return (<section className={styles['create-user-wrapper']}>
                    <section className={styles['create-user__header']}>
                        <h2> Create User</h2>
                        <div><button>Back</button></div>
                    </section>
            </section>);
    }
}