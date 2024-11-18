import style from '../ContactForm/ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  email: Yup.string()
    .email('Invalid email address!')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Too Short! Password must be at least 8 characters.')
    .required('Required!'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(register(values));
    actions.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationFormSchema}
      >
        <Form className={style.contactForm}>
          <label className={style.contactInput}>
            <span>Name:</span>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>

          <label className={style.contactInput}>
            <span>Email:</span>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>

          <label className={style.contactInput}>
            <span>Password:</span>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>

          <button className={style.addContactBtn} type="submit">
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
}
