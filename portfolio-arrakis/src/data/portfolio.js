/**
 * src/data/portfolio.js
 * Central de Dados do Portfólio.
 * Este arquivo desacopla o CONTEÚDO (texto) da APRESENTAÇÃO (React).
 */

export const NAV_LINKS = [
  { name: 'Sobre', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export const HERO_DATA = {
  kicker: 'Ciência da Computação & Dados',
  title: 'LORRAN AZARANY',
  subtitle: 'Arquitetando Soluções em Ambientes Complexos',
  description: 'Com background analítico e transição para engenharia de software, foco na construção de sistemas resilientes, automação e visualização de dados precisa.',
};

export const STACK_DATA = [
  {
    title: "Análise de Dados",
    icon: "fa-solid fa-database",
    colorToken: "arrakis-spice", // Usaremos isso para gerar classes dinâmicas
    skills: ["Python (Intermediário)", "SQL & MySQL", "Linguagem R", "Excel Avançado"]
  },
  {
    title: "Engenharia de Software",
    icon: "fa-solid fa-code",
    colorToken: "arrakis-eyes",
    skills: ["Java (OOP)", "C / C++", "Lógica Estruturada", "Dash & Plotly"]
  },
  {
    title: "Competências",
    icon: "fa-solid fa-brain",
    colorToken: "arrakis-sand",
    skills: ["Resolução de Problemas", "Adaptabilidade", "Inglês Fluente", "Metodologia Científica"]
  }
];

export const PROJECTS_DATA = [
  {
    category: "DATA VISUALIZATION",
    title: "Financial Dashboard",
    description: "Desenvolvimento de dashboard financeiro para acompanhamento de portfólios de ações. Utiliza bibliotecas de visualização interativa.",
    tags: ["Python", "Dash", "Plotly"]
  },
  {
    category: "DATA OPTIMIZATION",
    title: "Otimização de Base de Dados (SIB)",
    description: "Limpeza crítica de dados de registros de funcionários. Alcançou mais de 90% de redução nas inconsistências.",
    tags: ["SQL", "Excel", "Data Cleaning"]
  }
];