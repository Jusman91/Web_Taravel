import React from 'react';
import ChooseUsData from '../banners/ChooseUsData';
import '../banners/ChooseUsStyles.css';

function ChooseUs() {
	return (
		<>
			<div className='container-why-choose-us'>
				<div className='head'>
					<h2>Why Choose Us?</h2>
					<p>
						The simple and great reason to love Smailing
						Tour.
					</p>
				</div>
				<div className='why-choose-us'>
					<ChooseUsData
						text1='$'
						text2='guarantee'
						text3='Best price gurantee'
					/>
					<ChooseUsData
						text1='5'
						text2='steps'
						text3='Easy & simple'
						text4='Booking process'
					/>
					<ChooseUsData
						text1='>10'
						text2='more'
						text3='of best deals'
						text4='and giveaways'
					/>
					<ChooseUsData
						text1='24'
						text2='hours'
						text3='Customer support with'
						text4='unique experiences'
					/>
				</div>
			</div>
			<div className='sosial-media'>Instagram</div>
		</>
	);
}

export default ChooseUs;
