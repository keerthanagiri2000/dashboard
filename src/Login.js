import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";

export function Login(){
    const history= useHistory();
    return(
       <div>

           <div className="login-form-container">
            <div  className='login-container'>
            <p className='welcome-container'>Welcome Back!</p>
           <form>
               <div className='email-password-container'>
               <input  type="email" placeholder="Enter Email Address..."/>
               <input  type="password" placeholder="Password"/>
               </div>
               <div className='login-checkbox'>
               <input value="check" type="checkbox"/>
               <label>Remember Me</label>
               </div>
               <button className="login-btn-dash"  onClick={() => history.push('/')}>Login</button>
               <hr />
               <div className='loginbtn-google-facebook'>
               <button onClick={() => history.push('/')}><i class="fa fa-google" aria-hidden="true"  ></i>Login with Google</button>
               <button onClick={() => history.push('/')}><i class="fa fa-facebook" aria-hidden="true"  ></i>Login with Facebook</button>
               </div>
               <hr />
                <div className='forgot-create-account'>
               <Link  to="/pages/forgotPassword" onClick={() => history.push('/pages/forgotPassword')}>Forgot Password?</Link>
               <Link  to="/pages/register" onClick={() => history.push('/pages/register')}>Create an Account!</Link>
               </div>
           </form>
           </div>
           </div>
       </div>
    );
}