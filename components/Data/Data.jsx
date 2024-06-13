import Onboard1 from "../../assets/images/Onboard_img1.svg";
import Onboard2 from "../../assets/images/Onboard_img2.svg";
import Onboard3 from "../../assets/images/Onboard_img3.svg";

import Phone from "../../assets/images/Phone.svg";
import Google from "../../assets/images/Google.svg";
import Google2 from "../../assets/images/google2.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";

import Cate1 from "../../assets/images/cate1.svg";
import Cate2 from "../../assets/images/cate2.svg";
import Cate3 from "../../assets/images/cate3.svg";
import Cate4 from "../../assets/images/cate4.svg";
import Cate5 from "../../assets/images/cate5.svg";

import AC from "../../assets/images/ac.svg";

import Our_service1 from "../../assets/images/our_img1.png";
import Our_service2 from "../../assets/images/our_img2.png";
import Our_service3 from "../../assets/images/our_img3.png";
import Our_service4 from "../../assets/images/our_img4.png";

import Recommend1 from "../../assets/images/recommend1.png";
import Recommend2 from "../../assets/images/recommend2.png";
import Recommend3 from "../../assets/images/recommend3.png";
import Recommend4 from "../../assets/images/recommend4.png";

export const pages = [
    {
        id: 1,
        image: <Onboard3 /> ,
        heading: 'Discover Your Sound',    
        Text: 'Find and enjoy your favorite tunes effortlessly. Join a community of music lovers today.',
        
    },
    {
        id: 2,
        image: <Onboard2 />,
        heading: 'Soundtrack Your Life',
        Text: 'Find and enjoy your favorite tunes effortlessly. Join a community of music lovers today.',

    },
    {
        id: 3,
        image: <Onboard1 />,
        heading: 'Your Music, Your Way',
        Text: 'Find and enjoy your favorite tunes effortlessly. Join a community of music lovers today.',

    },
]


export const method = [
    {
        id: 1,
        image: <Phone />,
        text: 'Login with Phone',
        backgroundColor: '#241353',
        textColor: '#ffffff',
    },
    {
        id: 2,
        image: <Google />,
        text: 'Login with Google',
        backgroundColor: 'rgba(255, 165, 67, 0.30)',
        textColor: '#4B164C',
    }
]

export const tab = [
    {
        id: 1,
        name: 'Login',
    },
    {
        id: 2,
        name: 'SignUp',
    }
]

export const log_tabs =[
    {
        id: 1,
        icon: <Google2 />,
    },
    {
        id: 2,
        icon: <Facebook />,
    },
    {
        id: 3,
        icon: <Apple />,
    }
]

export const cate_data = [
    {
        id: 1,
        image: <Cate1 />,
        text: 'AC Repair',
        bg_color: '#EF5DA8',
    },
    {
        id: 2,
        image: <Cate2 />,
        text: 'Painting',
        bg_color: '#AEAFF7',
    },
    {
        id: 3,
        image: <Cate3 />,
        text: 'Electronics',
        bg_color: '#A0E3E2',
    },
    {
        id: 4,
        image: <Cate4 />,
        text: 'Plumbing',
        bg_color: '#F09E54',
    },
    {
        id: 5,
        image: <Cate5 />,
        text: 'Appliance',
        bg_color: '#C3F2A6',
    },
]


export const card_data = [
    {
        id: 1,
        heading: 'Offer AC Service',
        offer: 'Get 25%',
        button_text: 'Grab Offer',
        image: <AC />,
        bg_color: '#EAF6EF',
    },
    {
        id: 2,
        heading: 'Offer AC Service',
        offer: 'Get 25%',
        button_text: 'Grab Offer',
        image: <AC />,
        bg_color: '#FFBC99',
    },
]

export const our_service_tab = [
    {
        id: 1,
        text: 'Cleaning',
    },
    {
        id: 2,
        text: 'Maintance',
    },
    {
        id: 3,
        text: 'Security',
    },
    {
        id: 4,
        text: 'Home Improvement',
    },

]

export const our_service = [
    {
        id: 1,
        image: Our_service1,
        heading: 'Home Cleaning',
        description: ' Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
        review: '(130 Reviews)',
    },
    {
        id: 2,
        image: Our_service2,
        heading: 'Home Cleaning',
        description: ' Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
        review: '(130 Reviews)',
    },
    {
        id: 3,
        image: Our_service3,
        heading: 'Home Cleaning',
        description: ' Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
        review: '(130 Reviews)',
    },
    {
        id: 4,
        image: Our_service4,
        heading: 'Home Cleaning',
        description: ' Lorem ipsum is a placeholder text commonly used to demonstrate the visual.',
        review: '(130 Reviews)',
    },
]

export const recommend_data = [
    {
        id: 1,
        image: Recommend1,
        heading: 'Selamet Raharjo',
        review: "(150 Review)",
        service: "Cleaning Service",
        price: '$50',
    },
    {
        id: 2,
        image: Recommend2,
        heading: 'Selamet Raharjo',
        review: "(150 Review)",
        service: "Cleaning Service",
        price: '$50',
    },
    {
        id: 3,
        image: Recommend3,
        heading: 'Selamet Raharjo',
        review: "(150 Review)",
        service: "Cleaning Service",
        price: '$50',
    },
    {
        id: 4,
        image: Recommend4,
        heading: 'Selamet Raharjo',
        review: "(150 Review)",
        service: "Cleaning Service",
        price: '$50',
    },

]