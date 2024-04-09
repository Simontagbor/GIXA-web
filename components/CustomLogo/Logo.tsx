import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    
        <div>
          <img className={classes.LogoDefault} src='/logo-main.png' alt="Logo" />
          <img className={classes.LogoV2} src='/logo-main-v2.png' alt="Logo" />
        </div>
    
  );
};

export default Logo;