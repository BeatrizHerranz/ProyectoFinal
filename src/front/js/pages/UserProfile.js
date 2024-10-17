import React, { useState, useContext } from "react";
import InputField from "../components/InputField";
import ConfirmDialog from "../components/ConfirmDialog";
import { Context } from "../store/appContext";

const UserProfile = () => {
    const { store, actions } = useContext(Context);
    const [nombre, setNombre] = useState(store.user.nombre);
    const [email, setEmail] = useState(store.user.email);
    const [contraseña, setContraseña] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleSaveChanges = async () => {
        const updatedUser = { nombre, email, contraseña };
        const success = await actions.updateUser(store.user.id, updatedUser);
        if (success) {
            alert("Perfil actualizado exitosamente");
        } else {
            alert("Error al actualizar el perfil");
        }
    };

    const handleDeleteAccount = async () => {
        const success = await actions.deleteUser(store.user.id);
        if (success) {
            alert("Cuenta eliminada exitosamente");
            // Aquí puedes redirigir a otra página
        } else {
            alert("Error al eliminar la cuenta");
        }
    };

    return (
        <div className="container">
            <h2>Perfil de Usuario</h2>
            <form>
                <InputField label="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputField label="Contraseña" type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Guardar cambios</button>
            </form>
            <button className="btn btn-danger mt-3" onClick={() => setConfirmDelete(true)}>Eliminar cuenta</button>

            {confirmDelete && (
                <ConfirmDialog 
                    onConfirm={handleDeleteAccount} 
                    onCancel={() => setConfirmDelete(false)} 
                />
            )}
        </div>
    );
};

export default UserProfile;
