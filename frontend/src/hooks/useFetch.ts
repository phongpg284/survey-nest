import { message } from "antd";
import { updateToken } from "app/authSlice";
import { ENDPOINT } from "app/config";
import { useAppDispatch, useAppSelector } from "app/store";
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
    const account = useAppSelector((state) => state.account);
    const dispatch = useAppDispatch();

    const fetchNewAccessToken = async () => {
        await fetch(ENDPOINT + "/auth/refresh", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + account.refreshToken,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.statusCode === 401 && data.message === "Expired Refresh Token") {
                    message.error("Token Expired. Please log in again!");
                    dispatch(
                        updateToken({
                            id: "",
                            accessToken: "",
                            refreshToken: "",
                            username: "",
                        })
                    );
                }
                if (data.accessToken && data.refreshToken) {
                    dispatch(
                        updateToken({
                            id: account.id!,
                            accessToken: data.accessToken,
                            refreshToken: data.refreshToken,
                            username: account.username!,
                        })
                    );
                    fetchForData(data.accessToken);
                }
            });
    };

    const fetchForData = async (accessToken: string) => {
        return new Promise((resolve, reject) => {
            const fetchUrl = reqInfo.endPoint;
            const fetchData = {
                headers: {
                    ...reqInfo?.headers,
                    Authorization: "Bearer " + accessToken,
                },
                method: reqInfo.method,
                body: JSON.stringify(reqInfo.requestBody),
            };
            if (fetchUrl) {
                fetch(fetchUrl, fetchData as any)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.statusCode === 401 && data.message === "Unauthorized") {
                            fetchNewAccessToken();
                        } else resolve(data);
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
    };
    useEffect(() => {
        if (reqInfo) {
            fetchForData(account.accessToken!);
        }
    }, [reqInfo]);

    return [resInfo, isFetching, setReqInfo];
};

export default useFetch;
