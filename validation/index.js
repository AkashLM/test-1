import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  dob: Yup.date().required("Date is required").nullable(),
});
