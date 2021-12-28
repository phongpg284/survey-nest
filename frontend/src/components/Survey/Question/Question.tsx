import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "../index.scss";
import { IQuestionResponseProps, QuestionAnswer } from "../Survey";

interface IQuestionProps {
    data: IQuestionResponseProps;
    answersSelect: QuestionAnswer;
    questionIndex: number;
    handleEndQuestion: (questionIndex: number, answer: number[]) => void;
}

const Question: React.FC<IQuestionProps> = ({ data, answersSelect, questionIndex, handleEndQuestion }) => {
    const [selectAnswer, setSelectAnswer] = useState<number[]>([]);
    const handleClickOption = (index: number) => {
        if (data.isMultiple) {
            if (selectAnswer.includes(index)) {
                setSelectAnswer((prev) => {
                    return prev.filter((selectedIndex) => selectedIndex !== index);
                });
            } else {
                setSelectAnswer((prev) => {
                    return [...prev, index];
                });
            }
        } else {
            setSelectAnswer([index]);
        }
    };

    useEffect(() => {
        if (answersSelect && answersSelect.selected) setSelectAnswer(answersSelect.selected);
    }, [answersSelect]);

    useEffect(() => {
        handleEndQuestion(questionIndex, selectAnswer);
    }, [selectAnswer]);

    return (
        <div className="question_container">
            <div className="question_container_title">{data?.title}?</div>
            <div className="question_container_option_box">
                {data.options &&
                    data.options.map((option: any, index: number) => (
                        <div
                            onClick={() => handleClickOption(index)}
                            key={option}
                            className={`question_container_option_box_answer ${
                                selectAnswer.includes(index) ? "option_selecting" : ""
                            }`}
                        >
                            {/* <input type="checkbox" className="option_checkbox" /> */}
                            <span className="option_content">{option}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Question;
