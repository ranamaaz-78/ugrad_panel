import { useEffect, useRef, useState } from "react";
import "./Header.scss";
import profile from "../../assets/learner_portal/layout/profile.svg";
import menu_opener from "../../assets/learner_portal/layout/menu_opener.svg";
import { Link } from 'react-router-dom';


interface HeaderProps {
    onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="ugrad-header">
                <div>
                    <span
                        className="menu-opener"
                        onClick={onMenuClick}
                        role="button"
                        tabIndex={0}
                    >
                        <img src={menu_opener} alt="Menu" />
                    </span>
                    <h1 className="page-title">Assignment Feedback</h1>
                </div>
                <div>
                    <div className="profile-dropdown" ref={dropdownRef}>
                        <div
                            className="profile-img"
                            onClick={() => setIsOpen(!isOpen)}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={profile} alt="Profile" />
                        </div>

                        {isOpen && (
                            <div className="profile-dropdown-menu">
                                <ul>
                                    <li><Link to='/admin/profile'>My Profile</Link></li>
                                    <li><Link to="/admin/purchase-history">Purchase History</Link></li>
                                    <li><Link to="/admin/auth/login">Logout</Link></li>
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
