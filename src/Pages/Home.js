import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

class Home extends Component{
    render(){
        return(
            <div>
                <div>
                Ini Home
                </div>
                <Link to='/not-home'>
                    <Button color='primary'>
                        pindah ke notHome
                    </Button>
                </Link>
            </div>
        )
    }
}

export default Home