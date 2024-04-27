
import './LinkItem.css';
import storage from '@/storage';


export default function LinkItem({ title, description, label, link }) {
    return (
        <>
        <div className="link-wrap" >
            {title && description && (
                <>
                    <span className="title">{title}</span>
                    <span className="description">{description}</span>
                </>
            )}

            <a href={link} className="link-item" style={storage.getUiStyle()}>{ label }</a>
        </div>
        </>
    );
}