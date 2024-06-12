import Onboard1 from "../../assets/images/Onboard_img1.svg";
import Onboard2 from "../../assets/images/Onboard_img2.svg";
import Onboard3 from "../../assets/images/Onboard_img3.svg";

import Phone from "../../assets/images/Phone.svg";
import Google from "../../assets/images/Google.svg";
import Google2 from "../../assets/images/google2.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";

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