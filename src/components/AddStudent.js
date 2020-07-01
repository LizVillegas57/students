import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label
} from "reactstrap";

export const AddStudent = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setStateAddress] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [gpa, setGPA] = useState('');
  const { addStudent } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newStudents = {
      id: uuid(),
      name,
      lastName,
      streetName,
      streetNumber,
      city,
      state,
      zip,
      phone,
      gpa
    }
    addStudent(newStudents);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const onChangeStreetName = (e) => {
    setStreetName(e.target.value);
  }

  const onChangeStreetNumber = (e) => {
    setStreetNumber(e.target.value);
  }

  const onChangeCity = (e) => {
    setCity(e.target.value);
  }
  
  const onChangeStateAddress = (e) => {
    setStateAddress(e.target.value);
  }
  
  const onChangeZip = (e) => {
    setZip(e.target.value);
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  }

  const onChangeGPA = (e) => {
    setGPA(e.target.value);
  }

  return (
    <div className="dashboard__box">
      <Form onSubmit={onSubmit}>
        <div className="header">
          <h1>Add information</h1>
        </div>
        <div className="form">
          <FormGroup>
            <Input type="text" value={name} onChange={onChange} name="name" placeholder="Name" required></Input>
          </FormGroup>
          <FormGroup>
            <Input type="text" value={lastName} onChange={onChangeLastName} name="lastName" placeholder="Last Name" required></Input>
          </FormGroup>
          <FormGroup className="form-half">
            <Label>Address</Label>
            <Input className="large" type="text" value={streetName} onChange={onChangeStreetName} name="streetName" placeholder="Street Name" required></Input>
            <Input className="small" type="number" value={streetNumber} onChange={onChangeStreetNumber} name="streetNumber" placeholder="#" required></Input>
          </FormGroup>
          <FormGroup className="form-three">
            <Input className="medium" type="text" value={city} onChange={onChangeCity} name="city" placeholder="City" required></Input>
            <Input className="medium last" type="text" value={state} onChange={onChangeStateAddress} name="state" placeholder="State" required></Input>
            <Input className="small" type="number" value={zip} onChange={onChangeZip} name="zip" placeholder="Zip code" required></Input>
          </FormGroup>
          <FormGroup>
            <Input type="number" value={phone} onChange={onChangePhone} name="phone" placeholder="Phone" required></Input>
          </FormGroup>
          <FormGroup>
            <Input type="number" value={gpa} onChange={onChangeGPA} name="gpa" placeholder="GPA" required></Input>
          </FormGroup>
          <div className="actions-form">
            <Link to="/" className="btn btn-danger mr-2">Cancel</Link>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
