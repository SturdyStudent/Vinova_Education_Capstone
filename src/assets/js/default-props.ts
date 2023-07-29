import {
    HomeIcon,
    BookIcon,
    DashboardIcon,
    UserIcon,
  } from "../icons/index";
import { ICommunityCard, ICourseCard, IEventCard, IMemberCard } from "../../services/interface";

import SmallLogo1 from "../img/smallLogo1.jpg";
import SmallLogo2 from "../img/smallLogo2.png";
import SmallLogo3 from "../img/smallLogo3.jpg";
import SmallLogo4 from "../img/smallLogo4.png";
import SmallLogo5 from "../img/smallLogo5.png";
import SmallLogo6 from "../img/smallLogo6.png";
import SmallLogo7 from '../img/smallLogo7.jpg';
import SmallLogo8 from '../img/smallLogo8.png';
import SmallLogo9 from '../img/smallLogo9.jpg';
import SmallLogo10 from '../img/smallLogo10.jpg';
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import avatar4 from "../img/avatar4.jpg";
import avatar5 from "../img/avatar5.jpg";
import avatar6 from "../img/avatar6.jpg";
import avatar7 from "../img/avatar7.jpg";
import avatar8 from "../img/avatar8.jpg";
import avatar9 from "../img/avatar9.jpg";
import avatar10 from "../img/avatar10.jpg";
import backgroundPanel1 from '../img/bg-1.png';
import backgroundPanel2 from '../img/bg-2.png';
import backgroundPanel3 from '../img/bg-3.png';
import backgroundPanel4 from '../img/bg-4.png';
import backgroundPanel5 from '../img/bg-5.png';
import backgroundPanel6 from '../img/bg-6.png';
import backgroundPanel7 from '../img/bg-7.png';
import backgroundPanel8 from '../img/bg-8.png';
import backgroundPanel9 from '../img/bg-9.png';
import backgroundPanel10 from '../img/bg-10.png';
import member1 from '../img/member-1.jpg'
import member2 from '../img/member-2.jpg'
import member3 from '../img/member-3.png'
import member4 from '../img/member-4.png'
import member5 from '../img/member-5.png'
import member6 from '../img/member-6.png'
import member7 from '../img/member-7.png'
import member8 from '../img/member-8.png'
import member9 from '../img/member-9.png'
import member10 from '../img/member-10.png'

export const navLinks = [
    {
        label: 'Home',
        icon: HomeIcon,
        url: '/'
    },
    {
        label: 'Dashboard',
        icon: DashboardIcon,
        url: '/#',
    },
    {
        label: 'Community',
        icon: UserIcon,
        url: '/#'
    },
    {
        label: 'Education',
        icon: BookIcon,
        url: '/education'
    }
]

export const coursesCardList: Array<ICourseCard> = [
    {
      brandName: 'WITS University',
      courseTitle: 'Accounting concepts and steps',
      duration: 30,
      smallLogo: SmallLogo1,
      avatar: avatar1
    },
    {
      brandName: 'Meta',
      courseTitle: 'Engage with your customer',
      duration: 45,
      smallLogo: SmallLogo2,
      avatar: avatar2
    },
    {
      brandName: 'Visa',
      courseTitle: 'How to managing inventory',
      duration: 25,
      smallLogo: SmallLogo3,
      avatar: avatar3
    },
    {
      brandName: 'Apple',
      courseTitle: 'Accounting concepts and steps',
      duration: 45,
      smallLogo: SmallLogo4,
      avatar: avatar4
    },
    {
      brandName: 'Cambridge',
      courseTitle: 'Accounting concepts and steps',
      duration: 45,
      smallLogo: SmallLogo5,
      avatar: avatar5
    },
    {
      brandName: 'Harvard',
      courseTitle: 'Accounting concepts and steps',
      duration: 20,
      smallLogo: SmallLogo6,
      avatar: avatar6
    },  
    {
      brandName: 'Hogwarts',
      courseTitle: 'Studying dark spells in 2 hours',
      duration: 20,
      smallLogo: SmallLogo7,
      avatar: avatar7
    },  
    {
      brandName: 'Visa',
      courseTitle: 'Get 3 billion in 3 days',
      duration: 20,
      smallLogo: SmallLogo8,
      avatar: avatar8
    },  
    {
        brandName: 'Samsung',
        courseTitle: 'Being a samsung employee',
        duration: 20,
        smallLogo: SmallLogo9,
        avatar: avatar9
      },  
      {
        brandName: 'Marvel',
        courseTitle: 'How to ruin a franchise',
        duration: 20,
        smallLogo: SmallLogo10,
        avatar: avatar10
      },  
  ]
