function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.race([firstName, lastName, fileName]);
  }
  module.exports = handleProfileSignup;