import File_icon from "../assets/images/file-icon.png";
import Calender_icon from "../assets/images/Calender-icon.png";
import User_icon from "../assets/images/user-icon.png"
import TeacherIcon from "../assets/images/userInterfaceIcon.png";
import ReadingBlogUiUx from "../assets/images/reading-blog-ui-ux.png";
import ReadingBlogReact from "../assets/images/reading-blog-react.png";
import ReadingBlogPhp from "../assets/images/reading-blog-php.png";
import ReadingBlogJs from "../assets/images/reading-blog-javascript.png";
import Instructors_img from "../assets/images/instructors_img.png";
import Student_img from "../assets/images/students_img.png";
import UserEllipse from "../assets/images/user-Ellipse.png";
import marketingArticlesImgFirst from "../assets/images/marketingArticlesImgFirst.png";
import marketingArticlesImgSecond from "../assets/images/marketingArticlesImgSecond.png";
import marketingArticlesImgThird from "../assets/images/marketingArticlesImgThird.png";
import marketingArticlesImgFourth from "../assets/images/marketingArticlesImgFourth.png";
import BulkinSimonsImg from "../assets/images/BulkinSimonsImg.png";
import { defaultMarketingArticles } from "./DefaultData";





export const cloudSoftwareCartsData = [
    
    {
        carts_icon:File_icon,
        title:"Online Billing, Invoicing, & Contracts",
        paragraph:"Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    },
    {
        carts_icon:Calender_icon,
        title:"Easy Scheduling & Attendance Tracking",
        paragraph:"Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
        carts_icon:User_icon,
        title:"Customer Tracking",
        paragraph:"Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    },
]

export const  ourSuccessGrade = [
    {
        id:1,
        grade:"15K+",
        title:"Student"
    },
    {
        id:2,
        grade:"75%",
        title:"Total success",
    },
    {
        id:3,
        grade:"35",
        title:"Main question"
    },
    {
        id:4,
        grade:"26",
        title:"Chief expert",
    },
    {
        id:5,
        grade:"16",
        title:"Year of experience",
    },
]

export const  userInterface =[
   {
     icon:TeacherIcon,
    description:" Teachers don’t get lost in the grid view and have a dedicated Podium space"
   },
   {
     icon:TeacherIcon,
    description:" TA’s and presenters can be moved to the front of the class",
   },
   {
     icon:TeacherIcon,
    description:" Teachers can easily see all students and class data at one time."
   }
]


export const ReadingBlogList = [
    {
        bgImage:ReadingBlogUiUx,
        buttonText:"UX/UI",
        link:"/course"
    },
    {
        bgImage:ReadingBlogReact,
        buttonText:"React",
    },
    {
        bgImage:ReadingBlogPhp ,
        buttonText:"PHP",
    },
    {
        bgImage: ReadingBlogJs ,
        buttonText:"JavaScript",
    },
] 

export const RelatedBlogData = [
    {
        image:Instructors_img,
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        lina_img:UserEllipse,
        name:"Lina",
        description:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        buttonText:"Read More",
        view_icon:"fa-solid text-[#49BBBD] fa-eye",
        viewers:"251,232"
    },
    {
        image:Student_img,
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        lina_img:UserEllipse,
        name:"Lina",
        description:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        buttonText:"Read More",
        view_icon:"fa-solid text-[#49BBBD] fa-eye",
        viewers:"251,232"
    },
];

export const MarketingArticles =[
    {
        id:1,
        image:marketingArticlesImgFirst,
        title:"AWS Certified solutions Architect",
        description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        ...defaultMarketingArticles,
        
     
    },
    {
        id:2,
        image:marketingArticlesImgSecond ,
        title:"AWS Certified solutions Architect",
        description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        ...defaultMarketingArticles,
    },
    {
        id:3,
        image:marketingArticlesImgThird,
        title:"AWS Certified solutions Architect",
        description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        ...defaultMarketingArticles,
    },
    {
        id:4,
        image:marketingArticlesImgFourth,
        title:"AWS Certified solutions Architect",
        description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
       ...defaultMarketingArticles,
    },
];


export const AffordablePricingCartsData = [
    {
        id:1,
        title:"Like a pussy",
        price:"Free",
        period:" / FOREVER",
        features :[
            {title:"Components-driven system",icon:"fa-solid fa-check"},
            {title:"Sales-boosting landing pages",icon:"fa-solid fa-check"},
            {title:"Awesome Feather icons pack", icon:"fa-solid fa-check"},
        ],
        buttonText:"Try for free"
    },
    {
        id:2,
        title:"👤 Individual",
        price:"$24",
        period:" / MONTH",
        features :[
            {title:"Components-driven system",icon:"fa-solid fa-check"},
            {title:"Sales-boosting landing pages",icon:"fa-solid fa-check"},
            {title:"Awesome Feather icons pack", icon:"fa-solid fa-check"},
            {title:"Themed into 3 different styles", icon:"fa-solid fa-check"},
            {title:"Will help to learn Figma", icon:"fa-solid fa-check"},
        ],
        buttonText:"Try for free02"
    },
    {
        id:3,
        title:"👥 Corporate",
        price:"$12",
        period:" / EDITOR",
        features :[
            {title:"Components-driven system",icon:"fa-solid fa-check"},
            {title:"Sales-boosting landing pages",icon:"fa-solid fa-check"},
            {title:"Awesome Feather icons pack", icon:"fa-solid fa-check"},
            {title:"Themed into 3 different styles", icon:"fa-solid fa-check"},
        ],
        buttonText:"Try for free03"
    },
]

export const StudentsCartData = [
    {
        image:BulkinSimonsImg ,
        name:"Bulkin Simons",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
    },
    {
        image:BulkinSimonsImg ,
        name:"Bulkin Simons",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
    },
    {
        image:BulkinSimonsImg ,
        name:"Bulkin Simons",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
    },
    {
        image:BulkinSimonsImg ,
        name:"Bulkin Simons",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
    },
]




//  <div className="flex w-[70%] mx-auto">
                    
//                     <div className="w-[calc(100%/2)]">
//                         <h2 className="text-[1.125rem] font-bold text-[#49BBBD]"> Like a pussy</h2>
//                         <p className="text-[4em] font-semibold">Free <span className="text-[1.3rem] uppercase"> / forever</span></p>
//                         <div className="flex items-center gap-8">
//                             <div className="bg-gray-300 rounded-full px-2 py-1.5">
//                                 <i className="fa-solid fa-check"></i>
//                             </div>
//                             <p className="text-[1.125rem] text-gray-700" >Components-driven system</p>
//                         </div>
//                     </div>
//                     <div className="w-[calc(100%/2)]"> 2 </div>
//                     <div className="w-[calc(100%/2)]"> 3 </div>
//                 </div>