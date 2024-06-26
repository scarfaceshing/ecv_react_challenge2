import Image1 from '../images/features/iPhone 12 Pro (Wooden Hands).png'
import Image2 from '../images/features/iPhone 13 Pro.png'
import Image3 from '../images/features/iPhone 13 Pro 2.png'
import Image4 from '../images/features/iPhone 12 Pro.png'

export default function FeatureSection() {
    return (
        <div className='px-32 xl:px-24 max-sm:px-4'>
            <div className='flex space-x-8 py-24'>
                <div className='w-2/5 bg-[#CCD5F5] rounded-2xl item-center max-sm:hidden'>
                    <img src={Image1} />
                </div>
                <div className='flex items-center w-3/5 rounded-2xl bg-[#F1F5F9] item-center max-sm:w-full max-sm:py-8'>
                    <div className='px-24'>
                        <h1 class="text-[64px] text-primary font-bold text-left">Pick Up and Delivery</h1>
                        <p class="text-2xl text-primary text-left">Taking good control of the delivery process in order to make sure that the parcel is delivered to you on time.</p>
                    </div>
                </div>
            </div>
            <div className='flex space-x-8 my-8 max-sm:flex-col max-sm:space-x-2'>
                <div className="w-3/5 bg-[#F1F5F9] rounded-2xl flex flex-row place-items-center px-24 py-24 max-sm:px-8 max-sm:py-8 max-sm:w-full">
                    <img src={Image2} className='self-center' />
                    <div>
                        <h1 className='text-[56px] leading-none font-bold text-primary mb-4'>
                            Cashless Payments
                        </h1>
                        <p className='text-2xl text-primary'>
                            Hassle-free experience
                            by using a cashless payment through Gcash
                        </p>
                    </div>
                </div>
                <div className="w-2/5 bg-[#DAF0D180] rounded-2xl grid max-sm:flex max-sm:flex-col max-sm:w-full max-sm:mt-16">
                    <div className='pt-12'>
                        <h1 className="text-6xl font-bold text-primary text-center">Transportation</h1>
                        <p className='text-2xl text-primary text-center '>Provide a convenient and secure local transportation</p>
                    </div>
                    <img className='self-end place-self-center m-[-160px] max-2xl:m-[-130px] max-sm:m-[0px] max-sm:w-64 max-sm:self-center max-sm:mt-8' src={Image3} />
                    <div className='gradient-effect'></div>
                </div>
            </div>
            <div className='bg-[#CCD5F5] mt-32 rounded-2xl flex items-center space-x-5'>
                <img src={Image4} />
                <div>
                    <h1 className='text-[56px] font-bold text-primary'>Customer Safety</h1>
                    <p className='text-2xl text-primary'>GPS tracking ensures that drivers are always on the right track</p>
                </div>
            </div>
        </div>
    )
}