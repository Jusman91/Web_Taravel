import Register from '../login/Register';
import ForgetPassword from './ForgetPassword';
import './Login.css';

function Login() {
	return (
		<>
			<div className='container-login'>
				<div className='login'>
					<h2>Login to your account</h2>
					<form className='input'>
						<input
							type='email'
							placeholder='Your Email Address'
							required
						/>
						<input
							type='password'
							placeholder='Password'
							required
						/>
					</form>
					<div className='text-login'>
						<h6>
							No account yet? <Register />
						</h6>

						<ForgetPassword />
					</div>
				</div>
				<button className='btn-login'>Login Now</button>
			</div>
		</>
	);
}

export default Login;
