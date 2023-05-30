import React, { useState } from 'react'

export default function SubmitProperty() {

    const [inputs, setInputs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    const handleclick = () => {
        const lastNumber = inputs[inputs.length - 1];
        const newNumber = lastNumber + 1;
        setInputs([...inputs, newNumber]);
    }
    return (
        <div className='container-fluid pb-5'>
            <div className='row w-80 mx-auto'>
                <div className='col-lg-7 col-md-10 text-center mx-auto px-0'>
                    <h2 className='mb-0'>
                        Submit Your <span style={{ color: "#40FF62" }}>Property Addresses</span> with Ease
                    </h2>
                    <p className='fs-18 py-4 mb-0'>
                        Choose one of two convenient options to share your properties:
                    </p>
                </div>
            </div>
            <div className='row w-80 mx-auto dark-blue text-center rounded py-5'>
                <div className='col-xxl-9 col-md-8 col-12 text-center mx-auto px-lg-0 px-3 px-xxl-3'>
                    <div className='bg-white text-dark mx-auto fw-bolder w-75  rounded py-md-3 px-md-5 py-2 px-4 border-0 fs-4'>
                        Option 1:
                    </div>
                    <br />
                    <br />
                    <h6 className='fs-24 '>
                        Quickly discover if the homes work for our Leaseback Platform
                    </h6>
                    <br />
                    <p className='fs-18 mb-0'>
                        Insert the addresses below:
                    </p>
                    <br />
                    {inputs.map((e) => {
                        return (
                            <div key={e} className='border text-start rounded p-2 mb-2 d-flex align-items-center justify-content-center'>
                                <span className='px-2'>
                                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.7808 18.7005C13.0905 15.7551 16 11.4759 16 8.6087C16 3.85424 12.4183 0 8 0C3.58172 0 0 3.85424 0 8.6087C0 11.4759 2.90945 15.7551 5.21921 18.7005C6.42425 20.2371 7.02677 21.0055 8 21.0055C8.97323 21.0055 9.57575 20.2371 10.7808 18.7005ZM8 12C6.34315 12 5 10.6569 5 9C5 7.34315 6.34315 6 8 6C9.65685 6 11 7.34315 11 9C11 10.6569 9.65685 12 8 12Z" fill="white" />
                                    </svg>
                                </span>
                                <input type='text' className='Enter-Address-Here w-100' placeholder='Enter Address Here:' />
                            </div>
                        )
                    })}
                    <div className='text-start'>
                        <button onClick={handleclick} className='light-blue  rounded py-md-3 px-md-5 py-2 px-4 border-0'>
                            + 1 More Property
                        </button>
                    </div>
                    <br />
                    <button className='light-green w-100 fw-semibold rounded py-md-3 px-md-5 py-2 px-4 border-0'>
                        Submit Property
                    </button>

                </div>
            </div>

            <div className='row w-80 mx-auto light-blue text-center rounded py-5 mt-5'>
                <div className='col-xxl-9 col-md-8 col-12 text-center mx-auto px-lg-0 px-3 px-xxl-3'>
                    <div className='bg-white text-dark mx-auto fw-bolder w-75  rounded py-md-3 px-md-5 py-2 px-4 border-0 fs-4'>
                        Option 2:
                    </div>
                    <br />
                    <br />
                    <h6 className='fs-20 fw-normal'>
                        Email us the list of addresses. We will quickly run the properties through our system and reply with the list of pre approved properties.
                    </h6>
                    <br />
                    <p className='fs-24 fw-bolder mb-0 roboto '>
                        <span className='pointer'>
                            <svg className='me-3' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.3333 5.83337H11.6666C6.66659 5.83337 3.33325 8.33337 3.33325 14.1667V25.8334C3.33325 31.6667 6.66659 34.1667 11.6666 34.1667H28.3333C33.3333 34.1667 36.6666 31.6667 36.6666 25.8334V14.1667C36.6666 8.33337 33.3333 5.83337 28.3333 5.83337ZM29.1166 15.9834L23.8999 20.15C22.7999 21.0334 21.3999 21.4667 19.9999 21.4667C18.5999 21.4667 17.1833 21.0334 16.0999 20.15L10.8833 15.9834C10.3499 15.55 10.2666 14.75 10.6833 14.2167C11.1166 13.6834 11.8999 13.5834 12.4333 14.0167L17.6499 18.1834C18.9166 19.2 21.0666 19.2 22.3333 18.1834L27.5499 14.0167C28.0833 13.5834 28.8833 13.6667 29.2999 14.2167C29.7333 14.75 29.6499 15.55 29.1166 15.9834Z" fill="#45DD62" />
                            </svg>
                            info@sell2rent.com
                        </span>
                    </p>

                </div>
            </div>

        </div>
    )
}
