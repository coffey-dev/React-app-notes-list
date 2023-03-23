import { useState } from "react";

// un hook es cualquier palabra que empieza con USE y que no trae nada de UI y que puede traer otros hooks.

const list = [
    {title: "Hola", message: "mundo", id: 123},
    {title: "Segunda nota", message: "Mundo", id: "1234"}
];


function useNotes(){
    const [notes, setNotes] = useState(list);

     return {
        notes
     }
};

export default useNotes;
