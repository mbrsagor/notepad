import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';


export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='sagor'
			userSecret='admin@2020'
			projectID='3705bd1e-23d8-4290-af3a-25797c7ecdb5'
            renderChatFeed= {(chatAppProps) => <ChatFeed  {... chatAppProps}/>}
		/>
	);
}

export default App;
