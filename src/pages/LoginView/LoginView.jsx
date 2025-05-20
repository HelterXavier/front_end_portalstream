import React, { useContext, useState } from 'react';
import InputComponent from '../../components/Forms/InputComponent/InputComponent';

import styles from './Login.module.css';
import ButtonSubmit from '../../components/Forms/Button/ButtonSubmit';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/createContext';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import messages from '../../constants/messages';

const LoginView = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState();

  const onSubmit = data => {
    setIsLoading(true);
    login(data.username, data.password)
      .then(() => {
        toast.success(messages.success('Login successfully'));
      })
      .catch(() => {
        toast.error(messages.error('Error logging'));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className={styles.cardLogin}>
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent label="Username:" type="text" register={register('username')} />
          <InputComponent label="Password:" type="password" register={register('password')} />

          <ButtonSubmit name="Submit" type="submit" />
        </form>
      </div>
    </>
  );
};

export default LoginView;
