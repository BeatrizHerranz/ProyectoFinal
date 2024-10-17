// src/front/js/pages/Login.js
import React, { useState } from "react";
import { validateEmail, validatePassword } from "../components/FormValidation"; // Cambiado aquí
import InputField from "../components/InputField";
import "../../styles/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!validateEmail(email)) validationErrors.email = "Email no válido.";
        if (!validatePassword(password)) validationErrors.password = "La contraseña debe tener al menos 8 caracteres.";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, contraseña: password })
            });
            if (response.ok) {
                alert("Login exitoso");
            } else {
                alert("Error en el login");
            }
        }
    };

    return (
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                {errors.email && <p className="error-text">{errors.email}</p>}

                <InputField label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                {errors.password && <p className="error-text">{errors.password}</p>}

                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
