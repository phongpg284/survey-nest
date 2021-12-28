import "./index.scss";
import { ENDPOINT } from "app/config";
import { useAppSelector } from "app/store";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import Question from "./Question";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

export interface QuestionAnswer {
    selected: number[];
    point: number;
}

const Survey = () => {
    const account = useAppSelector((state: any) => state.account);
    const [response, isFetching, setRequest] = useFetch({} as any);
    const [index, setIndex] = useState<number>(0);
    const [selectAnswers, setSelectAnswers] = useState<QuestionAnswer[]>([]);

    useEffect(() => {
        setRequest({
            endPoint: ENDPOINT + "/survey/1",
            method: "GET",
        });
    }, []);

    const [survey, setSurvey] = useState<any>();
    const [questions, setQuestions] = useState<any[]>([]);

    useEffect(() => {
        if (!isFetching && response && response.data) {
            console.log(response.data);
            setSurvey(response.data);
        }
    }, [isFetching, response]);

    useEffect(() => {
        if (survey && survey.questions) {
            setQuestions(survey.questions);
            const protoSelectAnswer = [];
            for (let i = 0; i < survey.questions.length; i++) {
                protoSelectAnswer.push({
                    selected: [],
                    point: 0,
                });
            }
        }
    }, [survey]);

    const handleNext = () => {
        setIndex((prev) => {
            if (prev + 1 < questions?.length) return prev + 1;
            else return prev;
        });
    };
    const handleBack = () => {
        setIndex((prev) => {
            if (prev - 1 >= 0) return prev - 1;
            else return prev;
        });
    };
    const handleSkip = () => {
        setIndex((prev) => {
            if (prev + 1 < questions?.length) return prev + 1;
            else return prev;
        });
    };

    return (
        <div className="survey_container">
            <div className="survey_info">
                <div className="survey_info_title content_title">Profile Content</div>
                <li>ID: {account.id}</li>
                <li>Username: {account.username}</li>
                <li>Total Question: {survey?.totalQuestion}</li>
            </div>
            <div className="survey_content">
                <div className="survey_content_title content_title">Survey Content</div>
                <div className="survey_content_main">
                    {questions && questions.length > 0 && (
                        <div key={questions[index]?.id}>
                            <div className="survey_question_index">
                                Question {index + 1}/{questions.length}
                            </div>
                            <Question
                                data={questions[index]}
                                questionIndex={index}
                                answersSelect={selectAnswers?.[index]}
                            />
                            <div className="question_navigate">
                                <a className="question_navigate_back" onClick={handleBack}>
                                    <ArrowLeftOutlined />
                                    Previous
                                </a>
                                <a className="question_navigate_skip" onClick={handleSkip}>
                                    Skip
                                </a>
                                <a className="question_navigate_next" onClick={handleNext}>
                                    Next
                                    <ArrowRightOutlined />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Survey;