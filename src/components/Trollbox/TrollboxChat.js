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
            console.log('receive message', data)
            addMessage(data);
        });

       this.socket.on('RECEIVE_USER', function(data){
           console.log('RECEIVE User----', data)
           usersSignedIn(data);
           
       });
        
        const addMessage = data => {
            let copy = []
            copy.push(...data)
            this.setState({messages: copy});
        };

        const usersSignedIn = data => {
            console.log('usersSignedin----------', data)
            let copy = []
            copy.push(...data)
            console.log('usersignedin copy--', copy)
            this.setState({usersSignedIn: copy})
        }

        this.sendMessage = ev => {
            ev.preventDefault();
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
            // this.setState({usersSignedIn: ''});
        }
    }

    render(){
        let displayMessages = this.state.messages.map( (message, i) => {
            return (
                <div key={i}>
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
                <div className="card-title">Global Chat</div>
                    <div className="messages">
                        {displayMessages}
                    </div>
                    <div className="users">
                        {displayUsers}
                    </div>
                    
                    
                    <button onClick={this.sendUser}>Users Signed In</button>
                         
                    
                
             
                <div className="card-footer">
                    <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                    <br/>
                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                    <br/>
                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                </div>
            </div>

        );
    }
}

export default Chat;