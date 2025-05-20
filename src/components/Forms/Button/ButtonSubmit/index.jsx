import React from 'react';
import Button from 'react-bootstrap/Button';

import style from './ButtonSubmit.module.css';

const ButtonSubmit = ({ name, icon, onClick, type = 'button' }) => {
  return (
    <Button
      variant="secondary"
      className={`${style.buttonOne} button d-flex align-items-center justify-content-center gap-2`}
      onClick={onClick}
      type={type}
    >
      {icon && <i className={`${icon} ${style.icon}`} />}
      {name && <span>{name}</span>}
    </Button>
  );
};

export default ButtonSubmit;
