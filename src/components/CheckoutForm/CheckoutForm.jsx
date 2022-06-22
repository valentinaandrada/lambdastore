import { useState } from "react";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function CheckoutForm({ sendOrder }) {
  const [customer, setCustomer] = useState({});
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});

  const handleInputChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    } else {
      setCustomer({
        ...customer,
        [field]: value,
      });
    }
  };

  const validateForm = () => {
    const { name, phone, email, email2 } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "Please enter your name";
    else if (name.length < 3) newErrors.name = "Please enter a valid name";

    if (!phone || phone === "") newErrors.phone = "Please enter your phone";
    else if (phone.length < 9 || !/^[0-9\b]+$/.test(phone))
      newErrors.phone = "Please enter a 9 digit phone number";

    if (!email || email === "") newErrors.email = "Please enter your email";
    else if (email.length < 3 || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email address";

    if (!email2 || email2 === "") newErrors.email2 = "Please enter your email2";
    else if (email2 !== email) newErrors.email2 = "Email addresses must match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      sendOrder(customer);
    }
  };

  return (
    <div className="pt-2">
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="name">
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-3"
          >
            <Form.Control
              required
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email2">
          <FloatingLabel
            controlId="floatingInput"
            label="Repeat Email address"
            className="mb-3"
          >
            <Form.Control
              required
              type="email"
              placeholder="Repeat Email address"
              value={form.email2}
              onChange={(e) => handleInputChange("email2", e.target.value)}
              isInvalid={!!errors.email2}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email2}
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

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn-gral btn-white mt-4"
        >
          Finish purchase
        </button>
      </Form>
    </div>
  );
}

export default CheckoutForm;
