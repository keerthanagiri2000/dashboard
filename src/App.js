import './App.css';
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

export default function App() {
 
  const [show, setShow] = useState(false);
  const [utility, setUtility] = useState(false);
  const [pages, setPages] = useState(false);

  return (
    <div className="App">
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

           <li className="list-items">
             <div className="list-icons">
               <i className="fa fa-cog" aria-hidden="true"></i>
             </div>
               <span className='sidebar-list'>components</span>
               <div className='arrow-icon' onClick={()=>setShow(!show)}>  
                  {show ? <ExpandMoreIcon style={{fontSize:"20px"}}/> : <ArrowForwardIosIcon style={{fontSize:"11px", fontWeight:"800", marginBotttom:"4px"}}/> } 
                </div>
           </li> 
             {show ?  
              <div className="sidebar-dropdown"> 
                 <p>CUSTOM COMPONENTS</p>
                 <ul>
                   <li className="dropdownlist-item"><Link to="/components/Button">Button</Link></li>
                   <li className="dropdownlist-item"><Link to="/components/Cards">Cards</Link></li>
                 </ul>
              </div> : "" } 
           

           <li className="list-items">
             <div className="list-icons">
               <i className="fa fa-wrench" aria-hidden="true"></i>
             </div>
               <span className='sidebar-list'>Utilities</span>
               <div className='arrow-icon' onClick={()=>setUtility(!utility)}>  
                  {utility ? <ExpandMoreIcon style={{fontSize:"20px"}}/> : <ArrowForwardIosIcon style={{fontSize:"11px", fontWeight:"800", marginBotttom:"4px"}}/> } 
                </div>
           </li>

           {utility ?  
              <div className="sidebar-dropdown"> 
                 <p>CUSTOM UTILITIES</p>
                 <ul>
                   <li className="dropdownlist-item"><Link to="/customUtilities/Colors">Colors</Link></li>
                   <li className="dropdownlist-item"><Link to="/customUtilities/Borders">Borders</Link></li>
                   <li className="dropdownlist-item"><Link to="/customUtilities/Animations">Animations</Link></li>
                   <li className="dropdownlist-item"><Link to="/customUtilities/Other">Other</Link></li>
                 </ul>
              </div> : "" } 
           
           <hr className="horizontal-line" />

           <div className="sidebar-heading">
             ADDONS
           </div>

           <li className="list-items">
             <div className="list-icons">
              <i className="fa fa-folder" aria-hidden="true"></i>
             </div>
              <span className='sidebar-list'>Pages</span>
              <div className='arrow-icon' onClick={()=>setPages(!pages)}>  
                  {pages ? <ExpandMoreIcon style={{fontSize:"20px"}}/> : <ArrowForwardIosIcon style={{fontSize:"11px", fontWeight:"800", marginBotttom:"4px"}}/> } 
                </div>
           </li>

           {pages ?  
              <div className="sidebar-dropdown"> 
                 <p>LOGIN SCREENS:</p>
                 <ul>
                   <li className="dropdownlist-item"><Link to="/pages/login">login</Link></li>
                   <li className="dropdownlist-item"><Link to="/pages/register">Register</Link></li>
                   <li className="dropdownlist-item"><Link to="/pages/forgotPassword">Forgot Password</Link></li>
                 </ul>

                 <p>OTHER PAGES:</p>
                 <ul>
                   <li className="dropdownlist-item"><Link to="/pages/404Page">404 Page</Link></li>
                   <li className="dropdownlist-item"><Link to="/pages/blankPage">Blank Page</Link></li>
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
          <Route path="/charts">
          <div className="navbar-dashboard">
            <div><Navbar /></div>
            <div><Charts /></div>
          </div>
          </Route>

         </Switch>
      </div>
    </div>
  );
}


