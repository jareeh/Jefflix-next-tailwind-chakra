import React, { useState } from 'react';
import Layout from '../../Components/Layout';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Layout>
            <div className="container mx-auto">
                <div className="">
                    <h2 className="">Login:</h2>
                    <form className="" onSubmit={handleSubmit}>
                        <label>
                            Email Address:
                            <input type="text" className="" onChange={updateEmail} />
                        </label>
                        <label>
                            Password:
                            <input type="password" className="" onChange={updatePassword} />
                        </label>
                        <br />
                        <button type="submit" className="">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
