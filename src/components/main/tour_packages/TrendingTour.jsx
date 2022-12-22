import React from 'react';
import './TrendingTourStyles.css';
import TourData from './TourData';
import ContentData from '../data/ContentData';

function TrendingTour({ tourpackages }) {
	const data = TourData(tourpackages);
	return (
		<>
			<section className='container-tour-packages'>
				<div className='head'>
					<h2>Trending Tour Packages</h2>
					<p>
						Hundreds of our travellers are going to this
						trips. Embark on your unforgetable journeys too.
					</p>
				</div>
				<div className='wrapp-content-tour'>
					{data.map((item, idx) => (
						<ContentData
							key={idx}
							containerData={item.containerData}
							cNameContainer={item.cNameContainer}
							cName={item.cName}
							img1={item.img1}
							text={item.text}
							textHeading={item.textHeading}
							cNamePrice={item.cNamePrice}
							text2={item.text2}
							currency={item.currency}
							price={item.price}
							btnClass={item.btnClass}
							descTourHover={item.descTourHover}
							details={item.details}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default TrendingTour;
