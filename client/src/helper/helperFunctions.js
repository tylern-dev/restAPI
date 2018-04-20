export const passwordCheck = (password, pwCheck, cb) => {
  if (password === pwCheck) {
    cb(true);
  } else {
    cb(false);
  }
};

export const anotherFunction = () => {};

