function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = () => {
  const data = {
    friends: [],
  };

  for (let index = 0; index < 500; index++) {
    const id = (index + 1).toString();

    data.friends.push({
      id: id,
      name: `Amigo ${id}`,
      likes: randomNumberBetween(0, 9),
    });
  }

  return data;
};
