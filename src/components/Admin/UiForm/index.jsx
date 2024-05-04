import Form from "@/components/Form";
import { useState } from "react";
import storage from '@/storage';
import AdminSection from "@/components/Admin/AdminSection";

const selectOptions = [
    { label: "left" },
    { label: "center" },
    { label: "right"}
];

export default function UiForm() {
    const [color, setColor] = useState(storage.getUiStyle('color'));
    const [textAlign, setTextAlign] = useState(storage.getUiStyle('textAlign'));
    const [fontSize, setFontSize] = useState(storage.getUiStyle('fontSize', 1));
    const [borderRadius, setBorderRadius] = useState(storage.getUiStyle('borderRadius'));
    const [borderWidth, setBorderWidth] = useState(storage.getUiStyle('borderWidth'));
    const [borderColor, setBorderColor] = useState(storage.getUiStyle('borderColor'));
    const [backgroundColor, setBackgroundColor] = useState(storage.getUiStyle('backgroundColor'));
    
    const [hoverEnabled, setHoverEnabled] = useState(0);

    const [styleHover, setStyleHover] = useState(storage.getUiStyleHover());
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        storage.setUiStyle({
            color,
            borderRadius, 
            borderWidth, 
            borderColor,
            textAlign,
            fontSize,
            backgroundColor
        });

        if(!hoverEnabled) {
            storage.setUiStyleHover({});
            return;    
        }

        storage.setUiStyleHover(styleHover);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <AdminSection title="Texto e cor de fundo">
                <div className="col">
                    <label className="form-label">Cor</label>
                    <input type="color" className="form-control form-control-color w-100"
                        value={color}
                        onChange={event => setColor(event.target.value)} />
                </div>
                <div className="col">
                    <label className="form-label">Cor de fundo</label>
                    <input type="color" className="form-control form-control-color w-100"
                        value={backgroundColor}
                        onChange={event => setBackgroundColor(event.target.value)} />
                </div>
                <div className="col">
                    <label className="form-label">Posicionamento</label>
                    <select className="form-control" value={textAlign} onChange={event => setTextAlign(event.target.value)}>
                        { selectOptions.map(item => (
                            <option key={item.label}>
                                {item.label}
                            </option>
                        )) }
                    </select>
                </div>
                <div className="col">
                    <label className="form-label">Tamanho ({fontSize}px)</label>
                    <input type="range" min="1" max="52" step="1" className="form-range"
                        value={fontSize}
                        onChange={(event) => setFontSize(event.target.value)} />
                </div>
            </AdminSection>
        
            <hr />
            <h4 className="mt-4">Bordas</h4>
            <div className="row">
                <div className="col">
                    <label className="form-label">Cor</label>
                    <input type="color" className="form-control form-control-color w-100"
                        value={borderColor}
                        onChange={event => setBorderColor(event.target.value)} />
                </div>
                <div className="col">
                    <label className="form-label">Largura ({borderWidth}px)</label>
                    <input type="range" min="0" max="10" step="1" className="form-range"
                        value={borderWidth} 
                        onChange={(event) => setBorderWidth(event.target.value)} />
                </div>
                <div className="col">
                    <label className="form-label">Radius ({borderRadius}px)</label>
                    <input type="range" min="0" max="100" step="1" className="form-range" 
                        value={borderRadius} 
                        onChange={(event) => setBorderRadius(event.target.value)} />
                </div>
            </div>

            <AdminSection title="Hover" lastSection>
                <div className="col">
                    <label className="form-label">Status</label>
                    <select name="" id="" className="form-control" value={hoverEnabled} onChange={event => setHoverEnabled(Number(event.target.value))}>
                        <option value="0">Desabilitado</option>
                        <option value="1">Habilitado</option>
                    </select>
                </div>
                        <div className="col">
                            <label className="form-label">Cor do Texto</label>
                            <input type="color" className="form-control form-control-color w-100"
                                disabled={Boolean(!hoverEnabled)}
                                value={styleHover.color ?? ''}
                                onChange={event => setStyleHover({...styleHover, color: event.target.value})} />
                        </div>
                        <div className="col">
                            <label className="form-label">Cor da borda</label>
                            <input type="color" className="form-control form-control-color w-100"
                                disabled={Boolean(!hoverEnabled)}
                                value={styleHover.borderColor ?? ''}
                                onChange={event => setStyleHover({...styleHover, borderColor: event.target.value})} />
                        </div>
                        <div className="col">
                            <label className="form-label">Cor de fundo</label>
                            <input type="color" className="form-control form-control-color w-100"
                                disabled={Boolean(!hoverEnabled)}
                                value={styleHover.backgroundColor ?? ''}
                                onChange={event => setStyleHover({...styleHover, backgroundColor: event.target.value})} />
                        </div>
            </AdminSection>    
        
            <div>
                <button className="btn btn-dark w-100 mt-3">Salvar</button>
            </div>
        </Form>
    );
}