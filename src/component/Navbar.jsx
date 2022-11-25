import React from 'react';
import './NavbarStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './../asset/p1.png';
import { HiThumbUp } from 'react-icons/hi';

function Navbar() {
	const navigate = useNavigate();
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
						<Link className='active' to='/'>
							Home
						</Link>
						<Link className='hover-me' to='/flights'>
							Flights
							<div className='container-banner'>
								<div className='text-banner'>
									<p>Save The Dates</p>
									<h2>Private X</h2>
									<button>Call Now</button>
									<button>Prebook Now</button>
								</div>
								<div className='banner'>
									<div className='des-banner'>
										<h3>Join Ngakak Private Journey</h3>
										<h4>with family and friends</h4>
									</div>
									<div className='destination-list'>
										<h2>Other populer destination</h2>
										<div className='wrapp-list'>
											<div>
												<div className='a-list'>
													<div
														onClick={() =>
															navigate('/flights')
														}>
														Singapur
													</div>
													<HiThumbUp className='icon' />
												</div>
												<div className='a-list'>
													<div
														onClick={() =>
															navigate('/flights')
														}>
														Hong Kong
													</div>
													<HiThumbUp className='icon' />
												</div>
												<div
													onClick={() =>
														navigate('/flights')
													}>
													Macao
												</div>
												<div
													onClick={() =>
														navigate('/flights')
													}>
													Shanghai
												</div>
												<div className='a-list'>
													<div
														onClick={() =>
															navigate('/flights')
														}>
														Korea
													</div>
													<HiThumbUp className='icon' />
												</div>
												<div
													onClick={() =>
														navigate('/flights')
													}>
													France
												</div>
											</div>
											<div>
												<div>Italy</div>
												<div>Greece</div>
												<div>Spain</div>
												<div className='a-list'>
													<div>Bali</div>
													<HiThumbUp className='icon' />
												</div>
												<div>Bangkok</div>
												<div>Kuala Lumpur</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
						<Link className='hover-me' to='/hotels'>
							Hotels
						</Link>
						<Link to='/tourpackages'>Tour Packages</Link>
						<Link to='/xperiences'>Xperiences</Link>
						<Link to='/attractions'>Attractions</Link>
						<Link to='/visa'>Visa</Link>
						<Link to='/insurance'>Insurance</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
