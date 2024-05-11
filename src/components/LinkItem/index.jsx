
import { useContext, useEffect, useState } from 'react';
import './LinkItem.css';
import storage from '@/storage';
import { Preview } from '@/context/PreviewContext';

export default function LinkItem({ title, description, label, link }) {
    let { uiStyleHover, uiStyleLive} = useContext(Preview);

    // let uiStyleHover = storage.getUiStyleHover();
    let uiStyle = storage.getUiStyle();

    const [style, setStyle] = useState(uiStyle);

    useEffect(() => {
        if(!uiStyleLive) return;
        setStyle({
            ...uiStyleLive,
            fontSize: uiStyleLive.fontSize + 'px',
            borderRadius: uiStyleLive.borderRadius + 'px',
            borderWidth: uiStyleLive.borderWidth + 'px'
        });
    }, [uiStyleLive]);

    const handleHover = () => {
        // let currentStyle = uiStyleLive ?? uiStyle
        // let currentHover = styleHover ?? uiStyleHover
        setStyle({...uiStyleLive, ...uiStyleHover});
    }

    const handleLeave = () => {
        // let currentStyle = uiStyleLive ?? uiStyle
        setStyle(uiStyleLive);
    }

    return (
        <>
        <div className="link-wrap" >
            {title && description && (
                <>
                    <span className="title">{title}</span>
                    <span className="description">{description}</span>
                </>
            )}
            <a href={link} className="link-item" style={style} 
                onMouseOver={ handleHover } 
                onMouseLeave={ handleLeave}>{ label }</a>
        </div>
        </>
    );
}