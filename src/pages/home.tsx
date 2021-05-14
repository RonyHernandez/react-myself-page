import React, { useState, useEffect, WheelEvent } from 'react';
import "../assets/main.css";
import Box from "@material-ui/core/box";
import normalizeWheel from 'normalize-wheel';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {

  useEffect(() => {
    document.addEventListener('wheel', function (event: any) {
   
      //event.preventDefault();
      event.stopPropagation();

      var	n = normalizeWheel(event),
								x = (n.pixelX != 0 ? n.pixelX : n.pixelY),
								delta = Math.min(Math.abs(x), 150) * 1,
								direction = x > 0 ? 1 : -1;

						// Scroll page.
							//document.scrollLeft(document.scrollLeft() + (delta * direction));

              this.documentElement.scrollLeft =   this.documentElement.scrollLeft + (delta * direction); 
    });

    return () => {
      document.removeEventListener('mousewheel', ()=>{});
    }

  },[]);

  return (
    <div id="page-wrapper">
      <div id="wrapper">
        <Box component="section" className="panel banner right">
          <Box component="div" className="content color0 span-3-75">
            <h1 className="major">
              Hello, my name is 
              <br />
                Rony
            </h1>
            <p>
             I am a Fullstack Developer, commited to success, 
             I like to be on the cutting edge building great applications with professional
             people and learn something new everyday.
            </p>
            <ul className="actions">
              <li>
                <a
                  href="#first"
                  className="button primary color1 circle icon solid fa-angle-right"
                >
                  Next
                </a>
              </li>
            </ul>
          </Box>
          <Box component="div" className="image filtered span-1-75" data-position="25% 25%">
            <img src="/images/reactCode.jpg" alt="" />
          </Box>
        </Box>

        <Box component="section" className="panel banner right">
        <Box component="div" className="image filtered span-1-75" data-position="25% 25%">
            <img src="/images/binary.jpg" alt="" />
          </Box>
        </Box>

        <Box component="section" className="panel color1">
          <Box component="div" className="intro joined">
          <h1 className="major">
              My Skills
            </h1>
            <p>
              With more than 7 years of experience, I had worked with several technologies, 
              these are just a few of the many I have worked with:
            </p>
          </Box>
          <Box component="div" className="inner">
          <ul className="grid-icons three connected">
						<li><span className="solid icon-size devicon-nodejs-plain"></span></li>
						<li><span className="solid icon-size devicon-react-original"></span></li>
						<li><span className="solid icon-size devicon-express-original"></span></li>
						<li><span className="solid icon-size devicon-redux-original"></span></li>
						<li><span className="solid icon-size devicon-webpack-plain"></span></li>
						<li><span className="solid icon-size devicon-html5-plain"></span></li>
					</ul>
          </Box>
        </Box>

        <Box component="section" className="panel">
          <Box className="intro color2">
            <h2 className="major">My Work</h2>
            <p>this are some of the projects I had worked on my carrer.</p>
          </Box>
          <Box component="div" className="gallery">
            <Box component="div" className="group span-3">
              <a href="https://www.starmedia.com" className="image filtered span-3" data-position="bottom"><img
                  src="/images/stmedia.png" alt="" /></a>
              <a href="https://www.usedcars.com/for-sale/" className="image filtered span-1-5"
                data-position="center"><img src="images/uccfs.png" alt="" /></a>
              <a href="https://www.autobytel.com" className="image filtered span-1-5"
                data-position="bottom"><img src="images/abtl.png" alt="" /></a>
            </Box>
            <a href="https://www.autosite.com" className="image filtered span-2-5" data-position="top"><img
                src="images/autosite.png" alt="" /></a>
          </Box>
			</Box>

        <Box component="section" className="panel color4-alt">
          <Box component="div" className="intro color4">
            <h2 className="major">Contact</h2>
            <p>If you like what I do, don't hesitate on contact me.</p>
          </Box>
          <Box component="div" className="inner columns divided">
            <Box component="div" className="span-3-25">
            <form method="post" action="#">
							<div className="fields">
								<div className="field half">
									<label>Name</label>
									<input type="text" name="name" id="name" />
								</div>
								<div className="field half">
									<label>Email</label>
									<input type="email" name="email" id="email" />
								</div>
								<div className="field">
									<label>Message</label>
									<textarea name="message" id="message"></textarea>
								</div>
							</div>
							<ul className="actions">
								<li><input type="submit" value="Send Message" className="button primary" /></li>
							</ul>
						</form>
            </Box>
            <Box component="div" className="span-1-5">
              <ul className="contact-icons color1">
                <li className="brands fa fa-twitter"><a href="https://twitter.com/ronyhC16">@ronyhC16</a></li>
                <li className="brands fa fa-facebook-f"><a href="https://www.facebook.com/ronyrenehercar/">ronyrenehercar</a></li>
                <li className="brands fa fa-github"><a href="https://www.github.com/RonyHernandez">RonyHernandez</a></li>
                <li className="brands fa fa-linkedin"><a href="https://www.linkedin.com/in/rony-hernandez-bb2812a0/">rony-hernandez-bb2812a0</a></li>
              </ul>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
};

export default Home;