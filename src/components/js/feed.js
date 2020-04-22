import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const  Feeds = props  => {

  return(
         <div className = "feeds">
            <ul>
              <List className="image"><ImgCss src = {props.image} /></List>
              <List className="link"><Link to = {"/blog"+props.id}  >{props.title}</Link>
              </List>
              <List className="date">Dated On:  {props.date} </List>
              <List>Summary: {props.summary} </List>
              <Splitter></Splitter>
            </ul>         
          </div> 

  )

}

const List = styled.li`
list-style: none;
padding-right: 2px;
`;

const ImgCss = styled.img`
  width: 95%;
  height: 300px;
`;

const Splitter = styled.div`
  padding-top: 30px;
`;

export default Feeds;

