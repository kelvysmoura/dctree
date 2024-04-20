import Form from "@/components/Form";
import { useState } from "react";
import storage from '@/storage';

export default function UiForm() {
    const [borderRadius, setBorderRadius] = useState(0);
    const [borderWidth, setBorderWidth] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        storage.setUiStyle({borderRadius, borderWidth});
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h4>Texto</h4>
            <div>
                <label className="form-label">Cor</label>
                <input type="color" className="form-control"/>
            </div>
            <hr />
            <h4>Bordas</h4>
            <div className="row">
                <div className="col">
                    <label className="form-label">Cor</label>
                    <input type="color" className="form-control"/>
                </div>
                <div className="col">
                    <label className="form-label">Largura ({borderWidth}px)</label>
                    <input type="range" min="0" max="100" step="1" className="form-range"
                        value={borderWidth} 
                        onChange={(event) => setBorderWidth(event.target.value)} />
                </div>
                <div className="col">
                    <label className="form-label">Radius ({borderRadius}px)</label>
                    <input type="range" min="0" max="100" step="1" className="form-range" 
                        value={borderRadius} 
                        onChange={(event) => setBorderRadius(event.target.value)} />
                </div>
                <div>
                    <button className="btn btn-dark w-100 mt-3">Salvar</button>
                </div>
            </div>
        </Form>
    );
}