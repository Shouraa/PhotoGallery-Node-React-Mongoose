import React from "react";
import { Link } from "react-router-dom";

const Students = props => {
  return (
    <div>
      <h1>Students Page</h1>
      <ul>
        {props.students.map((student, index) => (
          <li key={student._id}>
            {student.firstName} {student.lastName}
            <Link to={"/student/" + index}>
              <img src={student.src} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
