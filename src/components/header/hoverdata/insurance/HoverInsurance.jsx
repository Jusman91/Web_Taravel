import '../insurance/HoverInsurance.css';
import HoverInsuranceData from '../insurance/HoverInsuranceData';
import LogoInsurance1 from '../../../../asset/logo/l3.jpg';
import LogoInsurance2 from '../../../../asset/logo/l4.jpg';

function HoverInsurance() {
	return (
		<>
			<div className='container-hover-insurance'>
				<HoverInsuranceData
					text1='Travel Insurance'
					text2='Health is the most important element to achieve your better tomorrow.'
					image={LogoInsurance1}
				/>
				<HoverInsuranceData
					text1='Life Insurance'
					text2='Health is the most important element to achieve your better tomorrow.'
					image={LogoInsurance2}
				/>
			</div>
		</>
	);
}

export default HoverInsurance;
