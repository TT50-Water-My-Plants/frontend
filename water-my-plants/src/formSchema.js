import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().min(2).required("Name is a required field"),
  email: yup.string().required("E-mail is required"),
  message: yup.string(),
});

export default formSchema;
