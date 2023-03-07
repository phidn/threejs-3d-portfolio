import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import classNames from 'classnames'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative mx-auto h-screen w-full'>
      <div
        className={classNames(
          styles.paddingX,
          'absolute inset-0 top-[120px] mx-auto max-w-7xl flex flex-row items-start gap-5'
        )}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 violet-gradient'></div>
        </div>
        <div>
          <h1 className={classNames(styles.heroHeadText)}>
            Hi, I'm <span className='text-[#915eff]'>Dang Nhat Phi</span>
          </h1>
          <p className={classNames(styles.heroSubText)}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web application
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
