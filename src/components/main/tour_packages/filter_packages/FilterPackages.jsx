import '../filter_packages/FilterPackages.css';
import {
	IoIosSearch,
	IoIosArrowDown,
} from 'react-icons/io';
import { RiLoader3Fill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';
import { useState } from 'react';

function FilterPackages() {
	const [activeShow, setActiveShow] = useState({
		list: false,
		range: false,
	});
	// const [activeRange, setActiveRange] = useState('');

	// const handleRange = () => {
	// 	setActiveRange(!activeRange);
	// };
	const handleActiveShow = (key) => {
		setActiveShow({
			...activeShow,
			key: !activeShow[key],
		});
	};
	console.log(activeShow);
	return (
		<>
			<section className='container-filter'>
				<div className='filter-title'>
					<h2>Filter Packages</h2>
				</div>
				<div className='result-filter'>
					<IoIosSearch className='icon-search' />
					<p>31 results found</p>
				</div>
				<div className='filter-price'>
					<div className='title'>
						<IoIosArrowDown
							id='ada'
							onClick={() => handleActiveShow('list')}
							className={
								activeShow === handleActiveShow
									? 'icon-filter-rotate'
									: 'icon-filter'
							}
							name='price-list'
						/>
						<h6>SORT RESULTS</h6>
					</div>
					{!activeShow ? null : (
						<div className='price-list'>
							<div className='lowest'>Lowest Price</div>
							<div className='highest'>Highest Price</div>
							<div className='popularity'>Popularity</div>
						</div>
					)}
					<div className='price-range'>
						<div className='title'>
							<IoIosArrowDown
								id='abc'
								onClick={() => handleActiveShow('range')}
								className={
									activeShow === handleActiveShow
										? 'icon-filter-rotate'
										: 'icon-filter'
								}
							/>
							<h6>PRICE RANGE</h6>
							<RiLoader3Fill className='icon-loader' />
						</div>
						{activeShow.range === 'range' ? null : (
							<>
								<div>
									<input
										type='range'
										name='slider'
										id='slider'
										min='0'
										max='100000000'
										step='1000000'
									/>
								</div>
								<div className='range-value'>
									<span className='from'>Rp 0</span>
									<span className='to'>Rp 100,000,000</span>
								</div>
							</>
						)}
					</div>
				</div>
				<div className='travel-style'>
					<div className='title'>
						<IoIosArrowDown className='icon-filter' />
						<h6>TRAVEL STYLE</h6>
						<RiLoader3Fill className='icon-loader' />
					</div>
					<div className='list-style'>
						<h6>Private Journeys</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Family Holidays</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Luxury</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Adventure</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Just the Two of Us</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Cost Saver</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>FoodieX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>FamilyX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>AdventureX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>RomanticX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>CultureX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>SportX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>PhotographyX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>ExoticX</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Open Trip X</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Fashion X</h6>
						<BsCheck2 />
					</div>
				</div>
				<div className='tour-type'>
					<div className='title'>
						<IoIosArrowDown className='icon-filter' />
						<h6>TOUR TYPE</h6>
						<RiLoader3Fill className='icon-loader' />
					</div>
					<div className='list-style'>
						<h6>Group Series</h6>
						<BsCheck2 />
					</div>
					<div className='list-style'>
						<h6>Fly, Stay, Play</h6>
						<BsCheck2 />
					</div>
				</div>
				<div className='duration'>
					<div className='title'>
						<IoIosArrowDown className='icon-filter' />
						<h6>DURATION</h6>
						<RiLoader3Fill className='icon-loader' />
					</div>
					<div>
						<input
							type='range'
							name='slider'
							id='slider'
							min='1'
							max='20'
						/>
					</div>
					<div className='range-value'>
						<span className='from'>1</span>
						<span className='to'>20</span>
					</div>
				</div>
				<button className='btn-destinatios'>
					Explore Other Destinations
				</button>
			</section>
		</>
	);
}

export default FilterPackages;
