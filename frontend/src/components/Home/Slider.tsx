import { Carousel } from "antd";
import slide from "../../assets/slide.jpg";

//icon

import { BiSend, BiShieldQuarter } from "react-icons/bi";

export const Slider = () => {
    function onChange(value: any) {
        //
    }

    return (
        <div className="home_slide">
            <Carousel afterChange={onChange} className="home_slide_carry" autoplay>
                <div>
                    <div className="home_slide_item">
                        <div className="home_slide_item_column" style={{ width: "50%", minWidth: "450px" }}>
                            <div className="home_slide_item_title" style={{ color: "#03c6cf" }}>
                                <BiSend />
                                &nbsp;&nbsp;Đột quỵ là gì?
                            </div>
                            <div className="home_slide_item_content">
                                <p>
                                    -<span style={{ fontWeight: "bold", fontSize: "1.2rem" }}> Đột quỵ (tai biến mạch máu não) </span> là tình trạng não bộ bị tổn thương nghiêm
                                    trọng, xảy ra khi dòng máu cung cấp cho não bị gián đoạn hoặc có một mạch máu trong não bị vỡ. Khi đó, lượng oxy và dinh dưỡng nuôi các tế bào
                                    não bị giảm đáng kể. Trong vòng vài phút, các tế bào não bắt đầu chết dần và gây ra nhiều biến chứng nguy hiểm đến tính mạng người bệnh.
                                </p>
                                <p>
                                    - Do đó, người bị đột quỵ cần được cấp cứu ngay lập tức, thời gian kéo dài càng lâu, số lượng tế bào não chết càng nhiều sẽ ảnh hưởng lớn tới
                                    khả năng vận động và tư duy của cơ thể, thậm chí là tử vong. Hầu hết những người sống sót sau cơn đột quỵ đều có sức khỏe suy yếu hoặc mắc các
                                    di chứng như: tê liệt hoặc cử động yếu một phần cơ thể, mất ngôn ngữ, rối loạn cảm xúc, thị giác suy giảm...
                                </p>
                            </div>
                        </div>
                        <div className="home_slide_item_column" style={{ width: "45%", minWidth: "450px", marginTop: "50px" }}>
                            <img alt="" src={"https://vinmec-prod.s3.amazonaws.com/images/20190507_022935_630835_Dot-quy.max-800x800.jpg"} style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="home_slide_item">
                        <div className="home_slide_item_column" style={{ width: "50%", minWidth: "450px" }}>
                            <div className="home_slide_item_title" style={{ color: "#03c6cf" }}>
                                <BiSend />
                                &nbsp;&nbsp;Các loại đột quỵ chính
                            </div>
                            <div className="home_slide_item_content">
                                <p>
                                    - <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Đột quỵ do thiếu máu cục bộ:</span> Chiếm khoảng 85% tổng số các ca bị đột quỵ hiện
                                    nay. Đây là tình trạng đột quỵ do các cục máu đông làm tắc nghẽn động mạch, cản trở quá trình máu lưu thông lên não.
                                </p>
                                <p>
                                    - <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Đột quỵ do xuất huyết:</span> Đột quỵ do xuất huyết là tình trạng mạch máu đến não bị
                                    vỡ khiến máu chảy ồ ạt gây xuất huyết não. Nguyên nhân khiến mạch máu vỡ là do thành động mạch mỏng yếu hoặc xuất hiện các vết nứt, rò rỉ.
                                </p>
                                <p>
                                    - <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Thiếu máu não thoáng qua (TIA):</span> thường gọi là đột quỵ nhỏ bởi là những giai
                                    đoạn ngắn có triệu chứng của đột quỵ, kéo dài khoảng vài phút
                                </p>
                            </div>
                        </div>
                        <div className="home_slide_item_column" style={{ width: "45%", minWidth: "450px", marginTop: "50px" }}>
                            <img alt="" src={"https://vinmec-prod.s3.amazonaws.com/images/20190507_023137_612349_tac-nghen-mach-mau.max-1800x1800.jpg"} style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="home_slide_item">
                        <div className="home_slide_item_column" style={{ width: "50%", minWidth: "450px" }}>
                            <div className="home_slide_item_title" style={{ color: "#03c6cf" }}>
                                <BiSend />
                                &nbsp;&nbsp; Sơ cứu tại nhà cho người có dấu hiệu đột quỵ:
                            </div>
                            <div className="home_slide_item_content">
                                <p> - Không để người bệnh té và gọi xe cấp cứu ngay lập tức.</p>
                                <p>- Đặt bệnh nhân ở tư thế nằm nghiêng an toàn để bảo vệ đường thở và an toàn cho người bệnh.</p>
                                <p>- Theo dõi chặt chẽ các dấu hiệu, phản ứng của bệnh nhân như suy giảm ý thức, nôn mửa…</p>
                                <p>- Tuyệt đối không tự ý bấm huyệt, đánh gió, châm cứu.</p>
                                <p>- Không cho bệnh nhân ăn uống vì có thể gây hít sặc chất nôn vào đường hô hấp, tắc đường thở, rất nguy hiểm.</p>
                                <p>- Không tự ý dùng thuốc hạ huyết áp hay bất kỳ loại thuốc nào khác.</p>
                            </div>
                        </div>
                        <div className="home_slide_item_column" style={{ width: "45%", minWidth: "450px", marginTop: "50px" }}>
                            <img alt="" src={"https://careplusvn.com/files/dot-quy-4.jpg"} style={{ width: "100%" }} />
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div className="home_slide_item">
                        <div className="home_slide_item_column" style={{ width: "50%", minWidth: "450px" }}>
                            <div className="home_slide_item_title" style={{ color: "#03c6cf" }}>
                                <BiSend />
                                &nbsp;&nbsp;Phòng ngừa bệnh Hen suyễn
                            </div>
                            <div className="home_slide_item_content">
                                Cần khẳng định rằng không có biện pháp nào giúp phòng tránh bệnh hen suyễn. Tuy nhiên, người mắc bệnh hoàn toàn có thể dự phòng các cơn hen phế quản
                                bằng các cách sau:
                                <p> - Tiêm vắc xin phòng cúm</p>
                                <p>- Xác định và tránh tiếp xúc với các dị nguyên khởi phát cơn hen</p>
                                <p>- Nhận diện các dấu hiệu báo trước của một cơn hen ho, thở dốc hay thở rít</p>
                                <p>- Điều trị các cơn hen phế quản càng sớm càng tốt, giúp dự phòng các đợt cấp tiến triển nặng nề hơn</p>
                                <p>- Tuân thủ việc điều trị. Không được tự ý ngưng sử dụng thuốc ngay khi thấy triệu chứng thuyên giảm</p>
                                <p>- Cần gặp bác sĩ ngay khi có dấu hiệu của cơn hen nặng</p>
                            </div>
                        </div>
                        <div className="home_slide_item_column" style={{ width: "45%", minWidth: "450px", marginTop: "50px" }}>
                            <img alt="" src={slide} style={{ width: "100%" }} />
                        </div>
                    </div>
                </div> */}
            </Carousel>
        </div>
    );
};
