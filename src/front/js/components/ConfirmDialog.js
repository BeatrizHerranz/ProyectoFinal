import React from "react";

const ConfirmDialog = ({ onConfirm, onCancel }) => {
    return (
        <div className="confirm-dialog">
            <p>¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.</p>
            <button className="btn btn-danger" onClick={onConfirm}>Eliminar cuenta</button>
            <button className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
    );
};

export default ConfirmDialog;
