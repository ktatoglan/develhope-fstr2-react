import React, { useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="container mt-4">
      <Form>
        <Form.Group>
          <Form.Label>Label</Form.Label>
          <Form.Control type="text" placeholder="placeholder" ref={inputRef} />
          <Form.Text className="text-muted">
            text-muted
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FocusableInput;
