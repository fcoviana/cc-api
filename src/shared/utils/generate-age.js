module.exports = (birthDate) => {
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = Number((currentYear - birthYear));

  return age;
};
