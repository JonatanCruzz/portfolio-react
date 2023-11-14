import { Link } from 'react-scroll'
import { AboutMeIcon, ContactIcon, HomeIcon, KnowledgeIcon, PortfolioIcon, SkillsIcon } from '../icons/Svgs'
import { motion } from 'framer-motion';
import { slideInFromBotton } from '../../utils/motion';

const NavBar = () => {

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'
        >
            <motion.div
                variants={slideInFromBotton}
                className="container mx-auto text-white">
                <div className='w-full bg-white/10 h-[60px] backdrop-blur-sm rounded-full 
                max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>

                    <Link to="#" className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center group relative'
                        title="Home"
                    >
                        <HomeIcon />
                        <div className="overlay absolute  inset-0 rounded-full opacity-0 bg-white/50 transition-all group-hover:opacity-50"></div>
                    </Link>

                    <Link to="#" className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center group relative'
                        title="About Me"
                    >
                        <AboutMeIcon />
                        <div className="overlay absolute inset-0 rounded-full opacity-0 bg-white/50 transition-all group-hover:opacity-50"></div>
                    </Link>

                    <Link to="#" className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center group relative'
                        title="Experience & Education"
                    >
                        <KnowledgeIcon />
                        <div className="overlay absolute inset-0 rounded-full opacity-0 bg-white/50 transition-all group-hover:opacity-50"></div>
                    </Link>

                    <Link to="#" className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center group relative'
                        title="Skills"
                    >
                        <SkillsIcon />
                        <div className="overlay absolute inset-0 rounded-full opacity-0 bg-white/50 transition-all group-hover:opacity-50"></div>
                    </Link>

                    <Link to="#" className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center group relative'
                        title="Portfolio"
                    >
                        <PortfolioIcon />
                        <div className="overlay absolute inset-0 rounded-full opacity-0 bg-white/50 transition-all group-hover:opacity-50"></div>
                    </Link>

                    <Link to="#" className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center group relative'
                        title="Contact Me"
                    >
                        <ContactIcon />
                        <div className="overlay absolute inset-0 rounded-full opacity-0 bg-white/50 transition-all group-hover:opacity-50"></div>
                    </Link>

                </div>
            </motion.div>
        </motion.nav>
    )
}
export default NavBar