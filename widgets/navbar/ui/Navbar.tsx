import { FC } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Link from 'next/link';

import NavbarLogoutButton from '../../../features/navbar/navbarLogoutButton/ui';

const Navbar: FC = () => {
    const router = useRouter();

    return <div className="bg-base-300 w-full">
        <div className="container mx-auto">
            <div className="navbar bg-base-300 px-0">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl pl-0" href="/dashboard">LuxePay Admin</a>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className={cn([{"bordered": router.asPath.includes('/dashboard')}])}>
                            <Link href="/dashboard">Покупки</Link>
                        </li>

                        <li className={cn([{"bordered": router.asPath.includes('/settings')}])}>
                            <Link href="/settings">Настройки</Link>
                        </li>
                    </ul>
                </div>
        
                <div className="navbar-end">
                    <NavbarLogoutButton/>
                </div>
            </div>
        </div>
    </div>
};

export default Navbar;