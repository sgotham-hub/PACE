import React from 'react';
import Header from './header.js';
import feed3img from '../../assets/pulsar.gif';
import styled from 'styled-components';
const  Blog3 = props  => {

  return(
    <div className = "Blog3">
    	<Header />
    	<Title> Pulsars </Title>
    	<ImgCss src={feed3img} alt="blog-image"/>
        <p> A pulsar (from pulse and -ar as in quasar)[1] is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles.[2] This radiation can be observed only when a beam of emission is pointing toward Earth (much like the way a lighthouse can be seen only when the light is pointed in the direction of an observer), and is responsible for the pulsed appearance of emission. Neutron stars are very dense, and have short, regular rotational periods. This produces a very precise interval between pulses that ranges from milliseconds to seconds for an individual pulsar. Pulsars are one of the candidates for the source of ultra-high-energy cosmic rays (see also centrifugal mechanism of acceleration).

		The periods of pulsars make them very useful tools for astronomers. Observations of a pulsar in a binary neutron star system were used to indirectly confirm the existence of gravitational radiation. The first extrasolar planets were discovered around a pulsar, PSR B1257+12. Certain types of pulsars exceed atomic clocks in their accuracy in keeping time.
</p>
    </div>
  );
}

const ImgCss = styled.img`
 	width: 100%;
	height: auto;
	padding: 2px, 2px;
`;

const Title = styled.p`
 	font-weight: bold;
 	 font-size: 24px;
 	 text-align: center;
`;

export default Blog3;
