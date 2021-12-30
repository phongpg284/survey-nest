import "./index.scss";
import { ENDPOINT } from "app/config";
import useFetch from "hooks/useFetch";
import { useEffect, useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import QuestionPreview from "./QuestionPreview";

export interface IQuestionResponse {
    answer: number[];
    userAnswer: number[];
    point: number;
    maxPoint: number;
    title: string;
    options: string[];
}
interface IResultResponse {
    id: number;
    questions: IQuestionResponse[];
    totalPoint: number;
}

const Summary = ({ answers }: any) => {
    const [response, isFetching, setRequest] = useFetch({} as any);
    const [result, setResult] = useState<IResultResponse>();

    useEffect(() => {
        setRequest({
            endPoint: ENDPOINT + "/survey/result/2",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            requestBody: {
                answers,
            },
        });
    }, []);

    useEffect(() => {
        if (!isFetching && response && response.data) {
            console.log(response.data);
            setResult(response.data);
        }
    }, [isFetching, response]);

    return (
        <div className="summary_container">
            <div className="summary_title">Survey summary</div>
            <div className="summary_content">
                <div className="summary_result">Total Point: {result?.totalPoint}</div>
                <div className="summary_question_container">
                    {result &&
                        result?.questions.map((question, index: number) => (
                            <>
                                <QuestionPreview data={question} questionIndex={index} />
                            </>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Summary;
