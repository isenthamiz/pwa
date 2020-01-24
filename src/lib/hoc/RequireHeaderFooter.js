import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

export default function(WrappedComponent) {
    class Wrapper extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            return (
                <div>
                    <Header />
                    <WrappedComponent />
                    <Footer />
                </div>
            )
        }
    }
}