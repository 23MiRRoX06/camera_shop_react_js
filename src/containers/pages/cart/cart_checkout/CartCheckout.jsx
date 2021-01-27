import React from 'react';
import { Input, Form as AntForm } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory }from 'react-router-dom';
import { CheckoutWrapper, HeaderContainer } from './CartCheckout.styled';
import { ContinueButton, BackButton, ButtonsContainer } from '../bottom_buttons/BottomButtons.styled';

const CartCheckout = () => {
    const history = useHistory();

    const onSubmitHandler = () => {
        history.push('/cart/success');
    }

    return (
        <>
            <HeaderContainer><div><h1>Checkout</h1></div></HeaderContainer>
            <CheckoutWrapper>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        age: 0
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string()
                            .min(4, 'Please, enter your real name')
                            .required('Please, enter your first name'),
                        lastName: Yup.string()
                            .max(100, 'Your lastname is too long')
                            .required('Please, enter your lastname'),
                        email: Yup.string()
                            .email('Please, enter valid email')
                            .required("Please, enter your email"),
                        phone: Yup.string()
                            .matches(new RegExp('[+]?[380][0-9]{10}'), 'Bad phone format')
                            .required("Please, enter your phone number"),
                        age: Yup.number()
                            .min(12, 'Minimal age is 12')
                            .required('Please, enter your age')
                    })}
                    onSubmit={onSubmitHandler}
                    >
                        <Form as={AntForm}>
                            <AntForm.Item type="text" name="firstName" required label="First Name">
                                <Field type="text" name="firstName" as={Input} />
                                <ErrorMessage name="firstName" component="div" />
                            </AntForm.Item>
                            <AntForm.Item type="text" name="lastName" required label="Last Name">
                                <Field type="text" name="lastName" as={Input} />
                                <ErrorMessage name="lastName" component="div" />
                            </AntForm.Item>
                            <AntForm.Item type="email" name="email" required label="Email">
                                <Field type="email" name="email" as={Input} />
                                <ErrorMessage name="email" component="div" />
                            </AntForm.Item>
                            <AntForm.Item type="text" name="phone" required label="Phone Number">
                                <Field type="text" name="phone" as={Input} />
                                <ErrorMessage name="phone" component="div" />
                            </AntForm.Item>
                            <AntForm.Item type="number" name="age" required label="Age">
                                <Field type="number" name="age" as={Input} />
                                <ErrorMessage name="age" component="div" />
                            </AntForm.Item>
                            <ButtonsContainer style={{width: '100%'}}>
                                <Link to="/cart"><BackButton>Back</BackButton></Link>
                                <ContinueButton type='submit'>Continue</ContinueButton>
                            </ButtonsContainer>
                        </Form>
                    </Formik>
            </CheckoutWrapper>
        </> 
    );
} 

export default CartCheckout;