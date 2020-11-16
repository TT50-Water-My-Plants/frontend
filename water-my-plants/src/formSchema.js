import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2)
    .required("Name is a required field"),
  phone_number: yup.string().required("Please add phone number"),
  password: yup
    .string()
    .min(5)
    .required("Must enter a password")
});

export default formSchema;
