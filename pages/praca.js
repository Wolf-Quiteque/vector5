import Head from 'next/head';
import Link from 'next/link'

const Praca = () => {
  return (
    <>
      <Head>
        <title>Praça</title>
      </Head>
      <div className="container-fluid">
        <div className="row">
        <nav className="col-md-4 col-lg-4 d-md-block sidebar" style={{backgroundColor:'#1B052B' ,color:"#fff", height:"100%"}}>
                <div className="position-sticky pt-3">
                    <div className="text-center mb-4 " style={{backgroundColor:'#381552', height:"100px"}}>
                        <div className="float-start">
                        <img src="https://picsum.photos/200" style={{height:"50px"}} alt="Profile Picture" className="rounded-circle profile-pic mb-2" />
                        <h6>John Doe</h6>
                        </div>
                        <div>configura</div>
                    </div>
                    <div className="p-3" style={{marginTop:"230px"}}>
                        <h6>Your Cart</h6>
                        <ul className="list-unstyled">
                            <li>Item 1 - $10</li>
                            <li>Item 2 - $15</li>
                            <li>Item 3 - $20</li>
                        </ul>
                    </div>
                    <div className="p-3 mt-auto">
                        <p>Total: $45</p>
                        <button className="btn btn-light w-100">Compra Now</button>
                    </div>
                </div>
            </nav>  
            <main className="col-md-8 col-lg-8 px-md-4">
                <h1 className="mt-4 mb-4 text-center" style={{color: "#381552"}}>Praça</h1>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 1</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 2</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 3</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 4</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 5</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 6</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 7</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 8</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 9</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 10</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 11</button></div>
                 <div className="col"><button className="btn category-btn w-100 py-4">Category 12</button></div>
                    <div className="col"><button className="btn category-btn w-100 py-4">Category 13</button></div>
                </div>
            </main>
      
           </div>
    </div>
    </>
  );
};

export default Praca;


