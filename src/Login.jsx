import React, { useState } from "react";

const Login = ({isLoggedIn, setIsLoggedIn, setUser}) => {

  const [errorMessages, setErrorMessages] = useState({});

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {
      username: "user3",
      password: "pass3"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsLoggedIn(true);
        setUser(userData.username)
        alert('Login successfully!')
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="mx-auto">
      <div className="bg-primary p-10 rounded-2xl">
        <h2 className=" p-4 mb-4 text-center font-bold text-3xl ">Login</h2>
        <div>
            <form onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-5"
            >
              <div>
                <input type="text" name="uname" placeholder="Username" required 
                className="p-2 text-black rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                {renderErrorMessage("uname")}
              </div>
              <div>
                <input type="password" name="pass" placeholder="Password" required 
                className="p-2 text-black rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                {renderErrorMessage("pass")}
              </div>
              <button className="bg-accent p-4 mt-4 hover:bg-white hover:text-accent font-bold rounded-full transition duration-150 ease-out">Login</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;