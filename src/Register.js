import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";

export function Register(){
    const history= useHistory();
    return(
     <div>
         <div className="login-form-container">
            <div  className='login-container'>
            <p className='welcome-container'>Create an Account!</p>
           <form>
               <div className='email-password-container'>
                 <div className='first-last-names'>
               <input  type="text" placeholder="First Name"/>
               <input  type="text" placeholder="Last Name"/>
               </div>
               <div className='email-container'>
                   <input type="email" placeholder="Email Address"/>
               </div>
               <div className='password-container'>
                   <input type="password" placeholder='Password'/>
                   <input type="password" placeholder='Repeat Password' />
               </div>
               </div>
               
               <button className="login-btn-dash-con" onClick={() => history.push('/pages/login')}>Register Account</button>
               <hr />
               <div className='registerbtn-google-facebook'>
               <button onClick={() => history.push('/')}><i class="fa fa-google" aria-hidden="true" ></i>Register with Google</button>
               <button onClick={() => history.push('/')}><i class="fa fa-facebook" aria-hidden="true" ></i>Register with Facebook</button>
               </div>
               <hr />
                <div className='forgot-create-account'>
               <Link to="/pages/forgotPassword" onClick={() => history.push('/pages/forgotPassword')}>Forgot Password?</Link>
               <Link to="/pages/login" onClick={() => history.push('/pages/login')}>Already have an account? Login!</Link>
               </div>
           </form>
           </div>
           </div>
     </div>
    );
}