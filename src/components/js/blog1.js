import React from 'react';
import Header from './header.js';
import feed1img from '../../assets/telescope.jpeg';
import styled from 'styled-components';
const  Blog1 = props  => {

  return(
    <div className = "Blog1">
    	<Header />
    	<Title>About Hubble</Title>
    	<ImgCss src={feed1img} alt="blog-image"/>
        <p>The Hubble Space Telescope (often referred to as HST or Hubble) is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope but it is one of the largest and most versatile, well known both as a vital research tool and as a public relations boon for astronomy. The Hubble telescope is named after astronomer Edwin Hubble and is one of NASA's Great Observatories, along with the Compton Gamma Ray Observatory, the Chandra X-ray Observatory, and the Spitzer Space Telescope.[6]

		Hubble features a 2.4-meter (7.9 ft) mirror, and its four main instruments observe in the ultraviolet, visible, and near infrared regions of the electromagnetic spectrum. Hubble's orbit outside the distortion of Earth's atmosphere allows it to capture extremely high-resolution images with substantially lower background light than ground-based telescopes. It has recorded some of the most detailed visible light images, allowing a deep view into space. Many Hubble observations have led to breakthroughs in astrophysics, such as determining the rate of expansion of the universe.
		
		The Hubble telescope was built by the United States space agency NASA with contributions from the European Space Agency. The Space Telescope Science Institute (STScI) selects Hubble's targets and processes the resulting data, while the Goddard Space Flight Center controls the spacecraft.[7] Space telescopes were proposed as early as 1923. Hubble was funded in the 1970s with a proposed launch in 1983, but the project was beset by technical delays, budget problems, and the 1986 Challenger disaster. It was finally launched by Space Shuttle Discovery in 1990, but its main mirror had been ground incorrectly, resulting in spherical aberration that compromised the telescope's capabilities. The optics were corrected to their intended quality by a servicing mission in 1993.
		
		Hubble is the only telescope designed to be maintained in space by astronauts. Five Space Shuttle missions have repaired, upgraded, and replaced systems on the telescope, including all five of the main instruments. The fifth mission was canceled on safety grounds following the Columbia disaster (2003), but NASA administrator Michael D. Griffin approved the fifth servicing mission which was completed in 2009. The telescope is operating as of 2020, and could last until 2030–2040.[3] Its successor is the James Webb Space Telescope (JWST) which is scheduled to be launched in March 2021.[8]
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
export default Blog1;
