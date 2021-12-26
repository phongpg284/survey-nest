import "./index.scss";
import { ENDPOINT } from "app/config";
import { useAppSelector } from "app/store";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
const Survey = () => {
    const account = useAppSelector((state: any) => state.account);
    const [response, isFetching, setRequest] = useFetch({} as any);
    useEffect(() => {
        setRequest({
            endPoint: ENDPOINT + "/survey/1",
            method: "GET",
        });
    }, []);

    const [survey, setSurvey] = useState<any>();

    useEffect(() => {
        if (!isFetching && response && response.data) {
            console.log(response.data);
            setSurvey(response.data);
        }
    }, [isFetching, response]);
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
                    {survey &&
                        survey.questions &&
                        survey.questions.map((question: any, index: number) => (
                            <div key={question.id}>
                                <div className="question_container">
                                    <li>Question no: {index}</li>
                                    <div>Content: {question?.title}?</div>
                                    <div className="question_container_option_box">
                                        {question.options &&
                                            question.options.map((option: any) => (
                                                <div key={option} className="question_container_option_box_checkbox">
                                                    <input type="checkbox"></input>
                                                    <span>{option}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Survey;
