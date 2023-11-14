import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion';
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-row justify-center items-center px-20 mt-40 z-20'
        >

            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                {/* Name */}
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className='Welcome-text text-[13px]'>Full Stack Developer Portfolio</h1>
                </motion.div>

                {/* Phrase */}
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
                >
                    Providing
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to to-cyan-500'>the best</span>
                    project experience
                </motion.div>

                {/* Paragraph */}
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    FullStack developer with +1 year of experience with Nest.js, JavaScript,
                    React.js. Check out my projects and skills.
                </motion.p>

                {/* Button Learn More */}
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Learn More!
                </motion.a>

                {/* Image */}
                <motion.div
                    variants={slideInFromRight(0.8)}
                    className='absolute w-full h-full flex justify-center items-center ml-[18rem]'
                >
                    <img src="/cartoonBoy.png" alt="cartoon boy" width={650} height={650} />
                </motion.div>
            </div>
        </motion.div>
    )
}
export default HeroContent