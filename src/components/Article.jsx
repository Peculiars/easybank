import React from 'react';
import { useInView } from 'react-intersection-observer';
import confetti from '../assets/images/image-confetti.jpg';
import currency from '../assets/images/image-currency.jpg';
import plane from '../assets/images/image-plane.jpg';
import restaurant from '../assets/images/image-restaurant.jpg'

export const Article = () => {
    const {ref: ref3, inView: inView3} = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })
    const articleItems =[
        {image: currency, author: 'Claire Robinson', subHeading: 'Receive money in any currency with no fees', description: "The world is becoming smaller and we're becoming more mobile. So why should you be forced to receive money in a single...", id: 1},
        {image: restaurant, author: 'Wilson Hutton', subHeading: 'Treat yourself without worrying about money', description: 'Our simple budgeting feature allows you to separate out spending and set out realistic limits each month. That means you...', id: 2},
        {image: plane, author: 'Wilson Hutton', subHeading: 'Take your Easybank card wherever you go', description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. we'll even show you...", id: 3},
        {image: confetti, author: 'Claire Robinson', subHeading: 'Our invite-only Beta accounts are now live', description: "After a lot of hardwork by the whole team. we're excited to launch our closed beta. It's easy to request an invite through the site...", id: 4},

    ]
  return (
    <div className='article-container'>
        <div className='article-heading'>
            <h1>Latest Articles</h1>    
        </div>
        <div className='article-content'>
            {articleItems.map((item)=>(
                <div ref{ref3} className={inView3 ? 'article-content-item' : ''} key={item.id}>
                    <img className='article-img' src={item.image} alt={item.image} />
                    <p className='article-author'>By {item.author}</p>
                    <h2 className='sub-heading'>{item.subHeading}</h2>
                    <p className='article-description'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
