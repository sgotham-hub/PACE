import React from 'react';
import Header from './header.js';
import feed2img from '../../assets/center.gif';
import styled from 'styled-components';
const  Blog2 = props  => {

  return(
    <div className = "Blog2">
    	<Header />
    	<Title> Journey To Galactic Center</Title>
    	<ImgCss src={feed2img} alt="blog-image"/>
        <p> Peering deep into the heart of our Milky Way galaxy, NASA’s Hubble Space Telescope reveals a rich tapestry of more than half a million stars. Except for a few blue foreground stars, the stars are part of the Milky Way’s nuclear star cluster, the most massive and densest star cluster in our galaxy. So packed with stars, it is equivalent to having a million suns crammed between us and our closest stellar neighbor, Alpha Centauri. At the very hub of our galaxy, this star cluster surrounds the Milky Way’s central supermassive black hole, which is about 4 million times the mass of our sun.

		Astronomers used Hubble’s infrared vision to pierce through the dust in the disk of our galaxy that obscures the star cluster. In this image, scientists translated the infrared light, which is invisible to human eyes, into colors our eyes can see. The red stars are either embedded or shrouded by intervening dust. Extremely dense clouds of gas and dust are seen in silhouette, appearing dark against the bright background stars. These clouds are so thick that even Hubble’s infrared capability could not penetrate them.
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

export default Blog2;
