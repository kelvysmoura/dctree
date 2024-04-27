
import { useEffect, useState } from 'react';
import './LinkItem.css';
import storage from '@/storage';

export default function LinkItem({ title, description, label, link }) {

    let uiStyleHover = storage.getUiStyleHover();
    let uiStyle = storage.getUiStyle();

    const [style, setStyle] = useState(uiStyle);

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