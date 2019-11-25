import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotHome from './Pages/notHome';
import Navbar from './components/Navbar'


// class App extends Component{

//   state = {
//     nama: "Erwin",
//     sekolah: "Purwadhika",
//     number: 0
//   }

//   gantiNama = () => {
//     this.setState({nama: "Nova", sekolah: "Pwdk"})
//   }

//   kurang = () => {
//     this.setState({number: this.state.number - 1})
//   }

//   tambah = () => {
//     this.setState({number: this.state.number + 1})
//   }

//   render(){
//     return(
//       <div>
//         <div>
//           Ini React
//         </div>
//         <div>
//           {this.state.nama}
//           {this.state.sekolah}
//         </div>
//         <button onClick={this.gantiNama}>
//           Click here
//         </button>
//         <div>
//           {this.state.number}
//         </div>
//         <div>
//           <button onClick={this.kurang}>
//             -
//           </button>
//           <button onClick={this.tambah}>
//             +
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

class App extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Route path='/' component={Home} exact />
        <Route path='/not-home' component={NotHome} />
      </div>
    )
  }
}

export default App;
