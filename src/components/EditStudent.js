import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditStudent = (props) => {
  const { editStudent, students } = useContext(GlobalContext);
  const [selectedStudent, setSelectedStudent] = useState({
    id: '',
    name: '',
    lastName: '',
    streetName: '',
    streetNumber: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    gpa: '',
  })
  const history = useHistory();
  const currentStudentId = props.match.params.id;

  useEffect(() => {
    const studentId = currentStudentId;
    const selectedStudent = students.find(student => student.id === studentId);
    setSelectedStudent(selectedStudent);
  }, [currentStudentId, students])

  const onChange = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.name]: e.target.value })
  }

  const onChangeLastName = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.lastName]: e.target.value });
  }

  const onChangeStreetName = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.streetName]: e.target.value });
  }

  const onChangeStreetNumber = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.streetNumber]: e.target.value });
  }

  const onChangeCity = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.city]: e.target.value });
  }
  
  const onChangeStateAddress = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.state]: e.target.value });
  }
  
  const onChangeZip = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.zip]: e.target.value });
  }

  const onChangePhone = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.phone]: e.target.value });
  }

  const onChangeGPA = (e) => {
    setSelectedStudent({ ...selectedStudent, [e.target.gpa]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editStudent(selectedStudent);
    history.push("/")
  }

  return (
    <div className="dashboard__box">
      <Form onSubmit={onSubmit}>
        <div className="header">
          <h1>Edit information</h1>
        </div>
        <div className="form">
          <FormGroup>
            <Input type="text" value={selectedStudent.name} onChange={onChange} name="name" placeholder="Name" required></Input>
          </FormGroup>
          <FormGroup>
            <Input type="text" value={selectedStudent.lastName} onChange={onChangeLastName} name="lastName" placeholder="Last Name" required></Input>
          </FormGroup>
          <FormGroup className="form-half">
            <Label>Address</Label>
            <Input className="large" type="text" value={selectedStudent.streetName} onChange={onChangeStreetName} name="streetName" placeholder="Street Name" required></Input>
            <Input className="small" type="number" value={selectedStudent.streetNumber} onChange={onChangeStreetNumber} name="streetNumber" placeholder="#" required></Input>
          </FormGroup>
          <FormGroup className="form-three">
            <Input className="medium" type="text" value={selectedStudent.city} onChange={onChangeCity} name="city" placeholder="City" required></Input>
            <Input className="medium last" type="text" value={selectedStudent.state} onChange={onChangeStateAddress} name="state" placeholder="State" required></Input>
            <Input className="small" type="number" value={selectedStudent.zip} onChange={onChangeZip} name="zip" placeholder="Zip code" required></Input>
          </FormGroup>
          <FormGroup>
            <Input type="number" value={selectedStudent.phone} onChange={onChangePhone} name="phone" placeholder="Phone" required></Input>
          </FormGroup>
          <FormGroup>
            <Input type="number" value={selectedStudent.gpa} onChange={onChangeGPA} name="gpa" placeholder="GPA" required></Input>
          </FormGroup>
          <div className="actions-form">
            <Link to="/" className="btn btn-danger mr-2">Cancel</Link>
            <Button type="submit">Edit</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
