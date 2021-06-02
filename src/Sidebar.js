import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import {useStateValue} from "./StateProvider";

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return <div className='sidebar'>
        <SidebarRow src={user.photoUrl} title={user.displayName}/>
        {/*<SidebarRow src='https://avatars.githubusercontent.com/u/24975066?s=460&u=975470b11e8ff95e3190b6d7976a0887c9df529c&v=4' title='Irvan Dinda Prakoso'/>*/}
        <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messanger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

    </div>

}

export default Sidebar;