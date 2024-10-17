// src/front/js/pages/Register.js
import React, { useState } from "react";
import { validateEmail, validatePassword, confirmPassword } from "../components/FormValidation"; // Cambiado aquí
import InputField from "../components/InputField";
import "../../styles/register.css";

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!validateEmail(email)) validationErrors.email = "Email no válido.";
        if (!validatePassword(password)) validationErrors.password = "La contraseña debe tener al menos 8 caracteres.";
        if (!confirmPassword(password, confirmPasswordValue)) validationErrors.confirmPassword = "Las contraseñas no coinciden.";

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const response = await fetch("/api/registro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, contraseña: password })
            });
            if (response.ok) {
                alert("Registro exitoso");
            } else {
                alert("Error en el registro");
            }
        }
    };

    return (
        <div className="register-form">
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <InputField label="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                {errors.nombre && <p className="error-text">{errors.nombre}</p>}

                <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                {errors.email && <p className="error-text">{errors.email}</p>}

                <InputField label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                {errors.password && <p className="error-text">{errors.password}</p>}

                <InputField label="Confirmar Contraseña" type="password" value={confirmPasswordValue} onChange={(e) => setConfirmPasswordValue(e.target.value)} placeholder="Confirmar Contraseña" />
                {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
