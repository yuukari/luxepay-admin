import { FC } from 'react';

import NavbarLogoutButton from '../../../features/navbar/navbarLogoutButton/ui';

const Navbar: FC = () => {
    return <div className="bg-base-300 w-full">
        <div className="container mx-auto">
            <div className="navbar bg-base-300 px-0">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl pl-0" href="/dashboard">LuxePay Admin</a>
                </div>

                {/* <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="bordered">
                            <a>Покупки</a>
                        </li>
                        <li>
                            <a>Настройки</a>
                        </li>
                    </ul>
                </div> */}
        
                <div className="navbar-end">
                    <NavbarLogoutButton/>
                </div>
            </div>
        </div>
    </div>
};

export default Navbar;