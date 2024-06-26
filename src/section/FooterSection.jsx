import { Twitter } from '@mui/icons-material';

export default function FooterSection() {
    return (
        <div className="flex justify-between my-16 px-32 xl:px-24 max-sm:hidden">
            <div className='grid grid-cols-1'>
                <div>
                    <p className="text-[#64748B]">We bring convenience to you.</p>
                    <ul className="inline-flex mt-5 space-x-8 text-[#64748B] font-semibold">
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#login">Login</a></li>
                        <li><a href="#register">Register</a></li>
                        <li><a href="#lock">Lock</a></li>
                    </ul>
                </div>
                <p className='self-end place-self-left text-[#64748B]'>
                    © Copyright Lorem Ipsum. All rights reserved. 
                </p>
            </div>
            <div>
                <p className="text-[#334155]">Get the App</p>
                <button type='button' className='mt-16 bg-default border border-primary text-primary py-6 px-8 text-lg rounded-lg flex'>
                    <svg className="pt-1 mt-1 mr-2" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.25 1.78849V20.2104C0.250123 20.2503 0.262044 20.2894 0.284267 20.3226C0.30649 20.3558 0.338026 20.3817 0.374921 20.3971C0.411816 20.4125 0.452427 20.4166 0.491661 20.409C0.530896 20.4014 0.567008 20.3823 0.595469 20.3543L10.1875 10.9999L0.595469 1.64458C0.567008 1.61652 0.530896 1.59749 0.491661 1.58987C0.452427 1.58225 0.411816 1.58638 0.374921 1.60175C0.338026 1.61712 0.30649 1.64304 0.284267 1.67626C0.262044 1.70948 0.250123 1.74852 0.25 1.78849ZM14.2094 7.15615L2.18219 0.529896L2.17469 0.525677C1.9675 0.413177 1.77062 0.693489 1.94031 0.856614L11.3683 9.87161L14.2094 7.15615ZM1.94125 21.1432C1.77062 21.3063 1.9675 21.5866 2.17562 21.4741L2.18312 21.4699L14.2094 14.8436L11.3683 12.1272L1.94125 21.1432ZM19.0647 9.82802L15.7061 7.97833L12.5481 10.9999L15.7061 14.0201L19.0647 12.1718C19.9783 11.6669 19.9783 10.3329 19.0647 9.82802Z" fill="#182C75"/>
                    </svg>
                    Google Play
                </button>
                <button type='button' className='mt-4 bg-default border border-primary text-primary py-6 px-8 text-lg rounded-lg flex'>
                    <svg className="pt-1 mt-1 mr-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.375 14.9992C23.375 15.2976 23.2565 15.5838 23.0455 15.7947C22.8345 16.0057 22.5484 16.1242 22.25 16.1242H19.3128L20.9684 18.9264C21.0457 19.0537 21.0969 19.195 21.1191 19.3422C21.1414 19.4894 21.1342 19.6395 21.098 19.7839C21.0618 19.9283 20.9973 20.064 20.9082 20.1833C20.8191 20.3026 20.7073 20.403 20.5791 20.4787C20.451 20.5545 20.3091 20.604 20.1617 20.6245C20.0142 20.645 19.8642 20.636 19.7202 20.5981C19.5763 20.5602 19.4413 20.4941 19.3231 20.4036C19.2049 20.3132 19.1058 20.2002 19.0316 20.0711L13.7094 11.0617C13.5661 10.8053 13.5287 10.503 13.6053 10.2195C13.6819 9.93588 13.8664 9.69351 14.1194 9.54415C14.3723 9.39479 14.6736 9.35028 14.9589 9.42014C15.2442 9.49 15.4909 9.66868 15.6462 9.918L17.9825 13.8742H22.25C22.5484 13.8742 22.8345 13.9928 23.0455 14.2038C23.2565 14.4147 23.375 14.7009 23.375 14.9992ZM12.9828 13.8742H9.63031L15.7184 3.57206C15.7957 3.44482 15.8469 3.30351 15.8691 3.15632C15.8914 3.00914 15.8842 2.859 15.848 2.71462C15.8118 2.57024 15.7473 2.43447 15.6582 2.3152C15.5691 2.19593 15.4573 2.09551 15.3291 2.01978C15.201 1.94404 15.0591 1.89449 14.9117 1.874C14.7642 1.8535 14.6142 1.86247 14.4702 1.90038C14.3263 1.93829 14.1913 2.00439 14.0731 2.09486C13.9549 2.18532 13.8558 2.29834 13.7816 2.42737L12.5 4.593L11.2184 2.42737C11.1442 2.29834 11.0451 2.18532 10.9269 2.09486C10.8087 2.00439 10.6737 1.93829 10.5298 1.90038C10.3858 1.86247 10.2358 1.8535 10.0883 1.874C9.94091 1.89449 9.79901 1.94404 9.67086 2.01978C9.54271 2.09551 9.43087 2.19593 9.34181 2.3152C9.25275 2.43447 9.18824 2.57024 9.15203 2.71462C9.11582 2.859 9.10863 3.00914 9.13086 3.15632C9.1531 3.30351 9.20432 3.44482 9.28156 3.57206L11.1931 6.80737L7.0175 13.8742H2.75C2.45163 13.8742 2.16548 13.9928 1.9545 14.2038C1.74353 14.4147 1.625 14.7009 1.625 14.9992C1.625 15.2976 1.74353 15.5838 1.9545 15.7947C2.16548 16.0057 2.45163 16.1242 2.75 16.1242H12.9828C13.2812 16.1242 13.5673 16.0057 13.7783 15.7947C13.9893 15.5838 14.1078 15.2976 14.1078 14.9992C14.1078 14.7009 13.9893 14.4147 13.7783 14.2038C13.5673 13.9928 13.2812 13.8742 12.9828 13.8742ZM6.01531 17.7808C5.75856 17.6291 5.4521 17.5856 5.16327 17.6598C4.87444 17.734 4.62689 17.9198 4.475 18.1764L4.03156 18.9264C3.95432 19.0537 3.9031 19.195 3.88086 19.3422C3.85863 19.4894 3.86582 19.6395 3.90203 19.7839C3.93824 19.9283 4.00275 20.064 4.09181 20.1833C4.18087 20.3026 4.29271 20.403 4.42086 20.4787C4.54901 20.5545 4.69091 20.604 4.83835 20.6245C4.98578 20.645 5.13582 20.636 5.27977 20.5981C5.42372 20.5602 5.55871 20.4941 5.67692 20.4036C5.79513 20.3132 5.89422 20.2002 5.96844 20.0711L6.41188 19.3211C6.56346 19.0643 6.60684 18.7577 6.53248 18.4689C6.45811 18.18 6.27209 17.9325 6.01531 17.7808Z" fill="#182C75"/>
                    </svg>
                    Apple Store
                </button>
                <ul className='inline-flex space-x-8 pt-8'>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44" fill="none">
                            <path d="M32.2995 18.6676C32.3223 18.9874 32.3223 19.3073 32.3223 19.627C32.3223 29.3808 24.8985 40.6194 11.3299 40.6194C7.14973 40.6194 3.26651 39.4087 0 37.3073C0.59393 37.3757 1.16494 37.3986 1.78172 37.3986C5.2309 37.3986 8.40607 36.2337 10.9416 34.2463C7.69795 34.1778 4.97967 32.0534 4.04311 29.1296C4.5 29.198 4.95682 29.2437 5.43656 29.2437C6.09898 29.2437 6.76146 29.1523 7.37817 28.9925C3.99748 28.3072 1.46187 25.3377 1.46187 21.7514V21.6601C2.44406 22.2083 3.58629 22.5509 4.79686 22.5965C2.80955 21.2716 1.50757 19.0103 1.50757 16.4519C1.50757 15.0813 1.87298 13.825 2.51262 12.7285C6.14461 17.2057 11.604 20.1295 17.7258 20.4493C17.6116 19.9011 17.543 19.3301 17.543 18.759C17.543 14.693 20.8324 11.3809 24.9212 11.3809C27.0456 11.3809 28.9643 12.2717 30.3121 13.7108C31.9795 13.391 33.5785 12.7742 34.9948 11.9291C34.4465 13.6423 33.2816 15.0814 31.7512 15.995C33.2359 15.8352 34.675 15.424 35.9999 14.853C34.995 16.3148 33.7385 17.6168 32.2995 18.6676Z" fill="#64748B"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8' viewBox="0 0 36 44" fill="none">
                            <path d="M26.3771 28.25L27.3769 21.7348H21.1254V17.507C21.1254 15.7245 21.9987 13.9871 24.7986 13.9871H27.6406V8.44016C27.6406 8.44016 25.0615 8 22.5957 8C17.4474 8 14.0822 11.1205 14.0822 16.7694V21.7348H8.3595V28.25H14.0822V44H21.1254V28.25H26.3771Z" fill="#64748B"/>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 pt-2' viewBox="0 0 37 37" fill="none">
                            <g clip-path="url(#clip0_41_29)">
                                <path d="M18.0041 9.76103C12.8933 9.76103 8.77102 13.8834 8.77102 18.9941C8.77102 24.1048 12.8933 28.2271 18.0041 28.2271C23.1148 28.2271 27.2371 24.1048 27.2371 18.9941C27.2371 13.8834 23.1148 9.76103 18.0041 9.76103ZM18.0041 24.9967C14.7014 24.9967 12.0014 22.3048 12.0014 18.9941C12.0014 15.6834 14.6933 12.9914 18.0041 12.9914C21.3148 12.9914 24.0067 15.6834 24.0067 18.9941C24.0067 22.3048 21.3067 24.9967 18.0041 24.9967ZM29.7683 9.38335C29.7683 10.5807 28.8041 11.5369 27.6148 11.5369C26.4174 11.5369 25.4612 10.5726 25.4612 9.38335C25.4612 8.19406 26.4255 7.22978 27.6148 7.22978C28.8041 7.22978 29.7683 8.19406 29.7683 9.38335ZM35.8835 11.5691C35.7469 8.68424 35.088 6.12889 32.9746 4.02353C30.8692 1.91817 28.3139 1.25924 25.4291 1.1146C22.4558 0.94585 13.5442 0.94585 10.571 1.1146C7.69423 1.25121 5.13887 1.91014 3.02548 4.01549C0.912089 6.12085 0.261196 8.67621 0.116553 11.561C-0.0521973 14.5342 -0.0521973 23.4459 0.116553 26.4191C0.25316 29.3039 0.912089 31.8592 3.02548 33.9646C5.13887 36.07 7.6862 36.7289 10.571 36.8735C13.5442 37.0423 22.4558 37.0423 25.4291 36.8735C28.3139 36.7369 30.8692 36.078 32.9746 33.9646C35.0799 31.8592 35.7389 29.3039 35.8835 26.4191C36.0523 23.4459 36.0523 14.5423 35.8835 11.5691ZM32.0424 29.6092C31.4157 31.1842 30.2023 32.3976 28.6192 33.0325C26.2487 33.9726 20.6237 33.7557 18.0041 33.7557C15.3844 33.7557 9.75137 33.9646 7.38887 33.0325C5.81387 32.4057 4.60048 31.1923 3.96566 29.6092C3.02548 27.2387 3.24245 21.6137 3.24245 18.9941C3.24245 16.3744 3.03352 10.7414 3.96566 8.37889C4.59245 6.80389 5.80584 5.59049 7.38887 4.95567C9.75941 4.01549 15.3844 4.23246 18.0041 4.23246C20.6237 4.23246 26.2567 4.02353 28.6192 4.95567C30.1942 5.58246 31.4076 6.79585 32.0424 8.37889C32.9826 10.7494 32.7657 16.3744 32.7657 18.9941C32.7657 21.6137 32.9826 27.2467 32.0424 29.6092Z" fill="#64748B"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_41_29">
                                    <rect width="36.0201" height="36.0121" fill="white" transform="translate(-0.0100098 0.988037)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    )
}