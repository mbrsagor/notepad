import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectId="3705bd1e-23d8-4290-af3a-25797c7ecdb5"
            userName="sagor"
            userSecret="admin@2020"
        />
    )
}

export default App;
