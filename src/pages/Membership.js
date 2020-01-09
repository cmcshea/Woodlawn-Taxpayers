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
        <p className="home">Membership
The Association is supported through the annual payment of modest dues and donations from people like you. Become part of your neighborhood civic association! Help keep Woodlawn strong.

Yearly Membership dues are $15. 
Checks Made Payable to:  The Woodlawn Taxpayers Association. 
Please join us at the next Woodlawn Heights Taxpayers & Community Association general meeting on the second Monday of the month at 7:30PM, at the St Barnabas Elementary School cafeteria. We look forward to seeing you there.  

Voice your opinion, meet some friends, and win a raffle or two. 



Meeting Dates

September 11, 2017

October 9, 2017

November 13 2017

December 11, 2017*

January 8, 2018*

February 12, 2018*

March 12, 2018*

April 9, 2018

May 14, 2018

June 11, 2018

* The meeting scheduled in the Rambling House.

Please download the WHTCA Membership Application below to join or renew.</p>
    </div>
    );
}
export default Membership;