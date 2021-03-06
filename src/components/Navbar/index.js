import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
	return (
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  {/* <a class="navbar-brand" href="#">Welcome</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="membership">Membership</a>
      </li>
      <li class="nav-item">
	  <a class="nav-link" href="events">Events</a>
	  </li>
	  <li class="nav-item">
	  <a class="nav-link" href="resources">Resources</a>
      </li>
	  <li class="nav-item">
	  <a class="nav-link" href="resources">Login</a>
      </li>
    </ul>
  </div>
</nav>
	);
}

export default Navbar;