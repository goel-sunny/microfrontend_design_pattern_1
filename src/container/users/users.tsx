import React from 'react';
import { IUserUIModel } from '../../models/ui/user.ui.model';
import { getUsers } from '../../services/users';


export class Users extends React.Component<{}, {users:Array<IUserUIModel>}> {
        constructor(props: {}) {
                super(props);
                this.state = {
                        users: []
                }
        }

        componentDidMount(){
                getUsers().then((users:Array<IUserUIModel>)=>{
                        console.log(users);
                        this.setState({users});
                })
        }


        render() {
                const list = this.state.users.map((user,index)=>{
                       return <div key={user.id.value + index}> 
                                <span>{user.name.title + ' ' + user.name.first + ' '+user.name.last}</span>
                             </div> 
                });
                return <section className="users-wrapper">
                        { list }                       
                        </section>
        }
}
