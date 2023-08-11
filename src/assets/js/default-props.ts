import {
    HomeIcon,
    UserIcon,
    DashboardIcon,
    CalendarIcon,
    SingleUserIcon,
    LogoutIcon,
    HelpIcon,
    SettingIcon,
    BookIcon,
    BookmarkIcon,
    NotificationIcon,
  } from "../icons/index";
import { IArticleCard, ICommunityCard, ICourseCard, IEventCard, IEventItem, IInput, IMemberCard, IPriceOption, ITransactionInfo } from "../../services/interface";

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
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";

export const navLinks = [
    {
        label: 'Home',
        icon: HomeIcon,
        url: '/'
    },
    {
        label: 'Dashboard',
        icon: DashboardIcon,
        url: '/dashboard',
    },
    {
        label: 'Community',
        icon: UserIcon,
        url: '/group'
    },
    {
        label: 'Education',
        icon: BookIcon,
        url: '/education'
    }
]

export const tabList = [
    {
      label: "Dashboard",
      propsIndex: 0,
    },
    {
      label: "Transaction",
      propsIndex: 1,
    },
    {
      label: "Send Funds",
      propsIndex: 2,
    },
  ];

export const educationTabList = [
    {
        label: 'Content',
        propsIndex: 0
    },
    {
        label: 'Course',
        propsIndex: 1
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
        communityName: 'Riot'
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

export const groupItemList: Array<IEventItem> = [
    {
        avatar: avatar1,
        organizationName: 'BrownSense',
        memberAmount: 1.6,
        smallLogo: SmallLogo1,
        isGroup: true
    },
    {
        avatar: avatar2,
        organizationName: 'The cosmetic Chef',
        memberAmount: 3.2,
        smallLogo: SmallLogo2,
        isGroup: true
    },
    {
        avatar: avatar3,
        organizationName: 'Black Umbrellas',
        memberAmount: 5.3,
        smallLogo: SmallLogo3,
        isGroup: true
    },
    {
        avatar: avatar4,
        organizationName: 'Food for Mzansi',
        memberAmount: 5.2,
        smallLogo: SmallLogo4,
        isGroup: true
    },
    {
        avatar: avatar5,
        organizationName: 'Woman Power Africa',
        memberAmount: 1.6,
        smallLogo: SmallLogo5,
        isGroup: true
    },
    {
        avatar: avatar6,
        organizationName: 'Martin Luther King',
        memberAmount: 9.3,
        smallLogo: SmallLogo6,
        isGroup: true
    },
    {
        avatar: avatar7,
        organizationName: 'Poet Society',
        memberAmount: 1.6,
        smallLogo: SmallLogo7,
        isGroup: true
    },
    {
        avatar: avatar8,
        organizationName: 'Supreme Soccerer',
        memberAmount: 12.4,
        smallLogo: SmallLogo8,
        isGroup: true
    },
    {
        avatar: avatar9,
        organizationName: 'Back to Dinosaur',
        memberAmount: 10.2,
        smallLogo: SmallLogo9,
        isGroup: true
    },
    {
        avatar: avatar10,
        organizationName: 'Unidentified Flying',
        memberAmount: 4.2,
        smallLogo: SmallLogo10,
        isGroup: true
    }
]

export const eventItemList: Array<IEventItem> = [
    {
        smallLogo: SmallLogo1,
        avatar: avatar1,
        organizationName: 'The Noble Truth',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo2,
        avatar: avatar2,
        organizationName: 'The Right Way',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo3,
        avatar: avatar3,
        organizationName: 'The Right Speech',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo4,
        avatar: avatar4,
        organizationName: 'The Right Act',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo5,
        avatar: avatar5,
        organizationName: 'The Right Mindfulness',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo6,
        avatar: avatar6,
        organizationName: 'The Right View',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo7,
        avatar: avatar7,
        organizationName: 'The Right Intention',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo8,
        avatar: avatar8,
        organizationName: 'The Right Concentration',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo9,
        avatar: avatar9,
        organizationName: 'The Right Effort',
        eventDate: new Date()
    },
    {
        smallLogo: SmallLogo10,
        avatar: avatar10,
        organizationName: 'The Right Livelihood',
        eventDate: new Date()
    },

]

export const courseCardEducationContent : Array<ICourseCard> = [
    {
        brandName:"Meta",
        smallLogo:SmallLogo1,
        avatar:avatar1,
        courseTitle:"Engage with your customer",
        duration: 19,
        isArticle: true,
        summary: "Strategies for success in a Challenging environment",
    },
    {
        brandName:"Google",
        smallLogo:SmallLogo2,
        avatar:avatar2,
        courseTitle:"Step to get closer to service",
        duration: 15,
        isArticle: true,
        summary: "Want to sell more, join in"
    },
    {
        brandName:"Samsung",
        smallLogo:SmallLogo3,
        avatar:avatar3,
        courseTitle:"How to use computer",
        duration: 19,
        isArticle: true,
        summary: "Become sofware developer fast"
    },
    {
        brandName:"Hogwarts",
        smallLogo:SmallLogo4,
        avatar:avatar4,
        courseTitle:"Get your first 1 million",
        duration: 25,
        isArticle: true,
        summary: "Become rich in one night"
    },
    {
        brandName:"Marvel",
        smallLogo:SmallLogo5,
        avatar:avatar5,
        courseTitle:"Draw  your own dream",
        duration: 19,
        isArticle: true,
        summary: "Watching your dream broken"
    },
    {
        brandName:"Riot",
        smallLogo:SmallLogo6,
        avatar:avatar6,
        courseTitle:"Took more money",
        duration: 19,
        isArticle: true,
        summary: "How to broke your customer"
    },
]

export const courseCardEducation: Array<ICourseCard> = [
    {
        brandName:"Meta",
        smallLogo:SmallLogo1,
        avatar: avatar1,
        courseTitle:"Meta 101",
        duration:30,
        isEducationCourse:true,
        summary:"How to get started with Facebook",
        industry: 'Digital Marketing'
    },
    {
        brandName:"Samsung",
        smallLogo:SmallLogo2,
        avatar: avatar2,
        courseTitle:"Meditation 101",
        duration:30,
        isEducationCourse:true,
        summary:"Become unpleasant with presence",
        industry: 'Home Decor'
    },
    {
        brandName:"Google",
        smallLogo:SmallLogo3,
        avatar: avatar3,
        courseTitle:"Back to childhood",
        duration:30,
        isEducationCourse:true,
        summary:"Getting a good life",
        industry: 'Software Engineer'
    },
    {
        brandName:"Facebook",
        smallLogo:SmallLogo4,
        avatar: avatar4,
        courseTitle:"Break time",
        duration:30,
        isEducationCourse:true,
        summary:"Take free time to rest",
        industry: 'Water Supplier'
    },
    {
        brandName:"Marvel",
        smallLogo:SmallLogo5,
        avatar: avatar5,
        courseTitle:"Good artist",
        duration:30,
        isEducationCourse:true,
        summary:"Become artist in 5 steps",
        industry: 'Travel Blogger'
    },
    {
        brandName:"Riot",
        smallLogo:SmallLogo6,
        avatar: avatar6,
        courseTitle:"Getting rich",
        duration:30,
        isEducationCourse:true,
        summary:"How to take money",
        industry: 'Digital Marketing'
    },
]

export const articleEducationList: Array<IArticleCard> = [
    {
        brandName:"Meta",
        smallLogo:SmallLogo1,
        avatar:avatar1,
        courseTitle: "Unlocking Potential: How SMEs Can Maximize Growth and Efficiency",
        duration:19,
        isCourse:true,
        industry: 'Clown Making'
    },
    {
        brandName:"Samsung",
        smallLogo:SmallLogo2,
        avatar:avatar2,
        courseTitle: "Create best products",
        duration:19,
        isCourse:true,
        industry: 'Food Deliver'
    },
    {
        brandName:"Apple",
        smallLogo:SmallLogo3,
        avatar:avatar3,
        courseTitle: "Inventing relativity",
        duration:19,
        isCourse:true,
        industry: 'Logistics'
    },
    {
        brandName:"Google",
        smallLogo:SmallLogo4,
        avatar:avatar4,
        courseTitle: "Data structure and algorithm",
        duration:19,
        isCourse:true,
        industry: 'Telestrial Investigae'
    },
    {
        brandName:"Youtube",
        smallLogo:SmallLogo5,
        avatar:avatar5,
        courseTitle: "How to get 5 million",
        duration:19,
        isCourse:true,
        industry: 'IT'
    },
    {
        brandName: "Riot",
        smallLogo:SmallLogo6,
        avatar:avatar6,
        courseTitle: "Becoming good artist",
        duration:19,
        isCourse:true,
        industry: 'Teaching'
    },
]

export const articleEducationContentList: Array<IArticleCard> = [
    {
        brandName:"Meta",
        smallLogo:SmallLogo1,
        avatar:avatar1,
        courseTitle: "Unlocking Potential: How SMEs Can Maximize Growth and Efficiency",
        duration:10
    },
    {
        brandName:"Samsung",
        smallLogo:SmallLogo2,
        avatar:avatar2,
        courseTitle: "Trying to beat the best",
        duration:10
    },
    {
        brandName:"Youtube",
        smallLogo:SmallLogo3,
        avatar:avatar3,
        courseTitle: "Love the way you lie",
        duration:10
    },
    {
        brandName:"Google",
        smallLogo:SmallLogo4,
        avatar:avatar4,
        courseTitle: "Another love",
        duration:10
    },
    {
        brandName:"Riot",
        smallLogo:SmallLogo5,
        avatar:avatar5,
        courseTitle: "Secret wars",
        duration:10
    },
    {
        brandName:"Marvel",
        smallLogo:SmallLogo6,
        avatar:avatar6,
        courseTitle: "Catain America winter soldier",
        duration:10
    },
]

export const drawerItemList = [
    {
      icon: SingleUserIcon,
      label: "My Profile",
    },
    {
      icon: DashboardIcon,
      label: "Dashboard",
    },
    {
      icon: NotificationIcon,
      label: "Notifications",
    },
    {
      icon: CalendarIcon,
      label: "My Events",
    },
    {
      icon: BookmarkIcon,
      label: "My Bookmarks",
    },
    {
      icon: UserIcon,
      label: "My Groups",
    },
    {
      icon: SettingIcon,
      label: "Account Settings",
    },
    {
      icon: HelpIcon,
      label: "Help & Support",
    },
    {
      icon: BookIcon,
      label: "Community Guidelines",
    },
    {
      icon: LogoutIcon,
      label: "Log out",
    },
  ];

  export const transactionList: Array<ITransactionInfo> = [
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 343,
      currency: "EUR",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Receive",
      amount: 533,
      currency: "EUR",
      remarks: "Pay back from Louis",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 654,
      currency: "EUR",
      orderStatus: "Failed",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 164,
      currency: "EUR",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 873,
      currency: "EUR",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 542,
      currency: "EUR",
      remarks: "Pay back from Louis",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 653,
      currency: "EUR",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 243,
      currency: "EUR",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 735,
      currency: "EUR",
      orderStatus: "Failed",
    },
    {
      orderDate: "2021-07-13",
      action: "Receive",
      amount: 345,
      currency: "EUR",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 635,
      currency: "EUR",
      orderStatus: "Success",
    },
    {
      orderDate: "2021-07-13",
      action: "Send",
      amount: 241,
      currency: "EUR",
      orderStatus: "Success",
    },
  ];

  export const functionNavList: Array<string> = [
    "Send Funds",
    "Crypto",
    "Securities",
    "View Products",
  ];

  export const SendFundInputlist: IInput[][] = [[
    {
        placeHolder: '0.00',
        label: 'Amount',
        type: 'number'
    },
    {
        label: 'Currency',
        isSelect: true,
        selectOptions: ["EUR", "GBP", "USD"]
    },
    {
        isSelect: true,
        label: 'SEPA or SWIFT',
        selectOptions: ['SEPA', 'SWIFT']
    }
  ],
  [],
  [
    {
        label: 'IBAN',
        selectOptions:['Send'],
        isSelect: true
    },
    {
        label: 'BIG/SWIFT',
        placeHolder: 'Type here',
        type: 'text',
    }
  ],
  [
    {
        label: 'Receiving Bank',
        placeHolder: 'Type here',
        type: 'text',
    },
    {
        label: 'Receiving Bank Address',
        placeHolder: 'Type here',
        type: 'text',
    }
  ],
  [],
  [
    {
        label: 'Beneficiary',
        placeHolder: 'Type here',
        type: 'text',
    },
    {
        label: 'Beneficiary Address',
        placeHolder: 'Type here',
        type: 'text',
    },
  ],
  [
    {
        label: 'City',
        type: 'number',
        placeHolder: 'Type here'
    },
    {
        label: 'Postal/ Zip code',
        placeHolder: 'Type here'
    },
    {
        label: 'Country',
        placeHolder: 'Type here',
    }
  ],
  [
    {
        label: 'Transfer Date',
        type: 'Date',
        placeHolder: 'Type here'
    },
    {
        label: 'Message to beneficiary',
        placeHolder: 'Type here'
    }
  ],
  []
]

export const priceOptions: IPriceOption[] = [
  {
    from: 0,
    to: 20
  },
  {
    from: 21,
    to: 50
  },
  {
    from: 51,
    to: 100
  },
  {
    from: 101,
    to: 1000
  },
  {
    from: 1001,
    to: Number.MAX_SAFE_INTEGER
  }
]

export const categoryList = [
    "Marketing",
    "Accounting",
    "Branding",
    "Service",
    "Hotel",
    "Human Resource",
    "Electric Power",
    "Construction",
  ];