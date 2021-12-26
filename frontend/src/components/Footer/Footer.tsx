import "./index.scss";

import { IoIosSchool, IoIosMail, IoMdSchool } from "react-icons/io";
import { FaUserTie, FaPhoneAlt, FaDoorOpen } from "react-icons/fa";
import { useContext } from "react";
import { FooterContext } from "App";

export const Footer = () => {
    const footerRef = useContext(FooterContext);
    return (
        <div className="footer" ref={footerRef}>
            <div className="footer_all">
                <div className="footer_title">LIÊN HỆ</div>
                <div className="footer_divider"></div>
                <div className="footer_content">
                    <div className="footer_content_item">
                        <div className="footer_content_item_row">
                            <FaUserTie className="footer_icon" />
                            Nguyễn Hoàng Tuấn
                        </div>
                        <div className="footer_content_item_row">
                            <FaUserTie className="footer_icon" />
                            Phạm Kim Ngân
                        </div>

                        <div className="footer_content_item_row">
                            <FaUserTie className="footer_icon" />
                            Nguyễn Ngọc Minh Châu
                        </div>
                    </div>
                    <div className="footer_divider_item"></div>
                    <div className="footer_content_item">
                        <div className="footer_content_item_row">
                            <IoIosMail className="footer_icon" />
                            hotrodotquy@gmail.com
                        </div>
                        <div className="footer_content_item_row">
                            <FaPhoneAlt className="footer_icon" />
                            077.200.4099
                        </div>
                        <div className="footer_content_item_row">
                            <IoMdSchool className="footer_icon" />
                            THPT Châu Văn Liêm 
                            58 Ngô Quyền, phường An Cư, quận Ninh Kiều, TP Cần Thơ
                        </div>
                        {/* <div className="footer_content_item_row">
                            <FaPhoneAlt className="footer_icon" />
                        </div> */}
                    </div>
                    {/* <div className="footer_divider_item"></div>
                    <div className="footer_content_item">
                        <div className="footer_content_item_row">
                            <FaDoorOpen className="footer_icon" />
                        </div>
                        <div className="footer_content_item_row">
                            <IoIosSchool className="footer_icon" />
                        </div>
                        <div className="footer_content_item_row">
                            <FaPhoneAlt className="footer_icon" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

// LIÊN HỆ
// 1. Nguyễn Minh Tú, Giáo viên THPT Chuyên Chu Văn An,  Email: nguyenminhtuls@gmail.com, SĐT: 0915.156.288
// 2. Vũ Hoàng Thi, Lớp 10B, THPT Chuyên Chu Văn An, SĐT: 0869.802.981
// 3. Phạm Gia Khánh, Lớp 10D1, THPT Chuyên Chu Văn An, SĐT: 0912.107.153
