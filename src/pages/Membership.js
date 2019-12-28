import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

import "./style.css";

function Membership() {
    return (
        <div>
        <img
            className="size50"
            alt="streamLineLogo"
            src={"https://www.bronxhistoricaltours.com/uploads/3/8/6/0/38603287/1957474_orig.jpg"}
        />{" "}
        <h1>Woodlawn Heights Taxpayers and Community Association, Inc.</h1>
        <p className="home">The Woodlawn Heights Taxpayers and Community Association held its first meeting on May 10, 1895. The goal was to create a civic association that works for all residents, tenants, shareholders, homeowners, alike. 

Our Mission Statement is "To make Woodlawn a better place in which to live."  This has been the major focus of the members of the Association since it was established in 1895. Our all-volunteer Board work to serve the needs of our great neighborhood. It takes great neighbors to make a neighborhood great so get involved. 

Monthly open information Meetings

Monthly Newsletter
Collaborating with Federal, State and City Agencies
Neighborhood Beautification
Building Better Schools
Keeping the neighborhood safe 
Economic Development Issues
Quality Public Transportation
Working with our Elected Officials 
Keeping Quality-of-Life Issues a priority
Community Building with Neighborhood Events</p>
    </div>
    );
}
export default Membership;