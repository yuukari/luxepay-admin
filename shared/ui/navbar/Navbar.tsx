import { FC, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Link from 'next/link';

import NavbarLogoutButton from '../../../features/navbar/navbarLogoutButton/ui';

type NavbarProps = {
    children: ReactNode
}

const Navbar: FC<NavbarProps> = (props) => {
    const { children } = props;

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/dashboard');
    }

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    }

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    }

    return <div className="drawer">
        <input id="sidebar" type="checkbox" className="drawer-toggle" checked={sidebarOpen}/> 

        <div className="drawer-content flex flex-col">
            <div className="navbar bg-base-300 px-0">
                <div className="navbar-start">
                    <div className="flex-none lg:hidden">
                        <label 
                            className="btn btn-square btn-ghost"
                            onClick={handleSidebarOpen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 

                    <a className="btn btn-ghost normal-case text-lg sm:text-xl" onClick={handleLogoClick}>LuxePay Admin</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li 
                            className={cn([{"bordered": router.asPath.includes('/dashboard')}])}
                            onClick={handleSidebarClose}
                        >
                            <Link href="/dashboard">Покупки</Link>
                        </li>

                        <li 
                            className={cn([{"bordered": router.asPath.includes('/settings')}])}
                            onClick={handleSidebarClose}
                        >
                            <Link href="/settings">Настройки</Link>
                        </li>
                    </ul>
                </div>
        
                <div className="navbar-end">
                    <NavbarLogoutButton/>
                </div>
            </div>

            {children}
        </div> 

        <div className="drawer-side">
            <label className="drawer-overlay" onClick={handleSidebarClose}></label> 

            <ul className="menu p-4 w-80 bg-base-100">
                <li onClick={handleSidebarClose}>
                    <Link href="/dashboard">Покупки</Link>
                </li>

                <li onClick={handleSidebarClose}>
                    <Link href="/settings">Настройки</Link>
                </li>
            </ul>
        </div>
    </div>
};

export default Navbar;