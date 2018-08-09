import React, { Component } from "react";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Add New Student</h1>

        <form action="/addConfirm" method="POST" encType="multipart/form-data">
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
          />
          <input
            type="text"
            className="form-control"
            id="nationality"
            name="nationality"
            placeholder="Nationality"
          />
          <input
            type="hidden"
            className="form-control"
            id="src"
            name="src"
            placeholder="Src"
          />
          <input
            type="hidden"
            className="form-control"
            id="alt"
            name="alt"
            placeholder="Alt"
          />
          <label id="#bb">
            {" "}
            Upload Your Picture
            <input
              type="file"
              id="studentPicture"
              name="studentPicture"
              multiple
            />
          </label>
          <input
            type="text"
            className="form-control"
            id="whySofterDeveloper"
            name="whySofterDeveloper"
            placeholder="whySofterDeveloper"
          />
          <input
            type="text"
            className="form-control"
            id="longTermVision"
            name="longTermVision"
            placeholder="Long Term Vision"
          />
          <input
            type="text"
            className="form-control"
            id="motivatesMe"
            name="motivatesMe"
            placeholder="Motivates Me"
          />
          <input
            type="text"
            className="form-control"
            id="favoriteQuote"
            name="favoriteQuote"
            placeholder="Favorite Quote"
          />
          <input
            type="date"
            className="form-control"
            id="joinedOn"
            name="joinedOn"
            placeholder="Joined On"
          />
          <textarea
            className="form-control"
            rows="5"
            id="skills"
            name="skills"
            placeholder="title"
          />

          <button type="submit" className="btn btn-default">
            Add Student
          </button>
          <button type="reset" className="btn btn-default">
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default AddNew;
