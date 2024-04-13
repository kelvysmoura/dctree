
import './LinkItem.css';

export default function LinkItem({ title, description, label, link }) {
    return (
        <div className="link-wrap">
            
            {title && description && (
                <>
                    <span className="title">{title}</span>
                    <span className="description">{description}</span>
                </>
            )}

            <a href={link} className="link-item ">{ label }</a>
        </div>
    );
}