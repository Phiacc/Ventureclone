import React from 'react'
import { Button } from '../../atoms/Button/Index';
import { Image } from '../../atoms/Image';
import { Icon } from '../../atoms/Icon';
import { Profile } from '../../atoms/Profile';

export const Bottombar = () => {
  return (
    <div className='flex main-section'>
      <div className='left-section'>
        <div className='flex play'>
        <Icon name="play" />  Watch instructional videos <br />
         on how to use this Platform 
        </div>
        <p className='big-text'>Stay ahead of the curve with our Financial Platform</p> 
        <div className='flex circle-container circlein-text'>
            <Icon className="arrow" name="arrow2" />
            <Icon  name="yacht" />
           </div>
        <p className='small-text'>An innovative Financial platform that provides secure fiancial managment solution.
          With its help, users can access a wide range of financial services
        </p>
       <div className='flex join-us'>
         <div className='joinbutton'>
         <Icon name="community" />
       < Button type="joinus" />
          </div> 
       <p className='small-text flex tryfree'>
        Try for free  <Icon name="arrow" /></p>  
           <div className='flex circle-container coins-money'>
            <Icon className="coin" name="coin" />
            <Icon name="money" />
           </div>
       </div>
       <div className='flex rating'>
       <div className='flex jeffery-david' >
        <div className='circle'>58+</div>
        <div className='circle'></div>
        <Profile type="profile1" />
        <div className='flex textin-circle'>
        <div className='flex'><Icon name="star" /><Icon name="star" /> <Icon name="star" /><Icon name="star" /><Icon name="star" />
        (5.0) </div>
          JEFFERY DAVID
        </div>
       </div>
       <p className='reviews' >Check reviews <br />
         on VenturePay</p>
       </div>
        </div>

      <div className=' flex right-section'>
        <div className='short-image'>
        <div className='rectangle record'><Icon name="award" />
          New Record <span className='pricetag'>+$1.956</span> </div>
        <div className='rectangle premium'>More benefit with premium subscription <Icon  name="arrow3" /></div>
        <div className='rectangle savings'><Icon name="chart" />Your saving 
        <Icon className="arrow" name="arrow-2" /></div>
        <div className='flex rectangle-container'>
        <div className='rectangle real-estate'>
          <b>Real Estate</b> <Icon name="plus" /> <Icon name="minus" /> <br />
          <small>10% from each transaction</small>
        </div>
        <div className='rectangle traveling' >
        <b>Traveling</b> <Icon name="plus" /> <Icon name="minus" /> <br />
          <small>3% from each transaction</small>
        </div>
        </div>
        </div>
     <div className='loading-image'>
     <Image name="loadingimage" />
     </div>
      </div>
    </div>
  );
};
