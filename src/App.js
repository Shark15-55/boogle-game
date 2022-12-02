import './App.css';
import React, { useState } from 'react';

function Gameboard(props) {
    const dice = [
        [a,a,a,f,r,s],
        [a,a,e,e,e,e],
        [a,a,f,i,r,s],
        [a,d,e,n,n,n],
        [a,e,e,e,e,m],
        [a,e,e,g,m,u],
        [a,e,g,m,n,n],
        [a,f,i,r,s,y],
        [b,j,k,q,x,z],
        [c,e,i,i,l,t],
        [c,e,i,l,p,t],
        [c,e,i,p,s,t],
        [d,d,h,n,o,t],
        [d,h,h,l,o,r],
        [d,h,l,n,o,r],
        [d,h,l,n,o,r],
        [e,i,i,i,t,t],
        [e,m,o,t,t,t],
        [e,n,s,s,s,u],
        [f,i,p,r,s,y],
        [g,o,r,r,v,w],
        [i,p,r,r,r,y],
        [n,o,o,t,u,w],
        [o,o,o,t,t,u],
    ];
  };



function App() {

    const [tweetLog, setTweetLog] = useState([]);
  
    const addTweetLog = (log) => {
      let logs = [...tweetLog, log]
      setTweetLog(logs)
    }
  
    console.log(tweetLog)
    
    return (
     <section>
      <Gameboard />
     </section>
    );
  }
  
  export default App;
  