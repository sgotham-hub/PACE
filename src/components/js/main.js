import React, {Component} from 'react';
import styled from 'styled-components';
import Feeds from './feed.js';
import feed1img from '../../assets/telescope.jpeg';
import feed2img from '../../assets/center.gif';
import feed4img from '../../assets/movement.gif';
import feed3img from '../../assets/pulsar.gif';

class Main extends Component{
  render(){
  return(
    <Body>
      <Title>The HUBBLE TELESCOPE</Title>
      <Feeds id="1"
           title = "About Hubble"
      		 date = "28/12/2004"
      		 summary = "The construction and Launch of the Hubble"
			 image = {feed1img} />

	 <Feeds id="2"
          title = "Movement of Stars at the center of or galaxy around a Supermassive Blackhole- Saggitarius-A"
      		 date = "21/02/2018"
      		 summary = "The stuff that hold the Milkyway together with the help of dark matter"
			 image = {feed4img} />

	 <Feeds id="3"
          title = "Habitat Pulsar as seen by Hubble"
      		 date = "28/07/2009"
      		 summary = "Pulsar bombarding gamma ray bursts"
			 image = {feed3img} />
    </Body>
  );
}
}

const Title = styled.h2`
  color: palevioletred;
`;

const Body = styled.main`
  padding-left: 2%;
`;

export default Main;