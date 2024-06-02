import { useState } from 'react';
//reactstrap
import {Navbar,
        NavbarBrand, 
        Collapse, 
        NavbarToggler, 
        Nav, 
        NavItem} from 'reactstrap';
//logo
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';


//creating the Header component
const Header = () => {
    //using the useState hook to set a local state variable
    const [ menuOpen, setMenuOpen ] = useState (false);
    return(
        <Navbar dark color = 'primary' sticky= 'top' expand = 'md'>
                <NavbarBrand href = '/' className='ms-5'>
                    <img src = {NucampLogo} alt ='nucamp logo'className='float-start'/>
                    <h1 className='mt-1'>NuCamp</h1>
                </NavbarBrand>
                {/*this causes the NavbarToggler component to toggle the value of menuopen whenever its clicked */}
                <NavbarToggler onClick = {() => setMenuOpen(!menuOpen)}/>
                {/**this will cause the navbarroggler component to toggle the walue of menuOpen whenever its clicked */}
                <Collapse isOpen = {menuOpen}>
                    <Nav className = 'ms-auto' navbar>
                        <NavItem>
                            <NavLink className= 'nav-link' to ='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink className= 'nav-link' to ='/directory'>
                            <i className='fa fa-list fa-lg' /> Directory
                            </NavLink>
                            
                        </NavItem>
                        <NavItem>
                            <NavLink className= 'nav-link' to ='/about'>
                                <i className='fa fa-info fa-lg' /> About
                            </NavLink>
                            
                        </NavItem>
                        <NavItem>
                            <NavLink className= 'nav-link' to ='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                            
                        </NavItem>
                    </Nav>
                </Collapse>
                
      </Navbar>
      
    );
}

export default Header;