import { AffordablePricingCartsData, StudentsCartData } from "../data/Products_data";


const MemberShip = () => {
    return (
        <div className="w-full">
            {/* Affordable pricing section*/}
            <div className="page_container mx-auto ">
                <h1 className="text-[4em] text-center text-[#49BBBD] font-semibold"> Affordable pricing </h1>

                {/* Affordable Pricing Cards */}
                <div className="flex w-[70%] mx-auto mt-8">
                    {
                        AffordablePricingCartsData.map((items) => (

                            <div className="w-[calc(100%/2)] flex flex-col hover:-translate-y-1 px-4 py-4 hover:rounded-2xl hover:scale-105 hover:mx-4 hover:shadow-xl" key={items.id}>
                                <h2 className="text-[1.125rem] font-bold text-[#49BBBD] "> {items.title} </h2>
                                <p className="text-[3rem] font-semibold"> {items.price} <span className="text-[1.3rem] uppercase"> {items.period}</span></p>
                                <ul className="mt-4 space-y-4">
                                    {items.features.map((feature) => (
                                        <li key={feature.id} className="flex items-center gap-2 mb-4">
                                            <div className={`bg-gray-300 rounded-full px-2 py-1.5 
                                                ${items.id === 1 ? "bg-gray-300" : ""} 
                                                ${items.id === 2 ? "bg-yellow-200" : ""}
                                                ${items.id === 3 ? "bg-sky-200" : ""}`}>
                                                <i className={feature.icon}></i>
                                            </div>
                                            <span>{feature.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-auto   flex flex-col bg-[#49BBBD] w-full py-2 rounded-2xl  text-white ">{items.buttonText}</button>
                            </div>
                        ))
                    }

                </div>
            </div>
            {/* Affordable pricing section*/}

            <div className="bg-[#252641] page_container mx-auto rounded-3xl space-y-5 py-16 mt-20">
                <p className="text-[2.25rem] text-white text-center">Online coaching lessons for remote learning.</p>
                <p className="text-center text-white px-50 text-[1.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div className="flex">
                    <button className="text-white mx-auto rounded-xl bg-[#49BBBD] px-4 py-2.5 ">Start learning now</button>
                </div>

            </div>
            {/* Online coaching lessons for remote learning - section */}
            <div className=" mx-auto page_container space-y-5 ">
                <h2 className="text-center pt-10 text-[2.25rem] font-semibold"> Online coaching lessons for remote learning </h2>
                <select className="w-full py-2 border-b-2 outline-none border-gray-300">
                    <option value="name " disabled selected hidden >Lorem ipsum dolor sit amet</option>
                    <option className="pt-10 bg-white" value="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus odit illo quo accusamus necessitatibus facilis rem, aut excepturi, minima, iure ratione <br /> ex tempore adipisci earum sapiente unde atque asperiores.</option>
                </select>
                <select className="w-full py-2 border-b-2 outline-none border-gray-300">
                    <option value="name " disabled selected hidden>Lorem ipsum dolor sit amet</option>
                    <option className="pt-10 bg-white" value="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus odit illo quo accusamus necessitatibus facilis rem, aut excepturi, minima, iure ratione <br /> ex tempore adipisci earum sapiente unde atque asperiores.</option>
                </select>
                <select className="w-full py-2 border-b-2 outline-none border-gray-300">
                    <option value="name " disabled selected hidden >Lorem ipsum dolor sit amet</option>
                    <option className="pt-10 bg-white" value="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus odit illo quo accusamus necessitatibus facilis rem, aut excepturi, minima, iure ratione <br /> ex tempore adipisci earum sapiente unde atque asperiores.</option>
                </select>
                <select className="w-full py-2 border-b-2 outline-none border-gray-300">
                    <option value="name" disabled selected hidden >Lorem ipsum dolor sit amet</option>
                    <option className="pt-10 bg-white" value="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus odit illo quo accusamus necessitatibus facilis rem, aut excepturi, minima, iure ratione <br /> ex tempore adipisci earum sapiente unde atque asperiores.</option>
                    <option className="pt-10 bg-white" value="name">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus odit illo quo accusamus necessitatibus facilis rem, aut excepturi, minima, iure ratione <br /> ex tempore adipisci earum sapiente unde atque asperiores.</option>
                </select>
            </div>
            {/* Online coaching lessons for remote learning  section */}

            {/*========================== What our students have to say Section ! ===============================*/}
            <div className="bg-[#9DCCFF] h-screen ">
                <div className="mx-auto page_container">
                    <h2 className="text-[#2D3436] text-[2.25rem] font-semibold pt-16"> What our students have to say </h2>
                    <div className="flex gap-6 py-8">
                        {
                            StudentsCartData.map((StudentData) => (
                                <div className=" w-[calc(96%/4)] px-4  py-6 bg-white rounded-xl ">
                                    <img className="mx-auto" src={StudentData.image} alt="" />
                                    <h2 className="text-center font-semibold text-[1.2rem] pt-4"> {StudentData.name}</h2>
                                    <p className="text-center text-[#696984] text-[1.1rem]">{StudentData.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/*========================== What our students have to say Section ! ===============================*/}

              <div className="flex bg-[#252641] justify-between py-12 page_container mx-auto rounded-xl px-20 relative bottom-16 ">
                    <h2 className="text-[2.25rem] text-white"> APP is available for free </h2>
                    <div className="flex gap-6">
                        <button className="bg-[#49BBBD] rounded-xl text-white px-4 py-2"> <span className="pr-2 "><i className="fa-brands fa-android text-xl "></i></span>Androit APP</button>
                        <button className="bg-[#49BBBD] rounded-xl  text-white px-10 py-2"> <span className="pr-2"><i class="fa-brands fa-apple"></i></span>IOS APP</button>
                    </div>
                </div>
        </div>
    )
}
export default MemberShip;