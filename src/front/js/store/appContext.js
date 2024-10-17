import React, { useState, useEffect } from "react";
import getState from "./flux.js";
import { updateUser, deleteUser } from "../services/api";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.getMessage(); // <---- calling this function from the flux.js actions
		}, []);

		// Agregar las acciones de actualización y eliminación de usuarios
		const actions = {
			...state.actions,
			updateUser: async (id, userData) => {
				return await updateUser(id, userData);
			},
			deleteUser: async (id) => {
				return await deleteUser(id);
			}
		};

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={{ store: state.store, actions }}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
