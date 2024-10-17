// src/front/js/components/FormValidation.js

// Validar si el email es válido
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    return re.test(String(email).toLowerCase());
};

// Validar la longitud de la contraseña
export const validatePassword = (password) => {
    return password.length >= 8; // Ajusta según tus requisitos de contraseña
};

// Confirmar si las contraseñas coinciden
export const confirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
};

// Funciones adicionales para la validación
export const isValidEmail = (email) => {
    return validateEmail(email);
};

export const isValidPassword = (password) => {
    return validatePassword(password);
};

export const doPasswordsMatch = (password, confirmPassword) => {
    return confirmPassword(password, confirmPassword);
};
