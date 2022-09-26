import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
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
        hidden: { opacity: 0, y: -30 },
        show: { opacity: 1, y:0, transition: {
            type: "spring",
            bounce: .4,
            duration: .8
        }}
      }
  return (
    <header className="sticky top-0 flex justify-between items-center p-10 mx-auto text-[#E4E6EB]">
        <div className="flex items-center">
            <motion.div initial={{ opacity:0, x:-130 }} animate={{ opacity:1, x:0 }} transition={{ type: "spring", bounce: .4, duration:.8 }}>
                <SocialIcon 
                    url="https://github.com/k8pai"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
            
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ type: "ease-in-out", duration:.4, delay: .2 }}>
                <h3 className="font-semibold tracking-widest text-2xl">k8pai</h3>
            </motion.div>
        </div>
        <motion.div variants={container} initial="hidden" animate="show" className="flex items-center">
            <motion.div variants={item}>
                <SocialIcon 
                    url="https://github.com/k8pai"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div variants={item}>
                <SocialIcon 
                    url="https://github.com/k8pai"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div variants={item}>
                <SocialIcon 
                    url="https://github.com/k8pai"
                    fgColor="#E4E6EB"
                    bgColor="transparent"
                />
            </motion.div>
        </motion.div>
    </header>
  )
}
