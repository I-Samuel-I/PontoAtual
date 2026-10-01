// Notícias fictícias para desenvolvimento e testes.
// data: AAAA-MM-DD. conteudo: parágrafos separados por \n\n.
// Quanto maior a priorizacao, maior o destaque.
const noticias = [
  {
    id: 1,
    titulo: "Câmara debate melhorias no transporte público",
    data: "2026-09-28",
    resumo: "Proposta prevê novas rotas e integração entre bairros.",
    conteudo:
      "A Câmara de Vila Aurora abriu uma rodada de debates sobre o transporte público. O plano prevê revisar trajetos e publicar indicadores de regularidade das linhas.\n\nMoradores poderão sugerir mudanças em encontros regionais. Antes da votação, a comissão deverá apresentar custos e um calendário de implantação. A proposta ainda depende de aprovação.",
    categoria: "Política",
    priorizacao: 95,
  },
  {
    id: 2,
    titulo: "Consulta pública reúne sugestões para recuperar praças",
    data: "2026-09-27",
    resumo: "Moradores poderão indicar prioridades para os espaços públicos.",
    conteudo:
      "A prefeitura de Vila Aurora iniciou uma consulta para definir quais praças devem receber melhorias. As intervenções incluem iluminação, reparo de calçadas e instalação de bancos.\n\nAs sugestões serão organizadas por bairro e avaliadas conforme as condições de acessibilidade. O resultado será divulgado antes da elaboração dos projetos, permitindo acompanhar as próximas etapas.",
    categoria: "Política",
    priorizacao: 60,
  },
  {
    id: 3,
    titulo: "Comissão propõe portal de transparência para obras",
    data: "2026-09-26",
    resumo: "Projeto reúne custos, prazos e andamento das intervenções.",
    conteudo:
      "Uma comissão municipal apresentou um projeto para reunir dados de obras públicas em uma página de consulta. O texto prevê divulgar valores, empresas responsáveis e datas estimadas.\n\nMudanças de orçamento e atrasos deverão incluir justificativas. Associações de moradores pediram informações em linguagem simples. O projeto seguirá para análise antes de entrar em votação.",
    categoria: "Política",
    priorizacao: 75,
  },
  {
    id: 4,
    titulo: "Feira de produtores movimenta comércio local",
    data: "2026-09-28",
    resumo: "Evento reúne alimentos, artesanato e negócios de bairro.",
    conteudo:
      "Pequenos produtores participaram de uma feira na praça de Vila Aurora. As bancas ofereceram hortaliças, pães e peças artesanais, aproximando produtores e consumidores.\n\nOs expositores puderam apresentar a origem das mercadorias e receber sugestões. A organização acompanhará as primeiras edições antes de definir um calendário permanente, considerando custos de estrutura e transporte.",
    categoria: "Economia",
    priorizacao: 65,
  },
  {
    id: 5,
    titulo: "Oficinas ajudam empreendedores a organizar as finanças",
    data: "2026-09-27",
    resumo: "Aulas abordam controle de caixa, preços e estoque.",
    conteudo:
      "O centro comunitário abriu inscrições para oficinas gratuitas de gestão. Os encontros abordarão organização financeira e planejamento das compras de materiais para pequenos negócios.\n\nAs atividades utilizarão exemplos de comércios locais e exercícios em planilhas simples. Cada participante poderá montar um plano para seu negócio. Haverá turmas pela manhã e à noite.",
    categoria: "Economia",
    priorizacao: 50,
  },
  {
    id: 6,
    titulo: "Mercado compartilhado recebe comerciantes de bairro",
    data: "2026-09-26",
    resumo: "Novo espaço reúne bancas e serviços em uma área coberta.",
    conteudo:
      "O Jardim das Pontes recebeu um mercado para comerciantes que trabalhavam em pontos dispersos. O espaço reúne alimentos e pequenos serviços perto de uma área de circulação de pedestres.\n\nUma associação ficará responsável pela manutenção e divisão das despesas comuns. Os participantes acompanharão o fluxo de visitantes para ajustar horários e avaliar a inclusão de novas atividades.",
    categoria: "Economia",
    priorizacao: 70,
  },
  {
    id: 7,
    titulo: "Estudantes criam sensores para acompanhar consumo de água",
    data: "2026-09-28",
    resumo: "Protótipo apresenta medições e ajuda a investigar desperdícios.",
    conteudo:
      "Estudantes de Vila Aurora desenvolveram um protótipo para acompanhar o consumo de água em uma escola. O equipamento registra medições em um painel consultado pela manutenção.\n\nA proposta é comparar padrões de uso e investigar variações inesperadas. O sistema ainda precisa de ajustes de instalação e calibração antes que o grupo avalie seu uso em outros prédios.",
    categoria: "Tecnologia",
    priorizacao: 90,
  },
  {
    id: 8,
    titulo: "Biblioteca oferece oficinas de programação",
    data: "2026-09-27",
    resumo: "Participantes criarão páginas com HTML, CSS e JavaScript.",
    conteudo:
      "A biblioteca comunitária anunciou oficinas para iniciantes. As aulas começarão pela estrutura HTML e avançarão para estilos em CSS e pequenas interações com JavaScript.\n\nOs participantes desenvolverão um site utilizando os computadores da biblioteca. Os exercícios poderão ser retomados em casa, sem exigência de experiência anterior. As inscrições serão feitas no local conforme a disponibilidade de vagas.",
    categoria: "Tecnologia",
    priorizacao: 55,
  },
  {
    id: 9,
    titulo: "Aplicativo experimental reúne pontos de coleta seletiva",
    data: "2026-09-26",
    resumo: "Projeto organiza locais de entrega e horários de atendimento.",
    conteudo:
      "Voluntários apresentaram um aplicativo com informações de coleta seletiva em Vila Aurora. A ferramenta reúne pontos de entrega e horários informados pelos responsáveis de cada local.\n\nDurante os testes, usuários poderão apontar dados desatualizados e sugerir melhorias. A equipe verificará as informações antes de ampliar o acesso. O projeto integra uma atividade de formação tecnológica.",
    categoria: "Tecnologia",
    priorizacao: 80,
  },
  {
    id: 19,
    titulo: "Realidade virtual ganha espaço na educação",
    data: "2026-09-25",
    resumo: "Escolas testam ambientes imersivos para apoiar as aulas.",
    conteudo:
      "Escolas de Vila Aurora começaram a testar ambientes de realidade virtual em atividades de ciências e história. Os professores selecionaram experiências curtas para complementar as aulas e estimular a participação dos estudantes.\n\nA equipe pedagógica acompanhará o uso dos equipamentos e avaliará a acessibilidade das atividades antes de ampliar o projeto.",
    categoria: "Tecnologia",
    priorizacao: 74,
  },
  {
    id: 20,
    titulo: "Novas redes conectam bairros ao serviço público",
    data: "2026-09-24",
    resumo: "Projeto amplia o acesso a serviços digitais municipais.",
    conteudo:
      "Um projeto piloto instalou novos pontos de conexão em equipamentos públicos de Vila Aurora. A iniciativa pretende facilitar o acesso a serviços digitais e oferecer suporte para moradores que ainda não utilizam as plataformas municipais.\n\nOs resultados serão acompanhados durante os próximos meses, com atenção à estabilidade e ao número de atendimentos realizados.",
    categoria: "Tecnologia",
    priorizacao: 67,
  },
  {
    id: 21,
    titulo: "Sensores ajudam a monitorar a qualidade do ar",
    data: "2026-09-23",
    resumo: "Dados abertos permitem acompanhar mudanças em diferentes regiões.",
    conteudo:
      "Sensores instalados em três pontos de Vila Aurora começaram a registrar dados sobre a qualidade do ar. As medições serão disponibilizadas em um painel para apoiar pesquisas e orientar ações de manutenção urbana.\n\nO projeto ainda está em fase de calibração e deverá comparar os resultados com outras fontes antes da publicação de relatórios regulares.",
    categoria: "Tecnologia",
    priorizacao: 63,
  },
  {
    id: 22,
    titulo: "Startups apresentam soluções para pequenos negócios",
    data: "2026-09-22",
    resumo: "Encontro reúne ferramentas digitais voltadas ao comércio local.",
    conteudo:
      "Startups da região apresentaram ferramentas para organizar estoque, pagamentos e comunicação com clientes. O encontro aproximou empreendedores e equipes que estão desenvolvendo soluções para pequenos negócios.\n\nAs empresas deverão abrir um período de testes para receber sugestões dos comerciantes e ajustar as ferramentas às rotinas locais.",
    categoria: "Tecnologia",
    priorizacao: 59,
  },
  {
    id: 23,
    titulo: "Oficina ensina cuidados básicos de segurança digital",
    data: "2026-09-21",
    resumo: "Participantes aprendem a proteger contas e identificar golpes.",
    conteudo:
      "Uma oficina comunitária reuniu moradores para explicar cuidados com senhas, autenticação e mensagens suspeitas. A atividade apresentou exemplos práticos e materiais para consulta depois do encontro.\n\nNovas turmas serão organizadas conforme a procura. A equipe também pretende levar o conteúdo a escolas e associações de bairro.",
    categoria: "Tecnologia",
    priorizacao: 56,
  },
  {
    id: 10,
    titulo: "Cidades trocam experiências sobre áreas verdes",
    data: "2026-09-28",
    resumo:
      "Encontro internacional discute arborização e manutenção de praças.",
    conteudo:
      "Neste cenário fictício, representantes de cidades de diferentes países participaram de um encontro sobre áreas verdes. Foram apresentados projetos de viveiros e recuperação de praças.\n\nOs participantes destacaram a manutenção dos espaços depois das obras e propuseram novas reuniões para compartilhar resultados. Cada cidade deverá adaptar as ideias ao clima, à infraestrutura e ao orçamento local.",
    categoria: "Mundo",
    priorizacao: 85,
  },
  {
    id: 11,
    titulo: "Bibliotecas preparam intercâmbio cultural entre países",
    data: "2026-09-27",
    resumo: "Programação terá leituras conjuntas e encontros virtuais.",
    conteudo:
      "Uma rede fictícia de bibliotecas anunciou um intercâmbio para aproximar leitores de diferentes países. A programação prevê encontros sobre literatura e apresentações de autores com apoio de mediadores.\n\nCada biblioteca selecionará textos curtos para discussão em grupo. Os organizadores estudarão horários acessíveis às comunidades. A continuidade dependerá da avaliação dos leitores e das equipes envolvidas nas primeiras atividades.",
    categoria: "Mundo",
    priorizacao: 45,
  },
  {
    id: 12,
    titulo: "Encontro debate redução do desperdício de alimentos",
    data: "2026-09-26",
    resumo:
      "Organizações compartilham experiências de armazenamento e distribuição.",
    conteudo:
      "Em um encontro internacional fictício, organizações discutiram iniciativas contra o desperdício. As experiências incluíram planejamento de compras, armazenamento e distribuição de excedentes adequados ao consumo.\n\nOs grupos ressaltaram cuidados no transporte e a importância de registrar resultados. Uma proposta prevê compartilhar materiais educativos. As próximas reuniões compararão as experiências de cada comunidade participante.",
    categoria: "Mundo",
    priorizacao: 68,
  },
  {
    id: 13,
    titulo: "Festival de cinema independente ocupa o centro",
    data: "2026-09-28",
    resumo:
      "Mostra reúne curtas, sessões gratuitas e conversas com realizadores.",
    conteudo:
      "Vila Aurora receberá um festival com sessões no teatro e na praça central. Os curtas selecionados apresentam histórias sobre memória, cotidiano e relações entre moradores.\n\nDepois de algumas exibições, o público conversará com as equipes sobre roteiro e produção. Também haverá uma oficina para estudantes. As sessões externas terão alternativa coberta em caso de chuva.",
    categoria: "Cultura",
    priorizacao: 88,
  },
  {
    id: 14,
    titulo: "Exposição recupera memórias de antigos moradores",
    data: "2026-09-27",
    resumo: "Fotografias e relatos mostram transformações nos bairros.",
    conteudo:
      "O centro cultural reúne fotografias cedidas por famílias e relatos de moradores. O percurso apresenta cenas de trabalho, festas de rua e mudanças nos espaços de convivência.\n\nAs descrições foram construídas com quem guardou as imagens. Visitantes poderão registrar lembranças em um mural. A equipe organizará conversas para identificar pessoas e lugares presentes nas fotografias e ampliar o acervo.",
    categoria: "Cultura",
    priorizacao: 58,
  },
  {
    id: 15,
    titulo: "Feira literária abre espaço para autores da região",
    data: "2026-09-26",
    resumo: "Evento terá lançamentos, rodas de leitura e atividades infantis.",
    conteudo:
      "Autores participarão de uma feira na biblioteca de Vila Aurora. A programação inclui apresentações de livros, conversas sobre escrita e encontros com editoras independentes.\n\nUma área receberá contação de histórias e oficinas para crianças. Os organizadores reservaram horários para escolas e público geral. O evento aceitará doações de livros em bom estado para ampliar o acervo comunitário.",
    categoria: "Cultura",
    priorizacao: 72,
  },
  {
    id: 16,
    titulo: "Equipe de Vila Aurora chega à final regional",
    data: "2026-09-28",
    resumo: "Classificação foi conquistada com um gol nos minutos finais.",
    conteudo:
      "A equipe de Vila Aurora garantiu vaga na final do torneio fictício ao vencer por dois a um. Após um primeiro tempo empatado, o gol decisivo saiu nos minutos finais.\n\nA comissão destacou a organização defensiva e a participação dos reservas. O grupo terá uma semana de preparação. As orientações ao público serão divulgadas após a confirmação do local da final.",
    categoria: "Esportes",
    priorizacao: 92,
  },
  {
    id: 17,
    titulo: "Parque recebe circuito de corrida para iniciantes",
    data: "2026-09-27",
    resumo: "Atividade terá percursos curtos e largadas em grupos.",
    conteudo:
      "O parque das Nascentes receberá um circuito recreativo. Os responsáveis prepararam percursos curtos e horários de saída diferentes para distribuir os participantes pelas pistas.\n\nO evento contará com pontos de apoio e sinalização nos cruzamentos. Uma caminhada também integra a programação. A organização divulgará regras de inscrição e eventuais mudanças motivadas pelas condições do tempo.",
    categoria: "Esportes",
    priorizacao: 52,
  },
  {
    id: 18,
    titulo: "Projeto amplia aulas de vôlei em quadras comunitárias",
    data: "2026-09-26",
    resumo: "Novas turmas atenderão jovens fora do horário escolar.",
    conteudo:
      "Um projeto de Vila Aurora anunciou turmas de vôlei em duas quadras. As atividades acontecerão fora do horário escolar e começarão com fundamentos de passe, saque e trabalho em equipe.\n\nOs grupos serão organizados por idade e experiência para adaptar os exercícios. O material será compartilhado nos treinos, e as famílias receberão informações sobre a rotina. Ao final, haverá um encontro entre as turmas.",
    categoria: "Esportes",
    priorizacao: 62,
  },
];

window.noticias = noticias;
