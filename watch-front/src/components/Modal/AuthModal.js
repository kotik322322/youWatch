import React from 'react';
import styles from './AuthModal.module.scss';
import Button from '../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CgClose } from 'react-icons/cg';



const AuthModal = (props) => {

    const { closeModal } = props;

    const validationsSchema = yup.object().shape({
        userName: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
        userLastName: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
        password: yup.string().typeError('It must to be symbols, letters and numbers').required('is required!'),
        confirmPassword: yup.string().oneOf( [ yup.ref('password') ], 'You entered two different passwords. Please try again.' ).required('is required!'),
        email: yup.string().email('Enter correct e-mail address').required('is required!'),
        confirmEmail: yup.string().email('Enter correct e-mail address').oneOf( [ yup.ref('email') ], 'You entered two different e-mail address. Please try again.' ).required('is required!'),
    });
    
        return (
            <>
            <Formik 
                const initialValues = {{
                    userName: '',
                    userLastName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: '',
                }}

                validateOnBlur

                onSubmit={( values ) => { console.log(values) }}

                validationSchema={validationsSchema}

                > 

                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    
                <div className={styles.auth} > 
                    <div className={styles.authBody}>
                        <div className={styles.authContent}>
                            
                            <h2 className={styles.authTitle}>Create Account</h2>
                            <CgClose className={styles.authClose} onClick={ () => closeModal(false) }/>
                        
                            <div className={styles.authItem}>
                                <label className={styles.authLabel} htmlFor={`userName`}> First Name {touched.userName && errors.userName && <p className={styles.authError}> { errors.userName } </p> } </label> 
                                    <input
                                        className={styles.authInput}
                                        type={`text`}
                                        name={`userName`}
                                        maxLength={'80'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userName} 
                                    />
                            </div>

                            <div className={styles.authItem}>
                                <label className={styles.authLabel} htmlFor={`userLastName`}> Last Name {touched.userLastName && errors.userLastName && <p className={styles.authError}> { errors.userLastName } </p> } </label> 
                                    <input
                                        className={styles.authInput}
                                        type={`text`}
                                        name={`userLastName`}
                                        maxLength={'80'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.userLastName} 
                                    />
                            </div>

                            <div className={styles.authItem}>
                                <label className={styles.authLabel} htmlFor={`password`}> Password {touched.password && errors.password && <p className={styles.authError}> { errors.password } </p> } </label> 
                                    <input
                                        className={styles.authInput}
                                        type={`password`}
                                        name={`password`}
                                        maxLength={'80'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password} 
                                    />
                            </div>

                            <div className={styles.authItem}>
                                <label className={styles.authLabel} htmlFor={`confirmPassword`}> Confirm Password {touched.confirmPassword && errors.confirmPassword && <p className={styles.authError}> { errors.confirmPassword } </p> } </label> 
                                    <input
                                        className={styles.authInput}
                                        type={`password`}
                                        name={`confirmPassword`}
                                        maxLength={'80'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword} 
                                    />
                            </div>

                            <div className={styles.authItem}>
                                <label className={styles.authLabel} htmlFor={`email`}> Email {touched.email && errors.email && <p className={styles.authError}> { errors.email } </p> } </label> 
                                    <input
                                        className={styles.authInput}
                                        type={`email`}
                                        name={`email`}
                                        maxLength={'100'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} 
                                    />
                            </div>

                            <div className={styles.authItem}>
                                <label className={styles.authLabel} htmlFor={`confirmEmail`}> Confirm Email {touched.confirmEmail && errors.confirmEmail && <p className={styles.authError}> { errors.confirmEmail } </p> } </label> 
                                    <input
                                        className={styles.authInput}
                                        type={`email`}
                                        name={`confirmEmail`}
                                        maxLength={'100'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmEmail} 
                                    />
                            </div>


                        
                            <div className={styles.authBtn}>
                                <Button 
                                
                                text={'Create'}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit} 
                                type={`submit`}
                                
                                />
                            </div>

                        </div>
                    </div>
                </div>
                )}

            </Formik>
            </>
        );

}

export default AuthModal;