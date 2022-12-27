import Software from "../Images/software.svg"
import Web from "../Images/web.png"
import QAQC from "../Images/qaqc.webp"

function Services() {
    const services = [
        {   
            avatar: Software, 
            title: 'Software Development'
        },
        {   
            avatar: Web, 
            title: 'Web Development'
        },
        {   
            avatar: QAQC, 
            title: 'QA/QC Test'
        },
    ];
    const imgClasses = "lg:w-[27%] w-[80%] grid h-auto justify-items-center py-3 my-3 lg:content-between bg-white border-white border-8 rounded-lg drop-shadow-2xl";
    const service = services.map((item, key) =>(
        <div key={key} className={imgClasses}>
            <div className="h-38 w-20 lg:w-auto grid justify-items-center">
                <img src={item.avatar} className="lg:h-[80px] object-center object-cover" alt="" />
            </div>
            
            <h3 className="text-customPink lg:text-[27px] text-center font-semibold">{item.title}</h3>
        </div>
    ));
    return ( 
        <>
            <div id="services" className="container grid justify-items-center bg-gray-700 lg:px-10 text-white py-5 lg:py-10">
                <h2 className="py-10 font-bold lg:text-5xl text-3xl lg:mb-5">Services</h2>                    
                <div className="flex justify-center flex-wrap space-x-2 lg:space-x-12 lg:py-8 w-full h-full ">
                {   service}
                </div>
                    
            </div>
            
        </>
     );
}

export default Services;