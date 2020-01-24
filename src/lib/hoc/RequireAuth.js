import React from 'react';
import {Redirect} from 'react-router-dom';

export default function(WrappedComponent) {
    class Authenticate extends React.Component {
        constructor(props) {
            super(props)
        }

        render()  {
            if(false) {
                <Redirect to='/login' />
            }
            return <WrappedComponent />
        }
    }
}