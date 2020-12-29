import { useState, useEffect } from 'react'

const BackgroundOcean = () => {

  const [ scrollTop , setScrollTop ] = useState( 0 )
  const [ gradient , setGradient ] = useState()//useState('linear-gradient(90deg, #021B79 0%, #26D0CE 50%, #1A2980 100%)')

  const generateGradient = ( limit, scrollTop ) => {
    const depht = (scrollTop/limit)
    //const left = '#021B79'
    const left = `hsl(${192},${90},${43})`
    //const center = '#26D0CE'
    const center = `hsl(${178},${87},${71})`
    //const rigth = '#1A2980'
    const rigth = `hsl(${190},${91},${46})`
    return `linear-gradient(90deg, ${left} 0%, ${center} 50%, ${rigth} 100%)`
  }

  useEffect(() => {
    const onScroll = e => {
      const topScroll = e.target.documentElement.scrollTop
      const limit = window.innerHeight * (4.5-1.2)
      const newScrollTop = topScroll > limit ? limit : topScroll
      setGradient(generateGradient(limit,newScrollTop))
      setScrollTop(newScrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return(
    <div className='background-ocean' 
      style={{
        top: `${scrollTop}px`,
        background: gradient,
      }}
    >
      <style jsx>{`
        .background-ocean{
          position: absolute;
          left: -10vw;
          width: 120vw;
          height: 120vh;
          margin: -10vh -10vw;
          z-index: -1;
        }
      `}</style>
    </div>
  )
}

export default BackgroundOcean