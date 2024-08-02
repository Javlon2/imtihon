import Card from "../components/Card"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Sofa from "../assets/sofa.svg"
import Rectange from "../assets/Rectangle 13.svg" 
import Rectange1 from "../assets/Rectangle 14.svg"
import Rectange2 from "../assets/Rectangle 15.svg"  
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
const Home = () => {
  return (
 <div className="flex justify-center">
      <div className="w-[1350px]">
        <Header/>
        <Hero/>
        <Card/>
        <div>
<Link to="/product">
        <div className="bg-yellow-200 flex">
          <img src={Sofa} alt="" />
            <div className=" mx-auto my-auto text-center">
              <p className="text-2xl font-semibold">New Arrivals</p>
              <p className="text-3xl font-semibold"> Asgaada sofa</p>
              <button className="w-28 h-10 border mt-2  border-[black]">Order Now</button>
            </div>
            </div>
</Link>
          
          <div className="p-10">
            <p className="text-2xl font-semibold text-center">Our Blogs</p>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sit cupiditate nam adipisci est nihil commodi, sunt molestiae, </p>
            <div className="flex justify-between gap-10 p-10">
              <div className="">
                <img src={Rectange} alt="" />
                <p className="text-center">Going all-in with millennial design</p>
                <p className="w-24 font-bold border-b-2 border-black text-center mx-auto">Read More</p>
              </div>
              <div className="">
                <img src={Rectange1} alt="" />
                <p className="text-center">Going all-in with millennial design</p>
                <p className="w-24 font-bold border-b-2 border-black text-center mx-auto">Read More</p>
              </div>
              <div className="">
                <img src={Rectange2} alt="" />
                <p className="text-center">Going all-in with millennial design</p>
                <p className="w-24 border-b-2 font-bold border-black text-center mx-auto">Read More</p>
              </div>

            </div>
            <p className="w-28 mx-auto font-bold text-center border-b border-black">View All Post</p>
          </div>
          <div className=" p-40 border">
            <p className="text-4xl font-bold text-center">Our Instagram</p>
            <p className="text-center">Follow our store on Instagram</p>
             <div className="flex justify-center">
              <button className="w-28 h-10 shadow-lg mx-auto   rounded-[30px]">Follow as</button>
             </div>
          </div>
          <Footer/>
        </div>
    </div>
 </div>
  )
}

export default Home