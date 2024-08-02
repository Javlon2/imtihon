import Image1 from '../assets/image1.svg' 
import Group from '../assets/Group 9.svg'
import Group1 from '../assets/Group 8.svg'
const Hero = () => {
  return (
    <div>
        <div className="p-10  bg-yellow-200 flex justify-between gap-20 items-center px-20">
          <div>
            <p className="text-5xl font-bold">Rocket single seater</p>
            <div>            
              <p className='w-20 border-b-2 border-black'>Shop now</p>
            </div>
          </div>
          <div>
            <img className='w-3/4' src={Image1} alt="image" />
          </div>
        </div>
        <div className="flex justify-between items-center  p-20">
          <div>
            <img src={Group} alt="" />
            <p className="text-2xl font-bold">Side table </p>
            <p className="w-20 border-b-2 border-black">View More</p>
          </div>
          <div>
            <img src={Group1} alt="" />
            <p className="text-2xl font-bold">Side table </p>
            <p className="w-20 border-b-2 border-black">View More</p>
          </div>
        </div>
    </div>
  )
}

export default Hero