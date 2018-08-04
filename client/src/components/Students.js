import React, { Component } from "react";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          firstName: "asghar",
          lastName: "taraghe"
        },
        {
          firstName: "koskeshe",
          lastName: "kuni"
        },
        {
          firstName: "pedasage",
          lastName: "lashi"
        },

        {
          firstName: "dayyuse",
          lastName: "madarghahbe"
        }
      ]
    };
  }
}

export default Students;
