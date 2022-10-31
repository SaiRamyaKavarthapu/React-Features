import { useState } from 'react';
import data from '../src/MockData/Formdata'
import Dashboard from './Dashboard';

export default function Form() {

	const [register, setLogin] = useState({
		name: '',
		email: '',
		password: '',
		submitted: false,
		error: false,
		validate:-1
	});
	 const {name, email, password, submitted, error, validate } = register  ;

	const handleOnChange = event => {
		setLogin({ ...register, submitted: false, [event.target.name]: event.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		let indexData = data.user.findIndex(isSameAnswer)
	
		setLogin({ ...register, validate:indexData});
		if (validate !== -1) {

			setLogin({ ...register, error: false, submitted: true });
		}		
		
		if(validate === -1){
		
			setLogin({ ...register, validate:indexData , error: true});
		
		}

		if (email === '' || password === '') {
			setLogin({ ...register, error: true });
		} 
	
		
		
	};
	const isSameAnswer = (el) => {

		return (el.email === email && el.password === password)

	}
	
	
	const errorMessages = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<div class="p-3 mb-2 bg-danger text-white">Incorrect username or password</div>

			</div>
		);
	};


	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<div class="p-3 mb-2 bg-danger text-white">Please enter all the fields</div>

			</div>
		);
	};

	return (
		<>
			{submitted ? <Dashboard data={data.user[validate]} /> :
				<div className="form">
					<div>
						<center><h1>Login Page</h1></center>
					</div>

					{/* Calling to the error method */}
				{(email === '' || password === '') &&<div className="messages">
						{errorMessage()}
					</div>
                   }

				   {(validate === -1 && email !== '' && password !== '') && <div className="messages">
						{errorMessages()}
					</div>}
					<form class='register-form' onSubmit={handleSubmit}>
						<div class="form-group">
							<label for="email">Email:</label>
							<input onChange={handleOnChange} class="form-control"
								value={email} type="email" name="email" id="email" placeholder="Enter email" /></div>
						<div class="form-group">
							<label for="password">Password:</label>
							<input onChange={handleOnChange} class="form-control"
								value={password} type="password" name="password" id="email" placeholder="Enter password" /></div>
						<button  type="submit" class="btn btn-default">Submit</button>

					</form>
				</div>
			}
		</>);
}
