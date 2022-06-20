import React from 'react';
import styles from './Modal.module.scss'
import Button from '../Button/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CgClose } from 'react-icons/cg';



const Modal = (props) => {

    const { closeModal } = props;

    const validationsSchema = yup.object().shape({
        userName: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
        userLastName: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
        select: yup.string().required('is required!'),
        city: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
        state: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
        zip: yup.string().matches(/^[0-9]+$/, 'must contain only numbers').required('is required!'),
        address: yup.string().required('is required!'),
    });
    
        return (
            <>
            <Formik 
                const initialValues = {{
                    userName: '',
                    userLastName: '',
                    select: '',
                    state: '',
                    city: '',
                    zip: '',
                    address: '',
                }}

                validateOnBlur

                onSubmit={( values ) => { console.log(values) }}

                validationSchema={validationsSchema}

                > 

                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    
                <div className={styles.form} > 
                    <div className={styles.formBody}>
                        <div className={styles.formContent}>
                            
                                <h2 className={styles.formTitle}>Ordering</h2>

                                <CgClose className={styles.formClose} onClick={ () => closeModal(false) }/>
                            
                                <div className={styles.formItem}>

                                    <label className={styles.formLabel} htmlFor={`userName`}> First Name {touched.userName && errors.userName && <p className={styles.formError}> { errors.userName } </p> } </label> 

                                        <input
                                            className={styles.formInput}
                                            type={`text`}
                                            name={`userName`}
                                            maxLength={'20'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userName} 
                                        />
                                </div>

                                <div className={styles.formItem}>
                                    <label className={styles.formLabel} htmlFor={`userLastName`}> Last Name {touched.userLastName && errors.userLastName && <p className={styles.formError}> { errors.userLastName } </p> } </label> 

                                        <input
                                            className={styles.formInput}
                                            type={`text`}
                                            name={`userLastName`}
                                            maxLength={'40'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userLastName} 
                                        />
                                </div>

                                <div className={styles.formItem}>
                                    <label className={styles.formLabel} htmlFor={`select`}> Country or Region {touched.select && errors.select && <p className={styles.formError}> { errors.select } </p> } </label> 

                                    <select className={styles.formSelect}>
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name={`select`}
                                        value={values.select} 
                                      <option value="USA">United States</option>
                                      <option value="Canada">Canada</option>
                                      <option value="UK">United Kingdom</option>
                                      <option value="AUS">Australia</option>
                                      <option value="Belgium">Belgium</option>
                                      <option value="China">China</option>
                                      <option value="Denmark">Denmark</option>
                                      <option value="Estonia">Estonia</option>
                                      <option value="France">France</option>
                                      <option value="UA">Ukraine</option>
                                      <option value="Germany">Germany</option>
                                      <option value="HK">Hong Kong</option>
                                      <option value="Iceland">Iceland</option>
                                      <option value="Japan">Japan</option>
                                      <option value="SKR">South Korea</option>
                                      <option value="Mexico">Mexico</option>
                                      <option value="NL">Netherlands</option>
                                      <option value="PL">Poland</option>
                                      <option value="Taiwan">Taiwan</option>
                                      <option value="TR">Turkey</option>
                                      <option selected value="#"></option>
                                    </select>


                               </div>

                               <div className={styles.formItem}>
                                    <label className={styles.formLabel} htmlFor={`city`}> City {touched.city && errors.city && <p className={styles.formError}> { errors.city } </p> } </label> 

                                        <input
                                            className={styles.formInput}
                                            type={`text`}
                                            name={`city`}
                                            maxLength={'150'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city} 
                                        />
                                </div>

                                <div className={styles.formItem}>
                                    <label className={styles.formLabel} htmlFor={`state`}> State/Province/Region {touched.state && errors.state && <p className={styles.formError}> { errors.state } </p> } </label> 

                                        <input
                                            className={styles.formInput}
                                            type={`text`}
                                            name={`state`}
                                            maxLength={'300'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.state} 
                                        />
                                </div>

                                <div className={styles.formItem}>
                                    <label className={styles.formLabel} htmlFor={`zip`}> ZIP Code {touched.zip && errors.zip && <p className={styles.formError}> { errors.zip } </p> } </label> 

                                        <input
                                            className={styles.formInput}
                                            type={`text`}
                                            name={`zip`}
                                            maxLength={'20'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.zip} 
                                        />
                                </div>

                                <div className={styles.formItem}>

                                    <label className={styles.formLabel} htmlFor={`address`}> Street address {touched.address && errors.address && <p className={styles.formError}> { errors.address} </p> } </label> 

                                        <input
                                            className={styles.formInput}
                                            type={`text`}
                                            name={`address`}
                                            maxLength={'300'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address} 
                                        />
                                </div>


                                <div className={styles.formBtn}>
                                    <Button 
                                    
                                    text={'Buy'}
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

export default Modal;