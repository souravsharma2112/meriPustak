import './CSS/Register.css'
import logo from '../assets/img/2112.png'
import { useState } from 'react'

const Register = () => {
    const [fName , setFname] = useState('')
    console.log(fName);
function takingvalue(e) {
    setFname(e.target.value)
}    
    return (
        <>
            <main className="sign-up">
                <div className="sign-up__container">
                    <div className="sign-up__image">
                        <img src={logo} alt="" />
                    </div>
                    <div className="sign-up__content">
                        <header className="sign-up__header">
                            <h1 className="sign-up__title">
                                Sign up
                            </h1>
                            <p className="sign-up__descr">
                                Welcome, Please sign up your account.
                            </p>
                        </header>
                        <form className="sign-up__form form">
                            <div className="form__row form__row--two">
                                <div className="input form__inline-input">
                                    <div className="input__container">
                                        <input className="input__field" id="first-name" onChange={takingvalue} placeholder="First Name" required="" type="text" /><label className="input__label" >First Name</label>
                                    </div>
                                </div>
                                <div className="input form__inline-input">
                                    <div className="input__container">
                                        <input className="input__field" id="last-name" placeholder="Last Name" required="" type="text" /><label className="input__label" >Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="input">
                                    <div className="input__container">
                                        <input className="input__field" id="username" placeholder="Username" type="text" /><label className="input__label" >User Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="input">
                                    <div className="input__container">
                                        <input className="input__field" id="email" placeholder="Email" required="" type="text" /><label className="input__label" >Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="input">
                                    <div className="input__container">
                                        <input className="input__field" id="password" placeholder="Password" required="" type="password" /><label className="input__label" >Password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="input">
                                    <div className="input__container">
                                        <input className="input__field" id="confirm-password" placeholder="Confirm password" required="" type="password" /><label className="input__label" >Confirm password</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="input-checkbox">
                                    <div className="input-checkbox__container">
                                        <input checked="" className="input-checkbox__field" id="agree" required="" type="checkbox" /><span className="input-checkbox__square"></span><label className="input-checkbox__label" >I agree with terms and conditions</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="component component--primary form__button">
                                    <button className="btn btn--regular" disabled="" id="sign-up-button" >Sign up</button>
                                </div>
                            </div>
                            <div className="form__row sign-up__sign">
                                Already have an account? &nbsp;<a className="link" href="#">Sign in.</a>
                            </div>
                            <div className="form__row sign-up__terms">
                                <a className="link" href="#">Term of use. Privacy policy</a>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

        </>
    )
}
export default Register;