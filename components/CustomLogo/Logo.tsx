import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    
        <div>
          <img className={classes.LogoDefault} src='/logo-main.jpg' alt="Logo" />
          <img className={classes.LogoV2} src='/logo-main-v2.jpg' alt="Logo" />
        </div>
    
  );
};

export default Logo;