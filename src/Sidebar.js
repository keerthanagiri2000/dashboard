import {Link, Switch, Route} from "react-router-dom";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Navbar } from './Navbar';
import {Charts} from './Charts';
import { Dashboard } from './Dashboard';
import {useState} from 'react';
import {Button} from './Button';
import {ComponentCards} from './ComponentCards';
import {Colors} from './Colors';
import {Borders} from './Borders';
import {Animations} from './Animations';
import {OtherUtilities} from './Other';
import {BlankPage} from './BlankPage';
import {Notfound} from './NotFound';
import {Login} from './Login';
import {Register} from './Register';
import {Forgot} from './Forgot';

export function Sidebar(){
  const [show, setShow] = useState(false);
  const [utility, setUtility] = useState(false);
  const [pages, setPages] = useState(false);
    return(
        <div className="dashboard-container">
        <div className="sidebar-container">
          <ul>
             <div className="heading-icon">
               <div className="icon">
                <EmojiEmotionsIcon style={{width:"1.5em",height:"1.5em",transform: "rotate(-40deg)"}} />
                
               </div>
               <div className="heading">
                   SB ADMIN 
                   <sup>2</sup>
               </div>
              </div>
  
            <hr className="horizontal-line"/>
  
             <li className="list-items">
               <div className="list-icons">
               <i className="fa fa-tachometer" aria-hidden="true"></i>
               </div>
               <span className='sidebar-list'><Link to="/" className='dashboard-link'>Dashboard</Link></span>
             </li>
  
              <hr className="horizontal-line" />
  
             <div className="sidebar-heading">
              INTERFACE
             </div>
  
             <li className="list-items" onClick={()=>setShow(!show)}>
               <div className="list-icons">
                 <i className="fa fa-cog" aria-hidden="true"></i>
               </div>
                 <span className='sidebar-list'  >components</span>
                 <div className='arrow-icon'>  
                    {show ? <ExpandMoreIcon style={{fontSize:"20px"}}/> : <ArrowForwardIosIcon style={{fontSize:"11px", fontWeight:"800", marginBotttom:"4px"}}/> } 
                  </div>
             </li> 
               {show ?  
                <div className="sidebar-dropdown"> 
                   <p>CUSTOM COMPONENTS</p>
                   <ul>
                   <Link to="/components/Button" className="dropdown-link-btn"><li className="dropdownlist-item">Button</li></Link>
                   <Link to="/components/Cards" className="dropdown-link-btn"> <li className="dropdownlist-item">Cards</li></Link>
                   </ul>
                </div> : "" } 
             
  
             <li className="list-items" onClick={()=>setUtility(!utility)}>
               <div className="list-icons">
                 <i className="fa fa-wrench" aria-hidden="true"></i>
               </div>
                 <span className='sidebar-list' >Utilities</span>
                 <div className='arrow-icon' >  
                    {utility ? <ExpandMoreIcon style={{fontSize:"20px"}}/> : <ArrowForwardIosIcon style={{fontSize:"11px", fontWeight:"800", marginBotttom:"4px"}}/> } 
                  </div>
             </li>
  
             {utility ?  
                <div className="sidebar-dropdown"> 
                   <p>CUSTOM UTILITIES</p>
                   <ul>
                   <Link to="/customUtilities/Colors" className="dropdown-link-btn" ><li className="dropdownlist-item">Colors</li></Link>
                   <Link to="/customUtilities/Borders" className="dropdown-link-btn"><li className="dropdownlist-item">Borders</li></Link>
                   <Link to="/customUtilities/Animations" className="dropdown-link-btn"><li className="dropdownlist-item">Animations</li></Link>
                   <Link to="/customUtilities/Other" className="dropdown-link-btn"><li className="dropdownlist-item">Other</li></Link>
                   </ul>
                </div> : "" } 
             
             <hr className="horizontal-line" />
  
             <div className="sidebar-heading">
               ADDONS
             </div>
  
             <li className="list-items" onClick={()=>setPages(!pages)}>
               <div className="list-icons">
                <i className="fa fa-folder" aria-hidden="true"></i>
               </div>
                <span className='sidebar-list' >Pages</span>
                <div className='arrow-icon' >  
                    {pages ? <ExpandMoreIcon style={{fontSize:"20px"}}/> : <ArrowForwardIosIcon style={{fontSize:"11px", fontWeight:"800", marginBotttom:"4px"}}/> } 
                  </div>
             </li>
  
             {pages ?  
                <div className="sidebar-dropdown"> 
                   <p>LOGIN SCREENS:</p>
                   <ul>
                   <Link to="/pages/login" className="dropdown-link-btn"><li className="dropdownlist-item">login</li></Link>
                   <Link to="/pages/register" className="dropdown-link-btn"><li className="dropdownlist-item">Register</li></Link>
                   <Link to="/pages/forgotPassword" className="dropdown-link-btn"><li className="dropdownlist-item">Forgot Password</li></Link>
                   </ul>
  
                   <p>OTHER PAGES:</p>
                   <ul>
                   <Link to="/pages/404Page" className="dropdown-link-btn"><li className="dropdownlist-item">404 Pages</li></Link>
                   <Link to="/pages/blankPage" className="dropdown-link-btn"><li className="dropdownlist-item">Blank Page</li></Link>
                   </ul>
                </div> : "" } 
  
             <li className="list-items">
               <div className="list-icons">
                <i className="fa fa-area-chart" aria-hidden="true"></i>
                </div>
                <span className='sidebar-list'><Link to="/charts" className='chart-link'>Charts</Link></span>
             </li>
  
             <li className="list-items">
               <div className="list-icons">
                <i className="fa fa-table" aria-hidden="true"></i>
               </div>
                <span className='sidebar-list'>Tables</span>
             </li>
  
             <hr className="horizontal-line" />
  
             <div className="sidebar-toggle">
               <button className="arrowback-button"><ArrowBackIosIcon style={{color:"rgba(255,255,255,.5)", fontSize:"20px", padding:"4px 0px 2px 4px"}} /></button>   {/*<ArrowForwardIosIcon />*/}
             </div>
  
             <div className="sidebar-card">
               <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" className="sidebar-img" />
               <p className="sidebar-text">
                 <strong>SB Admin Pro </strong>
                  is packed with premium features, components, and more!
                </p>
                <button className="sidebar-card-button"><a href="https://startbootstrap.com/theme/sb-admin-pro" target="_blank" style={{textDecoration:"none",color:"white", fontSize:".875rem"}} >Upgrade to Pro!</a></button>
             </div>
          </ul>
         </div>
  
          <Switch>
            <Route exact path="/">
              <div className="navbar-dashboard">
                <Navbar />
                <Dashboard />
              </div>
            </Route>
            <Route path="/components/Button">
              <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><Button /></div>
              </div>
            </Route>
            <Route path="/components/Cards">
              <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><ComponentCards /></div>
              </div>
            </Route>
            <Route path="/customUtilities/Colors">
              <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><Colors /></div>
              </div>
            </Route>
  
            <Route path="/customUtilities/Borders">
              <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><Borders /></div>
              </div>
            </Route>
            <Route path="/customUtilities/Animations">
            <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><Animations /></div>
              </div>
            </Route>
            <Route path="/customUtilities/Other">
              <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><OtherUtilities /></div>
              </div>
            </Route>
            <Route path="/pages/login">
              <div className="navbar-dashboard">
                 <div><Login /></div>
              </div>
            </Route>
            <Route path="/pages/register">
              <div className="navbar-dashboard">
                 <div><Register /></div>
              </div>
            </Route>
            <Route path="/pages/forgotPassword">
              <div className="navbar-dashboard">
                <div><Forgot /></div>
              </div>
            </Route>
            <Route path="/pages/404Page">
              <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><Notfound /></div>
              </div>
            </Route>
            <Route path="/pages/blankPage">
              <div className="navbar-dashboard">
                <div><Navbar /></div>
                <div><BlankPage /></div>
              </div>
            </Route>
            <Route path="/charts">
            <div className="navbar-dashboard">
              <div><Navbar /></div>
              <div><Charts /></div>
            </div>
            </Route>
  
           </Switch>
        </div>
    );
}