import React, { useEffect, useState } from 'react';
import '../css/chat.css'
import { useParams } from 'react-router-dom'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import db from '../firebase';
import Message from '../components/Message'
import ChatInput from './ChartInput'

const Chat = () => {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            console.log(roomId)
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => {
                    return setRoomDetails(snapshot.data())
                })
        }


        db.collection('rooms').doc(roomId)
            .collection('messages')
            .onSnapshot((snapshot) => {
                console.log(snapshot)
                setRoomMessages(snapshot.docs.map((doc) => doc.data()))
            });

    }, [roomId]);



    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong> #{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {/* {console.log(roomMessages[0].userImage)} */}
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />

        </div>
    );
}

export default Chat;
