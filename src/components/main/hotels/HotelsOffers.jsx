import React from 'react';
import '../data/ContentDataStyles.css';
import HotelsData from './HotelsData';
import ContentData from '../data/ContentData';

function HotelsOffers({ hotels }) {
	const data = HotelsData(hotels);
	return (
		<>
			<section className='container-content'>
				<div className='head'>
					<h2>Hotel Offers</h2>
					<p>
						Hundreds of our travellers are going to this
						trips. Get the best Hotel's Deal!
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
							wrapperbtn={item.wrapperbtn}
							btnClass={item.btnClass}
							btn={item.btn}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default HotelsOffers;
