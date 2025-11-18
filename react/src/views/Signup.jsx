import React from "react";  
import { Link } from "react-router-dom";
import axiosClient from "../axios.js";
import { LockClosedIcon } from '@heroicons/react/20/solid'



export default function Signup() {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
    const [errors, setErrors] = React.useState({__html: ''});

    const onSubmit = (ev) => {
        e.preventDefault();
        setErrors({__html: ''});

        axiosClient.post('/signup', {
            name: fullName,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }).then(({data}) => {
            console.log(data);
        }).catch((errors) => {
            console.log(errors);
        });
    }

    return(
        <>
            
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Signup a new account</h2>
            <p className="mt-2 text-center text-sm text-gray-400">
                or{' '}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-400">
                    login to your account
                </Link>
            </p>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={onSubmit} action="#" method="POST" className="space-y-6">
                 
                      <div>
                        <label htmlFor="full-name" className="block text-sm/6 font-medium text-gray-100">
                            Full name
                        </label>
                    <div className="mt-2">
                        <input
                        id="full-name"
                        name="name"
                        type="text"
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)} 
                        autoComplete="email"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                    </div>
                       <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                            Email address
                        </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                        Password
                        </label>
                        <div className="text-sm">
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                        Password     confirmation
                        </label>
                        <div className="text-sm">
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password-confirmation"
                        name="password_confirmation"
                        type="password"
                        required
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                    </div>

                    <div>
                    <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Signup
          </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Start a 14 day free trial
                    </a>
                </p>
            </div>
        </>
        
    )
}