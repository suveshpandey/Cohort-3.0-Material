import { useEffect, useState } from 'react'
import {PostComponent} from '../components/Post'
// function App() {
//   const [posts, setPosts] = useState([]);

//   const postComponents = posts.map(post => <PostComponent
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.time}
//     image={post.image}
//     description={post.description}
//   /> )

//   function addpost(){
//     setPosts([...posts, {
//       name: "Suvesh Pandey",
//       subtitle: "160 followers",
//       time: "2min ago",
//       image: "https://media.licdn.com/dms/image/D4D03AQHO2aaVD-NAXA/profile-displayphoto-shrink_400_400/0/1716984112032?e=2147483647&v=beta&t=nRSdDYnYeluK-vFfTMc_iZR_0UY_wf_XTUVLAiH_zGM",
//       description: "How to solve dsa problems?"
//     }])
//   }
//   return(
//     <div>
//       <button onClick={addpost}>AddPost</button>
//       {postComponents}
//     </div>
    
//   )
// }

// function Toggle(){
//   const [visible, setVisible] = useState(false);
//   function changeVisibility(){
//     setVisible(visible => !visible);
//   }
//   return(
//     <div>
//       <button onClick={changeVisibility}>change</button>
//       {visible && <p>Changed the visibilty.</p>}
//     </div>
//   )
// }

function App() {
  const [currTab, setCurrTab] = useState('Home');
  return(
    <div>
      <button onClick={() => setCurrTab('Home')} style={{color: currTab == 'Home' ? "red" : "black"}} >Home</button>
      <button onClick={() => setCurrTab('Notifications')} style={{color: currTab == 'Notifications' ? "red" : "black"}} >Notifications</button>
      <button onClick={() => setCurrTab('Messages')} style={{color: currTab == 'Messages' ? "red" : "black"}} >Messages</button>
      <button onClick={() => setCurrTab('Jobssp.cpp')} style={{color: currTab == 'Jobs' ? "red" : "black"}} >Jobs</button>
    </div>
  )
}

export default App
