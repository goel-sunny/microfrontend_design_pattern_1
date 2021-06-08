import React from "react";

interface ISideNavProps {
     options?: Array<string>;
}

interface ISideNavState{
    options ?: Array<string>;
}


export class SideNav extends React.Component<ISideNavProps , ISideNavState>{  
    constructor(props:ISideNavProps) {
     super(props);
    };

    componentDidMount() {
        // like api calls and etc.
        console.log('component initialisation logic goes here');
    }

    render(){
       return (
           <section>
               Main Component
          </section>
       ); 
    }

    componentWillUnmount() {
        // destruction logic goes here.
        console.log('will call at the time of destruction of component');
    }
}