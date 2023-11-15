import React from 'react'
import SkillsDataProvider from './SkillsDataProvider'
import { Backend_skills, Frontend_skills } from '../../constants/SkillsData'
import SkillsText from './SkillsText'

const Skills = () => {
    return (
        <section
            id='skills'
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
            style={{ transform: "scale(0.9)"}}
        >
            <SkillsText />
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Frontend_skills.map((image, index) => (
                    <SkillsDataProvider
                        src={image.Image}
                        key={index}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Backend_skills.map((image, index) => (
                    <SkillsDataProvider
                        src={image.Image}
                        key={index}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-10  opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='/others/cards-video.webm'
                    />
                </div>

            </div>
        </section>
    )
}
export default Skills
