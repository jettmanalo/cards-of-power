import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [currentSection, setCurrentSection] = useState('log in');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <main>
      <section className='pirata-font sm:p-2 lg:p-6'>
        <h1 className='sm:text-4xl lg:text-5xl text-amber-950 uppercase'>{ currentSection }</h1>

        {currentSection === 'log in' && <LoginForm onSwitch={handleSectionChange} />}
        {currentSection === 'sign up' && <SignupForm onSwitch={handleSectionChange} />}
        {currentSection === 'reset password' && <ForgotPasswordForm onSwitch={handleSectionChange} />}
      </section>
    </main>
  );
}

function LoginForm({ onSwitch }) {
  return (
    <>
      <form>
        <input type='text' placeholder='Username / Email' required />
        <input type='password' placeholder='Password' required />
        <a className='mb-2 text-end no-underline' onClick={() => onSwitch('reset password')}>Forgot Password?</a>

        <button type='submit'>Log in</button>
      </form>

      <p>Don't have an account yet? <a onClick={() => onSwitch('sign up')}> Sign up</a></p>
    </>
  );
}

function ForgotPasswordForm({ onSwitch }) {
  return (
    <>
      <form>
        <input type='email' placeholder='Email' required />

        <button type='submit'>Send</button>
      </form>

      <p>Don't have an account yet? <a onClick={() => onSwitch('sign up')}>Sign up</a></p>
    </>
  )
}

function SignupForm({ onSwitch }) {
  return (
    <>
      <form>
        <div className="flex flex-wrap gap-1">
          <input className="flex-1 min-w-[calc(50%-8px)]" type="text" placeholder="Username" required />
          <input className="flex-1 min-w-[calc(50%-8px)]" type="email" placeholder="Email" required />
        </div>  

        <div className="flex flex-wrap gap-1">
          <input className="flex-1 min-w-[calc(50%-8px)]" type="password" placeholder="Password" required />
          <input className="flex-1 min-w-[calc(50%-8px)]" type="password" placeholder="Confirm Password" required />
        </div>  

        <button type='submit'>Sign up</button>
      </form>

      <p>Already have an account? <a onClick={() => onSwitch('log in')}>Log in</a></p>
    </>
  );
}

export default Login;
