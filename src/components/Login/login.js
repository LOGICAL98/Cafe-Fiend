import React from 'react';
import { Button } from 'react-bootstrap';

export default function Login() {
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type='text' />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <a href='/coffee'>
                        <button type="submit">Submit</button>
                    </a>
                    <button type="create account">Create Account</button>
                </div>
            </form>
        </div>
    )
}