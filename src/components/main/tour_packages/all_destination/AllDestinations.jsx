import '../all_destination/AllDestinations.css';
import ContentData from '../../data/ContentData';
import TourData from '../TourData';
import FilterPackages from '../../tour_packages/filter_packages/FilterPackages';
import { useState } from 'react';
import { useEffect } from 'react';

function AllDestinations({ tourpackages }) {
	const [data, setData] = useState(TourData(tourpackages));
	const filterResult = (e) => {
		// const result = TourData().filter((curData) => {
		// 	return curData.category;
		// });
		const result = data.sort((a, b) =>
			a.price.localeCompare(b.price, undefined, {
				numeric: true,
			}),
		);
		console.log(result);
		setData(result);
	};

	return (
		<>
			<div className='container-all-destinations'>
				<div className='filter-packages'>
					<FilterPackages handleFilter={filterResult} />
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
				{/* <div>
					<ul className='list-destinations'>
						<li
							className={
								activeList === 'all'
									? 'active-list-destinations'
									: ''
							}
							onClick={() => setActiveList('all')}>
							All Destinations
						</li>
						<li
							className={
								activeList === 'trending'
									? 'active-list-destinations'
									: ''
							}
							onClick={() => setActiveList('trending')}>
							Trending Tour Packages
						</li>
					</ul>
					{activeList === 'all' && (
						<TrendingTour tourpackages />
					)}
					{activeList === 'trending' && <TrendingTour />}
				</div> */}
			</div>
		</>
	);
}

export default AllDestinations;
