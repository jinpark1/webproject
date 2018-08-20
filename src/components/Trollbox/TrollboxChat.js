import React from "react";
import io from "socket.io-client";
import './TrollboxChat.css';

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],
            usersSignedIn: []
        };

        this.socket = io();

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

       this.socket.on('RECEIVE_USER', function(data){
           usersSignedIn(data);
           
       });
        
        const addMessage = data => {
            let copy = []
            copy.push(...data)
            this.setState({messages: copy});
            this.messages.scrollTop = 0
        };

        const usersSignedIn = data => {
            let copy = []
            copy.push(...data)
            this.setState({usersSignedIn: copy})
        }

        this.sendMessage = ev => {
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});
        }

        this.sendUser = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_USER', {
                user: this.state.username,
            })
        }
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.sendMessage()
        }
    }

    render(){
        let displayMessages = this.state.messages.map( (message, i) => {
            return (
                <div className="display-message" key={i}>
                    <div>{message.author}: {message.message}</div>
                </div>
            )
        })

        let displayUsers = this.state.usersSignedIn.map( (users, i) => {
            return (
                <div key={i}>
                    <div>{users.user}</div>
                </div>
            )
        })


        return (
            <div className="container">
                <div className="card-title">TROLLBOX</div>
                        <div className="messages-input">
                            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                            <input onKeyPress={this.onKeyPress} type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                            <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                        </div>
                    <div className="message-container">
                        <div id="messages" ref={(ref) => this.messages = ref}>
                            {displayMessages}
                        </div>
                    </div>
            </div>
        );
    }
}

export default Chat;