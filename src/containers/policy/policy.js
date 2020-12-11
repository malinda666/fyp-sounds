import React, { Component } from "react";
import './policy.css'
import Footer from '../../components/footer'
import Header from "../../components/header";


export default class Policy extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render(){
      return(
           <div class="privacypolicy anima-screen">
      <div class="anima-container-center-horizontal">
        <div class="bar-C61RwL"></div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="privacy-policy-C61RwL montserrat-bold-rose-pearl-24px">privacy policy</div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="lorem-ipsum-dolor-si-C61RwL montserrat-light-mountain-mist-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at vestibulum erat, id interdum diam. Phasellus
          bibendum neque velit, eget consectetur urna cursus commodo. Pellentesque sollicitudin purus arcu, at tristique
          nisl malesuada vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod diam nec gravida
          gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
          commodo orci eu eros mollis pharetra. Mauris magna eros, fermentum quis facilisis vitae, ullamcorper vitae
          diam. Nulla nec eros at ipsum hendrerit consectetur et a lacus. Proin viverra diam et dolor malesuada
          tristique. Suspendisse sollicitudin neque leo, sed fermentum tellus rutrum non.
        </div>
      </div>
      <Header/>
      <div class="anima-container-center-horizontal">
          <Footer/>
      </div>
      </div>
      )
  }
}