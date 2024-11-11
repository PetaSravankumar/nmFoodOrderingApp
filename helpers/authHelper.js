import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    return hashedpassword;
  } catch (err) {
    console.log(err);
  }
};

export const comparePassword = async (passord, hashedpassword) => {
  return bcrypt.compare(passord, hashedpassword);
};
