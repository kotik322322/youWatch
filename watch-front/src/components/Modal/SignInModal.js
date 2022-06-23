import React from 'react';
import styles from './SignInModal.module.scss';
import Button from '../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CgClose } from 'react-icons/cg';
import AuthModal from './AuthModal';





const SignInModal = ({ closeSignInModal }) => {

   
    const [ openAuthModal, setOpenAuthModal ] = React.useState(false)


    const validationsSchema = yup.object().shape({
        email: yup.string().email('Enter correct e-mail address').required('is required!'),
        password: yup.string().typeError('It must to be symbols, letters and numbers').required('is required!'),
    });
    
        return (
            <>

            {openAuthModal && <AuthModal closeModal={setOpenAuthModal} />}

            <Formik 
                const initialValues = {{
                    email: '',
                    password: '',
                }}

                validateOnBlur

                onSubmit={( values ) => { console.log(values) }}

                validationSchema={validationsSchema}

                > 

                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    
                <div className={styles.signin} > 
                    <div className={styles.signinBody}>
                        <div className={styles.signinContent}>
                            
                        
                            <h2 className={styles.signinTitle}> Sign In</h2>

                            <CgClose className={styles.signinClose} onClick={ () => closeSignInModal(false) }/>
            

                            <div className={styles.signinItem}>
                                <label className={styles.signinLabel} htmlFor={`confirmEmail`}> Email {touched.email && errors.email && <p className={styles.signinError}> { errors.email } </p> } </label> 
                                    <input
                                        className={styles.signinInput}
                                        type={`email`}
                                        name={`email`}
                                        maxLength={'100'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} 
                                    />
                            </div>

                            <div className={styles.signinItem}>
                                <label className={styles.signinLabel} htmlFor={`password`}> Password {touched.password && errors.password && <p className={styles.signinError}> { errors.password } </p> } </label> 
                                    <input
                                        className={styles.signinInput}
                                        type={`password`}
                                        name={`password`}
                                        maxLength={'80'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password} 
                                    />
                            </div>

                            <div className={styles.signinAccount} onClick={ () => setOpenAuthModal(true) }>
                                <span> Don't have an account yet? </span>
                            </div>

                        
                            <div className={styles.signinBtn}>
                                <Button 
                                
                                text={'Sign In'}
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

export default SignInModal;