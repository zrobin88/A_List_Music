import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import QueryForm from "../components/QueryForm"
import Row from "../components/Row";
import Col from "../components/Col";
import Hero from "../components/Hero"

import query from 'query-string'
//import ProfileModal from "../components/ProfileModal"

//image variables 
const img01 = "https://images.unsplash.com/photo-1471614654469-512ee6a4397a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img02 = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img03 ="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img04 ="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img05 ="https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img06 ="https://images.unsplash.com/photo-1446057032654-9d8885db76c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80";
const img07 ="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
const img08 ="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80";
const img09 ="https://unsplash.com/photos/wnX-fXzB6Cw";
const img10 ="https://images.unsplash.com/photo-1508081444780-e2ea2f0b4754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1848&q=80"; 

//img array with random picker 
const imgArr = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10]
const pickedImage = imgArr[Math.floor(Math.random()*imgArr.length)];




class Query extends Component {
    state = {
        profiles: null,
        name: "",
        profileDetail: null,
        sessions: "", 
        location: "",
        gender: "",
        instrument: "",
        style: "",
        showProfiles: false,
        showProfileModal: false
    }
    

    componentDidMount() {
        this.loadProfiles();
    }


    loadProfiles = (req, res) => {
        API.getProfiles({
            name: this.state.name,
            location: this.state.location,
            gender: this.state.gender, 
            instrument: this.state.instrument,
            style: this.state.style,

        })
            .then(res => {
                //if(instrument === instrumentKey && style === styleKey){

                this.setState({ profiles: res.data })
                // }
            }).catch(err => console.log(err));
    };

    //create on click for get profile 
    //grab the id of that field 
    profileModal = (e, id) => {
        e.preventDefault();
        API.getModalProfile(id).then(res => {
            this.setState({ showProfileModal: true, profileDetail: res.data })
        }).catch(err => console.log(err))
        console.log('the id ', id);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            query: "",
            errors: {},
            showProfiles: true
        });

        //initialize variables for the query form inputs 
        // const instrumentKey = document.getElementById('instrument-input').value;
        // const styleKey = document.getElementById('style-input').value;
       console.log('the state now ', this.state);

        // REACT ROUTER CODE TO SET QUERY
       // let query = "?instrument=" + this.state.instrument + "&style=" + this.state.style;
        //console.log(this.props.history)
        this.props.history.push(query)

        API.getProfiles({
            instrument: this.state.instrument,
            style: this.state.style, 
            gender: this.state.gender,
            location: this.state.location
        })
            .then(res => this.setState({ profiles: res.data }))
            .catch(err => console.log(err));

    };

    render() {
        console.log('this.state', this.state);
        const { errors, style, links, age, about, experience, location, name, image, instrument, contact, gender, profiles, showProfiles, showProfileModal, profileDetail} = this.state;
        return (
            <div>
                {(showProfileModal &&


                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content bg-dark text-white">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{profileDetail.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <img src={profileDetail.image} className="card-img-top profile-image" alt="..." />

                                    <ul className="list-group list-group-flush" >

                                        <li className="list-group-item bg-dark">Location: {profileDetail.location}</li>
                                        <li className="list-group-item bg-dark">Gender: {profileDetail.gender}</li>
                                        <li className="list-group-item bg-dark">links: {profileDetail.links}</li>
                                        <li className="list-group-item bg-dark">Age: {profileDetail.age}</li>
                                        <li className="list-group-item bg-dark">Instrument: {profileDetail.instrument}</li>
                                        <li className="list-group-item bg-dark">Style: {profileDetail.style}</li>
                                        <li className="list-group-item bg-dark">Avaliale for Sessions or Gigs: {profileDetail.sessions}</li>
                                        <li className="list-group-item bg-dark">Experience: {profileDetail.experience}</li>
                                        <li className="list-group-item bg-dark">Contact: {profileDetail.contact}</li>
                                        <li className="list-group-item bg-dark">About: {profileDetail.about}</li>
                                    </ul>


                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )}
                <Container >
                    
                    <Hero backgroundImage={pickedImage}>
                        <Row>
                        <h3 className="text-light mx-auto">What are you looking for?</h3>
                        </Row>
                        <Col size="md-12">
                                <QueryForm handleInputChange={this.handleInputChange} />
                            </Col>
                        <Row>
                            <Col size="md-12">
                                <button
                                    id="profileSearch"
                                    className="btn btn-info"
                                    onClick={this.handleFormSubmit}
                                >Search</button>
                            </Col>




                        </Row>
                  </Hero>
                    <Row>

                        <Col className="profile-table text-light" size="xs-12">


                            {(profiles && showProfiles) &&
                                <table className="table table-striped results mt-5" placeholder="Results" id="resTable">

                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Instrument</th>
                                            <th scope="col">Style</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {profiles.map((profile, index) =>
                                            <tr key={profile._id}>

                                                <td>
                                                    <strong>
                                                        {profile.name}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.location}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.instrument}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.style}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <button
                                                        
                                                        onClick={(e, profile_id) => this.profileModal(e, profile._id)}
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        Open Profile
                                                </button>
                                                </td>
                                            </tr>

                                        )}
                                    </tbody>
                                </table>

                            }


                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Query;