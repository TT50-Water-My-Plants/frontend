import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().min(2).required("username is required"),
  email: yup.string().required("an email address is required"),
  password: yup.string().required("a password is required"),
});

export default formSchema;
