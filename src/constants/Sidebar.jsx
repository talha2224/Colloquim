import { FaSearch, FaUser, FaUsers } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { GrChannel } from 'react-icons/gr'
import { MdExplore } from 'react-icons/md'

export const sidebar = [
    {
        id: 1,
        name: "Explore",
        icon: <MdExplore />,
        link: "/dashboard/explore"
    },
    {
        id: 2,
        name: "My channel",
        icon: <GrChannel />,
        link: "/dashboard/channel"
    },
    {
        id: 3,
        name: "Following",
        icon: <FaUsers />,
        link: "/dashboard/following"
    },
    {
        id: 4,
        name: "Profile",
        icon: <FaUser />,
        link: "/dashboard/profile"
    },
    {
        id: 5,
        name: "Subscriptions",
        icon: <FaMessage className='text-[#4055e2]' />,
        link: "/dashboard/subscriptions"
    }
]