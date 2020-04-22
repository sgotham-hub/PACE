import React, { Component } from "react";
import styled from 'styled-components';
class Footer extends Component {
    render() {
        return (           
                 <Floor>
                    <Text>Software owned by AstroSpace. Copyright 2020 SUdheer Gotham. </Text>
                    <Text> All Rights Reserved</Text>
                </Floor>
        );
    }
}

const Text = styled.p`
 padding-left: 2px;
 border-top: 1px soild white;
 color: white;
 text-align: center;
`;

const Floor = styled.footer`
background-color: black;
`;

export default Footer;