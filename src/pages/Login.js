const Login = props => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = document.forms[0];

    if (username.value === 'user1' && password.value === 'pass1') 
    { // Mimic backend check
      props.handleSubmitParent(true);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;