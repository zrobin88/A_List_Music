import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import API from "../../utils/API"
import Col from "../Col";


class Login extends Component {
    state = {
        email: "",
        password: "",
       
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
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





    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
      
        this.setState({
            email: "",
            password: "",
            errors: {},
        
        });

        
    
        //set state to user's profile and get it from API 
        window.location.pathname = "/myAccount"
    }
    render() {
       
        return (
            <div>
                <Container>
                <form>
                        <div class="form-group text-white">
                            <label for="exampleFormControlInput1">Enter Email</label>
                            <input type="email" 
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                  
                                    onChange={this.handleInputChange}
                                    placeholder="name@example.com" />
                        </div>
                        <div class="form-group text-white">
                            <label for="exampleFormControlInput1">Enter Password</label>
                            <input type="password" 
                                    class="form-control" 
                                    name ="password"
                                    id="exampleFormControlInput1" 
                                    value= {this.state.password}
                                    onChange={this.handleInputChange}
                                    placeholder="name@example.com" />
                        </div>
                        <button
                            id="login"
                            className="btn btn-info"
                          
                            onClick={this.handleFormSubmit}
                        >Log In</button>

                    </form>
                </Container>
            </div>
        )
    }
}


export default Login;