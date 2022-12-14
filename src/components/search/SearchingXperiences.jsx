import { useState } from 'react';
import { addDays } from 'date-fns/esm';
import SearchData from './SearchData';

export const SearchingXperiences = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(
		addDays(new Date(), 1),
	);

	return (
		<>
			<SearchData
				label='Where to go:'
				placeholder='Select To Go...'
				startDate={startDate}
				setStartDate={setStartDate}
				endDate={endDate}
				setEndDate={setEndDate}
			/>
		</>
	);
};

export default SearchingXperiences;
