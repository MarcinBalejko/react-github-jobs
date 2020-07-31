import React from "react";
import { Form, Col } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {
  return (
    <div>
      <Form className="mb-4">
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={onParamChange}
              value={params.description}
              name="description"
              type="text"
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Loacation</Form.Label>
            <Form.Control
              onChange={onParamChange}
              value={params.location}
              name="location"
              type="text"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
