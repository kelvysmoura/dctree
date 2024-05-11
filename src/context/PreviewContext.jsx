import { createContext } from "react";

export const Preview = createContext({});

export default function PreviewContext({contextData, children}) {
    return (
        <Preview.Provider value={contextData}>
            { children }w
        </Preview.Provider>
    )
}