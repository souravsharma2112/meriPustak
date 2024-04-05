import '../Components/CSS/login.css'
const Login = () => {
    return (
        <>
            <div className="login-box">
            {/* <h1>meriPustak Swagatam</h1> */}
                <h2>meriPustak Swagatam</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required=""/>
                            <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                            <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </>
    )
}
export default Login;