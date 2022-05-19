import { useState } from 'react';

export const useFormControls = (initialFormValues) => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ('name' in fieldValues)
      temp.name = fieldValues.name ? '' : 'This field is required.';

    if ('email' in fieldValues) {
      temp.email = fieldValues.email ? '' : 'This field is required.';
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ''
          : 'Email is not valid.';
    }

    if ('phone' in fieldValues) {
      temp.phone = fieldValues.phone ? '' : 'This field is required.';
      if (fieldValues.phone)
        temp.phone = /^[+\d]?(?:[\d-.\s()]*)$/.test(fieldValues.phone)
          ? ''
          : 'Phone is not valid.';
    }

    if ('message' in fieldValues)
      temp.message =
        fieldValues.message.length !== 0 ? '' : 'This field is required.';

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  // const handleSuccess = () => {
  //   setValues({
  //     ...initialFormValues,
  //     formSubmitted: true,
  //     success: true,
  //   });
  // };

  // const handleError = () => {
  //   setValues({
  //     ...initialFormValues,
  //     formSubmitted: true,
  //     success: false,
  //   });
  // };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.name &&
      fieldValues.email &&
      fieldValues.phone &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === '');

    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === '') && formIsValid();
    if (isValid) {
      console.log('Submit');
      // await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
  };
};
