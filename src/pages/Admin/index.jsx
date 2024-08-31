
import AdminMenu from '@/components/Admin/AdminMenu';
import { Navigate } from 'react-router-dom';

export default function Admin({ children }) {

    const token = localStorage.getItem('token');
    if(!token) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-3">
                    <AdminMenu />
                </div>
                <div className="col">
                    { children }
                </div>
            </div>
    </div>
    );
}