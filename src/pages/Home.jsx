import banner_image from "../assets/images/banner-girl-img.png";
import Calendar from "../assets/images/calendar.png";
import Banner_icon from "../assets/images/banner_icon.png";
import Email_icon from "../assets/images/email_icon.png";
import userEllipse from "../assets/images/user-Ellipse.png";
import Instructors_img from "../assets/images/instructors_img.png";
import Student_img from "../assets/images/students_img.png";
import TeacherWithClass from "../assets/images/teacherWithClass.png";
import ourFeatureLeftImg from "../assets/images/our-Feature-Left-Img.png";
import ToolsTeacherImg from "../assets/images/tools-teacher-img.png";
import ClassManagementImg from "../assets/images/class-management-img.png";
import AssessmentsQuizzesImg from "../assets/images/Assessments-Quizzes-img.png";

import { ourSuccessGrade, cloudSoftwareCartsData, userInterface } from "../data/Products_data";


const Home = () => {
  return (
    <div className="w-full">
      {/* ================= Banner Section ================= */}
      <div className="w-full bg-[#49bbbd] ">
        <div className="page_container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6 lg:px-0 py-12 ">

          {/* Left Text Content */}
          <div className="lg:w-1/2 w-full space-y-6">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-white leading-snug">
              <span className="text-yellow-500">Studying Online </span>is now much easier
            </h1>
            <p className="text-white text-[18px] pr-26 max-sm:pr-0 sm:text-[20px] lg:text-[24px]">
              TOTC is an interesting platform that will teach you in a more interactive way
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button className="text-white text-[18px] bg-[#7fcfd1] px-6 py-3 rounded-3xl font-semibold cursor-pointer">
                Join for free
              </button>
              <p className="text-[#333] text-[20px] cursor-pointer">Watch how it works</p>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="lg:w-1/2 w-full relative">
            <img className="w-full max-w-[500px] mx-auto" src={banner_image} alt="banner" />

            {/* Floating Cards */}
            {/* Calendar Card */}
            <div className="absolute  bottom-98 -left-8 max-sm:left-10 bg-[#dbf1f2] px-4 py-3 rounded-2xl flex items-center gap-3 shadow-md w-[75%] max-w-[260px]">
              <img src={Calendar} alt="calendar" />
              <div>
                <p className="text-[18px] font-bold text-gray-600">250k</p>
                <p className="text-gray-600 text-sm">Assisted Student</p>
              </div>
            </div>

            {/* Banner Icon */}
            <img
              className="absolute top-36 right-16 w-28 max-sm:w-16"
              src={Banner_icon}
              alt="icon"
            />

            {/* Email Notification Card */}
            <div className="absolute bottom-70 -right-0 max-sm:right-20 bg-[#dbf1f2] px-4 py-3 rounded-xl items-center flex gap-3 shadow-md w-[41%] max-w-[300px]">
              <img className="w-10 h-8 bg-yellow-600 px-2 rounded-lg" src={Email_icon} alt="email" />
              <div>
                <p className="text-gray-600 text-[16px] font-bold">Congratulations</p>
                <p className="text-gray-600 text-[14px] font-semibold">
                  Your admission completed
                </p>
              </div>
            </div>

            {/* User Class Card */}
            <div className="absolute bottom-36 -left-10 max-sm:left-16 bg-[#dbf1f2] px-4 py-4 rounded-2xl flex gap-6 shadow-lg w-[46%] max-w-[350px]">
              <img className="w-12 h-12" src={userEllipse} alt="user" />
              <div>
                <h4 className="text-gray-600 text-[16px] sm:text-[18px] font-semibold">
                  User Experience Class
                </h4>
                <p className="text-gray-600 text-[14px] sm:text-[16px] font-semibold">
                  Today at 12.00 PM
                </p>
                <button className="text-white cursor-pointer bg-[#d8587e] mt-3 px-6 py-2 rounded-3xl text-sm">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Our Success Section ================= */}
      <div className="page_container mx-auto py-16 px-6">
        <h2 className="text-[24px] sm:text-[30px] font-bold text-center">Our Success</h2>
        <p className="text-center text-gray-600 pt-4 max-w-3xl mx-auto">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam
          et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {
            ourSuccessGrade.map((items) => (
              <div className="text-center">
                <h2 className="text-[40px] sm:text-[60px] text-[#2c91b8]">{items.grade}</h2>
                <p className="text-[18px] sm:text-[22px] text-gray-600">{items.title}</p>
              </div>
            ))
          }
        </div>
      </div>

      {/* ================= Cloud Software Section ================= */}
      <div className="page_container mx-auto py-16 px-6">
        <div className="text-center">
          <h2 className="text-[26px] sm:text-[30px] text-[#2F327D]">
            All-In-One <span className="text-[#00CBB8]">Cloud Software.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto pt-4">
            TOTC is one powerful online software suite that combines all the tools needed to run a
            successful school or office.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-sm:gap-18 gap-8 mt-12">
          {cloudSoftwareCartsData.map((data, index) => (
            <div
              key={index}
              className="relative bg-white shadow-xl rounded-lg text-center p-6"
            >
              <img
                className="absolute -top-10 left-1/2 transform  -translate-x-1/2 w-[80px] sm:w-[100px]"
                src={data.carts_icon}
                alt="file_img"
              />
              <div className="pt-12">
                <h2 className="text-[20px] font-medium text-[#2F327D]">{data.title}</h2>
                <p className="text-[16px] text-[#696984] pt-4">{data.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TOCT Section ================= */}
      <div className="page_container mx-auto py-16 px-6">
        <div className="text-center">
          <h2 className="text-[32px] sm:text-[44px] text-[#2F327D]">
            What is <span className="text-[#00CBB8]">TOCT?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-[#696984] pt-4">
            TOTC is a platform that allows educators to create online classes whereby they can store
            the course materials online; manage assignments, quizzes and exams; monitor due dates;
            grade results and provide students with feedback all in one place.
          </p>
        </div>

        {/* Images side by side */}
        <div className="flex max-lg:flex-col  gap-10 max-lg:gap-1 justify-center  items-center mt-12 ">
          {/* first images */}
          <div className=" w-full bg-no-repeat bg-center bg-contain " style={{ backgroundImage: `url(${Instructors_img})` }}>
            <div className="flex flex-col items-center justify-center h-96  ">
              <p className=" text-[2rem] text-white font-bold max-lg:text-[1.5rem] max-lg:font-medium max-sm:text-[1rem]  ">FOR INSTRUCTORS</p>
              <button className="px-8 py-4 border-1 border-white text-white rounded-4xl  hover:bg-[#23BDEE] ">
                Start a Class today
              </button>
            </div>
          </div>
          {/* seconnd images */}
          <div className="w-full  bg-no-repeat bg-center bg-contain " style={{ backgroundImage: `url(${Student_img})` }}>
            <div className="flex flex-col items-center h-96 justify-center">
              <p className="text-white text-[2rem]  font-bold  mb-4 max-lg:text-[1.5rem] max-lg:font-medium  ">FOR STUDENTS</p>
              <button className="px-8 py-4 border-1 border-white text-white rounded-4xl hover:bg-[#23BDEE]">Enter access code</button>
            </div>
          </div>

        </div>
      </div>
      {/* ================= Everything Section ================= */}
      <div className="page_container w-[100%] mx-auto left-0 right-0 flex  items-center max-md:flex-col max-md:w-full">
        <div className="w-[calc(50%)] max-md:w-full mx-md:text-center">
          <h2 className="text-[2rem] text-[#2F327D] font-medium">
            Everything you can do in a physical classroom, <span className="text-[#00CBB8]">you can do with TOTC </span>
          </h2>
          <p className="text-[#696984] text-[1.5rem] pr-8 mt-9">TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>

          <button className="text-[#696984] text-[1.2rem] underline mt-6">Learn More</button>

        </div>
        <div className="w-full md:w-1/2 relative">
          <p className="w-19 h-19 relative rounded-xl -z-10  top-15 right-2 bg-[#23BDEE]" >
          </p>
          <img className="w-full h-auto max-md:min-w-[450px] block mx-auto" src={TeacherWithClass} alt="teacherWithClass img" />
          {/* <p className="w-[10vw] h-[25vh] left-[518px] bottom-32  relative rounded-xl -z-10  bg-[#33EFA0]" ></p> */}
        </div>

      </div>

      {/* ================= Our Feature Section ================= */}

      <div className="page_container max-w-[86%] mx-auto mb-10 mt-28">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-[2.25rem] text-[#2F327D] text-center font-bold">
          Our <span className="text-[#00CBB8]">Features</span>
        </h1>
        <p className="text-center text-base sm:text-lg md:text-[1.5rem] text-[#696984] mt-4">
          This very extraordinary feature, can make learning activities more efficient
        </p>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mt-10 md:mt-20">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div
              className="w-full h-[200px] sm:h-[300px] md:h-[440px] bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${ourFeatureLeftImg})` }}>


            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[2.5em] max-lg:text-[2em] text-[#2F327D] font-semibold pr-21  max-xl:pr-2 ">
              A <span className="text-[#00CBB8]">user interface</span> designed for the classroom
            </h2>

            <div className="mt-6 md:mt-10 space-y-8">
              {userInterface.map((items) => (
                <div key={items.id} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center">
                      <img className="w-6 h-6" src={items.icon} alt="" />
                    </div>
                  </div>
                  {/* Text */}
                  <p className="text-[26px]  pr-14 max-xl:pr-2 max-lg:text-[18px] text-[#696984] ">
                    {items.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= Tools For Teacher Section ================= */}

      <div className="w-full page_container mx-auto mt-35 flex items-center mb-20 max-sm:flex-col">
        <div className="w-[calc(100%/2)] max-sm:w-[100%]">
          <h2 className="text-[#00CBB8] text-[2.5em] pr-60 font-semibold max-xl:pr-15 max-lg:text-[2em] max-lg:pr-5 max-md:text-[1.5em] max-sm:pr-0">Tools   <span className="text-[#2F327D]"> For Teachers And Learners</span> </h2>
          <p className="pr-35 text-[1.4em] pt-10 text-[#696984] max-xl:pr-12 max-lg:text-[1em] max-lg:pr-4 max-md:text-[0.9em] ">Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.</p>
        </div>
        <div className="w-[calc(100%/2)] max-sm:w-[100%] max-sm:pt-15">
          <img src={ToolsTeacherImg} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* ================= Assessments, Quizzes, Tests Section ================= */}
      <div className="w-[100%] page_container mx-auto flex gap-8 items-center  max-sm:flex-col-reverse ">
        <div className="w-[calc(100%/2)] max-sm:w-[100%]">
          <img className="w-full" src={AssessmentsQuizzesImg} alt="AssessmentsQuizzesImage" />
        </div>
        <div className="w-[calc(100%/2)] max-sm:w-[100%] max-sm:pl-10 ">
          <h2 className="text-[2.5em] font-semibold pr-56 max-xl:pr-20 max-lg:pr-0 max-md:pr-2 max-lg:text-[2em] max-md:text-[1.5em] max-sm:text-[2em] max-sm:pr-0 "> <span className="text-[#2F327D]   ">Assessments,</span> <span className="text-[#00CBB8]">Quizzes,</span> <span className="text-[#2F327D]">Tests</span> </h2>
          <p className="text-[1.5em] pt-4 text-[#696984] pr-20 max-lg:text-[1.2em] max-lg:pr-4 max-md:text-[1em] "> Easily launch live assignments, quizzes, and tests.
            Student results are automatically entered in the online gradebook.</p>
        </div>
      </div>
      {/* ================= Class Management Section ================= */}

      <div className="page_container mx-auto flex items-center ">
        <div className="w-[calc(100%/2)] max-sm:w-[100%]">
          <h2 className="text-[2.5em] font-semibold text-[#00CBB8] pr-38"> Class Management <span className="text-[#2F327D]">Tools for Educators</span> </h2>
          <p className="text-[1.5em] text-[#696984] pr-6 pt-4">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
          </p>
        </div>
        <div className="w-[calc(100%/2)] max-sm:w-[100%]">
          <img src={ClassManagementImg} alt="" className="w-full" />
        </div>

      </div>

      {/* ================= One-on-One Discussions Section ================= */}
      <div className="page_container mx-auto flex items-center">
        <div className="">
          <h2 className="text-[#2F327D]text-[2.5em] "> One-on-One <span className="text-[#00CBB8]">Discussions</span> </h2>
          <p className="text-[#696984] text-[1.5em] ">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>

        </div>
        <div className="">

        </div>

      </div>

<div className="mx-auto page_container flex justify-center">
  <button className="border-2 border-gray-300 py-2 px-6 rounded-[2em] "> See more features </button>
</div>


    </div>
  );
};

export default Home;
