import '../header/NavbarStyles.css';
import { Link } from 'react-router-dom';
import Logo from '../../asset/logo/p1.png';
import { useState } from 'react';
import HoverData from './HoverData';

function Navbar() {
	const [activeLink, setActiveLink] = useState('/');

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};
	return (
		<header>
			<div className='top-header'>
				<ul className='pt-3'>
					<li>Corparate Trapel</li>
					<li>MICE</li>
					<li>Smailing Platinum</li>
				</ul>
				<div className='login'>
					<button>Login</button>
					<i className='bi bi-caret-down'></i>
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
							<HoverData />
						</div>
						<div>
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
						</div>
						<div>
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
						</div>
						<div>
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
						<div>
							<Link>Insurance</Link>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
