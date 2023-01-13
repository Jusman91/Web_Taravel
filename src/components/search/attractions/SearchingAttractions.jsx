import SearchData from '../container/SearchData';

export const SearchingAttractions = () => {
	return (
		<>
			<div className='container-grid'>
				<SearchData
					label='Country:'
					placeholder='City, Country'
				/>
				<button className='btn-src'>Search</button>
			</div>
		</>
	);
};

export default SearchingAttractions;
