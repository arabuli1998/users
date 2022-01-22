import React from 'react';
import footer from './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


const Footer = () => {
  return <div className='bottombar'>
  <div className='bottombar-col1'>
      
      <ul>
          <li>Stay on track with the app's daily planner. 
              For some extra motivation, see how you compare 
              against the rest of the Train Effective community.
               </li>

          <li>Choose from <span>150+ </span>exercises that will take you from 
              beginner to pro even if you've never scored a goal before.
              </li>

          <li>Work with your own Player Success Agent to build your personal 
              training plan for your career.
               </li>
      </ul>
  
  </div>
  <div className='bottombar-col2'>
      <ul>
          <li>
          <a href="#"><FacebookIcon/></a>
          <a href="#"><GitHubIcon/></a>
          <a href="#"><InstagramIcon/></a>
          <a href="#"><AlternateEmailIcon/></a>
          </li>
          <li><p>
              Whatever the level of skills you have, 
              we'll work with you 1-on-1 through comprehensive 
              programs and your personal success plan until you're 
              ready to be seen by our network of scouts.
              </p></li>
              <li></li>
      </ul>
  </div>
</div>;
};

export default Footer;
