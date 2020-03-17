import React from 'react';
import PropTypes from 'prop-types';

export default function Heading(props) {
  return (
    <h1 className="Heading">{props.heading}</h1>
  );
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired
};
