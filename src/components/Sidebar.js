import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create'
import React from 'react';
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

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Qode__moore</h2>
                    <h3>
                        <FiberManualRecordIcon />
                    Qode__moore
                </h3>
                </div>
                <CreateIcon />
                <SidebarOption Icon={InsertCommentIcon} title="Threads " />
                <SidebarOption className={DraftIcon} title='Mentions & reactions' />
                <SidebarOption className={InboxIcon} title='Saved items' />
                <SidebarOption className={BookmarkBorderIcon} title="channel browser" />
                <SidebarOption className={PeopleAltIcon} title="People & user groups" />
                <SidebarOption className={AppIcon} title="Apps" />
                <SidebarOption className={FileCopyIcon} title="File browser" />
                <SidebarOption className={ExpandLessIcon} title="Show less" />
            </div>
        </div>
    );
}

export default Sidebar;
