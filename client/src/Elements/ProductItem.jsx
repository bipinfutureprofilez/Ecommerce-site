import React from 'react'

export default function ProductItem(props) {
  return (
    <>
          <div className='col-md-3 mt-3' key={props.setKey}>
              <div className="card shadow-sm">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text mb-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                              {/* <div className="input-group w-auto align-items-center">
                                                <input type="button" value="-" onClick={() => setQuantity(quntity - 1)} className="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity" />
                                                <input type="number" step="1" min='0' max="10" value={quntity} className="quantity-field border-0 text-center w-25" />
                                                <input type="button" value="+" onClick={() => setQuantity(quntity + 1)} className="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity" />
                                            </div>                                             */}
                              <span className='card-title mx-2'><b>$ 20</b></span>
                          </div>
                          <div className='w-50 text-end'>
                              <button type='button' className='btn btn-sm btn-success'>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18.8333 19C17.5383 19 16.5 20.0383 16.5 21.3333C16.5 21.9522 16.7458 22.5457 17.1834 22.9832C17.621 23.4208 18.2145 23.6667 18.8333 23.6667C19.4522 23.6667 20.0457 23.4208 20.4833 22.9832C20.9208 22.5457 21.1667 21.9522 21.1667 21.3333C21.1667 20.7145 20.9208 20.121 20.4833 19.6834C20.0457 19.2458 19.4522 19 18.8333 19ZM0.166672 0.333328V2.66666H2.50001L6.7 11.5217L5.11334 14.38C4.93834 14.7067 4.83334 15.0917 4.83334 15.5C4.83334 16.1188 5.07917 16.7123 5.51676 17.1499C5.95434 17.5875 6.54783 17.8333 7.16667 17.8333H21.1667V15.5H7.65667C7.57932 15.5 7.50513 15.4693 7.45043 15.4146C7.39573 15.3599 7.365 15.2857 7.365 15.2083C7.365 15.15 7.37667 15.1033 7.4 15.0683L8.45001 13.1667H17.1417C18.0167 13.1667 18.7867 12.6767 19.1833 11.965L23.36 4.41666C23.4417 4.22999 23.5 4.03166 23.5 3.83333C23.5 3.52391 23.3771 3.22716 23.1583 3.00837C22.9395 2.78958 22.6428 2.66666 22.3333 2.66666H5.07834L3.98167 0.333328M7.16667 19C5.87167 19 4.83334 20.0383 4.83334 21.3333C4.83334 21.9522 5.07917 22.5457 5.51676 22.9832C5.95434 23.4208 6.54783 23.6667 7.16667 23.6667C7.78551 23.6667 8.379 23.4208 8.81659 22.9832C9.25417 22.5457 9.5 21.9522 9.5 21.3333C9.5 20.7145 9.25417 20.121 8.81659 19.6834C8.379 19.2458 7.78551 19 7.16667 19Z" fill="white" />
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
