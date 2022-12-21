import Logo from '../../asset/logo/p1.png';
export const BannerSlideContainer = (props) => {
	return (
		<>
			<div className='wrapper-banner'>
				<div className='image-slide'>
					<img src={props.image} alt='Banners' />
				</div>
				<div className='text-slide'>
					<div className='logo-banner'>
						<h1>
							NGAKAK <span>TOUR</span>
						</h1>
						<p>Trapel Management Experts</p>
						<img src={Logo} alt='logo' />
					</div>
				</div>
				<div className='desc-banner'>
					<h3>{props.text1}</h3>
					<p>{props.text2}</p>
				</div>
			</div>
		</>
	);
};

export default BannerSlideContainer;
