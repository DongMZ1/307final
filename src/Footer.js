import React, { Component } from 'react';
import { FaDribbble, FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import './static/footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (  
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">CS @ McGill</p>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                            <li><a href="">C</a></li>
                            <li><a href="">UI Design</a></li>
                            <li><a href="">PHP</a></li>
                            <li><a href="">Java</a></li>
                            <li><a href="">Android</a></li>
                            <li><a href="">Templates</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Contribute</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved</p>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="fa fa-facebook"><FaFacebook /></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"><FaTwitter /></i></a></li>
                            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"><FaDribbble /></i></a></li>
                            <li><a class="insta" href="#"><i class="fa fa-instagram"><FaInstagramSquare /></i></a></li>   
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;