import React from 'react'
import classes from './header.module.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

export default function Header(){
    const {user,logout}=useAuth();
    const {cart}=
        useCart();
    

  
    return(
    <header className={classes.header}>
        <div className={classes.container}>
           <Link to="/" classname={classes.logo}>
           SymbiEat!
           </Link>
           <img
                        src="symbi-logo.jpg" 
                        alt="Logo"
                        className={classes.logoImage}
                    />
           <nav>
            <ul>
                {
                    user?(
                    <li className={classes.menu_container}>
                        <Link to="/profile">{user.name}</Link>
                        <div className={classes.menu}>
                            <Link to="/profile">Profile</Link>
                            <Link to="/orders">Orders</Link>
                            <a onCLick={logout}>Logout</a>
                        </div>
                    </li>
                    ):(
                    <Link to="/login">Login</Link>
                )}
                <li>
                    <Link to="/cart">
                    cart
                    {cart.totalCount>0 &&<span className={classes.cart_count}>{cart.totalCount}</span>}
                    </Link>
                </li>
            </ul>
           </nav>
        </div>
        </header>
    );
    
}