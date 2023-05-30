import React from 'react'
import HowDoesSellCard from '../common/HowDoesSellCard'

export default function HowDoesSell() {
    return (
        <div className='container-fluid py-5 dark-blue'>
            <div className='row w-80 mx-auto'>
                <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>
                    <h2 className=''>
                        How does Sell2Rent's Multi-Property Pre-Qualification Process Work?
                    </h2>
                    <br />
                    <p className='fs-20'>
                        It’s a Painless Process
                    </p>
                </div>
            </div>
            <div className='row w-80 mx-auto text-center'>
                <HowDoesSellCard />
            </div>
        </div>
    )
}
