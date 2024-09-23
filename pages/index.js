import React from 'react';

const HomeScreen = () => {

  return (
    <main className="main" style={{marginTop:"40px"}}>
    <div className="container">
    <div className="row" >
      <div class></div>
      <div className="col-md-12">
      <div className="input-group mb-3">
  <button className="btn btn-outline-secondary" type="button" id="button-addon1"><i className="bi bi-camera"></i></button>
  <span className="input-group-text" id="searchIcon" style={{cursor:"pointer"}}>
              <i className="bi bi-search"></i>
            </span>

  <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
</div>
      </div>
    <div className="col-md-12 text-center">
   <a href="#" className="text-dark"> <i className="bi bi-cart"  style={{fontSize:"50px"}}></i> </a>

    </div>

    </div>
    </div>
    {/* <img src="images/car.jpg" style={{height:"600px"}} className="img-fluid" /> */}
  </main>
  );
};

export default HomeScreen;