import React from "react";

const Footer = () => {
    return(
        <div className="biz-homepage-footer">
            <div className="biz-index-footer-about">
                <h3 className="biz-index-footer-title">About</h3>
                <a className="footer-link" href="https://github.com/johnnyhoang510" target="_blank">Github</a>
            </div>
            <div className="biz-index-footer-about">
                <h3 className="biz-index-footer-title">Discover</h3>
                <a className="footer-link" href="https://www.linkedin.com/in/hoangjohnny/" target="_blank">LinkedIn</a>
            </div>
            <div className="biz-index-footer-about">
                <h3 className="biz-index-footer-title">Help</h3>
                <a className="footer-link" href="https://angel.co/u/johnnyhoang510" target="_blank">AngelList</a>
            </div>
            <div className="biz-index-footer-discover">
                <h3 className="biz-index-footer-title">Contact</h3>
                <a className="footer-link" href="https://johnnyhoang510.github.io/portfolio-website/" target="_blank">Portfolio</a>
            </div>
        </div>
    )
};


export default Footer;