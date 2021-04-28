import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';


const App = () =>{
    return(
        <ChatEngine
            publicKey='16c99131-aaf4-4ea0-abd2-a9e77b063e30'
            userName='demo'
            userSecret='admin'
            height='100vh'
            projectID="3705bd1e-23d8-4290-af3a-25797c7ecdb5"
        />
    )
}

export default App;
