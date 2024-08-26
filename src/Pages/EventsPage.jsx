import React from 'react'
import CategoryBtn from '../Components/CategoryBtn'
import EventCard from '../Components/Home/EventCard'
import Footer from '../Components/Footer'
import Pagination from '../Components/Pagination'
import { SearchSharp } from 'react-ionicons'

export default function EventsPage() {
  return (
    <div className='w-full' style={{backgroundColor:"#1A1A1A"}}>
      <div className='md:container md:mx-auto mx-8 md:px-4 pt-32'>
        <div className='flex flex-col items-center'>
        <div className="w-full flex form-control md:hidden relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="input text-white text-sm pb-1 input-bordered h-8 rounded-lg lg:w-72 md:w-48  bg-[rgba(201,201,201,0.2)] focus:border-none focus:outline-none"
          />
          <button className="absolute right-3 top-1.5">
            <SearchSharp color={"#FFFFFF"} height="20px" width="20px" />
          </button>
        </div>
            <div className='w-full flex gap-5 items-center mb-7 overflow-x-auto'>
                <CategoryBtn category={"All"} bg={"bg-teal-600"} />
                <CategoryBtn category={"Comedy"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Music"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Sports"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Theater"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Charity"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Virtual"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Family"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Workshops"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Workshops"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Workshops"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Workshops"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Workshops"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"Workshops"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
                <CategoryBtn category={"asd"} bg={"bg-zinc-700"} hoverBg={"bg-teal-600"} />
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 2xl:grid-cols-4'>
                <EventCard img={"/images/1.png"} title={"Ismailia Art Festival 2024, ITI Ismailia"} name={"Ali Qandil"} date={"Sep 14"} time={"10 : 00 PM"} city={"Ismailia, EG"} money={600} />
                <EventCard img={"/images/2.png"} title={"Al-Qalaa International Music and Singing Festival"} name={"Sherine Abdelwahab"} date={"Sep 30"} time={"9 : 00 PM"} city={"Cairo, EG"} money={250} />
                <EventCard img={"/images/3.png"} title={"Tamer Ashour Concert"} name={"Tamer Ashour"} date={"Oct 15"} time={"8 : 00 PM"} city={"Cairo, EG"} money={650} />
                <EventCard img={"/images/4.png"} title={"King Lear"} name={"Yehia El-Fkhrany"} date={"Nov 10"} time={"8 : 30 PM"} city={"Cairo, EG"} money={500} />
                <EventCard img={"/images/5.png"} title={"Egyptian Luxor Marathon"} name={"Citizens"} date={"Sep 25"} time={"3 : 00 PM"} city={"Alexandria, EG"} money={100} />
                <EventCard img={"/images/6.png"} title={"AUC Tahrir Concert"} name={"Masar Egbari"} date={"Dec 12"} time={"8 : 00 PM"} city={"Cairo, EG"} money={450} />
                <EventCard img={"/images/1.png"} title={"Ismailia Art Festival 2024, ITI Ismailia"} name={"Ali Qandil"} date={"Sep 14"} time={"10 : 00 PM"} city={"Ismailia, EG"} money={600} />
                <EventCard img={"/images/2.png"} title={"Al-Qalaa International Music and Singing Festival"} name={"Sherine Abdelwahab"} date={"Sep 30"} time={"9 : 00 PM"} city={"Cairo, EG"} money={250} />
                <EventCard img={"/images/3.png"} title={"Tamer Ashour Concert"} name={"Tamer Ashour"} date={"Oct 15"} time={"8 : 00 PM"} city={"Cairo, EG"} money={650} />
                <EventCard img={"/images/4.png"} title={"King Lear"} name={"Yehia El-Fkhrany"} date={"Nov 10"} time={"8 : 30 PM"} city={"Cairo, EG"} money={500} />
                <EventCard img={"/images/5.png"} title={"Egyptian Luxor Marathon"} name={"Citizens"} date={"Sep 25"} time={"3 : 00 PM"} city={"Alexandria, EG"} money={100} />
                <EventCard img={"/images/6.png"} title={"AUC Tahrir Concert"} name={"Masar Egbari"} date={"Dec 12"} time={"8 : 00 PM"} city={"Cairo, EG"} money={450} />
            </div>
        </div>
        <div className='py-10 flex justify-center'>
            <Pagination/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
