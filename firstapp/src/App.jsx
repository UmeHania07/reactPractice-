import React from 'react';
import {Header , Logo} from './components/Header';
// import Footer from './components/Footer';
// import BasicTextFields from './components/textfield';ye link material ui ka link h jo google input ka h
// import BasicButtons from './components/textfield' ye link material ui ka link h jo three input ka h
import {Button}  from 'react-bootstrap';
import { BrowserRouter , Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/routers/pages/Home';
import About from './components/routers/pages/About';
import Service from './components/routers/pages/Service';
import Navbar from './components/Navbar';
import Page404 from './components/routers/pages/page404';
import User from './components/user';
import './App.css';
import { useState } from 'react';

                                // class component
// function App() {
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//     </div>
//   );
// }


// class App extends React.Component{
//   render(){
//     let firstname = "hania"
    // let lasttname = "khan"
// return(                  
//       <div>
//         <h1>hello {firstname}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     // let todo =[{text:"hania"},{text:"khan"}]
//     return(
//       <div>
//         {/* <ul>                                        
//          {todo.map((item,index)=>{
//           return <li key={index} >{item.text}</li> 
       
//          })}
//         </ul> */}
//       </div>
//     )
//   }
// }

// class Header extends React.Component{
//   render(){
//     return(
//       <div className='header'>
//         <h2>Header</h2>
//       </div>
//     )
//   }
// }
// class Footer extends React.Component{
//   render(){
//     return(
//       <div className='footer'>
//         <h2>Footer</h2>
//       </div>
//     )
//   }
// }
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Header/>
//        <Logo />      ye mera heading wala Logo h
//         <h1 style={{color: "crimson" , fontSize:"20px" }} >Main Component</h1>
//         <br/>
        // <BasicTextFields/>
//         <br/>
//         <Footer/>   ye footer is component mai footer bana h iska h

//       </div>
     
//     )
//   }
// }


// function App(){
//   return(
//     <div>
// <h1>BOOSTRAP</h1>
// <Button onClick={()=>{alert("hello")}}>click me</Button>
//     </div>
//   )
// }
// class App extends React.Component{
//   new
//   constructor(){
//       super()
//       this.state = {
//       name: "hania ",
//       lname: "khan",
//       email: "umehania.shahid@gmail.com",
    //  value:"" cmd hy
  //   }
  //   }
  // set_name=(e)=>{
  // this.setState({
//  [e.target.name]: e.target.value, cmd hy
  // name: this.state.value,
//  name: "aiman" cmd hy
//    })
//   }
//  get_name=()=>{
//    console.log(this.state.name)
  //  console.log(this.state.email)  cmd h
//  }
//  handleChange(e){
  // console.log(e.target.name) ye cmd hy
  // console.log(e.target.value) OR then next methode ye b
//  this.setState({
//   [e.target.name]: e.target.value
//   })
//   }
//  get_props=(props)=>{
//    console.log(props)
//  }

//  render(){
//     return(
//      <div>
      {/* ye props hn cmd h */}
       {/* <Header get_props={this.get_props} name={this.state.name} page="App page"/>
        <h2>{`My name is ${this.state.name} ${this.state.lname} `}</h2>
       <h2>{`email: ${this.state.email}`}</h2>  */}
        {/* <input  onChange={(e)=>this.setState({name: e.target.value})} type="text" placeholder='enter your name ' />ye dono cmd h input */}
       {/* <input  onChange={(e)=>this.setState({email: e.target.value})} type="text" placeholder='enter your email ' /> */}

        {/* <input name="name" onChange={(e)=>this.handleChange(e)} type="text" placeholder='enter your name' /><br/>
      <input  name="email" onChange={(e)=>this.handleChange(e)} type="text" placeholder='enter your email ' />  */}

    {/* <button onClick={this.set_name}>Set Name</button>          */}
    {/* <button onClick={this.get_name}>Get Name</button>   */}


    //  <Button variant="primary">Primary</Button>{' '}ye sare button cmd hn
    //   <Button variant="secondary">Secondary</Button>{' '}
    //   <Button variant="success">Success</Button>{' '}
    //   <Button variant="warning">Warning</Button>{' '}
    //   <Button variant="danger">Danger</Button>{' '}
    //   <Button variant="info">Info</Button>{' '}
    //   <Button variant="light">Light</Button>{' '}
    //   <Button variant="dark">Dark</Button>
    //   <Button variant="link">Link</Button> 
      //  <button type="button" className="btn btn-success">Success</button>ye button normal boostrap h
      
      // <BasicButtons/> 
      {/* <Footer/> */}




 {/* </div>

 )
 }
}  
 export default App; */}

 function App(){
  return(
      <div>
        
          <BrowserRouter>
            {/* <Link to="/about">About</Link>
            <br/>
            <Link to="/">Home</Link>
           <br/>
           <Link to="/service">Service</Link> */}
          <Navbar/>
        <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/about" element={<About/>}/>
       <Route path="/service" element={<Service/>}/>
       {/* <Route path="*" element={<Page404/>}/> */}
       <Route path="/user/:name/:id" element={<User/>}/>
       {/* <Route path="*" element={<Navigate to="/"/>}/> */}
      </Routes>
    
          </BrowserRouter>
     
   
      </div>
    
  )
  
}
export default App;


