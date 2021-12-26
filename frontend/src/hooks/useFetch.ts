import { useEffect, useState } from "react";

interface IReqInfo {
    headers?: Record<string, unknown>;
    method: string;
    endPoint: string;
    requestBody?: Record<string, unknown>;
}

interface IResInfo {
    data: any;
    hasError: boolean;
}

const useFetch = (req: IReqInfo): [IResInfo, boolean, React.Dispatch<React.SetStateAction<IReqInfo>>] => {
    const [isFetching, setIsFetching] = useState(false);
    const [reqInfo, setReqInfo] = useState(req);
    const [resInfo, setResInfo] = useState<IResInfo>({} as IResInfo);
    useEffect(() => {
        if (reqInfo) {
            new Promise((resolve, reject) => {
                const fetchUrl = reqInfo.endPoint;
                const fetchData = {
                    headers: reqInfo?.headers,
                    method: reqInfo.method,
                    body: JSON.stringify(reqInfo.requestBody),
                };
                if (fetchUrl) {
                    fetch(fetchUrl, fetchData as any)
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.response) resolve(data.response);
                            else resolve(data);
                        })
                        .catch((err) => reject(err));
                    setIsFetching(true);
                }
            }).then(
                (data: any) => {
                    setIsFetching(false);
                    setResInfo({
                        data: data,
                        hasError: false,
                    });
                },
                (err) => {
                    setIsFetching(false);
                    setResInfo({
                        data: err,
                        hasError: true,
                    });
                }
            );
        }
    }, [reqInfo]);

    return [resInfo, isFetching, setReqInfo];
};

export default useFetch;
