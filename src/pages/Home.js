import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

import "./style.css";

function Home() {
    return (
        <div>
        <img
            className="size50"
            alt="streamLineLogo"
            src={"https://www.bronxhistoricaltours.com/uploads/3/8/6/0/38603287/1957474_orig.jpg"}
        />{" "}
        <h1>Woodlawn Heights Taxpayers and Community Association, Inc.</h1>
        <p className="home">Established in 1895, The Woodlawn Taxpayers Association is a not-for-profit community organization that works to service the needs of the neighborhood.
Our goal is to protect the public interest of the Woodlawn Heights community by holding meetings the second Monday of each month at 7:30pm. These meetings are usually located in the St. Barnabas Elementary School Cafeteria unless otherwise noted. 

These meetings consist of guest speakers, community announcements and events, residents concerns and working with our elected officials and government agencies to address the issues and concerns of the neighborhood. We work to make Woodlawn a better place live.

The Association is proud to have been the leader in the fight to bring these “firsts” to Woodlawn:
First Public School
First Fire Department
First Public Library
First Playground
First Bank
First Public Transportation
First Telephone Lines
First Electrical Power
First Post Office

AND, WE’RE STILL FIGHTING FOR YOU BY:
Establishing the Meals-on-Wheels program for our senior residents.
Preventing the construction of a superhighway across E. 233rd Street.
Preventing the enactment of a discriminatory sewer assessment. 
Securing a library facility and fighting for its renovation.
Expanding our local public school from a kindergarten through sixth-grade school to a kindergarten through eighth-grade school.
Preventing unjustified increases in real estate taxes.
Enhancing police presence in the area.
Establishing area beautification programs, including tree and flowerbed plantings, neighborhood clean-up campaigns, etc.
Presenting forums for government representatives to listen to the citizens of Woodlawn.
Placing of traffic lights and signs in the neighborhood.
Planting of hundreds of trees and flowers in the neighborhood.
Installing Bishop’s crook-style street lighting fixtures on Katonah Ave.
The Association has primarily been supported through the annual payment of modest dues and donations from people like you. It has no paid staff, only volunteers. As a direct result, Woodlawn still retains its small-town charm.
Become part of your neighborhood civic association! Help keep Woodlawn Strong.</p>
    </div>
    );
}
export default Home;



