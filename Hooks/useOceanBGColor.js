import { useEffect , useState } from 'react'

const useOceanBGColor = (topColorsValues,maxVariation) => {
  const valuesToHslColor = valuesArray => {
    const [hue,saturation,lightness] = valuesArray
    return `hsl(${hue},${saturation}%,${lightness}%)`
  }
  const [style , setStyle] = useState({
    top: 0,
    background: `linear-gradient(90deg,
      ${valuesToHslColor(topColorsValues[0])} 0%, 
      ${valuesToHslColor(topColorsValues[1])} 50%, 
      ${valuesToHslColor(topColorsValues[2])} 100%)`,
  }) 

  const update = () => {
    useEffect(() => {
      const onScroll = () => {
        const topScroll = document.documentElement.scrollTop
        const limit = window.innerHeight * (4.5-1.2)
        const newScrollTop = topScroll > limit ? limit : topScroll
        setStyle({
          top: (-10 + newScrollTop),
          background:generateGradient(newScrollTop , limit ),
        })
      };
      window.addEventListener("scroll", onScroll);
      window.addEventListener("DOMContentLoad", onScroll);
      
      return () => window.removeEventListener("scroll", onScroll);
    }, [style]);
  }  
  const getColorsValues = depth => {
    return [0,1,2].map( colorIndex => {
      return topColorsValues[colorIndex].map( (hslValue,index) => {
        return hslValue + Math.round( depth * maxVariation[index])
      })
    })
  }    
  const generateGradient = ( scrollTop , limit ) => {
    const [left,center,right] = getColorsValues(scrollTop/limit)    
    return `linear-gradient(90deg,
      ${valuesToHslColor(left)} 0%, 
      ${valuesToHslColor(center)} 50%, 
      ${valuesToHslColor(right)} 100%)`
  }

  return [ style , update ]
}

export default useOceanBGColor