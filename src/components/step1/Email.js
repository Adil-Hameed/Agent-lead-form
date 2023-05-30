import React from 'react'
import { Link } from 'react-router-dom'

export default function Email() {
    return (
        <div className='container-fluid'>


            <div className='row w-80 justify-content-md-between justify-content-around mx-auto rounded  py-3 '>
                <h3 className='fs-26 fw-bold text-center mb-3 text-center dark-blue-text'>
                    <span style={{ color: "#2CAAE6" }}>Step 1:</span> Enter your registered email
                </h3>
            </div>
            <div className="row w-80 mx-auto text-white">
                <div className="text-start col-lg-10 mx-auto col-12 px-md-4 px-0 formgray-text">
                    <label htmlFor="Email" >Email:</label>
                    <input type='text' id="Email" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
            </div>
            <div className='text-center py-5'>
                <Link to="/step2">
                    <p className='pointer d-inline-block light-green p-3 px-5 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Next &gt; &gt;
                    </p>
                </Link>
            </div>
            
        </div>


    )
}
