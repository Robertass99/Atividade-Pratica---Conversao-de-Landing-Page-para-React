function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">
          Sorriso Saudável
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
          aria-controls="menuNavbar"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavbar">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicos">Serviços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
          </ul>

          <a className="btn btn-primary" href="#preatendimento">
            Agendar consulta
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              Cuide do seu sorriso com profissionais especializados
            </h1>

            <p className="lead mt-3">
              Na Clínica Sorriso Saudável oferecemos atendimento humanizado,
              tecnologia moderna e foco total no bem-estar dos nossos pacientes.
            </p>

            <a href="#preatendimento" className="btn btn-primary btn-lg mt-3">
              Solicitar atendimento
            </a>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
              className="img-fluid rounded"
              alt="Atendimento odontológico"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardServico({ icone, titulo, texto }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <i className={`bi ${icone} fs-1 text-primary`}></i>
          <h5 className="card-title mt-3">{titulo}</h5>
          <p className="card-text">{texto}</p>
        </div>
      </div>
    </div>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Nossos Serviços</h2>
          <p className="text-muted">
            Tratamentos odontológicos realizados com segurança e qualidade.
          </p>
        </div>

        <div className="row g-4">
          <CardServico
            icone="bi-emoji-smile"
            titulo="Limpeza Dental"
            texto="Remoção de placas bacterianas e prevenção de doenças bucais."
          />

          <CardServico
            icone="bi-shield-plus"
            titulo="Restauração Dentária"
            texto="Recuperação da estrutura do dente com materiais modernos e duráveis."
          />

          <CardServico
            icone="bi-braces"
            titulo="Ortodontia"
            texto="Correção do alinhamento dos dentes e melhora da estética do sorriso."
          />

          <CardServico
            icone="bi-stars"
            titulo="Clareamento Dental"
            texto="Procedimentos seguros para deixar seu sorriso mais branco e saudável."
          />
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
              className="img-fluid rounded"
              alt="Consultório odontológico"
            />
          </div>

          <div className="col-md-6">
            <h2>Sobre a Clínica</h2>

            <p>
              A Clínica Sorriso Saudável foi criada com o objetivo de oferecer
              atendimento odontológico de qualidade, com foco no conforto,
              na prevenção e na saúde bucal de longo prazo.
            </p>

            <p>
              Nosso compromisso é proporcionar um ambiente acolhedor
              e tratamentos baseados nas melhores práticas da odontologia moderna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contato</h2>

        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-telephone fs-2 text-primary"></i>
            <p className="mt-2">(62) 99999-9999</p>
          </div>

          <div className="col-md-4">
            <i className="bi bi-geo-alt fs-2 text-primary"></i>
            <p className="mt-2">
              Av. Exemplo, 123
              <br />
              Centro
            </p>
          </div>

          <div className="col-md-4">
            <i className="bi bi-clock fs-2 text-primary"></i>
            <p className="mt-2">
              Seg - Sex
              <br />
              08h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreAtendimento() {
  return (
    <section id="preatendimento" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="text-center mb-4">Pré-Atendimento</h2>

            <form id="formPaciente">
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input type="text" className="form-control" required />
                    
              </div>

              <div className="mb-3">
                <label className="form-label">Telefone ou Email</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Descreva o que você está sentindo
                </label>
                <textarea className="form-control" rows="4" required></textarea>
              </div>

              <div className="alert alert-secondary small">
                Seus dados serão utilizados apenas para retorno de contato inicial
                da clínica. Não solicitamos documentos pessoais ou informações
                sensíveis de saúde neste formulário.
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Enviar informações
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-0">© 2026 Clínica Sorriso Saudável</p>
      <p className="mb-0">Roberta Souza Silva </p>
      <p className="mb-0">PUC - GO 2026</p>   
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicos />
      <Sobre />
      <Contato />
      <PreAtendimento />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);