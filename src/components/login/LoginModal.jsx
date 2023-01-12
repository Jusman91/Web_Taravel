import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ForgetPassword from './ForgetPassword';
import Register from './Register';
import '../header/navbar/NavbarStyles.css';
// import './LoginModal.css';

function LoginModal() {
	const [lgShow, setLgShow] = useState(false);

	return (
		<>
			<div className='loginmodal'>
				<span onClick={() => setLgShow(true)}>Login</span>
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
				<form action='' className='login-modal'>
					<input
						type='email'
						placeholder='Your Email Address'
					/>
					<input type='password' placeholder='password' />

					<button className='btn btn-login-modal'>
						SIGN IN
					</button>
					<div className='text-login'>
						<h6>
							No account yet? <Register />
						</h6>

						<ForgetPassword />
					</div>
				</form>
			</Modal>
		</>
	);
}

export default LoginModal;
