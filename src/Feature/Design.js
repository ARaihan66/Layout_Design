import React from 'react'
import pic1 from '../Assets/1.jpg'
import pic2 from '../Assets/2.jpg'
import pic3 from '../Assets/3.jpg'
import pic4 from '../Assets/4.jpg'
import pic5 from '../Assets/5.jpg'

const Design = () => {
    return (
        <div className='main'>
            <div className='left'>
                <img src={pic1} className='left-pic' />
            </div>
            <div className='right'>
                <div className='right-up'>
                    <div className='right-1'>
                        <img src={pic2} className='img' />
                    </div>
                    <div className='right-2'>
                        <img src={pic3} className='img' />
                    </div>
                </div>
                <div className='right-down'>
                    <div className='right-3'>
                        <img src={pic4} className='img' />
                    </div>
                    <div className='right-4'>
                        <img src={pic5} className='img' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Design
