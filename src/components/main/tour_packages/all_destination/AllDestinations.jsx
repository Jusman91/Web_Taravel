import '../all_destination/AllDestinations.css';
import TrendingTour from '../../tour_packages/TrendingTour';
import HotelsOffers from '../../hotels/HotelsOffers';
import { useState } from 'react';

function AllDestinations() {
	const [activeList, setActiveList] = useState('trending');
	return (
		<>
			<div className='container-all-destinations'>
				<div className='filter-packages'>
					<h2>Filter Packages</h2>
				</div>
				<div>
					<ul className='list-destinations'>
						<li
							className={
								activeList === 'trending'
									? 'active-list-destinations'
									: ''
							}
							onClick={() => setActiveList('trending')}>
							Trending Tour Packages
						</li>
						<li
							className={
								activeList === 'all'
									? 'active-list-destinations'
									: ''
							}
							onClick={() => setActiveList('all')}>
							All Destinatioons
						</li>
					</ul>
					{activeList === 'trending' && <TrendingTour />}
					{activeList === 'all' && <HotelsOffers />}
				</div>
			</div>
		</>
	);
}

export default AllDestinations;
