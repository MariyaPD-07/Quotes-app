import React from 'react'
import QuoteNavbar from './QuoteNavbar'

const DeleteQuote = () => {
  return (
    <div>
        <QuoteNavbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row g-3">
        <h1 className="text-success">Delete Quote</h1>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">Id</label>
<input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-danger">Delete</button>
    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default DeleteQuote