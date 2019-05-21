import React, { Component } from "react";
import Container from "../components/Container";

import CreateProfileForm from "../components/CreateProfileForm"
import Row from "../components/Row"
import Col from "../components/Col"
import API from "../utils/API"
import FormBtn from "../components/FormBtn"
import Hero from "../components/Hero"
import axios from "axios";

class EditProfile extends Component {
    state = {
        email: "",
        password: "",
        name: "",
        location: "",
        image: "",
        links: "",
        isLooking: "",
        gender: "",
        age: "",
        instrument: "",
        style: "",
        experience: "",
        sessions: "", 
        contact: "",
        about: "",
        selectedFile: null,
        errors: {},
        profileDetail:{}
    }

    componentDidMount() {
        const id = sessionStorage.getItem('userId');
        API.getModalProfile(id).then(res => {
            console.log('res brah', res);
            
            this.setState({ profileDetail: res.data });
            console.log('LOOK HERE', this.state.profileDetail)
        }).catch(err => {
            console.log('the err', err);
        });
    }

  

    handleInputChange = event => {
        // console.log('the name', event.target.name);
        // console.log('the value', event.target.value);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleUpdate = event => {
        event.preventDefault();
        
        this.setState({ errors: {} });
        //update profile 
        API.updateProfile({
            id: sessionStorage.getItem('userId'),
            email: this.state.email,
            password: this.state.password, 
            name: this.state.name,
            location: this.state.location,
            gender: this.state.gender,
            isLooking: this.state.isLooking,
            image: this.state.image,
            links: this.state.links,
            age: this.state.age,
            role: this.state.role, 
            instrument: this.state.instrument,
            style: this.state.style,
            experience: this.state.experience,
            sessions: this.state.sessions, 
            contact: this.state.contact,
            about: this.state.about
        })
            .then(res =>{
                 console.log('congrats you made it this far...', res)
                 this.setState({ profileDetail: res.data })
                })
            .catch(err => console.log(err));
            alert("Profile Updated!")
            //this.props.history.push("/")
    };

    // fileSelectedHandler = event =>{
    //     //log the event to make sure the correct file is targeted
    //     console.log(event.target.files[0]);
    //     this.setState({
        
    //         //image: event.target.files[0]
    //     })
    // }

    // fileUploadHandler=()=>{
    //     //not sure if this is the correct route 
    //     axios.post("api/profiles/uploads");
    // }



    render() {
        const{email,password,name,location,gender,links, isLooking, image,errors,instrument,style,age,experience, sessions, contact, about}=this.state;
        return (
            <div>

                <Container >

                    <h1 className="text-light coolFont">Edit Profile</h1>
                    <Row>

                        <Col size="md-12">
                            <form className="text-light" onChange={this.loadProfiles}>
                                {/*Email Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email</label>
                                    <input type="text"
                                        value={email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder={this.state.profileDetail.email} />
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
                                        placeholder={this.state.profileDetail.password} />
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
                                        placeholder={this.state.profileDetail.name} />
                                </div>
                                {/*Location Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Location </label>
                                    <p id="location-instruction">(Please spell your city completely followed by your state's abbreviation. Example: Los Anngeles, CA or Ft Lauderdale, FL)</p>
                                    <input type="text"
                                        value={location}
                                        name="location"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder={this.state.profileDetail.location}/>
                                </div>
                                {/*Gender Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Gender Are You?</label>
                                    <select value={gender}
                                        name="gender"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder={this.state.profileDetail.gender}>
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
                                        placeholder={this.state.profileDetail.image} />
                                       
                                </div>
                                 {/*Status Input */}
                                 <div className="form-group">
                                    <label for="exampleFormControlSelect1">Are you currently looking for a project?</label>
                                    <select value={isLooking}
                                        name="isLooking"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder={this.state.profileDetail.isLooking}>
                                        <option>Select One</option>
                                        <option>Yes</option>
                                        <option>No</option>
            
                                       
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
                                        placeholder={this.state.profileDetail.links} />
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
                                        placeholder={this.state.profileDetail.age} />
                                </div>
                                {/*Instrument Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Do You Play?</label>
                                    <select value={this.state.instrument}
                                        name="instrument"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder={this.state.profileDetail.instrument}>
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
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder={this.state.profileDetail.style}>
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
                                        onChange={this.handleInputChange} className="form-control" placeholder={this.state.profileDetail.experience}id="exampleFormControlSelect1">
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
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder={this.state.profileDetail.sessions}>
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
                                        placeholder={this.state.profileDetail.contact} />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">About</label>
                                    <textarea type="text"
                                        value={this.state.about}
                                        name="about"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder={this.state.profileDetail.about} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button className="btn btn-info" onClick={this.handleUpdate}>Update</button>
                            </form>

                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
};
export default EditProfile;