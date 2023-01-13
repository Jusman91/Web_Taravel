import '../navbar/NavbarStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../asset/logo/p1.png';
import { useState, useEffect } from 'react';
import {
	IoIosArrowDown,
	IoIosArrowUp,
} from 'react-icons/io';
import HoverFlights from '../hoverdata/flights/HoverFlights';
import HoverHotels from '../hoverdata/hotels/HoverHotels';
import HoverXperiences from '../hoverdata/xperiences/HoverXperiences';
import HoverTourPackages from '../hoverdata/tour/HoverTourPackages';
import HoverInsurance from '../hoverdata/insurance/HoverInsurance';
import NavbarRes from './responsive/NavbarRes';

export const Navbar = (props) => {
	// <==== navigate untuk hover component flights
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/flights');
		setActiveLink('flights');
	};
	// ====>

	// <===== hidden & show navbar wirh scrolling
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY) {
			// if scroll down hide the navbar
			setShow(false);
		} else {
			// if scroll up show the navbar
			setShow(true);
		}

		// remember current page location to use in the next move
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);

		// cleanup function
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);
	// =====>

	const [activeLink, setActiveLink] = useState('/');

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};
	return (
		<>
			<header
				className={`hiddenNav ${show && 'activeNav'}`}>
				<div className='top-header'>
					<ul className=''>
						<li>Corparate Trapel</li>
						<li>MICE</li>
						<li>Smailing Platinum</li>
					</ul>
					<div className='login'>
						<button
							onClick={() => props.setShowFormLogin()}>
							Login
						</button>
						<IoIosArrowDown />
					</div>
				</div>
				<nav className='navbar-items pb-0'>
					<div className='nav-logo'>
						<h1>
							NGAKAK <span>TOUR</span>
						</h1>
						<p>Trapel Management Experts</p>
						<img src={Logo} alt='logo' />
					</div>
					<ul className='nav-menu'>
						<li className='nav-links'>
							<div>
								<Link
									to='/'
									className={
										activeLink === '/' ? 'active' : ''
									}
									onClick={() => onUpdateActiveLink('/')}>
									Home
								</Link>
							</div>
							<div className='hover'>
								<Link
									to='/flights'
									className={
										activeLink === 'flights' ? 'active' : ''
									}
									onClick={() =>
										onUpdateActiveLink('flights')
									}>
									Flights
								</Link>
								<div className='icons-hover'>
									<IoIosArrowUp />
								</div>
								<HoverFlights goFlightsPage={handleClick} />
							</div>
							<div className='hover'>
								<Link
									to='/hotels'
									className={
										activeLink === 'hotels' ? 'active' : ''
									}
									onClick={() =>
										onUpdateActiveLink('hotels')
									}>
									Hotels
								</Link>
								<div className='icons-hover'>
									<IoIosArrowUp />
								</div>
								<HoverHotels />
							</div>
							<div className='hover'>
								<Link
									to='/tourpackages'
									className={
										activeLink === 'tourpackages'
											? 'active'
											: ''
									}
									onClick={() =>
										onUpdateActiveLink('tourpackages')
									}>
									Tour Packages
								</Link>
								<div className='icons-hover'>
									<IoIosArrowUp />
								</div>
								<HoverTourPackages />
							</div>
							<div className='hover'>
								<Link
									to='/xperiences'
									className={
										activeLink === 'xperiences'
											? 'active'
											: ''
									}
									onClick={() =>
										onUpdateActiveLink('xperiences')
									}>
									Xperiences
								</Link>
								<div className='icons-hover'>
									<IoIosArrowUp />
								</div>
								<HoverXperiences />
							</div>
							<div>
								<Link
									to='/attractions'
									className={
										activeLink === 'attractions'
											? 'active'
											: ''
									}
									onClick={() =>
										onUpdateActiveLink('attractions')
									}>
									Attractions
								</Link>
							</div>
							<div>
								<Link>Visa</Link>
							</div>
							<div className='hover'>
								<Link>Insurance</Link>
								<div className='icons-hover-insurance'>
									<IoIosArrowUp />
								</div>
								<HoverInsurance />
							</div>
						</li>
					</ul>
				</nav>
			</header>
			<NavbarRes />
		</>
	);
};

export default Navbar;
