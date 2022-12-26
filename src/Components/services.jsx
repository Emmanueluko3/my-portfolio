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
    const imgClasses = "w-[27%] grid justify-items-center py-3 content-between bg-white border-white border-8 rounded-lg drop-shadow-2xl";
    const service = services.map((item, key) =>(
        <div key={key} className={imgClasses}>
            <img src={item.avatar} className="h-[80px]" alt="" />
            <h3 className="text-customPink text-[27px] text-center font-semibold">{item.title}</h3>
        </div>
    ));
    return ( 
        <>
            <div id="services" className="grid justify-items-center bg-gray-700 px-10 text-white py-10">
                <h2 className="py-10 font-bold text-5xl mb-5">Services</h2>                    
                <div className="flex justify-center space-x-12 py-8 w-full h-full ">
                {   service}
                </div>
                    
            </div>
            
        </>
     );
}

export default Services;