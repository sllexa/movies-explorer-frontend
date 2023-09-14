import AuthPage from '../AuthPage/AuthPage';
import './Register.css';
import useFormValidation from '../../hooks/useFormValidation';
import FormInput from '../FormInput/FormInput';
import { EMAIL_PATTERN } from '../../utils/constants';

const Register = ({ onSubmit, error, isLoader }) => {
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit() {
    onSubmit(values);
  } 
    
  return (
    <AuthPage 
      type={'register'}
      isValid={isValid}
      onSubmit={handleSubmit}
      error={error}
      isLoader={isLoader}
    >
      <FormInput
        value={values.name}
        error={errors.name}
        onChange={handleChange}
        name='name'
        title='Имя'
        type='text'
        required
        minLength={3}
      />
      <FormInput
        value={values.email}
        error={errors.email}
        onChange={handleChange}
        name='email'
        title='E-mail'
        type='email'
        pattern={EMAIL_PATTERN}
        required
      />
      <FormInput
        value={values.password}
        error={errors.password}
        onChange={handleChange}
        name='password'
        title='Пароль'
        type='password'
        minLength={6}
        required
      />
    </AuthPage >
  );
}

export default Register;