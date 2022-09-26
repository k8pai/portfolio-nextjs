import { motion } from "framer-motion"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

export default function Footer() {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y:0, transition: {
            type: "spring",
            bounce: .4,
            duration: .8
        }}
      }
  return (
    <div className="sticky bottom-0 flex justify-center items-center p-10 mx-auto text-[#E4E6EB]">
        <div className="flex justify-center items-center">
            
            <motion.div variants={container} className="flex justify-center space-x-4">
                <motion.div variants={item} className="w-10 h-10 shadow-lg shadow-[#24242e] rounded-full border border-white flex justify-center items-center"><Link href={"#about"}> 1 </Link></motion.div>
                <motion.div variants={item} className="w-10 h-10 shadow-lg shadow-[#24242e] rounded-full border border-white flex justify-center items-center"> 2 </motion.div>
                <motion.div variants={item} className="w-10 h-10 shadow-lg shadow-[#24242e] rounded-full border border-white flex justify-center items-center"> 3 </motion.div>
                <motion.div variants={item} className="w-10 h-10 shadow-lg shadow-[#24242e] rounded-full border border-white flex justify-center items-center"> 4 </motion.div>
            </motion.div>
        </div>
    </div>
  )
}
