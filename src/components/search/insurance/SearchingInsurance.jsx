import './SearchingInsurance.css';
import LogoInsurance1 from '../../../asset/logo/l3.jpg';
import LogoInsurance2 from '../../../asset/logo/l4.jpg';
function SearchingInsurance() {
	return (
		<>
			<div className='container-grid'>
				<div className='image'>
					<img src={LogoInsurance1} alt='Logo' />
				</div>
				<div className='image'>
					<img src={LogoInsurance2} alt='Logo' />
				</div>
			</div>
		</>
	);
}

export default SearchingInsurance;
