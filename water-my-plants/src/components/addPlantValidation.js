import * as yup from "yup";

const schema = yup.object().shape({
  nickname: yup.string().required("Please name your plant"),
  species: yup.string().required("Enter a species"),
  h2o_frequency: yup.string().required("Enter a frequency")
});

export default schema;
