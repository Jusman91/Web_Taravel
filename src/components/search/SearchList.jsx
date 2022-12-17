import '../search/SearchListData.css';
import { BsShieldCheck } from 'react-icons/bs';
import { FaPassport } from 'react-icons/fa';
import { GrAttraction } from 'react-icons/gr';
import { GiBackpack } from 'react-icons/gi';
import { RiSuitcase3Line } from 'react-icons/ri';
import { FaHotel } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';

import SearchListData from './SearchListData';
export const SerchList = (props) => {
	return (
		<>
			<section>
				<div className='container-list'>
					<SearchListData
						icon={IoMdPaperPlane}
						label='Flights'
					/>
					<SearchListData icon={FaHotel} label='Hotels' />
					<SearchListData
						icon={RiSuitcase3Line}
						label='Tour Packages'
					/>
					<SearchListData
						icon={GiBackpack}
						label='Xperiences'
					/>
					<SearchListData
						name='attractions'
						icon={GrAttraction}
						label='Attractions'
					/>
					<SearchListData icon={FaPassport} label='Visa' />
					<SearchListData
						icon={BsShieldCheck}
						label='Insurance'
					/>
				</div>
			</section>
		</>
	);
};

export default SerchList;
