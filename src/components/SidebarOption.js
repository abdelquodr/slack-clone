import React from 'react';
import '../css/sidebaroptions.css'
import { useHistory } from 'react-router-dom'
import db from '../firebase'

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
    const history = useHistory()

    const selectedChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt('please enter the channel name ')

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        }
    }

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectedChannel} >
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>) : (
                    <h3 className='sidebarOption__channel'>
                        <span className="sidebarOption__hash"># {title}</span>
                    </h3>
                )}
        </div>
    );
}

export default SidebarOption;
