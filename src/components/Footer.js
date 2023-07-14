const Footer = () => {
    return (
        <>
            <footer className="bg-linen z-[-1]">
                <div className="xl:container px-4 lg:px-8 mx-auto pt-6">
                    <div className="grid grid-cols-12 gap-3 pt-4">
                        {/* Info */}
                        <div className="xl:col-span-3 lg:col-span-3 col-span-12">
                            <img src="/assets/img/logo.svg" alt="footer logo" className="pb-4" />
                            <p className="text-sm leading-[22px]">
                                <span className="font-bold text-dark">General Enquiry: </span>
                                <span className="text-dark">6803 3000</span>
                            </p>
                            <p className="text-sm leading-[22px]">
                                <span className="font-bold text-dark">Sales Enquiry: </span>
                                <span className="text-dark">6803 3888</span>
                            </p>
                            <p className="text-sm leading-[22px]">
                                <span className="font-bold text-dark">Hotline Operating Hours: </span>
                            </p>
                            <p className="text-dark text-sm leading-[22px]">
                                Mon - Fri: 9am  5:30pm
                            </p>
                            <p className="text-dark text-sm leading-[22px]">
                                Closed on Sat/Sun/PH
                            </p>
                        </div>

                        {/* Grid Links */}
                        <div className="xl:col-span-7 lg:col-span-9 col-span-12 grid grid-cols-12">
                            <div className="col-span-6 sm:col-span-3">
                                <div className="pb-4">
                                    <h4 className="text-sandy-brown tracking-[0.5px] text-[14px] sm:text-[15px] pb-2">RESIDENTIAL</h4>
                                    <ul>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Price Plans</a></li>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Referral</a></li>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Plan Calculator</a></li>
                                    </ul>
                                </div>
                                <div className="pb-4">
                                    <h4 className="text-sandy-brown tracking-[0.5px] text-[14px] sm:text-[15px] pb-2">COMMERCIAL</h4>
                                    <ul>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Price Plans</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <div className="pb-4">
                                    <h4 className="text-sandy-brown tracking-[0.5px] text-[14px] sm:text-[15px] pb-2">PROMOTIONS</h4>
                                    <ul>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Promotions</a></li>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Rewards</a></li>
                                    </ul>
                                </div>
                                <div className="pb-4">
                                    <h4 className="text-sandy-brown tracking-[0.5px] text-[14px] sm:text-[15px] pb-2">WHY KEPPEL ELECTRIC</h4>
                                    <ul>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Who We Are</a></li>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">About OEM</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <div className="pb-4">
                                    <h4 className="text-sandy-brown tracking-[0.5px] text-[14px] sm:text-[15px] pb-2">SUSTAINABLE ENERGY</h4>
                                    <ul>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Sustainable Energy</a></li>
                                    </ul>
                                </div>
                                <div className="pb-4">
                                    <h4 className="text-sandy-brown tracking-[0.5px] text-[14px] sm:text-[15px] pb-2">ARTICLES</h4>
                                    <ul>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Articles</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <div className="pb-4">
                                    <h4 className="text-sandy-brown tracking-[0.5px] text-[14px] sm:text-[15px] pb-2">SUPPORT</h4>
                                    <ul>
                                        <li><a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">FAQ</a></li>
                                        <li> <a href="/" className="text-dark text-[14px] sm:text-sm hover:underline">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Download Apps */}
                        <div className="xl:col-span-2 col-span-12">
                            <div><h1 className="text-dark font-bold leading-5 mb-4">Download our App!</h1></div>

                            <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-9 xl:grid-cols-2 gap-2">
                                <div className="md:col-span-2 lg:col-span-1 xl:col-span-1 hidden md:block">
                                    <a href="/">
                                        <img src="/assets/img/ke-img-new.svg" alt="ke img" className="w-fit" />
                                    </a>
                                </div>
                                <div className="col-span-12 md:col-span-4 lg:col-span-5 xl:col-span-1 flex md:flex-col md:justify-evenly justify-between gap-3">
                                    <a href="/">
                                        <img src="/assets/img/android-app.svg" alt="android google play" className="w-full md:w-36" />
                                    </a>
                                    <a href="/">
                                        <img src="/assets/img/ios-app.svg" alt="ios app store" className="w-full md:w-36" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t-[1px] border-[#b4b1ad] mt-8 pt-5 pb-4">
                        <div className="flex flex-col justify-between sm:flex-row-reverse">
                            <div className="flex items-center">
                                <p className="text-sm text-dark pe-2">Follow Us:</p>

                                <a href="/" className="px-2">
                                    <img src="/assets/img/footer-ig.svg" alt="" width={28} height={24} />
                                </a>
                                <a href="/" className="p">
                                    <img src="/assets/img/footer-fb.svg" alt="" width={28} height={24} /></a>
                            </div>

                            <div className="flex lg:flex-row flex-col">
                                <div className="py-2">
                                    <p className="text-xs leading-[18px] font-[400] text-dark pe-4 footer-divider lg:relative">
                                        Copyrights ©2021 Keppel Electric Pte Ltd. All rights reserved
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-xs leading-[18px] font-[400] text-dark pe-4 ps-0 lg:ps-4 footer-divider relative hover:underline cursor-pointer">
                                        Terms of Use
                                    </p>
                                    <p className="text-xs leading-[18px] font-[400] text-dark ps-4 hover:underline cursor-pointer">
                                        Privacy Statement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;