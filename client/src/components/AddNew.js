import React, { Component } from "react";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000/" });

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // file: null,
      firstName: "",
      lastName: "",
      title: "",
      nationality: "",
      whySofterDeveloper: "",
      longTermVision: "",
      motivatesMe: "",
      joinedOn: "",
      skills: "",
      studentImg: null
    };
    this.sendStudentToApi = this.sendStudentToApi.bind(this);
  }

  // handleFileChange = e => {
  //   this.setState({file: e.target.files[0]});
  // };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitted", this.state.firstName);
    const formData = new FormData();
    
    const studentInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      title: this.state.title,
      nationality: this.state.nationality,
      whySofterDeveloper: this.state.whySofterDeveloper,
      longTermVision: this.state.longTermVision,
      motivatesMe: this.state.motivatesMe,
      joinedOn: this.state.joinedOn,
      skills: this.state.skills,
      studentImg: this.state
    };
    formData.append("studentInfo", studentInfo);
    this.sendStudentToApi(formData);
  };

  async sendStudentToApi(studentInfo) {
    const res = await axios.post("/api/items", studentInfo, {"contentType": "multipart/form-data"});
    const result = await res.data;

    console.log(res.data);
    return res.data;
  }

  render() {
    const {
      firstName,
      lastName,
      title,
      nationality,
      whySofterDeveloper,
      longTermVision,
      motivatesMe,
      favoriteQuote,
      joinedOn,
      skills
    } = this.state;

    return (
      <div>
        <h1>Add New Student</h1>

        <form >
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            id="nationality"
            name="nationality"
            placeholder="Nationality"
            value={nationality}
            onChange={e => this.setState({ nationality: e.target.value })}
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
            Upload Your Picture
            <input
              type="file"
              id="studentPicture"
              name="studentPicture"
              onChange = {e => this.setState({ student: e.target.files[0] })};
              multiple
            />
          </label>
          <input
            type="text"
            className="form-control"
            id="whySofterDeveloper"
            name="whySofterDeveloper"
            placeholder="whySofterDeveloper"
            value={whySofterDeveloper}
            onChange={e =>
              this.setState({ whySofterDeveloper: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            id="longTermVision"
            name="longTermVision"
            placeholder="Long Term Vision"
            value={longTermVision}
            onChange={e => this.setState({ longTermVision: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            id="motivatesMe"
            name="motivatesMe"
            placeholder="Motivates Me"
            value={motivatesMe}
            onChange={e => this.setState({ motivatesMe: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            id="favoriteQuote"
            name="favoriteQuote"
            placeholder="Favorite Quote"
            value={favoriteQuote}
            onChange={e => this.setState({ favoriteQuote: e.target.value })}
          />
          <input
            type="date"
            className="form-control"
            id="joinedOn"
            name="joinedOn"
            placeholder="Joined On"
            value={joinedOn}
            onChange={e => this.setState({ joinedOn: e.target.value })}
          />
          <textarea
            className="form-control"
            rows="5"
            id="skills"
            name="skills"
            placeholder="Skills"
            value={skills}
            onChange={e => this.setState({ skills: e.target.value })}
          />

          <button
            type="submit"
            className="btn btn-default"
            onClick={this.handleSubmit}
          >
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
