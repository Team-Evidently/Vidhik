import { useEffect, useRef } from 'react'
import logo from "../../assets/logo.png"
import { Link,  } from 'react-router-dom'
import userImg from "../../assets/avatar-icon.png"

// import { BiMenu } from 'react-icons/bi'


const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            }
            else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    }

    useEffect(() => {
        handleStickyHeader();

        return () => window,removeEventListener('scroll', handleStickyHeader);
    });

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu');
    }
    
    return (
        <header className='flex items-center bg-[url("./assets/mask.png")] bg-no-repeat bg-center bg-cover h-[100px] leading-[100px]' ref={headerRef}>
            <div className="container">
                <div className='flex items-center justify-between w-screen px-10'>
                    <div>
                        <img src={logo} alt="" className=' w-[40%]' />
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='hidden'>
                            <Link to="/">
                                <figure className='w-[35px] h-[35px] rounded-full'>
                                    <img src={userImg} className='w-full rounded-full cursor-pointer' alt="" />
                                </figure>
                            </Link>
                        </div>
                        <Link to="/PLogin">
                            <button className='bg-btnColor  px-6 text-white font-[600] h-[44px] flex items-center rounded-[10px]'>Lawyers Click here</button>
                           
                        </Link>
                        <Link to="/ULogin">
                        <Link to="/ULogin">
                            <button className='bg-white  px-6 text-btnColor font-[600] h-[44px] flex items-center rounded-[10px] border border-solid border-btnColor'>Clients Click here</button>
                        </Link>
                        <span className='md:hidden' onClick={toggleMenu}>
                            {/* <BiMenu className="w-6 h-7 cursor-pointer"></BiMenu> */}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;