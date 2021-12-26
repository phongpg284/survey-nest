import "./home.scss";
import React, { useRef } from "react";
import { Slider } from "./Slider";
import { News } from "./News";
import { Link, useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import { BiCalendarCheck, BiCalendarEdit, BiCategory, BiDollarCircle, BiHelpCircle, BiHome, BiInfoCircle } from "react-icons/bi";
import mainPic from "../../assets/medical-picture.png";
import logo from "../../assets/logo1.png";
import Header from "components/Header";
import VideoSlide from "./VideoSlide";

export const Home = () => {
    const history = useHistory();
    const videoRef = useRef(null);
    const contactRef = useRef(null);
    const slideRef = useRef(null);

    const handleClickVideo = () => {
        (videoRef?.current as any).scrollIntoView({ behavior: "smooth" });
    };
    const handleClickContact = () => {
        (contactRef?.current as any).scrollIntoView({ behavior: "smooth" });
    };
    const handleClickSlide = () => {
        (slideRef?.current as any).scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="home_wrapper">
            {/* <div className="home_header">
                <Image
                    className={"header_logo header_imageremoveselect"}
                    src={logo}
                    onClick={() => {
                        history.push("/");
                    }}
                />
                <div className="header_logo_slogan">Hỗ Trợ Đột Quỵ</div>

                <div className="header_navigate_bar">
                    <div className="header_navigate_bar_item" onClick={handleClickContact}>
                        Liên hệ
                    </div>
                    <div className="header_navigate_bar_item" onClick={handleClickVideo}>
                        Khảo sát
                    </div>
                    <div className="header_navigate_bar_item" onClick={() => history.push("/")}>
                        Trang chủ
                    </div>
                </div>

                <div className="header_navigate_login" onClick={() => history.push("/login")}>
                    Đăng nhập
                </div>
            </div> */}
            <Header />
            <div className="home-content">
                <div className="home_main">
                    <div className="home_main_slogan">
                        <div className="home_main_slogan_line">Hỗ trợ </div>
                        <div className="home_main_slogan_line">theo dõi và quản lí</div>
                        <div className="home_main_slogan_line">bệnh nhân đột quỵ</div>
                        <div className="home_main_description">Một sản phẩm tham gia dự án nghiên cứu khoa học VISEF của nhóm TNC trường THPT Châu Văn Liêm</div>
                    </div>
                    <div className="home_main_pic">
                        <img src={mainPic} alt="" />
                    </div>
                </div>
                <div className="home_content">
                    <div className="home_content_item" ref={slideRef}>
                        <Slider />
                    </div>
                </div>
                <div className="home_video">
                    <div className="home_video_title" ref={videoRef}>
                        Video khảo sát
                    </div>
                    {/* <VideoSlide /> */}
                    <iframe
                        width="85%"
                        height="100%"
                        src="https://www.youtube.com/embed/e8b0QdRvNS8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>{" "}
                </div>
            </div>
            <div ref={contactRef}></div>
        </div>
    );
};

// export const Home = () => {

//     function Switch(e: React.MouseEvent<HTMLDivElement>) {
//         const buttons = document.querySelectorAll(".home_switch_item")
//         const contents = document.querySelectorAll(".home_content_item")
//         if (contents) {
//             contents.forEach((content: Element, index: number) => {
//                 if (!content.classList.contains("home_hidden")) {
//                     content.classList.add("home_hidden")
//                 }
//                 content.setAttribute("style", "z-index:0")
//             })
//         }
//         if (buttons && contents) {
//             const sw = document.querySelector(".home_switch")
//             buttons.forEach((button: Element, index: number) => {
//                 button.classList.remove("home_switch_item_toggle")
//                 if (e.currentTarget == button && sw && sw.firstElementChild) {
//                     sw.firstElementChild.className = `home_switch_back_${index + 1}`
//                     if (contents[index]) {
//                         contents[index].classList.remove("home_hidden")
//                         contents[index].setAttribute("style", "z-index:5")
//                     }
//                 }
//             })
//         }
//         if (!e.currentTarget.classList.contains("home_switch_item_toggle")) {
//             e.currentTarget.classList.add("home_switch_item_toggle")
//         }
//     }

// return (
//     <div className="home_all">
//         <div className="home_carry">
//             <div className="home_switch">
//                 <div className="home_switch_back_1"></div>
//                 <div className="home_row h_juround" style={{ position: "absolute", width: "100%" }}>
//                     <div className="home_switch_item home_switch_item_toggle" onClick={Switch}>
//                         <BiHome className="home_switch_icon" />
//                         <span className="home_switch_text">&nbsp;&nbsp;Trang chủ</span>
//                     </div>
//                     <div className="home_switch_item" onClick={Switch}>
//                         <BiCategory className="home_switch_icon" />
//                         <span className="home_switch_text">&nbsp;&nbsp;Dịch vụ</span>
//                     </div>
//                     <div className="home_switch_item" onClick={Switch}>
//                         <BiCalendarEdit className="home_switch_icon" />
//                         <span className="home_switch_text">&nbsp;&nbsp;Tin tức</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="home_content">
//                 <div className="home_content_item" style={{ zIndex: 5 }}>
//                     <Slider />
//                 </div>
//                 <div className="home_content_item home_hidden home_row h_wrap h_jubet home_content_extension_carry">
//                     <Link to="/calendar" className="home_content_extension" style={{ backgroundColor: "#4799ff" }}>
//                         <BiCalendarCheck />
//                         &nbsp;&nbsp;Đặt lịch
//                     </Link>
//                     <Link to="/profile" className="home_content_extension" style={{ backgroundColor: "#4edd73" }}>
//                         <BiInfoCircle />
//                         &nbsp;&nbsp;Thông tin
//                     </Link>
//                     <Link to="/question" className="home_content_extension" style={{ backgroundColor: "#d7e506" }}>
//                         <BiHelpCircle />
//                         &nbsp;&nbsp;Hỏi đáp
//                     </Link>
//                     <Link to="/price" className="home_content_extension" style={{ backgroundColor: "#aa00e1" }}>
//                         <BiDollarCircle />
//                         &nbsp;&nbsp;Bảng giá
//                     </Link>
//                 </div>
//                 <div className="home_content_item home_hidden">
//                     <News />
//                 </div>
//             </div>
//             <div className="home_content">
//                 <video
//                     width="80%"
//                     height="90%"
//                     controls
//                     style={{ borderRadius: "20px" }}
//                     src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2e9e719b86c446f8854553aded8320f1/?a=1988&br=1180&bt=590&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&expire=1637008429&ft=wUyFfFpckag3-I&l=202111151433370102450191061F3C7D59&lr=tiktok&mime_type=video_mp4&net=0&pl=0&policy=3&qs=0&rc=amlobDo6ZmQzNzMzZjgzM0ApOTplOTs4O2Q8N2Y0NTNpZGcxZnFncjRfX2ZgLS1kL2Nzc14vYl4uMjIvLi80X2MzYy06Yw%3D%3D&signature=7e1c7fdc526739646ca060a980a49dfa&tk=6725803925935768577&vl=&vr="
//                 ></video>
//             </div>
//         </div>
//     </div>
// );
// }
