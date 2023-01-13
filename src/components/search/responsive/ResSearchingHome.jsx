import SearchListContainer from '../container/SearchListContainer';
import { BsShieldCheck } from 'react-icons/bs';
import { FaPassport } from 'react-icons/fa';
import { MdOutlineAttractions } from 'react-icons/md';
import { GiBackpack } from 'react-icons/gi';
import { RiSuitcase3Line } from 'react-icons/ri';
import { FaHotel } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import './ResSearchingHome.css';
import { Link } from 'react-router-dom';

const ResSearchingHome = () => {
	return (
		<div className='container-ResSearchHome'>
			<Link to='/flights' className='container-search-list'>
				<SearchListContainer
					cName={'wrapper-search-list'}
					icon={IoMdPaperPlane}
					label='Flights'
				/>
			</Link>
			<Link to='/hotels' className='container-search-list'>
				<SearchListContainer
					cName={'wrapper-search-list'}
					icon={FaHotel}
					label='Hotels'
				/>
			</Link>
			<Link
				to='/tourpackages'
				className='container-search-list'>
				<SearchListContainer
					cName={'wrapper-search-list'}
					icon={RiSuitcase3Line}
					label='Tour Packages'
				/>
			</Link>
			<Link
				to='/xperiences'
				className='container-search-list'>
				<SearchListContainer
					cName={'wrapper-search-list'}
					icon={GiBackpack}
					label='Xperiences'
				/>
			</Link>
			<Link
				to='/attractions'
				className='container-search-list'>
				<SearchListContainer
					cName={'wrapper-search-list'}
					icon={MdOutlineAttractions}
					label='Attractions'
				/>
			</Link>
			<Link className='container-search-list'>
				<SearchListContainer
					cName={'wrapper-search-list'}
					icon={FaPassport}
					label='Visa'
				/>
			</Link>
			<Link className='container-search-list'>
				<SearchListContainer
					cName={'wrapper-search-list'}
					icon={BsShieldCheck}
					label='Insurance'
				/>
			</Link>
		</div>
	);
};

export default ResSearchingHome;
