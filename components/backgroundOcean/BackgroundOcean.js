import { useState, useEffect } from 'react'

const BackgroundOcean = () => {

  const [style , setStyle] = useState({
    top: -10,
    background: 'linear-gradient(90deg, #021B79 0%, #26D0CE 50%, #1A2980 100%)',
  }) 
  const getLeftColorValues = depth => {
    const hue = 192 + Math.round(depth*42)
    const saturation = 90 + Math.round(depth*-3) 
    const lightness = 43 + Math.round(depth*-34) 
    return [hue, saturation, lightness]
  }
  const getCenterColorValues = depth => {
    const hue = 178 + Math.round(depth*42)
    const saturation = 87 + Math.round(depth*-3) 
    const lightness = 71 + Math.round(depth*-34) 
    return [hue, saturation, lightness]
  }
  const getRightColorValues = depth => {
    const hue = 190 + Math.round(depth*42)
    const saturation = 91 + Math.round(depth*-3) 
    const lightness = 46 + Math.round(depth*-34) 
    return [hue, saturation, lightness]
  }
  const generateGradient = ( limit, scrollTop ) => {
    const depht = (scrollTop/limit)
    const leftColorValues = getLeftColorValues(depht)
    const centerColorValues = getCenterColorValues(depht)
    const rightColorValues = getRightColorValues(depht)
    const leftColor = `hsl(${leftColorValues[0]},${leftColorValues[1]}%,${leftColorValues[2]}%)`
    const centerColor = `hsl(${centerColorValues[0]},${centerColorValues[1]}%,${centerColorValues[2]}%)`
    const rightColor = `hsl(${rightColorValues[0]},${rightColorValues[1]}%,${rightColorValues[2]}%)`
    return `linear-gradient(90deg, ${leftColor} 0%, ${centerColor} 50%, ${rightColor} 100%)`
  }
  useEffect(() => {
    const onScroll = e => {
      const topScroll = e.target.documentElement.scrollTop
      const limit = window.innerHeight * (4.5-1.2)
      const newScrollTop = topScroll > limit ? limit : topScroll
      setStyle({
        top: (-10 + newScrollTop),
        background:generateGradient(limit,newScrollTop),
      })
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [style]);
  return(
    <div className='background-ocean'>
      <style jsx>{`
        .background-ocean{
          position: absolute;
          top: ${style.top}px;
          background: ${style.background};
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