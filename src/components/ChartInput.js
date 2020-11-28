import React, { useState } from 'react';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase'
import Input from '@material-ui/core/Input'
import '../css/chatInput.css'


const ChartInput = ({ channelName, channelId }) => {

    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add
                ({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userImage: user.photoURL,
                })
            // console.log(db.collection('rooms').doc(channelId).collection('messages'))

            setInput('')
        }


    }

    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <button type="submit" onClick={sendMessage} >SEND</button>
            </form>
        </div>
    );
}

export default ChartInput;
