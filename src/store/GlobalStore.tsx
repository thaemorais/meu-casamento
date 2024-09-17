import React, { createContext, useState, useContext, ReactNode } from "react";

// Definindo os tipos para o estado e as funções do contexto
interface GlobalState {
	name: string;
	setName: (name: string) => void;
}

// Cria o contexto com valores padrão
const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Cria o provider para envolver sua aplicação
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [name, setName] = useState<string>("");

	return (
		<GlobalContext.Provider value={{ name, setName }}>
			{children}
		</GlobalContext.Provider>
	);
};

// Hook para acessar o contexto facilmente
export const useGlobalContext = (): GlobalState => {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error("useGlobalContext must be used within a GlobalProvider");
	}
	return context;
};
