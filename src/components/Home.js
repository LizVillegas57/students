import React from 'react';
import { Heading } from "./Heading";
import { StudentList } from "./StudentList";

export const Home = () => {
  return (
    <div className="dashboard__box">
      <Heading />
      <StudentList />
    </div>
  )
}
