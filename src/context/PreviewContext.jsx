import { createContext, useState, useEffect} from "react";
import storage from "../storage";

export const Preview = createContext({
    uiStyleHover: {},
    uiStyleLive: {},
    handleChangeInput: () => {},
    handleChangeInputHover: () => {},
});

export default function PreviewContext({contextData, children}) {

    const [uiStyle, setUiStyle] = useState({
        color: storage.getUiStyle('color', '#000000'),
        textAlign: storage.getUiStyle('textAlign', 'center'),
        fontSize: storage.getUiStyle('fontSize', 12),
        borderRadius: storage.getUiStyle('borderRadius', 0),
        borderWidth: storage.getUiStyle('borderWidth', 0),
        borderColor: storage.getUiStyle('borderColor', '#000000'),
        backgroundColor: storage.getUiStyle('backgroundColor', "#ffffff"),
        logoImage: storage.getItem('logo-img'),
    }
    );
    const [uiStyleHover, setUiStyleHover] = useState();
    const [uiStyleLive, setUiStyleLive] = useState(uiStyle);

    useEffect(() => {
        setUiStyleLive(uiStyle);
    }, [uiStyle]);

    const handleChangeInput = (attribute, value) => {
        let obj = {...uiStyle}
        obj[attribute] = value
        setUiStyle(obj);
    }

    const handleChangeInputHover = (attribute, value) => {
        let obj = {...uiStyleHover}
        obj[attribute] = value
        setUiStyleHover(obj);
    }

    return (
        <Preview.Provider value={{uiStyleLive, uiStyleHover, handleChangeInput, handleChangeInputHover}}>
            { children }
        </Preview.Provider>
    )
}