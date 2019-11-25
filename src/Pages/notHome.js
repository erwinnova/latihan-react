import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

class NotHome extends Component{
    render(){
        return(
            <div>
                <div>
                Ini Bukan Home
                </div>
                <Link to='/'>
                    <Button color='secondary'>
                        pindah ke Home
                    </Button>
                </Link>
            </div>
        )
    }
}

export default NotHome