import { HiThumbUp } from 'react-icons/hi';
import '../component_data/HoverData.css';

export const HoverFlights = (props) => {
	return (
		<>
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
						<div
							className='wrapp-list'
							onClick={props.goFlightsPage}>
							<div>
								<div className='a-list'>
									<div>Singapur</div>
									<HiThumbUp className='icon' />
								</div>
								<div className='a-list'>
									<div>Hong Kong</div>
									<HiThumbUp className='icon' />
								</div>
								<div>Macao</div>
								<div>Shanghai</div>
								<div className='a-list'>
									<div>Korea</div>
									<HiThumbUp className='icon' />
								</div>
								<div>France</div>
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
		</>
	);
};

export default HoverFlights;
