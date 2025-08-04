function Agendamentos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Agendamentos</h1>
      <p>Agendamentos de consultas. Possibilidades:</p>
      <ol>
        <li>Paciente preenche seus dados e é marcado a consulta automaticamente, com confirmação via e-mail do paciente</li>
        <li>Paciente preenche seus dados e é redirecinado para o whatsapp para confirmação via mensagem</li>
      </ol>
    </div>
  );
}

export default Agendamentos;