import { publicRequest } from "../api/expressServer";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const { rePassword, ...other } = user;
    console.log("1");
    console.log(user.password !== rePassword);
    console.log(user.password.length < 7);
    console.log(user.password.length);
    if (user.password !== rePassword || user.password.length < 7)
      throw new Error("something went wrong");
    console.log("2");

    const res = await publicRequest.post("/auth/register", other);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
