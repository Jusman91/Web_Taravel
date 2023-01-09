import React from 'react';
import '../home/HeroVideoStyles.css';
import { Link } from 'react-router-dom';
import heroVideo from '../../../asset/hero/v1.mp4';

function HeroVideo() {
	return (
		<div className='hero-container'>
			<video autoPlay muted loop src={heroVideo}></video>
			<div className='hero-text'>
				<h1>
					Whats Your <span>X</span>
				</h1>
				<p>Ngakak Xperiences - Your new way to travel</p>
				<Link to='/'>
					<button>Xplore here</button>
				</Link>
			</div>
		</div>
	);
}

export default HeroVideo;
