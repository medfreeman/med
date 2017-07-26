/* eslint-disable react/jsx-handler-names */
import React from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = props =>
  <div className={props.className}>
    <ReCAPTCHA sitekey={props.siteKey} onChange={props.input.onChange} />
    <span className={props.errorClass}>
      {props.meta.touched && props.meta.error}
    </span>
  </div>;

Captcha.propTypes = {
  className: PropTypes.string,
  errorClass: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  }),
  siteKey: PropTypes.string.isRequired
};

export default Captcha;
