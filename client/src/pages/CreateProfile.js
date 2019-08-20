import React, { Component } from "react";
import Container from "../components/Container";

import CreateProfileForm from "../components/CreateProfileForm"
import Row from "../components/Row"
import Col from "../components/Col"
import API from "../utils/API"
import FormBtn from "../components/FormBtn"
import Hero from "../components/Hero"
import axios from "axios";
const API_Key = "UjKHCKQzj2N4Sir70VVloAR2AVB0KdlG"
class CreateProfile extends Component {
    state = {
        email: "",
        password: "",
        name: "",
        location: "",
        image: "",
        links: "",
        gender: "",
        isLooking: "",
        age: "",
        role: "",
        instrument: "",
        style: "",
        experience: "",
        sessions: "",
        contact: "",
        about: "",
        lat: null,
        lng: null,
        selectedFile: null,
        errors: {}
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }, () => {
                console.log(this.state.lat)
                axios.get(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${API_Key}&location=${this.state.lat},${this.state.lng}&includeRoadMetadata=true&includeNearestIntersection=true`).then(res => {
                    const st = res.data.results[0].locations[0].adminArea3;
                    const userCity = res.data.results[0].locations[0].adminArea5;

                    // this.setState({city: userCity, userState: st})
                    this.setState({ location: userCity + " " + st })
                    console.log(this.state.location)
                })
            }),
            err => this.setState({ errorMessage: err.message }),

        )

    }

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.style === '') {
            return this.setState({ errors: { styleEmpty: 'You must Select a style' } });
        }
        this.setState({ errors: {} });
        API.saveProfile({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            location: this.state.location,
            // city: this.state.city,
            // state: this.state.userState,
            gender: this.state.gender,
            image: this.state.image,
            links: this.state.links,
            isLooking: this.state.isLooking,
            age: this.state.age,
            role: this.state.role,
            instrument: this.state.instrument,
            style: this.state.style,
            experience: this.state.experience,
            sessions: this.state.sessions,
            contact: this.state.contact,
            about: this.state.about
        })
            .then(res => console.log('the results', res))
            .catch(err => console.log(err));
        alert("Profile created! Now go out there and make some music!")
        // window.location.assign("/");
    };

    fileSelectedHandler = event => {
        //log the event to make sure the correct file is targeted
        console.log(event.target.files[0]);
        this.setState({

            //image: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        //not sure if this is the correct route 
        axios.post("api/profiles/uploads");
    }


    //method for geolocation



    render() {
        console.log('this.state', this.state);
        const { errors, email, password, style, sessions, location, isLooking, role, gender, name, links, contact, image } = this.state;
        return (
            <div>

                <Container >

                    <h1 className="text-light coolFont">Create a Profile</h1>
                    <Row>

                        <Col size="md-12">
                            <form className="text-light">
                                {/*Email Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email</label>
                                    <input type="text"
                                        value={email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Your Email Address" />
                                </div>
                                {/*Password Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Password</label>
                                    <input type="text"
                                        value={password}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Choose a Password" />
                                </div>
                                {/*Name Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text"
                                        value={name}
                                        name="name"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Your Name Here" />
                                </div>
                                {/*Location Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Location: </label>
                                    {/* <p id="location-instruction" value={this.state.location}><strong>{this.state.location}</strong></p>
                                    <h5 type="text"
                                        
                                        name="location"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Where are you located?" /> */}
                                    <select  
                                            id="exampleFormControlSelect2"
                                            onChange={this.handleInputChange}
                                            className='form-control'
                                            name='location'
                                            value={location}
                                            placeholder='Where are you located?'>
                                        <option>{location}</option>
                                        <option>Enter another location</option>
                                       
                                    </select>
                                </div>
                                {/*Gender Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Gender Are You?</label>
                                    <select value={gender}
                                        name="gender"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Select One (Optional)</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>

                                    </select>
                                </div>
                                {/*Image Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Image</label>
                                    <input type="file"
                                        value={image}
                                        name="image"
                                        onClick={this.fileUploadHandler}
                                        onChange={this.fileSelectedHandler}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Show us your ugly mug" />

                                </div>
                                {/*Status Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Are you currently looking for a project?</label>
                                    <select value={isLooking}
                                        name="isLooking"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Select One</option>
                                        <option>Yes, I am looking for a project</option>
                                        <option>No, I am not currently looking</option>


                                    </select>
                                </div>

                                {/*Links Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Links to your Music</label>
                                    <p id="location-instruction">Time to showcase your stuff! Drop some links to anyplace with examples of your work.</p>
                                    <input type="text"
                                        value={links}
                                        name="links"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="You'll get better results if people can hear what you sound like" />
                                </div>
                                {/*Age Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Age</label>
                                    <input type="text"
                                        value={this.state.age}
                                        name="age"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="How old are you? Don't lie" />
                                </div>
                                {/*Role Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What are you?</label>
                                    <select value={role}
                                        name="role"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Select One</option>
                                        <option>I am a musician</option>
                                        <option>I am a producer</option>
                                        <option>I am a studio that needs session musicians</option>
                                        <option>I am a venue that needs musicians</option>

                                    </select>
                                </div>
                                {/*Instrument Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Do You Play?</label>
                                    <select value={this.state.instrument}
                                        name="instrument"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Select an Instrument</option>
                                        <option>Vocals</option>
                                        <option>Guitar</option>
                                        <option>Drums</option>
                                        <option>Bass</option>

                                        <option>Piano/Keyboard/Organ</option>
                                        <option>Electronic/Sampling/Beats</option>
                                        <option>Wind Instruments</option>
                                        <option>Classical Strings</option>
                                    </select>
                                </div>
                                {/*Style Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Style of Music Do You Play?</label>
                                    <select value={style}
                                        name="style"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                        <option>Select a Style</option>
                                        <option>Alternative Rock</option>
                                        <option>Black Metal</option>
                                        <option>Blues</option>
                                        <option>Classic Rock</option>
                                        <option>Classical</option>
                                        <option>Country</option>
                                        <option>EDM</option>
                                        <option>Extreme Metal</option>
                                        <option>Gospel</option>
                                        <option>Hardcore</option>
                                        <option>Hard Rock</option>
                                        <option>Hip Hop</option>
                                        <option>Industrial</option>
                                        <option>Jazz</option>
                                        <option>K-Pop</option>
                                        <option>Metal</option>
                                        <option>Modern Rock</option>
                                        <option>Pop</option>
                                        <option>Power Metal</option>
                                        <option>Prog Metal</option>
                                        <option>Prog Rock</option>
                                        <option>Punk Rock</option>
                                        <option>R&B</option>
                                        <option>Rockabilly</option>
                                        <option>Singer/Songwriter</option>
                                        <option>Ska</option>
                                        <option>Thrash Metal</option>
                                    </select>
                                    <p className="text-danger">{Object.keys(errors).length > 0 ? errors.styleEmpty : null}</p>
                                </div>
                                {/*Experience Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">How Many Years of Live/Band Experience?</label>
                                    <select value={this.state.experience}
                                        name="experience"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                        <option>Less Than a Year</option>
                                        <option>1-5 Years</option>
                                        <option>5-10 Years</option>
                                        <option>10-20 Years</option>
                                        <option>More Than 20 Years</option>
                                    </select>
                                </div>
                                {/*Sessions Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">Are you willing to do session work or one-time-gigs?</label>
                                    <select value={sessions}
                                        name="sessions"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                        <option>Select One</option>
                                        <option>Yes, I'm open to all opportunities</option>
                                        <option>No, I'm looking for a full time band</option>

                                    </select>
                                </div>
                                {/*Contact Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Contact Info</label>
                                    <input type="text"
                                        value={contact}
                                        name="contact"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="What is your preferred method of contact?" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">About</label>
                                    <textarea type="text"
                                        value={this.state.about}
                                        name="about"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Tell us about yourself" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button className="btn btn-info" onClick={this.handleFormSubmit}>Submit</button>
                            </form>

                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
};
export default CreateProfile;