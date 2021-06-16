import React,{Component} from 'react';      

import Header from 'parts/Header';

export default class LandingPage extends Component {
    render(){
        return(
            // react fragment
            <> 
                <Header {...this.props}></Header>
            </>
        )
    }
}
