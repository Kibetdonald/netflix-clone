import React from 'react'
import { Button, FormControl, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fontawesome/css/all.min.css';
import {Link} from 'react-router-dom';


import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

//import style
import './style.css';

/**
* @author
* @function LandingPage
**/

const LandingPage = (props) => {
    return (
        <div>
            <img className="backgroundImage" src="./assets/images/background.jpg" alt="background" />
            <div className="navbar" >
                <h5>NETFLIX</h5>
                <Link><button className="btn bt-danger">SIGN IN</button></Link>
            </div>
            <div className="centerDiv">
                <span className="txt">Unlimited movies, TV<br /> shows, and more.</span>
                <h5>Watch anywhere. Cancel anytime.</h5>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <center>
                    <Form style={{ width: "50%" }} className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Email address"
                            className="mr-2"
                        />
                        <Button style={{ width: "30%", backgroundColor: "red" }} className="btn btn-danger">Get started&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></Button>
                    </Form>
                </center>
            </div>
            <hr className="divider" />
            <div className="moreInfo">
              
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <div className="moretext">
                                    <h4>Enjoy on your TV</h4>
                                    <span>
                                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                                    </span>
                                </div>
                            </div>
                            <div class="col-sm" style={{ width: "50%", margin: "auto" }}>
                                <video autoplay>
                                    <source src="./assets/images/Netflix South Africa - Watch TV Shows Online, Watch Movies Online.m4v" type="video/mp4" />

                                </video>
                        

                        </div>
                    </div>
                </div>
            </div>

            {/* Second container here */}
            <hr className="divider" />

            <div className="moreInfo">
                <div className="more">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <img src="assets/images/mobile-0819.jpg" alt="mobile" />
                            </div>
                            <div class="col-sm" style={{ height: "50%", width: "100%", margin: "auto" }}>
                                <div className="moretext">
                                    <h4>Download your shows to watch offline.</h4>
                                    <span>
                                        Save your favorites easily and always have something to watch.
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* third container */}


                <hr className="divider" />

                <div className="moreInfo">
                    <div className="more">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                    <div className="moretext">
                                        <h4>Watch everywhere.</h4>
                                        <span>
                                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                                        </span>
                                    </div>
                                </div>
                                <div class="col-sm" style={{ width: "100%", margin: "auto" }}>

                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="divider" />


                    {/* fourth container */}



                    <div className="moreInfo">
                        <div className="more">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <div className="moretext">
                                            <h4>Create profiles for kids.</h4>
                                            <span>
                                                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-sm" style={{ width: "100%", margin: "auto" }}>
                                        <img src="./assets/images/kids.png" alt="pic" />

                                    </div>

                                </div>
                            </div>
                        </div>

                        <hr className="divider" />
                        <div className="freqQns">

                            <span>Frequently Asked Questions</span>


                            <Accordion style={{ width: "50%", margin: "auto", color: "white", backgroundColor: "black" }}>
                                <AccordionSummary
                                    expandIcon={<i class="fa fa-plus" style={{ color: "#fff" }} aria-hidden="true"></i>}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 10,
                                        }}
                                    >
                                        What is NETFLIX?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!)</Typography>
                                </AccordionDetails>
                            </Accordion >

                            <Accordion style={{ width: "50%", margin: "auto", color: "white", backgroundColor: "black" }}>
                                <AccordionSummary
                                    expandIcon={<i class="fa fa-plus" style={{ color: "#fff" }} aria-hidden="true"></i>}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 10,
                                        }}
                                    >
                                        How much does NETFLIX cost?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from R49 to R169 a month. No extra costs, no contracts.</Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ 3 */}
                            <Accordion style={{ width: "50%", margin: "auto", color: "white", backgroundColor: "black" }}>
                                <AccordionSummary
                                    expandIcon={<i class="fa fa-plus" style={{ color: "#fff" }} aria-hidden="true"></i>}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 10,
                                        }}
                                    >
                                        Where can i watch?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                        <br />
                                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ 4 */}
                            <Accordion style={{ width: "50%", margin: "auto", color: "white", backgroundColor: "black" }}>
                                <AccordionSummary
                                    expandIcon={<i class="fa fa-plus" style={{ color: "#fff" }} aria-hidden="true"></i>}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 10,
                                        }}
                                    >
                                        How do i cancel?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ 5 */}
                            <Accordion style={{ width: "50%", margin: "auto", color: "white", backgroundColor: "black" }}>
                                <AccordionSummary
                                    expandIcon={<i class="fa fa-plus" style={{ color: "#fff" }} aria-hidden="true"></i>}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 10,
                                        }}
                                    >
                                        What can i watch on netflix?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ 5 */}
                            <Accordion style={{ width: "50%", margin: "auto", color: "white", backgroundColor: "black" }}>
                                <AccordionSummary
                                    expandIcon={<i class="fa fa-plus" style={{ color: "#fff" }} aria-hidden="true"></i>}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography
                                        style={{
                                            fontWeight: 10,
                                        }}
                                    >
                                        Is netflix good for kids?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</Typography>
                                </AccordionDetails>
                            </Accordion>

                            <div className="watchNow">
                                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                                <center>
                                    <Form style={{ width: "50%" }} className="d-flex">
                                        <FormControl
                                            type="search"
                                            placeholder="Email address"
                                            className="mr-2"


                                        />
                                        <Button style={{ width: "30%", backgroundColor: "red" }} className="btn btn-danger">Get started&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></Button>
                                    </Form>
                                </center>


                            </div>


                            <div className="footer">

                                <Row>

                                    <Col>
                                        <ul>
                                            <li>FAQ</li>
                                            <li>Inverstor Relation</li>
                                            <li>Terms of use</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Help Center</li>
                                            <li>Jobs</li>
                                            <li>Privacy</li>
                                            <li>Speed Test</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Account</li>
                                            <li>Redeem Gift Cards</li>
                                            <li>Cookie Preferences</li>
                                            <li>Legal Notices</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Media Center</li>
                                            <li>Ways to Watch</li>
                                            <li>Corporate Information</li>
                                            <li>Only on Netflix</li>
                                        </ul>
                                    </Col>
                                </Row>

                            </div>







                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default LandingPage