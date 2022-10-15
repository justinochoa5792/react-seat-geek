import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Input = ({ placeholder, onChange, onSubmit }) => {
  return (
    <div className="container">
      <Form onSubmit={onSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">SG</InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={placeholder}
            onChange={onChange}
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default Input;
