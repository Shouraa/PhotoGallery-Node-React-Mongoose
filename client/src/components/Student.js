import React, { Component } from "react";

const Student = props => {
  console.log(props.students);
  return (
    <div>
      <h1>Student detail Page</h1>

      <div>
        First Name: {props.students[props.match.params.index].firstName}
      </div>
      <div>Last Name: {props.students[props.match.params.index].lastName}</div>
      <div>Title: {props.students[props.match.params.index].title}</div>
      <div>
        Nationality: {props.students[props.match.params.index].nationality}
      </div>
      <div>
        Why Software Engineer:
        {props.students[props.match.params.index].whySofterDeveloper}
      </div>
      <div>
        Long Term Vision:
        {props.students[props.match.params.index].longTermVision}
      </div>
      <div>
        Skills: {props.students[props.match.params.index].skills.join(", ")}
      </div>
      <div>
        Motivates Me: {props.students[props.match.params.index].motivatesMe}
      </div>
      <div>
        Favorite Quote: {props.students[props.match.params.index].favoriteQuote}
      </div>
      <div>Joined on: {props.students[props.match.params.index].joinedOn}</div>

      <img src={"/" + props.students[props.match.params.index].src} />
    </div>
  );
};

export default Student;
