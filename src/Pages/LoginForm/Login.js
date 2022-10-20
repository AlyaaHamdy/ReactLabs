import React from 'react'
import './Login.css'
import { useFormik } from 'formik';
import * as yup from "yup";
import { useNavigate, useLocation } from 'react-router-dom'

const schema = yup.object().shape({
	username: yup.string().min(3).required(),
	email: yup.string().email().required(),
	password: yup.string().min(4).max(32).required(),
});

function Login() {
	const alyaa = useFormik({
		initialValues:
		{
			username: "",
			email: "",
			password: ""
		},
		onSubmit: (val) => {
			// alert(JSON.stringify(val))
			localStorage.setItem("token", 'abc')

		},
		validationSchema: schema

	})
	var navigate = useNavigate();
	var path = useLocation().state?.pathname || '/';
	navigate(path);

	// function go()
	// {
	//     localStorage.setItem("token","Alyaa123");
	//     navigate(path);
	//     navigate("/profile",{state:{id:1,name:"negm"}});

	// }



	return (
		<div>
			<form onSubmit={alyaa.handleSubmit}>
				<div className="form">
					<div className="form-body">
						<div className="username">
							<label className="form__label" htmlFor="firstName">User Name </label>
							<input className="form__input" onChange={alyaa.handleChange} name='username' type="text" id="firstName" value={alyaa.values.username} placeholder="User Name" />
						</div>

						<div className="email">
							<label className="form__label" htmlFor="email">Email </label>
							<input type="email" id="email" name='email' onChange={alyaa.handleChange} className="form__input" value={alyaa.values.email} placeholder="Email" />
						</div>
						<div className="password">
							<label className="form__label" htmlFor="password">Password </label>
							<input className="form__input" name='password' onChange={alyaa.handleChange} type="password" id="password" value={alyaa.values.password} placeholder="Password" />
						</div>
					</div>
					<div className="footer">
						<button type="submit" className="btn">Login</button>
					</div>
				</div>
			</form>

		</div>
	)
}

export default Login