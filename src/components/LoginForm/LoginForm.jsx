import { useId } from 'react';

const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId();

  return (
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" />
      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
