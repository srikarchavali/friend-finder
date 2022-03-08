import faker from "faker";

export const UserCardData = () => {
  const userData = [];

  for (let i = 0; i < 20; i++) {
    const genders = ["female", "male"];
    const gender = faker.random.arrayElement(genders);
    const avatar = faker.image.avatar();
    const name = `${faker.name.firstName(gender)} ${faker.name.lastName(
      gender
    )}`;
    const age = faker.datatype.number({
      min: 18,
      max: 50,
    });
    const country = faker.address.country();
    const state = faker.address.state(country);
    const city = faker.address.city(state);
    // console.log(name, gender, country, age, city, state, avatar);
    userData.push({
      name: name,
      gender: gender,
      avatar: avatar,
      age: age,
      country: country,
      state: state,
      city: city,
    });
  }
  return userData;
};
