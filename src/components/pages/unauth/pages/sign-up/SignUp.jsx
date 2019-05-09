import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import http from '@services/http';
import * as actions from '@state/actions';
import InputField from '@components/InputField/InputField';
import SelectField from '@components/SelectField/SelectField';
import ConfirmationSent from '../../common/confirmation-sent/ConfirmationSent';
import ConfirmationResent from '../../common/confirmation-resent/ConfirmationResent';
import { numericRegEx } from '@constants/regex';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .strict()
    .trim()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),

  surname: Yup.string()
    .strict()
    .trim()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),

  email: Yup.string()
    .email('Invalid Email')
    .required('Required'),

  phone: Yup.string()
    .matches(numericRegEx)
    .min(8, 'Too Short!')
    .max(15, 'Too Long!')
    .required(),

  market_id: Yup.string().required('Required'),

  password: Yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const SignUp = ({ match: { url }, ...props }) => {
  const root = url === '/' ? '' : url;

  const [markets, setMarkets] = React.useState([]);

  React.useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const result = await http('/markets');

        setMarkets(result.data.data);
      } catch (err) {
        console.log('Error fetching markets!');
      }
    };

    fetchMarkets();
  }, []);

  console.log(props);

  return !props.confirmationEmailSent && !props.confirmationEmailResent ? (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        phone: '',
        market_id: '',
        password: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={props.register}>
      {({ errors, touched, setFieldValue }) => {
        return (
          <div className="sign-up">
            <h1 className="title-primary">Sign Up</h1>
            <p className="title-subtext font-arial">
              Enter your details to sign up to Axe's <br /> Passions Portal.
            </p>

            <div className="form-holder">
              <Form>
                <Field
                  name="name"
                  type="text"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="text"
                      label="name"
                      placeholder="name"
                      hasError={touched.name && errors.name}
                    />
                  )}
                />
                <Field
                  name="surname"
                  type="text"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="text"
                      label="surname"
                      placeholder="surname"
                      hasError={touched.surname && errors.surname}
                    />
                  )}
                />
                <Field
                  name="email"
                  type="email"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="email"
                      label="email"
                      placeholder="example@axe.com"
                      hasError={touched.email && errors.email}
                    />
                  )}
                />

                <Field
                  name="phone"
                  type="number"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="text"
                      label="phone number"
                      placeholder="+44 (0) 0000 000 000"
                      hasError={touched.phone && errors.phone}
                    />
                  )}
                />

                <SelectField
                  options={markets}
                  setFieldValue={setFieldValue}
                  label="markets"
                  placeholder="markets"
                  name="market_id"
                  hasError={touched.market_id && errors.market_id}
                />

                <Field
                  name="password"
                  type="password"
                  render={({ field }) => (
                    <InputField
                      {...field}
                      type="password"
                      label="password"
                      placeholder="password"
                      hasError={touched.password && errors.password}
                    />
                  )}
                />
                <button type="submit" className="btn">
                  sign up
                </button>
              </Form>
            </div>

            <p className="title-subtext confirmation font-arial">
              Already got an account?&nbsp;
              <Link to={`/`} className="auth-link-text">
                Sign In
              </Link>
            </p>
          </div>
        );
      }}
    </Formik>
  ) : props.confirmationEmailResent ? (
    <ConfirmationResent />
  ) : (
    <ConfirmationSent />
  );
};

const mapStateToProps = state => ({
  confirmationEmailSent: state.user.confirmationEmailSent,
  confirmationEmailResent: state.user.confirmationEmailResent,
});

export default connect(
  mapStateToProps,
  actions,
)(withRouter(SignUp));
