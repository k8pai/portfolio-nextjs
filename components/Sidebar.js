import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

export default function Sidebar() {
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
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x:0, transition: {
            type: "spring",
            bounce: .4,
            duration: .8
        }}
      }
  return (
    <header className="fixed top-0 left-0 h-screen w-fit flex justify-center items-center p-10 text-[#E4E6EB]">
        <motion.div variants={container} initial="hidden" animate="show" className="flex-col justify-center items-center space-y-7">
            <motion.div variants={item}>
                <SocialIcon 
                    url="https://github.com/k8pai"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div variants={item}>
                <SocialIcon 
                    url="https://www.linkedin.com/in/sudarsan-k-pai-7091911a8/"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div variants={item}>
                <SocialIcon 
                    url="https://twitter.com/k8pai"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div variants={item}>
                <SocialIcon 
                    url="https://mailto:thek8pai@gmail.com"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
        </motion.div>
    </header>
  )
}
