import professionalImage from '../assets/lane.png';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <main className="hero-section">
      <div className="hero-text">
        <h1>Te ajudo a desenvolver uma relação saudável e duradoura com a alimentação!</h1>
        <p>Acompanho adultos, bebês e crianças na construção de hábitos equilibrados, promovendo saúde e bem-estar. Agende sua consulta!</p>
        <div className="hero-buttons">
          <Link to="/agendamentos"><button className="btn-primary">Agendar consulta</button></Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={professionalImage} alt="João Lane, nutricionista" />
      </div>
    </main>
  );
}

export default Home;