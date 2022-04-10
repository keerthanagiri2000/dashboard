import {Link} from 'react-router-dom'
import {useHistory} from "react-router-dom";


export function Forgot(){
    const history= useHistory();
    return(
      <div>
          <div className="login-form-container">
            <div  className='login-container'>
            <p className='welcome-container'>Forgot Your Password?</p>
            <p className='forgot-content'>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!

</p>
           <form>
               <div className='email-password-container'>
               <input  type="email" placeholder="Enter Email Address..."/>
               </div>
               
               <button className="forgot-btn-dash" onClick={() => history.push('/pages/login')}>Reset Password</button>
               <hr />
                <div className='forgot-create-account'>
               <Link to="/pages/register" onClick={() => history.push('/pages/register')}>Create an Account!</Link>
               <Link to="/pages/login" onClick={() => history.push('/pages/login')}>Already have an account? Login!</Link>
               </div>
           </form>
           </div>
           </div>
      </div>
    );
}