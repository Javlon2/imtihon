import Card1 from "../assets/Card.svg"
import Card2 from "../assets/Card2.svg" 
import Card3 from "../assets/Card3.svg"
import Card4 from "../assets/Card4.svg"
const Card = () => {
  return (
    <div>
        <div >
            <p className="text-2xl font-bold text-center">Top Picks For You</p>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa dolores amet tempore? </p>
            <div className="p-10 flex justify-center items-center gap-5">
                <div>
                    <img src={Card4} alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
                <div>
                    <img src={Card1} alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
                <div>
                    <img src={Card2} alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
                <div>
                    <img src={Card3} alt="" />   
                    <p>Trenton modular sofa_3</p> 
                    <p className="font-bold">Rs. 25,000.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card