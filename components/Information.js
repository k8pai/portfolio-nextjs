import Image from "next/image";
import { motion } from "framer-motion";

export default function Information() {
  return (
    <div className="h-screen relative max-w-7xl mx-auto flex flex-col justify-center items-center text-white">
        <div className="flex justify-center items-center">
            <div className="basis-1/3 aspect-square flex justify-center items-center">
                <Image 
                    className="rounded-full"
                    src={"/SuduKiba.png"}
                    height="200"
                    width="200"
                />
            </div>
            <div className="basis-2/3 ml-10 min-w-[100px] flex-col justify-center items-center text-center">
                <h1 className="font-extrabold text-6xl tracking-wider leading-relaxed"><span className="text-cyan-50">Hello World</span>, <span className="text-cyan-100">Pai</span> here.</h1> 
                <h1 className="font-bold text-xl tracking-wide">I'm a web developer building stuff.</h1> 
                <h1 className="font-extrabold text-4xl">Hello World, i'm Sudarsh pai</h1> 
                <h1 className="font-bold text-xl tracking-wide">

                 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h1> 
            </div>
        </div>
    </div>
    // <div className="mt-10 min-w-[100px] flex justify-center items-center">
    //     <div className="group flex-1 m-2 rounded-full p-3 px-6 bg-[#D7E1EC] text-[#18191A] hover:blur-[1px]">
    //         <h1 className="font-semibold group-hover:hidden">javascript</h1>                
    //         <h1 className="font-semibold hidden group-hover:block">80%</h1>
    //     </div>
    //     <div className="group flex-1 m-2 rounded-full p-3 px-6 bg-[#D7E1EC] text-[#18191A]">
    //         <h1 className="flex-1 font-semibold">javascript</h1>
    //     </div>
    //     <div className="group flex-1 m-2 rounded-full p-3 px-6 bg-[#D7E1EC] text-[#18191A]">
    //         <h1 className="flex-1 font-semibold">javascript</h1>
    //     </div>
    //     <div className="group flex-1 m-2 rounded-full p-3 px-6 bg-[#D7E1EC] text-[#18191A]">
    //         <h1 className="flex-1 font-semibold">javascript</h1>
    //     </div>
    // </div>
  )
}
