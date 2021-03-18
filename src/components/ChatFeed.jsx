import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    // console.log(props);
    const {chats, activeChat, username, messages} = props;
    const chat = chats && chats[activeChat];
    console.log(chat, username, messages);

    const renderMessages = () => {
        const keys = Object.keys(messages);
        // console.log(keys);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastmessagekey = index === 0 ? null: keys[index - 1];
            const isMyMessage = username === message.sender.username;

            return(
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage 
                            ?<MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastmessagekey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '10px': '0px', marginLeft: isMyMessage ? '0px': '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }

    // renderMessages();

    if(!chat) return "Loading..."

    return(
        <div className="chat-feed">
            <h2>Prolific Tech Solution</h2>
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                {/* <div className="chat-subtitle">
                    {chat.pepole.map((person) => ` ${person.person.username}`)}
                </div> */}
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className="message-from-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;