
//  Handles Signup details of user
export const fetchRequest = async (setUser, username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        const data = await response.json();
        console.log(data)
        setUser(data)
    } catch (error) {
        console.log(error)
    }
}

// Handles login details of user
export const loginUser = async (setUser, email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          email: email,
          password: password
      })
    });
    const data = await response.json();
  //   console.log(data);
    return setUser(data)
  } catch (error) {
    console.log(error);
  }
};

// Handles additional user details
export const userInfo = async (setUser, gender, age, city, country, activity, intrests) => {
  try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}userinfo`, {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({
              gender: gender,
              age: age,
              city: city,
              country: country,
              activity: activity,
              intrests: intrests
          })
      })
      const data = await response.json();
      // console.log(data)
      setUser(data)
  } catch (error) {
      console.log(error)
  }
}

//To shiw list of users
export const userList = async (setUser) => {
    try {
        const response = await fetch(`${process.env.REACT_API}user`, {
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        })

        const data = await response.json();
        setUser(data.users)
        // console.log(user);

    } catch (error) {
        console.log(error);
    }
    
};

//To delete user account
export const deleteUser = async (setUser, username) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}deleteUser`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
        })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