export const communityCardList: Array<ICommunityCard> = [
    {
        logo: SmallLogo1,
        communityName: 'Meta'
    },
    {
        logo: SmallLogo2,
        communityName: 'Wits University'
    },
    {
        logo: SmallLogo3,
        communityName: 'Visa Debit card'
    },
    {
        logo: SmallLogo4,
        communityName: 'Harvard'
    },
    {
        logo: SmallLogo5,
        communityName: 'Cambridge'
    },
    {
        logo: SmallLogo6,
        communityName: 'Apple'
    },
    {
        logo: SmallLogo7,
        communityName: 'Samsung'
    },
    {
        logo: SmallLogo8,
        communityName: 'Meta'
    },
    {
        logo: SmallLogo9,
        communityName: 'Tinker Tailor Soldier Spy'
    },
    {
        logo: SmallLogo10,
        communityName: 'Nocturnal Animal'
    },
]
export const cardMemberList: Array<IMemberCard> = [
    {
        backgroundPanel:backgroundPanel1,
        profilePic:member1,
        industry:"Home Decor",
        memberName:"Mziwothando Maliti",
        companyName:"Mheza Engineering Pty"
    },
    {
        backgroundPanel:backgroundPanel2,
        profilePic:member2,
        industry:"Gaming",
        memberName:"Andrew Garfield",
        companyName:"Amazing Spiderman"
    },
    {
        backgroundPanel:backgroundPanel3,
        profilePic:member3,
        industry:"Architecture",
        memberName:"Timothee Chalame",
        companyName:"Call me by your name"
    },
    {
        backgroundPanel:backgroundPanel4,
        profilePic:member4,
        industry:"Crane worker",
        memberName:"Antonio Mario",
        companyName:"World Plummet"
    },
    {
        backgroundPanel:backgroundPanel5,
        profilePic:member5,
        industry:"Health care",
        memberName:"Mike Mikkelson",
        companyName:"The great Soccerer"
    },
    {
        backgroundPanel:backgroundPanel6,
        profilePic:member6,
        industry:"Designer",
        memberName:"Cate Blanchet",
        companyName:"International Hotel"
    },
    {
        backgroundPanel:backgroundPanel7,
        profilePic:member7,
        industry:"Home Decor",
        memberName:"Yorgos Lanthimos",
        companyName:"The Swedish"
    },
    {
        backgroundPanel:backgroundPanel8,
        profilePic:member8,
        industry:"Developer",
        memberName:"Jennifer Lawrence",
        companyName:"Warner Bros"
    },
    {
        backgroundPanel:backgroundPanel9,
        profilePic:member9,
        industry:"Fashion",
        memberName:"Anya Taylor Joy",
        companyName:"Channel"
    },
    {
        backgroundPanel:backgroundPanel10,
        profilePic:member10,
        industry:"Movie making",
        memberName:"Holowitz",
        companyName:"Marvel Inc"
    },
]

export const EventCardList: Array<IEventCard> = [
    {
        brandName:"Meta",
        smallLogo:SmallLogo1,
        avatar:avatar1,
        courseTitle:"2023 Small Business",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Basement",
        smallLogo:SmallLogo2,
        avatar:avatar2,
        courseTitle:"Getting closer to customer",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Eve",
        smallLogo:SmallLogo3,
        avatar:avatar3,
        courseTitle:"Everybody's changing",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Radwimps",
        smallLogo:SmallLogo4,
        avatar:avatar4,
        courseTitle:"Somewhere only we know",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Paramore",
        smallLogo:SmallLogo5,
        avatar:avatar5,
        courseTitle:"This is the last time",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Silhoulette",
        smallLogo:SmallLogo6,
        avatar:avatar6,
        courseTitle:"Killer tunes kill me",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Daoko",
        smallLogo:SmallLogo7,
        avatar:avatar7,
        courseTitle:"Mystery of love",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"First take",
        smallLogo:SmallLogo8,
        avatar:avatar8,
        courseTitle:"Gideon of vision",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Coldplay",
        smallLogo:SmallLogo9,
        avatar:avatar9,
        courseTitle:"Galileo galeli",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
    {
        brandName:"Joji",
        smallLogo:SmallLogo10,
        avatar:avatar10,
        courseTitle:"Pretender",
        date: new Date(),
        from: '17:00',
        to: '20:00'
    },
]