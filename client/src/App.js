import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";
import NavBar from "./components/navBar";
import Students from "./components/Students";
import Student from "./components/Student";
import AddNew from "./components/AddNew";

// const axiosInstance = axios.create({ baseURL: "http://localhost:5000/" });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
    this.getItemsFromAPI = this.getItemsFromAPI.bind(this);
  }

  async getItemsFromAPI() {
    const res = await axios.get("/api/items");
    const result = await res.data;
    // this.props.getData(res.data);
    console.log(res.data);
    return res.data;
  }

  componentDidMount() {
    // this.getItemsFromAPI();
    this.getItemsFromAPI().then(students => this.setState({ students }));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Students {...props} students={this.state.students} />
                )}
              />

              <Route
                exact
                path="/Student/:index"
                render={props => (
                  <Student {...props} students={this.state.students} />
                )}
              />
              <Route
                exact
                path="/AddNew/"
                render={props => <AddNew {...props} />}
              />
            </switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
