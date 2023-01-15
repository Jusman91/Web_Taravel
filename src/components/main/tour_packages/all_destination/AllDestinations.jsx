import '../all_destination/AllDestinations.css';
import ContentData from '../../data/ContentData';
import TourData from '../TourData';
import FilterPackages from '../../tour_packages/filter_packages/FilterPackages';
import { useState } from 'react';
import ResFilter from '../filter_packages/ResFilter';

function AllDestinations({ tourpackages }) {
	const [activeCategory, setActiveCategory] = useState('');
	const [data, setData] = useState(TourData(tourpackages));
	const filterResult = (params) => {
		if (params === 'popularity') {
			const result = TourData(tourpackages).filter(
				(curData) => {
					return curData.category === params;
				},
			);
			setData(result);
			setActiveCategory('popularity');
		}

		if (params === 'lowest') {
			const lowestdata = TourData(tourpackages).sort(
				(a, b) => parseFloat(a.price) - parseFloat(b.price),
			);
			setData(lowestdata);
			setActiveCategory('lowest');
		}
		if (params === 'highest') {
			const highestdata = TourData(tourpackages).sort(
				(a, b) =>
					b.price.localeCompare(a.price, undefined, {
						numeric: true,
					}),
			);
			setData(highestdata);
			setActiveCategory('highest');
		}
	};

	const [showFilter, setShowFilter] = useState('false');
	const handleShow = () => {
		setShowFilter(!showFilter);
	};

	return (
		<>
			<div className='container-all-destinations'>
				<ResFilter setShowFilter={handleShow} />
				<div
					className={
						showFilter ? 'showFilter' : 'filter-packages'
					}>
					<FilterPackages
						handleFilter={filterResult}
						activeCategory={activeCategory}
					/>
				</div>
				<div className='all-destinations'>
					<h2>All Destinations</h2>
					<div className='wrapp-content-tour'>
						{data.map((item) => (
							<ContentData
								key={item.id}
								id={item.id}
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
				</div>
			</div>
		</>
	);
}

export default AllDestinations;
