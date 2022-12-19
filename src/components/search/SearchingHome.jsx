import '../search/SearchListData.css';
import { useState } from 'react';
import SearchingFlights from './SearchingFlights';
import SearchingHotels from './SearchingHotels';
import SearchingPackages from './SearchingPackages';
import SearchingXperiences from './SearchingXperiences';
import SearchingAttractions from './SearchingAttractions';
import { BsShieldCheck } from 'react-icons/bs';
import { FaPassport } from 'react-icons/fa';
import { MdOutlineAttractions } from 'react-icons/md';
import { GiBackpack } from 'react-icons/gi';
import { RiSuitcase3Line } from 'react-icons/ri';
import { FaHotel } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import SearchListData from './SearchListData';
import SearchingInsurance from './SearchingInsurance';

function SearchingHome() {
	const [componentSearch, setComponentSearch] =
		useState('flights');
	console.log(componentSearch);
	return (
		<>
			<div className='container-section'>
				<div className='container-list'>
					<div
						onClick={() => setComponentSearch('flights')}>
						<SearchListData
							cName={
								componentSearch === 'flights'
									? 'wrapper-list-active'
									: 'wrapper-list'
							}
							icon={IoMdPaperPlane}
							label='Flights'
						/>
					</div>
					<div onClick={() => setComponentSearch('hotels')}>
						<SearchListData
							cName={
								componentSearch === 'hotels'
									? 'wrapper-list-active'
									: 'wrapper-list'
							}
							icon={FaHotel}
							label='Hotels'
						/>
					</div>
					<div
						onClick={() =>
							setComponentSearch('tourpackages')
						}>
						<SearchListData
							cName={
								componentSearch === 'tourpackages'
									? 'wrapper-list-active'
									: 'wrapper-list'
							}
							icon={RiSuitcase3Line}
							label='Tour Packages'
						/>
					</div>
					<div
						onClick={() =>
							setComponentSearch('xperiences')
						}>
						<SearchListData
							cName={
								componentSearch === 'xperiences'
									? 'wrapper-list-active'
									: 'wrapper-list'
							}
							icon={GiBackpack}
							label='Xperiences'
						/>
					</div>
					<div
						onClick={() =>
							setComponentSearch('attractions')
						}>
						<SearchListData
							cName={
								componentSearch === 'attractions'
									? 'wrapper-list-active'
									: 'wrapper-list'
							}
							icon={MdOutlineAttractions}
							label='Attractions'
						/>
					</div>
					<div onClick={() => setComponentSearch('visa')}>
						<SearchListData
							cName={
								componentSearch === 'visa'
									? 'wrapper-list-active'
									: 'wrapper-list'
							}
							icon={FaPassport}
							label='Visa'
						/>
					</div>
					<div
						onClick={() => setComponentSearch('insurance')}>
						<SearchListData
							cName={
								componentSearch === 'insurance'
									? 'wrapper-list-active'
									: 'wrapper-list'
							}
							icon={BsShieldCheck}
							label='Insurance'
						/>
					</div>
				</div>

				{componentSearch === 'flights' && (
					<SearchingFlights />
				)}
				{componentSearch === 'hotels' && (
					<SearchingHotels />
				)}
				{componentSearch === 'tourpackages' && (
					<SearchingPackages />
				)}
				{componentSearch === 'xperiences' && (
					<SearchingXperiences />
				)}
				{componentSearch === 'attractions' && (
					<SearchingAttractions />
				)}
				{componentSearch === 'insurance' && (
					<SearchingInsurance />
				)}
			</div>
		</>
	);
}

export default SearchingHome;
