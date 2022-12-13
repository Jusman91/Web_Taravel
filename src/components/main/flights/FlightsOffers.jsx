import React from 'react';
import '../data/ContentDataStyles.css';
import FlightsData from './FlightsData';
import ContentData from '../data/ContentData';

function FlightsOffers({ flights }) {
	const data = FlightsData(flights);
	return (
		<>
			<section className='container-content'>
				<div className='head'>
					<h2>Flight Offers</h2>
					<p>
						Hundreds of our travellers are going to this
						trips. Get the best Flight's Deal!
					</p>
				</div>
				<div className='wrapp-content'>
					{data.map((item, idx) => (
						<ContentData
							key={idx}
							cNameContainer={item.cNameContainer}
							cName={item.cName}
							img1={item.img1}
							textHeading={item.textHeading}
							text1={item.text1}
							text2={item.text2}
							currency={item.currency}
							price={item.price}
							btnClass={item.btnClass}
							btn={item.btn}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default FlightsOffers;
