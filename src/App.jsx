import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { useState } from 'react';
import PostListProvider from './Store/PostList_store';
import { Outlet } from 'react-router-dom';

function App() {

  const [selectedTab ,setSelectedTab] = useState("Home");

  return( 
    <PostListProvider>
    <div className='app-container'>
     <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}/>

     
     <div className='Content'>
     <Header></Header>
     <Outlet />
     <Footer></Footer>
     </div>
    </div>
    </PostListProvider>
    );
  
  }

export default App;
