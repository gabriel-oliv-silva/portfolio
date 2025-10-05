const sections = {
      front: `
        <h2>Projetos Front-End</h2>
        <p>Alguns dos meus projetos com HTML, CSS, JS e Bootstrap:</p>
        <div class="card bg-secondary text-light my-3">
          <div class="card-body">
            <h5 class="card-title">Landing Page Responsiva</h5>
            <p class="card-text">Desenvolvida com Bootstrap 5 e design moderno.</p>
          </div>
        </div>
      `,
      java: `
        <h2>Projetos Java</h2>
        <p>Exemplos de sistemas desktop e back-end com Java:</p>
        <div class="card bg-secondary text-light my-3">
          <div class="card-body">
            <h5 class="card-title">Sistema de Estoque</h5>
            <p class="card-text">Feito com JDBC e MySQL, aplicando POO e DAO.</p>
          </div>
        </div>
      `,
      csharp: `
        <h2>Projetos C#</h2>
        <p>Meus primeiros projetos com C# e MySQL:</p>
        <div class="card bg-secondary text-light my-3">
          <div class="card-body">
            <h5 class="card-title">CRUD de Usuários</h5>
            <p class="card-text">Aplicação feita no VS Code com integração de banco.</p>
          </div>
        </div>
      `
    };

    function loadSection(name) {
      document.getElementsByClassName('container')[0].innerHTML = sections[name];
    }