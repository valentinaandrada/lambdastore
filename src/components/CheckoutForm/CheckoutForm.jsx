import { useState } from "react";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function CheckoutForm({ sendOrder }) {
  const [validated, setValidated] = useState(false);
  const [customer, setCustomer] = useState({});

  const handleInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.value.length > 3) {
      setCustomer({
        ...customer,
        [e.target.name]: e.target.value,
      });
    }
    console.log(customer);
  };

  function manageData() {
    if (customer.name && customer.phone && customer.email) {
      sendOrder(customer);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    manageData();
  };

  return (
    <div className="pt-2">
      <Form
        noValidate
        validated={validated}
        className="mt-4"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Name is required.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control
              required
              pattern="[0-9]+"
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a 9 digit phone number
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="Email address"
              name="email"
              onChange={handleInputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Repeat Email address"
            className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="Repeat Email address"
            />
            <Form.Control.Feedback type="invalid">
              Email addresses don't match
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            className="f-smaller"
            label="I would like to receive exclusive promotions, the latest news and personalised information adapted to my customer profile."
          />
        </Form.Group>
        <button type="submit" className="btn-gral btn-white mt-4">
          Finish purchase
        </button>
      </Form>
    </div>
  );
}

export default CheckoutForm;
