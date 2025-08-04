import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
const currentYear = new Date().getFullYear();

return (
    <div className="app-container">
        <header className="header">
            <div className="top-bar">
                <p>Atendimentos à distância para o mundo todo ou presenciais em Belo Horizonte - MG. Vamos marcar uma consulta?</p>
            </div>
            <nav className="main-nav">
                <div className="logo">
                    <Link to="/">João Lane</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/quemsou">Quem sou</Link></li>
                    <li><Link to="/agendamentos">Agendamentos</Link></li>
                    <li><Link to="/acompanhamentos">Acompanhamentos</Link></li>
                    <li><Link to="/parcerias">Parcerias</Link></li>
                    <li><a href="https://www.instagram.com/olanenutri/" target='blank' aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a></li>
                </ul>
            </nav>
        </header>

        <Outlet />

        <footer className='footer'>
            <p className='textoFooter'>Copyright © {currentYear} - Todos os direitos reservados</p>
        </footer>
        
    </div>
);
}

export default App;