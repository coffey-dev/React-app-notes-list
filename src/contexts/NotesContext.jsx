import { createContext } from "react";
import useNotes from "../hooks/UseNotes";

export const NotesContext = createContext();
export function NotesProvider({ children }) {
    const {notes} = useNotes();
    return (
        <NotesContext.Provider value={ {notes: notes}}>
{children}
        </NotesContext.Provider>
    )
    
}