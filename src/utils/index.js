//  Handles Signup details of user
export const fetchRequest = async (setUser, username, email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Finds all user
export const allUsers = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Finds user details
export const listUser = async (email) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}user-details`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Handles login details of user
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    // console.log(data.message);
    return data.value;
  } catch (error) {
    console.log(error);
  }
};

// Handles additional user details
export const userInfo = async (
  setUser,
  name,
  gender,
  age,
  city,
  country,
  image,
  interests,
  activity,
  activityDescription
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user-info`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        gender: gender,
        age: age,
        city: city,
        country: country,
        image: image,
        interests: interests,
        activity: activity,
        activityDescription: activityDescription,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data);
  } catch (error) {
    console.log(error);
  }
};

//To show list of users
export const userList = async (setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_API}user`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    setUser(data.users);
    // console.log(user);
  } catch (error) {
    console.log(error);
  }
};

//To delete user account
export const deleteUserInfo = async (email) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
