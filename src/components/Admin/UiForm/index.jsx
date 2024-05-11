import Form from "@/components/Form";
import { useContext, useEffect, useState } from "react";
import storage from '@/storage';
import AdminSection from "@/components/Admin/AdminSection";
import LinkItem from '@/components/LinkItem';
import PreviewContext from "@/context/PreviewContext";
import { Preview } from "../../../context/PreviewContext";

const selectOptions = [
    { label: "left" },
    { label: "center" },
    { label: "right"}
];

export default function UiForm() {
    let {uiStyleLive, uiStyleHover, handleChangeInput, handleChangeInputHover} = useContext(Preview);
    
    const [hoverEnabled, setHoverEnabled] = useState(0);
    const [styleHover, setStyleHover] = useState(storage.getUiStyleHover());
    
    
    const handleSubmit = (event) => {
        event.preventDefault();

        storage.setItem('logo-img', uiStyleLive.logoImage);

        storage.setUiStyle(uiStyleLive);

        if(!hoverEnabled) {
            storage.setUiStyleHover({});
            return;
        }

        storage.setUiStyleHover(uiStyleHover);
    }

    const uploadHandler = (event) => {
        let fileReader = new FileReader;

        fileReader.onload = (file) => {
            setLogoImage(file.target.result);
        }

        fileReader.readAsDataURL(event.target.files[0]);
    }

    return (
        <>
            <div className="row">
                <LinkItem label="Botão de teste" />
            </div>
            <Form onSubmit={handleSubmit}>
                <AdminSection title="Redes sociais e Logo">
                    <div className="col">
                        <label className="form-label">Logo</label>
                        <input type="file" className="form-control form-control-color w-100" onChange={uploadHandler} />
                    </div>
                    <div>
                        <img src="" width="200px"/>
                    </div>
                </AdminSection>
                <AdminSection title="Texto e cor de fundo">
                    <div className="col">
                        <label className="form-label">Cor</label>
                        <input type="color" className="form-control form-control-color w-100"
                            value={uiStyleLive.color}
                            onChange={event => handleChangeInput('color', event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Cor de fundo</label>
                        <input type="color" className="form-control form-control-color w-100"
                            value={uiStyleLive.backgroundColor}
                            onChange={event => handleChangeInput('backgroundColor', event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Posicionamento</label>
                        <select className="form-control" value={uiStyleLive.textAlign} 
                        onChange={event => setUiStyle({...uiStyle, textAlign: event.target.value})}>
                            { selectOptions.map(item => (
                                <option key={item.label}>
                                    {item.label}
                                </option>
                            )) }
                        </select>
                    </div>
                    <div className="col">
                        <label className="form-label">Tamanho ({uiStyleLive.fontSize}px)</label>
                        <input type="range" min="1" max="52" step="1" className="form-range"
                            value={uiStyleLive.fontSize}
                            onChange={event => handleChangeInput('fontSize', event.target.value)} />
                    </div>
                </AdminSection>
            
                <hr />
                <h4 className="mt-4">Bordas</h4>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Cor</label>
                        <input type="color" className="form-control form-control-color w-100"
                            value={uiStyleLive.borderColor}
                            onChange={event => handleChangeInput('borderColor', event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Largura ({uiStyleLive.borderWidth}px)</label>
                        <input type="range" min="0" max="10" step="1" className="form-range"
                            value={uiStyleLive.borderWidth} 
                            onChange={event => handleChangeInput('borderWidth', event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Radius ({uiStyleLive.borderRadius}px)</label>
                        <input type="range" min="0" max="100" step="1" className="form-range" 
                            value={uiStyleLive.borderRadius} 
                            onChange={event => handleChangeInput('borderRadius', event.target.value)} />
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
                            onChange={event => handleChangeInputHover('color', event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Cor da borda</label>
                        <input type="color" className="form-control form-control-color w-100"
                            disabled={Boolean(!hoverEnabled)}
                            value={styleHover.borderColor ?? ''}
                            onChange={event => handleChangeInputHover('borderColor', event.target.value)} />
                    </div>
                    <div className="col">
                        <label className="form-label">Cor de fundo</label>
                        <input type="color" className="form-control form-control-color w-100"
                            disabled={Boolean(!hoverEnabled)}
                            value={styleHover.backgroundColor ?? ''}
                            onChange={event => handleChangeInputHover('backgroundColor', event.target.value)} />
                    </div>
                </AdminSection>    
            
                <div>
                    <button className="btn btn-dark w-100 mt-3">Salvar</button>
                </div>
            </Form>
        </>
    );
}