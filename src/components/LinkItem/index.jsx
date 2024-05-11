
import { useContext, useEffect, useState } from 'react';
import './LinkItem.css';
import storage from '@/storage';
import { Preview } from '@/context/PreviewContext';

export default function LinkItem({ title, description, label, link }) {
    let uiStyleLive = useContext(Preview);

    let uiStyleHover = storage.getUiStyleHover();
    let uiStyle = storage.getUiStyle();

    const [style, setStyle] = useState(uiStyle);

    useEffect(() => {
        setStyle({
            ...uiStyleLive,
            fontSize: uiStyleLive.fontSize + 'px',
            borderRadius: uiStyleLive.borderRadius + 'px',
            borderWidth: uiStyleLive.borderWidth + 'px'
        });
    }, [uiStyleLive]);

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
                onMouseOver={ () => setStyle({...uiStyle, ...uiStyleHover}) } 
                onMouseLeave={ () => setStyle(uiStyle)}>{ label }</a>
        </div>
        </>
    );
}