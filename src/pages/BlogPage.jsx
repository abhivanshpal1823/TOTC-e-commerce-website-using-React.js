import { Link } from "react-router-dom";
import BlogInspiration from "../assets/images/blog-inspiration.png";
import { ReadingBlogList, RelatedBlogData, MarketingArticles } from "../data/Products_data";




const BlogPage = () => {
    return (
        <div className="w-100%">
            <div className="pt-14 w-full pb-14 bg-[#ebf5ff] ">
                <div className="page_container mx-auto flex gap-10 max-lg:gap-2 max-md:flex-col">
                    <div className="w-[calc(100%/2)] max-md:w-[100%]">
                        <p className="text-[1.5em] font-bold max-xl:font-semibold max-lg:font-medium max-lg:text-[1.2em] max-sm:text-[1em] max-md:font-mono">By Themadbrains in <span className="text-[#49BBBD]">inspiration</span></p>
                        <h2 className="text-[#2F327D] text-[2.75em] font-semibold max-lg:font-medium pr-6 max-xl:text-[2.50em] max-xl:pr-0 max-lg:text-[1.50em] max-sm:text-[1.25em]"> Why Swift UI Should Be on the Radar of Every Mobile Developer </h2>
                        <p className="text-[#696984] text-[1.5em] pr-6 pt-4  max-lg:pt-2 max-xl:pr-2 max-xl:text-[1.2em] max-lg:text-[0.96em] max-lg:pr-0 max-sm:text-[0.80em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <button className=" mt-6 max-md:mt-2 bg-[#49BBBD] px-4 py-1.5 rounded-lg text-white max-lg:px-3 max-md:text-[0.10em]">Start learning now</button>
                    </div>

                    <div className="w-[calc(100%/2)] max-md:w-[100%]">
                        <img className="w-full " src={BlogInspiration} alt="BlogInspiration" />
                    </div>
                </div>
            </div>
            {/* ================= Reading blog list Section ================= */}
            <div className="page_container mx-auto py-12 ">
                <h2 className="text-[1.75em] font-semibold max-lg:pb-6  max-sm:text-center"> Reading blog list</h2>
                <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 ">

                    {
                        ReadingBlogList.map((cardData) => (
                            <div className="w-full h-80  bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${cardData.bgImage})` }}>
                                <div className="flex  items-center justify-center h-96" >
                                    <Link to={cardData.link}> <button className=" py-3 mt-16  border-1 border-white opacity-65 w-55 text-[#000000] bg-white  font-semibold  rounded-2xl hover:bg-[#23BDEE] hover:opacity-90">{cardData.buttonText}</button></Link>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
            {/* ================= Related Blog  Section ================= */}
            <div className="w-[100%] bg-[#ebf5ff]">
                <div className="page_container mx-auto ">
                    <div className="flex justify-between">
                        <h2 className="text-[1.75em] font-medium max-sm:text-[1.25em] max-sm:py-4 py-10 "> Related Blog</h2>
                        <button className="text-[#49BBBD] cursor-pointer text-[1.25em] font-medium"> See all</button>
                    </div>
                    <div className="flex gap-15 w-full max-lg:flex-col max-sm:pb-6 pb-24 ">

                        {
                            RelatedBlogData.map((cardData) => (
                                <div key={cardData.id} className="flex-1 bg-white px-6 py-8 rounded-lg">
                                    <img className="w-full" src={cardData.image} alt="Instructors" />
                                    <h2 className="text-[1.625em] text-[#252641] font-medium pt-4 max-sm:text-[1.25em] max-sm:font-mono"> {cardData.title}</h2>
                                    <div className="flex items-center gap-6 py-4">
                                        <img className="" src={cardData.lina_img} alt="" />
                                        <p className="text-[1.125em] font-medium">{cardData.name}</p>
                                    </div>
                                    <p className="text-[#696984] text-[1.25em] max-sm:text-[1em]">{cardData.description}</p>
                                    <div className="flex justify-between pt-8">
                                        <button className="underline text-[1.25em] max-sm:text-[1em] text-[#696984] cursor-pointer">{cardData.buttonText}</button>
                                        <div className="flex items-center gap-6 ">
                                            <i className={cardData.view_icon}></i>
                                            <p className="text-[1.25em] max-sm:text-[1em] text-[#696984]">{cardData.viewers}</p>
                                        </div>
                                    </div>
                                </div>

                            ))

                        }

                    </div>
                </div>
            </div>

            {/* =================  Marketing Articles Section ================= */}

            <div className="page_container mx-auto left-0 right-0">
                <div className="flex justify-between">
                    <h2 className="text-[1.75em] font-medium max-sm:text-[1.25em] max-sm:py-4 py-10 ">Marketing Articles</h2>
                    <button className="text-[#49BBBD] cursor-pointer text-[1.25em] font-medium"> See all</button>
                </div>
                <div className="grid grid-cols-4  gap-8 pb-25 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {
                        MarketingArticles.map((items) => (
                            <div key={items.id} className="shadow-xl py-6 px-4 rounded-lg">
                                <img className="w-full" src={items.image} alt="image" />
                                <div className="flex justify-between pt-4 ">
                                    <p className="text-[#696984] "> <i className={`${items.designIcon}`}></i>{" "}{items.designText}</p>
                                    <p className="text-[#696984]"><i className={` ${items.timeIcon}`}> </i>{" "}{items.time}</p>
                                </div>
                                <h2 className="text-[1.5em] font-medium pt-4 max-xl:text-[1em]"> {items.title} </h2>
                                <p className="text-[1.125em] text-[#696984] pt-5 max-xl:text-[1em]">{items.description}</p>
                                <div className="flex justify-between pt-6 items-center ">
                                    <div className="flex gap-2 items-center  max-xl:gap-1">
                                        <img src={items.linaImg} alt="linaImage" />
                                        <p className="text-[1.125em] font-medium pt-2 max-xl:text-[1em]" >Lina </p>
                                    </div>
                                    <div className="flex gap-4 pt-2 items-center max-xl:gap-2">
                                        <del className="text-[1.125em] text-gray-500  max-xl:text-[1em]" >${items.dellPrice}</del>
                                        <p className="text-[1.5em] font-semibold text-[#49BBBD] max-xl:text-[1em]">${items.price}</p>

                                    </div>

                                </div>
                            </div>
                        ))

                    }

                </div>
            </div>
        </div>
    )
}
export default BlogPage;