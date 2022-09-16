import { useState } from 'react'
import Navbar from './Navbar'
import './Home.css'

function App() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const loginUser= async (event) => {
		event.preventDefault();
		
		const res = await fetch('http://localhost:4000/api/auth/signin', {
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		});
		const data = await res.json()
		console.log(data)
		if (data.msg=='Logged in successfully') {
			 const val1=localStorage.setItem("user", JSON.stringify({token:res.role}));
			console.log(val1)
			alert('Login successful')
			window.location.href = '/dashboard'
			return res.data;
		} else {
			alert('Please check your username and password')
		}
}
	
	return (
		<>
		<div className='home-container'>
	<Navbar />
		
		<div className='form-container col-md-3'>
			<p className='form-pre-header'>TYPE SOMETHING HERE</p>
			<h1 className='form-header'>Sign in to Binamite</h1>
			<form onSubmit={loginUser}>
				<label>Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="name@email.com"
				className='sign-in-input'/>
				<br />
				<label>Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter your Password"
					className='sign-in-input'/>
				<br />
				<input type="submit" className='btn-dark w-100' value="Login" />
			</form>
		</div>
		</div>
		</>
	)
}

export default App