const Navbar = () => {

    const toggleNav = () => {
        const mobileLinks = document.querySelector('#mobile-links')
        mobileLinks.classList.toggle("hidden")
    }

    const toggleList = (e) => {
        const nestedList = e.target.nextElementSibling
        nestedList.classList.toggle("hidden")
    }
    return (
        <>
            {/* Nav */}
            <div className="border-b fixed top-0 w-full z-10 bg-white shadow-s hidden xl:flex">
                {/* Full Nav */}
                <nav className="items-center justify-between container mx-auto ">
                    <div><img src="/assets/img/logo.svg" alt="navbar logo" /></div>

                    <div className="flex">
                        <ul className="flex text-dark items-center">
                            <div className="subnav h-full">
                                <li className="font-belleza py-7 px-2 full-arrow-bottom relative pe-6 hover:bg-pale-silver h-full items-center cursor-pointer subnav">Residential</li>
                                <ul className="bg-pale-silver absolute top-[92px] py-6 subnav-content z-">
                                    <li className="ps-2 pe-6 border-e-2 border-e-sandy-brown hover:text-fire cursor-pointer ">Price Plans</li>
                                    <li className="px-6 border-e-2 border-e-sandy-brown hover:text-fire cursor-pointer">Referral</li>
                                    <li className="px-6 hover:text-fire cursor-pointer">Plan Calculator</li>
                                </ul>
                            </div>
                            <div className="subnav h-full">
                                <li className="font-belleza py-7 px-2 full-arrow-bottom relative pe-6 hover:bg-pale-silver h-full items-center cursor-pointer subnav">Commercial</li>
                                <ul className="bg-pale-silver absolute top-[92px] py-6 subnav-content">
                                    <li className="ps-2 hover:text-fire cursor-pointer ">Price Plans</li>
                                </ul>
                            </div>
                            <div className="subnav h-full">
                                <li className="font-belleza py-7 px-2 full-arrow-bottom relative pe-6 hover:bg-pale-silver h-full items-center cursor-pointer subnav">Promotions</li>
                                <ul className="bg-pale-silver absolute top-[92px] py-6 subnav-content">
                                    <li className="ps-2 pe-6 border-e-2 border-e-sandy-brown hover:text-fire cursor-pointer ">Referral</li>
                                    <li className="px-6 hover:text-fire cursor-pointer">Rewards</li>
                                </ul>
                            </div>
                            <div className="subnav h-full">
                                <li className="font-belleza py-7 px-2 full-arrow-bottom relative pe-6 hover:bg-pale-silver h-full items-center cursor-pointer subnav">Why Keppel Electric</li>
                                <ul className="bg-pale-silver absolute top-[92px] py-6 subnav-content">
                                    <li className="ps-2 pe-6 border-e-2 border-e-sandy-brown hover:text-fire cursor-pointer ">Who We Are</li>
                                    <li className="px-6 hover:text-fire cursor-pointer">About OEM</li>
                                </ul>
                            </div>
                            <li className="font-belleza py-7 px-2 hover:bg-pale-silver h-full items-center cursor-pointer">Sustainable Energy</li>
                            <li className="font-belleza py-7 px-2 hover:bg-pale-silver h-full items-center cursor-pointer">Articles</li>
                            <div className="subnav h-full">
                                <li className="font-belleza py-7 px-2 full-arrow-bottom relative pe-6 hover:bg-pale-silver h-full items-center cursor-pointer subnav">Support</li>
                                <ul className="bg-pale-silver absolute top-[92px] py-6 subnav-content">
                                    <li className="ps-2 pe-6 border-e-2 border-e-sandy-brown hover:text-fire cursor-pointer ">FAQ</li>
                                    <li className="px-6 hover:text-fire cursor-pointer">Contact Us</li>
                                </ul>
                            </div>
                            <span className="text-dark py-7 px-2 cursor-pointer hover:text-sandy-brown">
                                <a href="/" className="flex leading-9 hover:text-sandy-brown">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30.947 29.943" fill="currentColor" className="me-3">
                                        <g id="Group_6774" data-name="Group 6774" transform="translate(-2717.03 -879.738)">
                                            <path id="Path_5829" data-name="Path 5829" d="M2744.4,1038.667c.028.32.047.641.05.965a.934.934,0,0,1-.934.941h-21.778a.934.934,0,0,1-.934-.941c0-.334.022-.665.052-.994-2.382.269-3.825.62-3.825,1,0,.843.557,1.527,15.473,1.527s15.474-.684,15.474-1.527C2747.977,1039.271,2746.633,1038.931,2744.4,1038.667Z" transform="translate(0 -131.488)" />
                                            <path id="Path_5830" data-name="Path 5830" d="M2771.25,894.827h0a7.544,7.544,0,1,0-7.544-7.544A7.553,7.553,0,0,0,2771.25,894.827Zm5.677-7.544a5.677,5.677,0,1,1-5.677-5.677A5.683,5.683,0,0,1,2776.927,887.282Z" transform="translate(-38.624 0)" />
                                            <path id="Path_5831" data-name="Path 5831" d="M2739.176,988.8a.934.934,0,0,0,.663.276h21.778a.934.934,0,0,0,.934-.941c0-.324-.021-.646-.05-.965a11.818,11.818,0,0,0-11.68-10.765h-.1a11.818,11.818,0,0,0-11.768,10.736c-.03.329-.049.66-.052.994A.933.933,0,0,0,2739.176,988.8Zm11.549-10.528h.08a9.958,9.958,0,0,1,9.826,8.936h-19.808a9.958,9.958,0,0,1,9.9-8.937Z" transform="translate(-18.101 -79.988)" />
                                        </g>
                                    </svg>Login</a>
                            </span>
                            <div className="my-auto"><button className="rounded-full bg-fire border border-fire hover:bg-white hover:text-fire text-white px-8 leading-9">Sign up</button></div>

                            {/* Empty Subnav: For bg purposes */}
                            <div id="subnav-bg" className="subnav-empty-bg z-[-1] absolute top-[92px] left-0 bg-pale-silver py-9  w-full">
                            </div>

                        </ul>
                    </div>
                </nav>
            </div>

            {/* Mobile Nav */}
            <div className="border-b fixed top-0 w-full z-10 bg-white shadow-s">
                <nav className="items-center justify-between flex xl:hidden px-4">
                    <div><img src="/assets/img/logo.svg" alt="mobile navbar logo" /></div>
                    <div className="py-7 px-2 items-end flex">
                        <button className="w-8 h-10 text-dark my-auto" type="button" onClick={toggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Links */}
            <div id="mobile-links" className=" pt-6 hidden fixed z-[1] w-full h-[100%] overflow-y-auto xl:hidden mobile-links-scrollbar">
                <div className="flex flex-col justify-between w-full h-full bg-pale-silver pt-[100px]">
                    <div className="bg-pale-silver">
                        {/* Search Box */}
                        <div className="px-6 flex items-center">
                            <img src="/assets/img/search-btn.png" className="h-full me-4" alt="search btn" />
                            <input type="text" placeholder="What are you looking for?" className="w-full border-b-2 border-b-sage py-3 outline-none bg-transparent placeholder-gray-700 text-sm text-dark" />
                        </div>

                        {/* Links */}
                        <ul className="px-6 mt-8">
                            <li className="border-b-silver py-5 border-b-[3px] arrow-bottom relative cursor-pointer hover:text-sandy-brown font-belleza text-xl" onClick={toggleList}>Residential</li>
                            <ul className="ml-8 hidden">
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Price Plans</li>
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Referral</li>
                            </ul>
                            <li className="border-b-silver py-5 border-b-[3px] arrow-bottom relative cursor-pointer hover:text-sandy-brown font-belleza text-xl" onClick={toggleList}>Commercial</li>
                            <ul className="ml-8 hidden">
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Price Plans</li>
                            </ul>
                            <li className="border-b-silver py-5 border-b-[3px] arrow-bottom relative cursor-pointer hover:text-sandy-brown font-belleza text-xl" onClick={toggleList}>Promotions</li>
                            <ul className="ml-8 hidden">
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Promotions</li>
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Rewards</li>
                            </ul>
                            <li className="border-b-silver py-5 border-b-[3px] arrow-bottom relative cursor-pointer hover:text-sandy-brown font-belleza text-xl" onClick={toggleList}>Why Keppel Electric?</li>
                            <ul className="ml-8 hidden">
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Whyo We Are</li>
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">About OEM</li>
                            </ul>
                            <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Sustainable Energy</li>
                            <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Articles</li>
                            <li className="border-b-silver py-5 border-b-[3px] arrow-bottom relative cursor-pointer hover:text-sandy-brown font-belleza text-xl" onClick={toggleList}>Support</li>
                            <ul className="ml-8 hidden">
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">FAQ</li>
                                <li className="border-b-silver py-5 border-b-[3px] cursor-pointer hover:text-sandy-brown font-belleza text-xl">Contact Us</li>
                            </ul>
                        </ul>


                    </div>
                    {/* Login and Signup Button */}
                    <div className="flex bg-pale-silver pt-8">
                        <button className="rounded-tl-2xl text-white leading-9 w-full pt-[20px] pb-[15px] px-[30px] font-bold bg-sandy-brown">
                            <span className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30.947 29.943" fill="currentColor" className="me-3">
                                    <g id="Group_6774" data-name="Group 6774" transform="translate(-2717.03 -879.738)">
                                        <path id="Path_5829" data-name="Path 5829" d="M2744.4,1038.667c.028.32.047.641.05.965a.934.934,0,0,1-.934.941h-21.778a.934.934,0,0,1-.934-.941c0-.334.022-.665.052-.994-2.382.269-3.825.62-3.825,1,0,.843.557,1.527,15.473,1.527s15.474-.684,15.474-1.527C2747.977,1039.271,2746.633,1038.931,2744.4,1038.667Z" transform="translate(0 -131.488)" />
                                        <path id="Path_5830" data-name="Path 5830" d="M2771.25,894.827h0a7.544,7.544,0,1,0-7.544-7.544A7.553,7.553,0,0,0,2771.25,894.827Zm5.677-7.544a5.677,5.677,0,1,1-5.677-5.677A5.683,5.683,0,0,1,2776.927,887.282Z" transform="translate(-38.624 0)" />
                                        <path id="Path_5831" data-name="Path 5831" d="M2739.176,988.8a.934.934,0,0,0,.663.276h21.778a.934.934,0,0,0,.934-.941c0-.324-.021-.646-.05-.965a11.818,11.818,0,0,0-11.68-10.765h-.1a11.818,11.818,0,0,0-11.768,10.736c-.03.329-.049.66-.052.994A.933.933,0,0,0,2739.176,988.8Zm11.549-10.528h.08a9.958,9.958,0,0,1,9.826,8.936h-19.808a9.958,9.958,0,0,1,9.9-8.937Z" transform="translate(-18.101 -79.988)" />
                                    </g>
                                </svg>
                                Login
                            </span>
                        </button>
                        <button className="rounded-tr-2xl bg-fire text-white leading-9 w-full pt-[20px] pb-[15px] px-[30px] font-bold">Sign up</button>
                    </div>


                </div>
            </div>

        </>
    );
}

export default Navbar;