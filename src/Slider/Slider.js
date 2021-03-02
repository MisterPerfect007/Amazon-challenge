/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef, useEffect } from 'react'
import { css, jsx } from '@emotion/react';
import Slide from './Slide';
import SliderContent from './SliderContent';
// import Arrow from './Arrow';


/**
 * @function Slider
 */
const Slider = (props) => {
    const getWidth = () => window.innerWidth;
    const [width, setWidth] = useState(getWidth);
    const [activeIndex, setActiveIndex] = useState(0);
    const [transition, setTransition] = useState(0.5);

    const autoPlayRef = useRef()
    useEffect(() => {
        autoPlayRef.current = rightHandler
      })
    
      useEffect(() => {
        const play = () => {
          autoPlayRef.current()
        }
    
        const interval = setInterval(play, 4000)
        return () => clearInterval(interval)
      }, [])

    const rightHandler = () =>{
        if(activeIndex < props.images.length - 1){
            setActiveIndex(activeIndex + 1)
        }
        else if (activeIndex === props.images.length - 1){
            setTransition(0)
            setActiveIndex(0)
            resetTransition();
        }
    }
    const resetTransition = () => setTimeout(() => setTransition(0.5),500)
    //Listen for resizise th screen width
    window.addEventListener('resize',() => {
        setWidth(getWidth);
    })

    return(
    <div css={sliderCss} >
        <SliderContent 
            width={width * props.images.length}
            translate={width * activeIndex}
            transition={transition}
        >
            {
                props.images.map((image, i) =>{
                    return <Slide key={image + i} content={image} />}
                )
            }
        </SliderContent>
            {/* <Arrow direction={'left'} handler={leftHandler} />
            <Arrow direction={'right'} handler={rightHandler} /> */}
    </div>
    )

}

const sliderCss = css`
    position: relative;
    width: 100%;
    margin-bottom: -24%;
    // margin: 0 auto;
    overflow: hidden;
    z-index: 0;
    @media screen and (max-width: 500px) {
        margin-bottom: -10%;
    }
    `

export default Slider;