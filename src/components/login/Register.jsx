import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Register() {
	const [lgShow, setLgShow] = useState(false);
	return (
		<>
			<span onClick={() => setLgShow(true)}>Join Us</span>
			<Modal
				size='lg'
				show={lgShow}
				onHide={() => setLgShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<div className='description'>
						<h1>Hi X-Traveller!</h1>
						<p>
							Persiapkan liburan anda sekarang <br />&
							dapatkan <span>diskon 5%</span> <br /> untuk
							pemesanan Hotel & Activities
						</p>
						<div className='voucher'>
							<h3>Gunakan kode voucher: SMLX5</h3>
							<p>di www.ngakaktour.co.id</p>
						</div>
					</div>
				</Modal.Body>
				<form action='' className='register'>
					<input type='text' placeholder='Yout Name' />
					<input
						type='email'
						placeholder='Your Email Address'
					/>
					<input type='password' placeholder='password' />
					<input
						type='password'
						placeholder='Confirm Password'
					/>
					<button className='btn btn-register'>
						Join Us
					</button>
				</form>
			</Modal>
		</>
	);
}

export default Register;
