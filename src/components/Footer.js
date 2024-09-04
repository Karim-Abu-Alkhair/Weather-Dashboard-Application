import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className=" text-center py-6 text-sm opacity-55 ">
          Created by <b>Karim Ashraf</b> &copy; {new Date().getFullYear()}
        </p>
      </footer>
    );
  }
}

export default Footer;
