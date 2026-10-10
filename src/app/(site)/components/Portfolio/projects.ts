export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  fullImage: string;
  fullImageSize: { width: number; height: number };
  fullImageMobile?: string;
  fullImageMobileSize?: { width: number; height: number };
  url?: string;
  captureNote?: string;
  description: string;
  contractedBy?: string;
  did: string;
  didNot?: string;
  tags: string[];
};

const retiredNote =
  'Captura do projeto como foi entregue. O site atual foi reformulado e não usa mais este trabalho.';

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'sandra-moraes',
    title: 'Psicóloga Sandra Moraes',
    category: 'Site institucional',
    image: '/portfolio/sandra-moraes.png',
    imageAlt: 'Captura do site institucional da psicóloga Sandra Moraes',
    fullImage: '/portfolio/sandra-moraes.png',
    fullImageSize: { width: 1440, height: 4874 },
    fullImageMobile: '/portfolio/sandra-moraes-mobile.png',
    fullImageMobileSize: { width: 780, height: 7439 },
    captureNote: retiredNote,
    description:
      'Site institucional para psicóloga com foco em terapia cognitivo-comportamental, criado para apresentar os serviços, informações sobre a profissional e facilitar o agendamento de consultas.',
    did: 'Desenvolvimento completo do site em WordPress.',
    tags: ['WordPress', 'Site institucional', 'Agendamento'],
  },
  {
    slug: 'elyah',
    title: 'Elyah',
    category: 'E-commerce de moda',
    image: '/portfolio/elyah.png',
    imageAlt: 'Captura da loja virtual Elyah, de acessórios femininos',
    fullImage: '/portfolio/elyah.png',
    fullImageSize: { width: 1440, height: 5682 },
    fullImageMobile: '/portfolio/elyah-mobile.png',
    fullImageMobileSize: { width: 780, height: 6810 },
    captureNote: retiredNote,
    description:
      'Loja virtual de moda feminina especializada em acessórios, criada para oferecer uma experiência de compra online prática, intuitiva e agradável, com design moderno e totalmente responsivo.',
    did: 'Desenvolvimento do e-commerce em Shopify, feito em nome da Série A.',
    tags: ['Shopify', 'E-commerce', 'Projeto da Série A'],
  },
  {
    slug: 'forum-cicb-2026',
    title: '13º Fórum CICB de Sustentabilidade',
    category: 'Landing page de evento',
    image: '/portfolio/forum-cicb-desktop.png',
    imageAlt: 'Página inicial do site do 13º Fórum CICB de Sustentabilidade',
    fullImage: '/portfolio/forum-cicb-completo.png',
    fullImageSize: { width: 1440, height: 6009 },
    fullImageMobile: '/portfolio/forum-cicb-completo-mobile.png',
    fullImageMobileSize: { width: 780, height: 13508 },
    url: 'https://forum2026.cicb.org.br/',
    description:
      'Página de divulgação e inscrição de um evento presencial em Novo Hamburgo (RS), com programação, palestrantes, contato e versões em português e inglês.',
    contractedBy: 'Studio Bah!, parceiro que nos contratou para este projeto.',
    did: 'Desenvolvimento front end do layout e otimização de performance.',
    didNot:
      'O design e a identidade visual são do Studio Bah!, que também atendeu o cliente. Nosso trabalho foi transformar esse design em código.',
    tags: ['Front end', 'Performance', 'Bilíngue'],
  },
];
