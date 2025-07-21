import NavLinks from "./nav-links"
import {ArrowRightStartOnRectangleIcon} from '@heroicons/react/24/outline';

export default function SideNav(){
    const ExitIcon = ArrowRightStartOnRectangleIcon;
    return(
        <div className="flex flex-row md:flex-col w-full bg-white h-12 md:h-full border-r-2 border-r-gray-400 items-center text-gray-400">
            <div 
            aria-label="Toolbar"
            className=" hidden md:block md:capialize md:text-xl font-semibold pb-6 pt-6 pr-3 pl-3 mt-12 border-2 mb-12 border-gray-300 rounded-2xl "
            >
                Tools
            </div>
            <NavLinks></NavLinks>
            <div className=" md:flex md:justify-center pt-5 pb-5 pl-5 pr-5 mt-[100%] mb-12">
                <button title={'Logout'} className="cursor-pointer hover:text-blue-600">
                    <ExitIcon className="md:w-8.5 md:h-8.5"></ExitIcon>
                </button>
            </div>

        </div>
    )
}