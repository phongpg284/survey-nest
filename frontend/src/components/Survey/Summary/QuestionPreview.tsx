import "../index.scss";
import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { IQuestionResponse } from "./Summary";

interface IQuestionProps {
    data: IQuestionResponse;
    questionIndex: number;
}

const QuestionPreview: React.FC<IQuestionProps> = ({ data, questionIndex }) => {
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);
    useEffect(() => {
        if (data.point === data.maxPoint) {
            setIsCorrectAnswer(true);
        } else setIsCorrectAnswer(false);
    }, [data]);

    return (
        <div className={`question_preview_container ${isCorrectAnswer ? "question_true" : "question_false"}`}>
            <div className="question_preview_container_title">
                {questionIndex + 1}. {data?.title}?
            </div>
            <div className="question_preview_container_point">
                ({data.point}/{data.maxPoint} Points)
            </div>
            <div className="question_preview_container_option_box">
                {data.options &&
                    data.options.map((option: any, index: number) => (
                        <div
                            key={option}
                            className={`question_preview_container_option_box_answer ${
                                data.userAnswer.includes(index) ? "option_selected" : ""
                            } `}
                        >
                            <input type="radio" className="option_checkbox" checked={data.userAnswer.includes(index)} />
                            <span className="option_content">{option}</span>
                            {data.answer.includes(index) && <CheckOutlined className="option_true_answer" />}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default QuestionPreview;
