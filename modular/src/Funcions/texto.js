
export const createParagraph = (text) => {
        // Crear el elemento p
        const p = document.createElement("p");
    
        // Agregar el texto al elemento p
        p.innerText = text;
    
        // Devolver el elemento p
        return p;
    }