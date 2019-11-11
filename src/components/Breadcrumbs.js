import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import styled from 'styled-components';


class Breadcrumbs extends Component {
    
    render () {
        let pathName = window.location.pathname;
        let path = pathName.match(/\/(.*)/)[1];

        return (
            <Breadcrumb>
                <Breadcrumb.Item href="/" style={{color: 'var(--mainYellow)', textDecoration: 'none', fontSize: '1.1rem'}}>
                    <HomePage>
                        Home
                    </HomePage>
                </Breadcrumb.Item>


                <Breadcrumb.Item className="text-capitalize" active>{path}</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

const HomePage = styled.div`
    transition: all 0.3s linear;
    &:hover {
        transform: scale(1.2);
    }
`;


export default Breadcrumbs;