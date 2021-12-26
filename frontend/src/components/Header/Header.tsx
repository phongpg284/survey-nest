import { useAppDispatch, useAppSelector } from "../../app/store";
import { updateToken } from "../../app/authSlice";
import { useEffect, useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./header.scss";

//icon

import { BsFillCaretDownFill } from "react-icons/bs";
import { BiCalendarPlus } from "react-icons/bi";
import { HiCog } from "react-icons/hi";
import { FaPhoneAlt, FaUserAlt, FaUserInjured, FaMicrophoneAlt, FaPowerOff, FaBell, FaLaptopMedical } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { GrBarChart } from "react-icons/gr";

//image

import logo from "../../assets/logo1.png";
import logoSwitch from "../../assets/switch.png";
import defaultAvatar from "../../assets/default-avatar.png";
import defaultAvatarPatient from "../../assets/default-avatar-patient.png";
import arrowup from "../../assets/arrow-up.png";
import { FooterContext } from "App";
import { IoGameControllerOutline, IoWatch } from "react-icons/io5";
import { message, Modal, Tooltip } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function Header(props: any) {
    const [state, setState] = useState(0);
    const history = useHistory();
    const userAccountInfo = useAppSelector((state) => state.account);
    const [isDeviceConnect, setIsDeviceConnect] = useState(false);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        localStorage.removeItem("state");
        dispatch(
            updateToken({
                accessToken: "",
                refreshToken: "",
                username: "",
                id: "",
            })
        );
        window.location.reload();
    };

    const Dropdown = () => {
        const dropController: React.RefObject<HTMLInputElement> = useRef(null);
        useEffect(() => {
            document.addEventListener("click", handleClickOutside);
        }, []);
        function handleClickOutside(event: any) {
            if (dropController.current && !dropController.current.contains(event.target) && document.querySelector(".header_pops_up")?.classList.contains("header_waitoff")) {
                document.querySelector(".header_pops_up")?.classList.remove("header_show");
                document.querySelector(".header_pops_up")?.classList.remove("header_waitoff");
                setTimeout(() => {
                    document.querySelector(".header_pops_back")?.classList.remove("header_pops_ani");
                    document.querySelector(".header_pops_arrow")?.classList.remove("header_pops_ani");
                }, 50);
                document.querySelector(".header_vector_1")?.classList.remove("header_vector_1_toggle");
                document.querySelector(".header_vector_2")?.classList.remove("header_vector_2_toggle");
            }
        }

        return (
            <div className="header_pops_up" ref={dropController}>
                <Image className="header_pops_arrow header_imageremoveselect" src={arrowup} />
                <div className="header_pops_back">
                    <div className="header_pops_signin">
                        <div className="header_ps_carry"></div>
                    </div>
                    <div className="header_pops_items">
                        <div style={{ width: "100%", height: "22px" }}></div>
                        <div className="header_pi_header header_pi_item">
                            <FaUserAlt className="header_pi_icon" />
                            <a href="/profile" style={{ color: "#6c6464" }}>
                                Trang cá nhân
                            </a>
                        </div>
                        <div className="header_pi_header header_pi_item">
                            <FaBell className="header_pi_icon" />
                            <a href="/notifications" style={{ color: "#6c6464" }}>
                                Thông báo
                            </a>
                        </div>

                        <div className="header_pi_logout header_pi_item" onClick={handleLogout}>
                            <FaPowerOff className="header_pi_icon header_white header_pi_logout_item" />
                            Đăng xuất
                        </div>
                        <div style={{ width: "100%", height: "25px" }}></div>
                    </div>
                </div>
            </div>
        );
    };

    const footerRef = useContext(FooterContext);
    return (
        <div className="header_all">
            {/* Topbar */}

            <div className="header_topbar">
                <Image
                    className={"header_logo header_imageremoveselect" + " " + props?.class}
                    src={logo}
                    onClick={() => {
                        history.push("/");
                    }}
                />
                <div className="header_logo_slogan">Hỗ Trợ Đột Quỵ</div>

                <div className="header_navigate_bar">
                    <div className="header_navigate_bar_item" onClick={() => history.push("/")}>
                        Trang chủ
                    </div>
                    <div className="header_navigate_bar_item" onClick={() => history.push("/so-cuu")}>
                        Sơ cứu
                    </div>
                    <div className="header_navigate_bar_item" onClick={() => history.push("/survey")}>
                        Khảo sát
                    </div>
                    <div className="header_navigate_bar_item" onClick={() => footerRef.current.scrollIntoView()}>
                        Liên hệ
                    </div>
                </div>

                {/* <div className="header_navigate_login">
                    Đăng nhập
                </div> */}

                {/* <ContactUs /> */}
                {userAccountInfo.accessToken && userAccountInfo.id && (
                    <>
                        <div className="header_name"></div>
                        <div
                            className="header_menu"
                            onClick={function () {
                                document.querySelector(".header_pops_up")?.classList.toggle("header_show");
                                if (document.querySelector(".header_pops_up")?.classList.contains("header_waitoff")) {
                                    document.querySelector(".header_pops_up")?.classList.remove("header_waitoff");
                                } else {
                                    setTimeout(() => {
                                        document.querySelector(".header_pops_up")?.classList.add("header_waitoff");
                                    }, 300);
                                }
                                setTimeout(() => {
                                    document.querySelector(".header_pops_back")?.classList.toggle("header_pops_ani");
                                    document.querySelector(".header_pops_arrow")?.classList.toggle("header_pops_ani");
                                }, 50);
                                document.querySelector(".header_vector_1")?.classList.toggle("header_vector_1_toggle");
                                document.querySelector(".header_vector_2")?.classList.toggle("header_vector_2_toggle");
                            }}
                        >
                            <div className="header_vector header_vector_1"></div>
                            <div className="header_vector header_vector_2"></div>
                        </div>

                        <BsFillCaretDownFill
                            className="header_dropdown"
                            onClick={function () {
                                document.querySelector(".header_pops_up")?.classList.toggle("header_show");
                                if (document.querySelector(".header_pops_up")?.classList.contains("header_waitoff")) {
                                    document.querySelector(".header_pops_up")?.classList.remove("header_waitoff");
                                } else {
                                    setTimeout(() => {
                                        document.querySelector(".header_pops_up")?.classList.add("header_waitoff");
                                    }, 300);
                                }
                                setTimeout(() => {
                                    document.querySelector(".header_pops_back")?.classList.toggle("header_pops_ani");
                                    document.querySelector(".header_pops_arrow")?.classList.toggle("header_pops_ani");
                                }, 50);
                            }}
                        />
                    </>
                )}

                {!userAccountInfo.accessToken && !userAccountInfo.id && (
                    <div className="header_login_button">
                        <button onClick={() => history.push("/login")}>Đăng nhập</button>
                    </div>
                )}
            </div>

            {/* Dropdown */}

            <Dropdown />
        </div>
    );
}
