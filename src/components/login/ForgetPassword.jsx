import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ForgetPassword() {
	const [lgShow, setLgShow] = useState(false);

	return (
		<>
			<div className='forgetpassword'>
				<h6 onClick={() => setLgShow(true)}>
					Forget Password
				</h6>
			</div>
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
					<input
						type='email'
						placeholder='Your Email Address'
					/>
					<button className='btn btn-register'>
						SEEND PASSWORD
					</button>
				</form>
			</Modal>
		</>
	);
}

export default ForgetPassword;
