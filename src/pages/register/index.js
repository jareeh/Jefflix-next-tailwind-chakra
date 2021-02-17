import React, {useState} from 'react';
import Layout from '../../Components/Layout';

function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSubmit = (e) => {
        if (password === confirmPassword) {
            e.preventDefault();

            const account = {
                name,
                email,
                password,
            };

            const user = {
                email,
                password,
            };
            localStorage.setItem('credentials', JSON.stringify(account));
            localStorage.setItem('activeUser', JSON.stringify(user));
            updateUser(user);
            history.push('/profile');
        } else {
            e.preventDefault();
            alert('Passwords do not match!');
        }
    };

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const updateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <Layout>
            <div>
                <div className="">
                    <h2 className="">New? Make an Account!</h2>
                    <form className="" onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" className="" onChange={updateName} />
                        </label>
                        <label>
                            Email Address:
                            <input type="text" className="" onChange={updateEmail} />
                        </label>
                        <label>
                            Password:
                            <input type="password" className="" onChange={updatePassword} />
                        </label>
                        <label>
                            Confirm Password:
                            <input type="password" className="" onChange={updateConfirmPassword} />
                        </label>
                        <br />
                        <button type="submit" className="">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Register;
