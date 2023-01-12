import { useState } from 'react';
import {
	GrFacebookOption,
	GrInstagram,
} from 'react-icons/gr';
import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineGooglePlus,
	AiOutlineTwitter,
} from 'react-icons/ai';
import {
	MdOutlineContactSupport,
	MdPhonelinkRing,
	MdHomeWork,
	MdShare,
	MdAccountBox,
	MdShoppingCart,
} from 'react-icons/md';
import '../NavbarStyles.css';
import Logo from '../../../../asset/logo/p1.png';
import { Link } from 'react-router-dom';
import Register from '../../../login/Register';
import LoginModal from '../../../login/LoginModal';

const NavbarRes = () => {
	const [activeShow, setActiveShow] = useState({
		hbgmenu: false,
		support: false,
	});
	const [showItem, setShowItem] = useState('menu');

	const handleActiveShow = (active) => {
		setActiveShow({
			...activeShow,
			[active]: !activeShow[active],
		});
	};
	return (
		<>
			<div className='container-nav-res'>
				<nav className='nav-items-res'>
					<div
						onClick={() => handleActiveShow('hbgmenu')}
						className='hbg-icon'>
						{activeShow.hbgmenu ? (
							<AiOutlineClose />
						) : (
							<AiOutlineMenu />
						)}
					</div>
					<Link to='/' className='nav-logo'>
						<h1>
							NGAKAK <span>TOUR</span>
						</h1>
						<p>Trapel Management Experts</p>
						<img src={Logo} alt='logo' />
					</Link>
					<div
						onClick={() => handleActiveShow('support')}
						className='support'>
						<MdOutlineContactSupport />
						{activeShow.support && (
							<div className='helps-icon'>
								<MdPhonelinkRing />
								<MdOutlineContactSupport />

								<MdShare />
							</div>
						)}
					</div>
					<div
						className={
							activeShow.hbgmenu
								? 'container-nav-menu active'
								: 'container-nav-menu'
						}>
						<div className='bar-left'>
							<Link to='/' className='top'>
								<MdHomeWork />
							</Link>
							<div className='bottom'>
								<GrFacebookOption />
								<AiOutlineGooglePlus />
								<AiOutlineTwitter />
								<GrInstagram />
							</div>
						</div>
						<div className='container-bar-list-item'>
							<ul className='bar-right'>
								<li
									onClick={() => setShowItem('menu')}
									className={
										showItem === 'menu'
											? 'wrapper-list active'
											: 'wrapper-list'
									}>
									<AiOutlineMenu />
									<div className='icon-bar-right'></div>
									Menu
								</li>
								<li
									onClick={() => setShowItem('account')}
									className={
										showItem === 'account'
											? 'wrapper-list active'
											: 'wrapper-list'
									}>
									<div className='icon-bar-right'>
										<MdAccountBox />
									</div>
									Account
								</li>
								<li
									onClick={() => setShowItem('booking')}
									className={
										showItem === 'booking'
											? 'wrapper-list active'
											: 'wrapper-list'
									}>
									<div className='icon-bar-right'>
										<MdShoppingCart />
									</div>
									Booking
								</li>
							</ul>
							<div className='wrapper-list-item'>
								{showItem === 'menu' && (
									<>
										<div className='active'>
											<Link to='/'>Order History</Link>
										</div>
										<div className='menu-item'>
											<Link to='/flights'>Flights</Link>
											<Link to='/hotels'>Hotels</Link>
											<Link to='/tourpackages'>
												Tour Packages
											</Link>
											<Link to='/xperiences'>
												Xperiences
											</Link>
											<Link to='/attractions'>
												Attractions
											</Link>
											<Link>Visa</Link>
											<Link>Insurance</Link>
											<Link>Corporate Travel</Link>
											<Link>MICE</Link>
											<Link>Ngakak Platinum</Link>
											<Link>Getting Started</Link>
											<Link>About</Link>
											<Link>Hot Deals & Promo</Link>
											<Link>Privacy PoLinkcy</Link>
											<Link>Contacts</Link>
										</div>
									</>
								)}
								{showItem === 'account' && (
									<ul className='account-item'>
										<li>
											<LoginModal />
										</li>
										<li>
											<Register />
										</li>
									</ul>
								)}
								{showItem === 'booking' && (
									<button className='btn-booking'>
										View My Booking details
									</button>
								)}
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavbarRes;
