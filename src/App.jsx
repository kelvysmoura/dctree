import './App.css';

import Link from './components/Link';
import LinkList from './components/LinkList';

const links = [
  {
    label: "Quero aprender a programar"
  },
  {
    label: "Quero aprender data analytics"
  },
  {
    label: "Quero aprender marketing digital"
  },
  {
    label: "Inscreva-se nos nossos cursos",
    title: "Curso intensivo",
    description: "Veja aqui quais os cursos intensivos estão com turmas abertas e garanta sua vaga."
  },
  {
    label: "Clique e se inscreva",
    title: "Digital Plus",
    description: "Evento exclusivo para alunos!"
  }
];

function App() {
  return (
    <LinkList>
      { links.map(item => <Link {...item} />) }
    </LinkList>
  );
}

export default App;
