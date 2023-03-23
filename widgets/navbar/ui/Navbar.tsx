import { FC } from 'react';

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
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                            <g id="Interface / Log_Out">
                            <path id="Vector" d="M12 15L15 12M15 12L12 9M15 12H4M9 7.24859V7.2002C9 6.08009 9 5.51962 9.21799 5.0918C9.40973 4.71547 9.71547 4.40973 10.0918 4.21799C10.5196 4 11.0801 4 12.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H12.1969C11.079 20 10.5192 20 10.0918 19.7822C9.71547 19.5905 9.40973 19.2839 9.21799 18.9076C9 18.4798 9 17.9201 9 16.8V16.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
};

export default Navbar;