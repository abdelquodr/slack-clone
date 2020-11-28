import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create'
import React, { useState, useEffect } from 'react';
import '../css/sidebar.css'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import DraftIcon from '@material-ui/icons/Drafts'
import InboxIcon from '@material-ui/icons/Inbox'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useStateValue } from '../StateProvider';


const Sidebar = () => {

    const [Channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    name: doc.data().name,
                }
            }))
        });
    }, []);

    console.log(Channels)

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Ace__Dev </h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads " />
            <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
            <SidebarOption Icon={DraftIcon} title='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} title="channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channel" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
            {Channels.map(channel => (
                <SidebarOption title={channel.name} key={channel.id} id={channel.id} />
            ))}
        </div>
    );
}

export default Sidebar;
