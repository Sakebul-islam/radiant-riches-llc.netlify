const SignUp = () => {
  return (
    <div className='signup'>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4 gap-md-0'>
          <div className='signup__content'>
            <h3>Sign up and get exclusive special deals</h3>
          </div>
          <div className='signup__form'>
            <form className='d-flex flex-row justify-content-end'>
              <input type='text' />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
