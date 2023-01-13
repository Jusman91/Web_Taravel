import '../container/SearchingDataStyles.css';
import { FiMapPin } from 'react-icons/fi';

export const SearchData = (props) => {
	return (
		<>
			<section className='wrapper-input'>
				<div className='input-destination-data'>
					<div className='icon'>
						<FiMapPin />
					</div>
					<label htmlFor='destination'>{props.label}</label>
					<input
						type='text'
						placeholder={props.placeholder}
					/>
				</div>
			</section>
		</>
	);
};

export default SearchData;
