import './LoginForm.scss';

const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="wrapper-logo">
        <img
          className="wrapper-logo__img"
          src="/icons/Etisalat_Digital_logo.max-500x500.png"
          alt="Logo Etisalat"
        />
      </div>
      <div className="login-form__input-wrapper">
        <input type="text" className="login-form__input-wrapper_element" id="log-in" />
        <label className="login-form__input-wrapper__text" htmlFor="log-in">Log In*</label>
        <input type="text" className="login-form__input-wrapper_element" placeholder="Password *" />
      </div>
      <button className="login-form__btn">sign in</button>
    </form>
  )
};

export default LoginForm;