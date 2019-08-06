import React, { Component } from "react";
import {
 // HelpBlock,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Signup.css";
import Login from "./Login";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      userName: "",
      email: "",
      contactNo: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.userName.length > 0 &&
      this.state.contactNo.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
   // this.setState({userName= userName}), 
   // this.setState({email= email}),
   // this.setState({contactNo= contactNo}),
   // this.setState({password=password}),
   // this.setState({userName: userName}),
  //  this.setState({userName: userName}),

    //------------------------------------------------
    //----------------------------------------------

    //e.preventDefault()
   //  record = {
   //  userName: userName, 
   //   email: email,
   //   contactNo: contactNo,
   //   password: password
   // }

   // const options = {
  //    method: 'post',
   //   headers: {
   //     'Content-Type': 'application/json'
   //   },
   //   body: JSON.stringify(record)

   // }

   // if (userName && email && password && contactNo) {
   //     .then(res => {
    //      console.log(res)
    //      setRedirect(true)
     //   })
   // } else {
    //  console.log('The form is not valid to be sent')
   // }

    //-------------------------------------------------
    //----------------------------------------------
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  renderConfirmationForm() {
   // return (
    //  <form onSubmit={this.handleConfirmationSubmit}>
     //   <FormGroup controlId="confirmationCode" bsSize="large">
      //    <FormLabel>Confirmation Code</FormLabel>
       //   <FormControl
         //   autoFocus
           // type="tel"
           // value={this.state.confirmationCode}
           // onChange={this.handleChange}
          ///>
        //  <HelpBlock>Please check your email for the code.</HelpBlock>
       // </FormGroup>
      //  <LoaderButton
        //  block
       //   bsSize="large"
        //  disabled={!this.validateConfirmationForm()}
        //  type="submit"
        //  isLoading={this.state.isLoading}
        //  text="Verify"
        //  loadingText="Verifying…"
       // />
      //</form>
   // );
   return (
    <Login/>
   
 );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="userName" bsSize="large">
          <FormLabel>User name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="contactNo" bsSize="large">
          <FormLabel>Contact Number</FormLabel>
          <FormControl
            autoFocus
            type="number"
            value={this.state.contactNo}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}