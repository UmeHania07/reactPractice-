import React from "react"
// import Image from '../images/car.png';
import Image from '../images/logo.png';

// class Logo extends React.Component{
//   render(){
//     return(
//       <div>
//        <img src={Image} alt="" width="100"/>
//       </div>
//     )
//   }
// }


// class Header extends React.Component{
//   render(){
//     return(
//       <div className="header">
//         <Logo/>
//         <h2>Header</h2>

//       </div>
//     )
//   }
// }


// class Logo extends React.Component{
//   render(){
//     return(
//       <div className="Logo">
//         <h2>Logo</h2>
//       </div>
//     )
//   }
// }

// ye mera logo h jo navbar ki jaga pic lagai h

class Logo extends React.Component{
  render(){
    return(
      <div className="Logo">
        <img src={Image} alt="" width="100"/>  
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    // console.log("props...",this.props)
    return(
      <nav className="navbar navbar-expand-lg navbar-light " >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      {/* {this.props.name} ye parents se child ko data dene k liye h */}
      <Logo/> <button onClick={()=>this.props.get_props("insha`allah")}>Sent props</button>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success "  type="submit"  >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    )
  }
}


export {
  Header,
  Logo,

};