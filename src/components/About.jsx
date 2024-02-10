import React from 'react';
import { useInView } from 'react-intersection-observer';
import online from '../assets/icons/icon-online.svg';
import budget from '../assets/icons/icon-budgeting.svg';
import onboard from '../assets/icons/icon-onboarding.svg';
import apiIcon from '../assets/icons/icon-api.svg';

export const About = () => {
    const {ref: ref1, inView: inView1} = useInView({
        threshold: 0.5,
        triggerOnce: true,
      })

      const {ref: ref2, inView: inView2} = useInView({
        threshold: 0.2,
        triggerOnce: true,
      })

    const aboutItem =[
        {image: online, heading: 'Online Banking', description: 'Our modern web and mbile applications allow you to keep track of your finances wherever you are in the world.', id: 1},
        {image: budget, heading: 'Simple Budgeting', description: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.", id: 2},
        {image: onboard, heading: 'Fast Onboarding', description: "We don't do branches. Open your account in minute online and start taking control of your finances right away.", id: 3},
        {image: apiIcon, heading: 'Open API', description: 'Manage your savings, Investments, pensions, and much more from one account. Tracking your money has never been easier.', id: 4},
    ]
  return (
    <div className='about-container'>
        <div ref={ref1} className={inView1 ? 'about-heading' : ''}>
            <h1>Why choose Easybank?</h1>
            <p>We leverage Open banking to leverage your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div ref={ref2} className={inView2 ? 'about-contents' : ''}>
            {aboutItem.map((item)=>(
                <div ref={ref2} className='about-content-items' key={item.id}>
                    <img className='about-content-icon' src={item.image} alt={item.image} />
                    <p className='about-content-heading'>{item.heading}</p>
                    <p className='about-content-description'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
