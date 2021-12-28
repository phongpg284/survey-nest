import { ENDPOINT } from "app/config";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";

const Summary = ({ answers }: any) => {
    const [response, isFetching, setRequest] = useFetch({} as any);

    useEffect(() => {
        setRequest({
            endPoint: ENDPOINT + "/survey/result/1",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            requestBody: {
                answers,
            },
        });
    }, []);
    return (
        <div className="summary_container">
            <div className="summary_title">Survey summary</div>
            <div className="summary_content">
                <div className="summary_result"></div>
            </div>
        </div>
        
    ) 
};

export default Summary;
