
import './Link.css';

export default function Link({ title, description, label }) {
    return (
        <div className="link-wrap">
            
            {title && description && (
                <>
                    <span className="title">{title}</span>
                    <span className="description">{description}</span>
                </>
            )}

            <a href="#" className="link-item ">{ label }</a>
        </div>
    );
}