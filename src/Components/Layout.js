import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

export default function Layout(props) {
    const layoutStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    };

    const contentStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div className="layout" style={layoutStyle}>
            <NavBar />
            <Header />
            <div className="content" style={contentStyle}>
                {props.children}
            </div>
        </div>
    );
}
