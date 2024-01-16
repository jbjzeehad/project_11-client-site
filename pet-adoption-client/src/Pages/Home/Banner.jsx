import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='relative'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/V9X4225/banner1.png" alt="" />
                    <div className='absolute top-1/4 p-10 left-20'  >
                        <h3 className='text-8xl text-slate-100 font-extrabold'>Find the Right<br />Pet for You</h3>
                        <p className='mt-10 text-3xl mr-20 text-slate-100'>Take our interactive new quiz to find<br /> the perfect pet to adopt.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/2ySCgMQ/banner3.png" alt="" />
                    <div className='absolute top-1/4 p-10 left-20'  >
                        <h3 className='text-8xl text-slate-100 font-extrabold'>Find the Right<br />Pet for You</h3>
                        <p className='mt-10 text-3xl mr-20 text-slate-100'>Take our interactive new quiz to find<br /> the perfect pet to adopt.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/k5sRHwY/banner2.png" alt="" />
                    <div className='absolute top-1/4 p-10 left-20'  >
                        <h3 className='text-8xl text-slate-100 font-extrabold'>Find the Right<br />Pet for You</h3>
                        <p className='mt-10 text-3xl mr-20 text-slate-100'>Take our interactive new quiz to find<br /> the perfect pet to adopt.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/XzF8DX4/banner4.png" alt="" />
                    <div className='absolute top-1/4 p-10 left-20'  >
                        <h3 className='text-8xl text-slate-100 font-extrabold'>Find the Right<br />Pet for You</h3>
                        <p className='mt-10 text-3xl mr-20 text-slate-100'>Take our interactive new quiz to find<br /> the perfect pet to adopt.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='relative z-10 bottom-14 mx-28 '>
                <div className='grid grid-cols-5 items-center justify-center bg-slate-100 rounded-3xl py-8 '>
                    <button className=' text-2xl text-slate-900 font-semibold hover:text-teal-800'>Find a Cat</button>
                    <button className='border-l-2 text-2xl text-slate-900 font-semibold border-teal-900 hover:text-teal-800'>Find a Rabbit</button>
                    <div className=' flex justify-center '>
                        <img className="w-12 animate-pulse " src="https://i.ibb.co/MRmhWV6/petlogo.png" alt="" />
                    </div>
                    <button className='border-r-2 text-2xl text-slate-900 font-semibold border-teal-900 hover:text-teal-800'>Find a Dog</button>
                    <button className=' text-2xl text-slate-900 font-semibold hover:text-teal-800'>Find Others</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;




