import Form from '@/components/Form';

export default function Register () {
    return (
        <Form>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Nome</label>
                <input type="text" 
                    className="form-control"  placeholder='Digite seu nome'/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Sobrenome</label>
                <input type="text" 
                    className="form-control"  placeholder='Digite seu sobrenome'/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" 
                    className="form-control"  placeholder='Digite seu email'/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Senha</label>
                <input type="password" 
                    className="form-control"  placeholder='Digite sua senha'/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Confirmar senha</label>
                <input type="password" 
                    className="form-control"  placeholder='Digite a senha novamente'/>
            </div>
            <div>
                <button>Cadastrar</button>
            </div>
            <hr />
            <a href="">Fazer login</a>
        </Form>
    );
}