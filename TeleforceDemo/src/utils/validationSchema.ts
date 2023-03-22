import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  // username
  username: yup
    .string()
    .min(3, ({min}) => `Username must be at least ${min} characters`)
    .required('Username is required'),

  password: yup
    .string()
    .min(3, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export {loginValidationSchema};
