import React from 'react'

export default function ContactForm() {
    return (
        <>
            <div className='custom_form'>
                <form>
                    <div className='row'>
                        <div className='col'>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="nameInput" placeholder="Full Name" />
                                <label for="nameInput">Email address</label>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="emailInput" placeholder="Email" />
                                <label for="emailInput">Email address</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="phoneInput" placeholder="Phone" />
                                <label for="phoneInput">Phone</label>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="subInput" placeholder="subject" />
                                <label for="subInput">Subject</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="msgInput" placeholder="Message" style={{ height: '100px' }}></textarea>
                                <label for="msgInput">Message</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
