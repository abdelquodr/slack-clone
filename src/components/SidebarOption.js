import React from 'react';
import '../css/sidebaroptions.css'

const SidebarOption = ({ Icon, title }) => {
    return (
        <div className="sidebarOption">
            {Icon && <icon className="sidebarOption__icon" />}
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
