import React, { useState, useEffect } from 'react';
import { RxDashboard, RxDropdownMenu } from "react-icons/rx";
import { FaDochub, FaPage4, FaTv, FaUikit } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    // Effect to close sub-sidebar when main drawer is closed
    useEffect(() => {
        const mainDrawer = document.getElementById('main-drawer');
        const handleDrawerChange = () => {
            if (!mainDrawer.checked) {
                setActiveMenu(null);
            }
        };

        mainDrawer.addEventListener('change', handleDrawerChange);

        // Cleanup event listener on component unmount
        return () => {
            mainDrawer.removeEventListener('change', handleDrawerChange);
        };
    }, []);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <>
            <div className="drawer drawer-start">
                <input id="main-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="main-drawer" className="btn btn-circle drawer-button">
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                            aria-label="Open sidebar"
                        >
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                    </label>
                </div>
                <div className="drawer-side min-h-full mt-16 z-10">
                    <label htmlFor="main-drawer" className="drawer-overlay" aria-label="Close sidebar"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-40 p-4 overflow-y-auto">
                        {/* Sidebar content here */}
                        <li>
                            <button className='flex flex-col justify-center items-center' onClick={() => toggleMenu('dashboard')}>
                                <RxDashboard className='text-3xl' aria-label="Dashboard Icon" />Dashboard
                            </button>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <button className='flex flex-col justify-center items-center' onClick={() => toggleMenu('pages')}>
                                <FaPage4 className='text-3xl' aria-label="Pages Icon" />Pages
                            </button>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <button className='flex flex-col justify-center items-center' onClick={() => toggleMenu('applications')}>
                                <FaTv className='text-3xl' aria-label="Applications Icon" />Applications
                            </button>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <button className='flex flex-col justify-center items-center' onClick={() => toggleMenu('ui')}>
                                <FaUikit className='text-3xl' aria-label="UI Icon" />UI
                            </button>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <button className='flex flex-col justify-center items-center' onClick={() => toggleMenu('menu')}>
                                <RxDropdownMenu className='text-3xl' aria-label="Menu Icon" />Menu
                            </button>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <button className='flex flex-col justify-center items-center' onClick={() => toggleMenu('blankPage')}>
                                <FaBucket className='text-3xl' aria-label="Blank Page Icon" />Blank Page
                            </button>
                        </li>
                        <div className="divider"></div>
                        <li>
                            <button className='flex flex-col justify-center items-center' onClick={() => toggleMenu('docs')}>
                                <FaDochub className='text-3xl' aria-label="Docs Icon" />Docs
                            </button>
                        </li>
                        <div className="divider"></div>
                    </ul>
                </div>
            </div>

            {/* Sub-drawers */}
            {activeMenu && (
                <div className="fixed inset-y-0 left-40 w-40 bg-base-300 z-20 mt-16 overflow-y-auto">
                    <div className="min-h-full p-4">
                        <label className="btn btn-sm btn-circle absolute top-2 right-2" onClick={() => toggleMenu(null)}>✕</label>
                        <ul className="menu text-base-content">
                            {activeMenu === 'dashboard' && (
                                <>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Dashboard Submenu Item 1</a></li>
                                            <li><a href="#">Dashboard Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Dashboard Submenu Item 1</a></li>
                                            <li><a href="#">Dashboard Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                </>
                            )}
                            {activeMenu === 'pages' && (
                                <>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Pages Submenu Item 1</a></li>
                                            <li><a href="#">Pages Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Pages Submenu Item 1</a></li>
                                            <li><a href="#">Pages Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Pages Submenu Item 1</a></li>
                                            <li><a href="#">Pages Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Pages Submenu Item 1</a></li>
                                            <li><a href="#">Pages Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Pages Submenu Item 1</a></li>
                                            <li><a href="#">Pages Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                </>
                            )}
                            {activeMenu === 'applications' && (
                                <>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Applications Submenu Item 1</a></li>
                                            <li><a href="#">Applications Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Applications Submenu Item 1</a></li>
                                            <li><a href="#">Applications Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Applications Submenu Item 1</a></li>
                                            <li><a href="#">Applications Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                </>
                            )}
                            {activeMenu === 'ui' && (
                                <>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">UI Submenu Item 1</a></li>
                                            <li><a href="#">UI Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">UI Submenu Item 1</a></li>
                                            <li><a href="#">UI Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                </>
                            )}
                            {activeMenu === 'menu' && (
                                <>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Menu Submenu Item 1</a></li>
                                            <li><a href="#">Menu Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                    <details className="collapse">
                                        <summary className="collapse-title whitespace-nowrap hover:underline">Show All</summary>
                                        <div className="collapse-content">
                                            <li><a href="#">Menu Submenu Item 1</a></li>
                                            <li><a href="#">Menu Submenu Item 2</a></li>
                                        </div>
                                    </details>
                                </>
                            )}
                            {activeMenu === 'blankPage' && (
                                <>
                                    <li><a href="#">Blank Page Submenu Item 1</a></li>
                                    <li><a href="#">Blank Page Submenu Item 2</a></li>
                                </>
                            )}
                            {activeMenu === 'docs' && (
                                <>
                                    <li><a href="#">Docs Submenu Item 1</a></li>
                                    <li><a href="#">Docs Submenu Item 2</a></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
