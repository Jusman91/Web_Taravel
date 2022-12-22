import '../all_destination/AllDestinations.css';
import TrendingTour from '../../tour_packages/TrendingTour';
import { useState } from 'react';
import FilterPackages from '../filter_packages/FilterPackages';

function AllDestinations() {
	const [activeList, setActiveList] = useState('trending');
	return (
		<>
			<div className='container-all-destinations'>
				<div className='filter-packages'>
					<FilterPackages />
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
					{activeList === 'all' && (
						<TrendingTour tourpackages />
					)}
				</div>
			</div>
		</>
	);
}

export default AllDestinations;
