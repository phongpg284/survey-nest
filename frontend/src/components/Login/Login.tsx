import "./login.scss";
import { useLazyQuery } from "@apollo/client";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { useAppDispatch } from "../../app/store";
import { updateToken } from "../../app/authSlice";
import { LOGIN } from "./schema";
import { ENDPOINT } from "app/config";
import { message } from "antd";

interface ILoginInputForm {
    username: string;
    password: string;
    role: boolean;
}

const LoginSchema = yup.object().shape({
    username: yup.string().required("Username required!"),
    password: yup.string().required("Password required!"),
});

const Login = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const [showError, setShowError] = useState<string>("");

    const [isPasswordShow, setIsPassWordShow] = useState<boolean>(false);

    const handleSubmit = (data: ILoginInputForm) => {
        fetch(ENDPOINT + "/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.accessToken && data?.refreshToken) {
                    const payload = JSON.parse(window.atob(data.accessToken.split(".")[1]));
                    dispatch(
                        updateToken({
                            username: payload.username,
                            accessToken: data.accessToken,
                            refreshToken: data.accessToken,
                            id: payload.id,
                        })
                    );
                    history.push("/");
                } else {
                    message.error(data?.message);
                }
            });
    };

    return (
        <div className="login-form">
            <div className="login-content">
                <h1 className="login-form-title">Đăng nhập</h1>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        role: false,
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="login-form-input" controlId="formBasicUsername">
                                <Form.Label className="login-form-label">Username</Form.Label>

                                <Form.Control
                                    type="username"
                                    name="username"
                                    // placeholder="Username"
                                    onChange={handleChange}
                                    isInvalid={!!errors.username}
                                />
                                <Form.Control.Feedback type="invalid" className="input-error">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="login-form-input" controlId="formBasicPassword">
                                <Form.Label className="login-form-label">Mật khẩu</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        name="password"
                                        type={isPasswordShow ? "text" : "password"}
                                        // placeholder="Password"
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    {/* <InputGroup.Text onClick={handleVisiblePassword}>
                    {isPasswordShow && <EyeOutlined />}
                    {!isPasswordShow && <EyeInvisibleOutlined />}
                  </InputGroup.Text> */}
                                    <Form.Control.Feedback type="invalid" className="input-error">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="login-form-role-check">
                                <div>Bác sĩ?</div>
                                <Form.Check size={20} name="role" onChange={handleChange} id="validationFormik0" />
                            </Form.Group>
                            <div className="errors">{showError && <div>{showError}</div>}</div>

                            <div className="submit-button">
                                <Button type="submit">Đăng nhập</Button>
                            </div>
                            <Link className="create-account-link" to="./signup">
                                Tạo tài khoản?
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
