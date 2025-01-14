import Slider from 'react-infinite-logo-slider';

const Carousel = () => {
    return (
        <div className="overflow-hidden mt-20"> {/* Added margin-top to avoid navbar overlap */}
            <Slider
                width="250px"
                duration={10}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src="/logo/1.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logo/2.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logo/3.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logo/4.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logo/5.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logo/6.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logo/7.png" alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src="/logo/8.png" alt="any" className='w-36' />
                </Slider.Slide>
            </Slider>
        </div>
    );
};

export default Carousel;
