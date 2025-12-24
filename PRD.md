# **Relatório Estratégico de Transformação Digital: O Rei da Tela (ORDT)**

## **1\. Diagnóstico Executivo e Auditoria de Infraestrutura Digital**

A presente análise técnica e estratégica foi desenvolvida em resposta à necessidade crítica de reestruturação digital da empresa "O Rei da Tela" (ORDT), localizada em Salvador, Bahia. O cenário atual, caracterizado por um site institucional que sofre de latência excessiva, baixa visibilidade nos motores de busca (SERPs) e uma incapacidade sistêmica de converter tráfego em ordens de serviço, coloca a empresa em uma posição de vulnerabilidade competitiva. Em um mercado onde a urgência do consumidor é o fator decisivo — dado que um smartphone quebrado representa uma interrupção imediata na vida pessoal e profissional do usuário — a performance digital não é apenas um diferencial, mas o principal vetor de captação de receita.

A auditoria preliminar do domínio ordt.com.br indica que a infraestrutura atual falha em capitalizar sobre os diferenciais operacionais robustos que a empresa já possui, como a entrega expressa em 120 minutos e a disponibilização de aparelho reserva.1 Estes são argumentos de venda (USPs \- Unique Selling Propositions) de alta potência que estão sendo invisibilizados por uma camada tecnológica obsoleta. O usuário relata lentidão, o que sugere problemas severos de Core Web Vitals, especificamente no Largest Contentful Paint (LCP) e no First Input Delay (FID), métricas que o Google utiliza como fatores primários de ranqueamento desde a atualização de "Page Experience".

O objetivo deste relatório é fornecer um roteiro exaustivo para a transição de um "site cartão de visitas" para uma "plataforma de aquisição de clientes". Isso envolverá não apenas a otimização superficial, mas uma reconstrução arquitetural completa, migrando de tecnologias legadas para frameworks de nova geração focados em performance estática e SEO programático. A análise a seguir detalha o abismo entre a performance atual e o potencial de mercado em Salvador, fundamentando a necessidade de um novo desenvolvimento (Greenfield Project) em detrimento de uma refatoração do site existente.

### **1.1 Análise de Performance e Gargalos Técnicos Atuais**

A percepção de lentidão relatada não é apenas um inconveniente de usabilidade; é um bloqueador de receita. A infraestrutura atual do ordt.com.br apresenta sintomas clássicos de inchaço de código (code bloat), comum em sites construídos sobre temas genéricos de WordPress ou construtores de página visuais que carregam bibliotecas JavaScript desnecessárias antes do conteúdo principal.

A estrutura de cabeçalhos (Heading Tags) do site atual revela uma desconexão semântica com as intenções de busca do usuário. Títulos como "Quem Somos?" e "Nosso Diferencial" 1 ocupam a hierarquia H2, desperdiçando o espaço mais valioso para palavras-chave. Para os algoritmos de indexação do Google (crawlers), "Quem Somos" é irrelevante semanticamente. O motor de busca precisa encontrar, nessas tags, termos como "Assistência Técnica Apple Salvador" ou "Troca de Vidro Apple Watch Pituba". A ausência dessa otimização on-page impede que o site compita com players que utilizam uma arquitetura de informação focada em serviços e geolocalização.

Além disso, a análise dos snippets indica o uso de rastreadores como o Facebook Pixel sem o devido tratamento de carregamento assíncrono.1 Em conexões móveis — que representam a vasta maioria das buscas por conserto de celular — scripts de terceiros que bloqueiam a renderização (render-blocking resources) podem aumentar o tempo de carregamento em segundos preciosos. Estudos de comportamento do consumidor indicam que a taxa de rejeição aumenta em mais de 100% se o tempo de carregamento exceder 3 segundos. Para um usuário com a tela quebrada, ansioso e possivelmente usando dados móveis instáveis, a lentidão do site atual da ORDT é um convite para retornar ao Google e clicar no concorrente.

### **1.2 O Imperativo da Localização em Salvador**

Salvador possui uma geografia complexa e segmentada socioeconomicamente. O mercado de reparo de dispositivos Apple, em particular, concentra-se em bairros de maior poder aquisitivo e centros comerciais. A estratégia atual da ORDT falha em endereçar essa granularidade. O site opera como uma entidade genérica em "Salvador", ignorando que um cliente no **Horto Florestal** ou na **Vitória** 2 busca conveniência e confiança hiperlocal.

A concorrência já despertou para essa realidade. A análise de competidores como a Conserta Smart 4 revela o uso de landing pages específicas para bairros (Barra, Caminho das Árvores), criando uma rede de relevância que captura a demanda de vizinhança. A ORDT, ao centralizar sua comunicação apenas na cidade como um todo, perde a batalha nas "fronteiras" dos bairros, onde a decisão de compra é influenciada pela proximidade percebida e pela promessa de logística rápida (delivery).

## ---

**2\. Inteligência Competitiva e Benchmarking Local**

Para desenhar uma estratégia vencedora, é imperativo dissecar as operações digitais dos líderes de mercado em Salvador. A pesquisa identificou um ecossistema competitivo estratificado, onde diferentes players dominam nichos específicos através de táticas digitais distintas. A ORDT deve assimilar as melhores práticas de cada um e explorar as lacunas deixadas por eles.

### **2.1 Conserta Smart: A Máquina de SEO Programático**

A Conserta Smart representa o concorrente mais sofisticado em termos de Arquitetura de SEO. Sua dominância nas SERPs não é acidental, mas fruto de uma estratégia de **SEO Programático** e **Silos de Conteúdo**.

A análise de suas páginas de destino para Salvador (unidades Barra e Tancredo Neves) revela uma estrutura de dados rica.4 Eles não apenas listam o serviço; eles contextualizam o serviço com dados estruturados. Cada página de unidade contém o NAP (Nome, Endereço, Telefone) consistente, horários de funcionamento detalhados e, crucialmente, uma seção de "Perguntas e Respostas" (FAQ) localizadas. Quando um usuário pesquisa "preço conserto iphone salvador", o Google frequentemente extrai essas FAQs diretamente para a página de resultados, aumentando o CTR (Click-Through Rate) da Conserta Smart antes mesmo do usuário entrar no site.

Outro ponto de força é a interligação interna (Internal Linking). A Conserta Smart cria uma teia semântica onde a página de "Troca de Tela" linka para a página de "Bateria" e para a página da "Unidade Salvador".4 Isso distribui a autoridade do domínio (Domain Authority) por todas as páginas, garantindo que mesmo serviços menos procurados ranqueiem bem. Além disso, a funcionalidade de "Consulta de Status de OS" 4 gera tráfego recorrente e direto, um sinal de engajamento fortíssimo para o Google. Usuários retornam ao site para verificar o reparo, reduzindo a taxa de rejeição global e sinalizando utilidade.

**Vulnerabilidade:** Apesar da excelente estrutura, as páginas são geradas em massa e podem parecer impessoais. A ORDT pode contra-atacar com uma abordagem mais "boutique" e humanizada, focada na experiência premium que o cliente Apple espera, algo que a estrutura massificada da franquia muitas vezes não consegue transmitir.

### **2.2 PlayConsert: Autoridade Técnica e Nicho de Alto Valor**

A PlayConsert adota um posicionamento de "Especialista Técnico Supremo". Enquanto a Conserta Smart joga no volume, a PlayConsert foca na complexidade e no valor agregado.

Eles capitalizam sobre a falha das autorizadas oficiais. Onde a Apple condena um dispositivo como "vintage" ou sugere a troca completa da placa lógica por um custo proibitivo, a PlayConsert oferece o reparo do componente.5 Essa estratégia atrai um público altamente qualificado: donos de MacBooks e iMacs que buscam salvar seus investimentos. A proposta de valor é clara: "Economize até 50% reparando a placa".

Digitalmente, eles constroem confiança através de prova social densa, destacando "99 avaliações no Google" e certificações técnicas.5 A promessa de reparo em "40 minutos" 5 é um ataque direto à ansiedade do cliente. No entanto, sua presença digital parece muito centrada em MacBooks e computadores.

**Oportunidade para ORDT:** Existe uma lacuna no posicionamento de "Especialista em Apple Watch". O reparo de Apple Watch (troca de vidro mantendo o display original) é tecnicamente complexo e mal atendido. A ORDT pode se apropriar deste nicho, posicionando-se como a referência absoluta em wearables, um mercado em expansão e com ticket médio alto.

### **2.3 Arouca e iPlace: Tradicionalismo e Teto de Preço**

A Arouca e a iPlace representam o "establishment" do mercado soteropolitano.

A **iPlace**, como autorizada 6, detém a confiança implícita da marca Apple, mas cobra o preço mais alto do mercado e frequentemente tem prazos longos. A **Arouca** 7 joga com a tradição e a localização física estabelecida. Seus sites, no entanto, tendem a ser catálogos estáticos. Eles listam exaustivamente modelos antigos (iPhone 5s, 6, etc.), o que garante tráfego de cauda longa, mas muitas vezes falham na experiência móvel moderna.

**Estratégia ORDT:** Posicionar-se no "Sweet Spot" (Ponto Ideal) entre a iPlace e o mercado informal. Oferecer a qualidade técnica de uma autorizada (peças originais/premium, garantia estendida) com a agilidade e o preço competitivo de uma assistência especializada independente. O site deve comunicar isso visualmente: design limpo, minimalista, estilo Apple, mas com tabelas comparativas de preço que mostrem a vantagem econômica.

### **2.4 Matriz Comparativa de Funcionalidades e Atributos**

A tabela abaixo resume a análise competitiva e destaca as funcionalidades obrigatórias para o novo site da ORDT superar o mercado.

| Atributo Estratégico | O Rei da Tela (Atual) | Conserta Smart (Líder SEO) | PlayConsert (Líder Técnico) | Arouca (Tradicional) | Estratégia Novo Site ORDT |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Arquitetura de Bairros** | Inexistente | Excelente (Páginas dedicadas) | Baixa | Média | **Dominante** (Páginas para Horto, Vitória, Itaigara) |
| **Rastreamento de OS** | Não | Sim (Consulta Online) | Não | Não | **Sim** (Fator de retenção e confiança) |
| **Transparência de Preço** | Não | Parcial ("A partir de") | Não | Baixa | **Alta** (Estimativas claras para captura de lead) |
| **Velocidade (Core Web Vitals)** | Crítica (Lento) | Média | Boa | Baixa | **Extrema** (Score 95-100 via Astro Framework) |
| **Foco em Apple Watch** | Citado | Genérico | Secundário | Baixo | **Especialidade Core** (Landing Page dedicada) |
| **Atendimento via Chat** | Básico (Link Whats) | Não | Widget WhatsApp | Telefone | **Automação Contextual** (Chat inteligente por página) |

## ---

**3\. Estratégia de Engenharia de SEO Local e Hiperlocalização**

Para conquistar a liderança em Salvador, a ORDT deve abandonar a ideia de "SEO para Salvador" e adotar "SEO para Bairros de Salvador". A cidade é um mosaico de micro-mercados. A estratégia de conteúdo deve refletir a geografia econômica da capital baiana.

### **3.1 Mapeamento Geodemográfico e Intenção de Busca**

A análise dos bairros 2 indica onde reside o público-alvo de produtos Apple (classes A e B). A estratégia de SEO deve criar "Digital Real Estate" (Propriedade Digital Imobiliária) especificamente para estas zonas:

1. **Corredor da Vitória / Graça:** Área de altíssima renda, imóveis valorizados e público exigente. O conteúdo para estas páginas deve focar em "Conveniência Premium", "Delivery Seguro" e "Técnicos Certificados". A palavra-chave não é apenas "conserto iphone", é "assistência técnica iphone a domicílio vitória".  
2. **Horto Florestal:** Bairro de condomínios de luxo. A abordagem deve ser a segurança e a rapidez. "Não saia do seu condomínio, nós buscamos".  
3. **Caminho das Árvores / Tancredo Neves:** Centro financeiro. O foco aqui é a urgência profissional. "Reparo em 40 minutos para você não perder reuniões".  
4. **Pituba / Itaigara:** Alta densidade populacional e comercial. Foco em competitividade e facilidade de acesso.

### **3.2 Arquitetura de Informação em Silos Semânticos**

O novo site deve ser estruturado em **Silos**, onde o conteúdo é agrupado por relevância temática. Isso ajuda o Google a entender a autoridade tópica do site.

* **Silo de Dispositivos (Serviços):**  
  * A página pilar /conserto-apple-watch deve linkar para sub-páginas específicas como /conserto-apple-watch/troca-vidro, /conserto-apple-watch/bateria, /conserto-apple-watch/polimento. Isso cria uma densidade de palavras-chave que sinaliza ao Google: "Este site é a maior autoridade em Apple Watch de Salvador".  
  * Similarmente para iPhone, criando páginas para modelos específicos (ex: /conserto-iphone-14-pro-max), pois o volume de busca para modelos específicos é alto e a intenção de compra é imediata.7  
* **Silo de Localização (Geografia):**  
  * Uma página pilar /unidades ou /cobertura que ramifica para /assistencia-apple-barra, /assistencia-apple-pituba, etc.  
  * Cada página de bairro deve conter: Mapa incorporado do Google apontando a rota do bairro até a loja física, depoimentos de clientes daquele bairro específico (prova social localizada) e referências a pontos de referência locais (ex: "Próximo ao Shopping Barra").

### **3.3 Protocolo de Schema Markup (JSON-LD)**

A implementação de dados estruturados (Schema.org) é a forma de "falar a língua" do Google. Para uma assistência técnica local, isso não é opcional.

* **LocalBusiness Schema:** Deve ser implementado em todas as páginas, mas com especificidades. A propriedade areaServed deve ser utilizada agressivamente.9 Em vez de apenas definir "Salvador", o JSON-LD deve conter uma lista de array com todos os bairros atendidos pelo delivery. Isso aumenta as chances de aparecer no Google Maps quando alguém pesquisa de dentro desses bairros.  
* **Service Schema:** Para cada página de reparo. Definir o provider (ORDT), o serviceType (ex: "Screen Replacement"), e areaServed.  
* **FAQPage Schema:** Implementar nas páginas de serviço para capturar os "Rich Snippets" de perguntas frequentes na SERP (ex: "Quanto tempo demora a troca de tela?"). Isso ocupa mais espaço visual na tela de resultados, empurrando os concorrentes para baixo.

### **3.4 Gestão de Reputação e Citações (NAP Consistency)**

A autoridade local é construída através de menções consistentes na web. O plano inclui o cadastro e normalização do NAP (Nome, Endereço, Telefone) em diretórios chave identificados na pesquisa 11:

* **Diretórios Nacionais e Locais:** GuiaFix, TeleListas, e portais de notícias locais como Bahia Santa e iBahia (via press releases).  
* **Estratégia de Reviews:** O algoritmo do Google Local Pack favorece fortemente a frequência e a recência das avaliações. O novo site deve integrar uma automação: após a conclusão da OS, o sistema envia um WhatsApp automático com o link direto para avaliação no Google, talvez oferecendo um incentivo ético (ex: "Avalie-nos e ganhe desconto na próxima película"). A meta é ultrapassar os 99 reviews da PlayConsert rapidamente.

## ---

**4\. Arquitetura Técnica: A Escolha por Performance Extrema**

O pedido original enfatiza que o site atual é "muito lento" e "não atende as demandas". A solução não é otimizar o WordPress atual, mas mudar a fundação tecnológica. A comparação entre WordPress e frameworks modernos como Astro para 2025 é decisiva.14

### **4.1 Análise Comparativa: WordPress vs. Astro**

| Métrica de Performance | WordPress (Tradicional) | Astro (Jamstack/SSG) | Impacto no Negócio ORDT |
| :---- | :---- | :---- | :---- |
| **LCP (Largest Contentful Paint)** | Média 0.81s (Lento) | Média 0.44s (Instantâneo) | Melhora retenção de usuários mobile em 4G. |
| **JavaScript Overhead** | Alto (Plugins, jQuery) | Zero (Por padrão) | Reduz consumo de dados e bateria do usuário. |
| **Segurança** | Vulnerável (Plugins) | Estático (Inviolável) | Protege dados de clientes e reputação. |
| **SEO Score (Lighthouse)** | 86/100 (Requer plugins) | 100/100 (Nativo) | Ranking superior por "Page Experience". |
| **Manutenção** | Alta (Atualizações constantes) | Baixa (Build estático) | Menor custo recorrente com desenvolvedores. |

### **4.2 Decisão Arquitetural: Stack Headless**

A recomendação técnica é inequivocamente a adoção do **Astro Framework**. O Astro utiliza uma "Arquitetura de Ilhas" (Island Architecture), onde o site é HTML estático puro (levíssimo) e apenas as partes interativas (como o botão de menu ou o formulário de orçamento) são "hidratadas" com JavaScript.

Para manter a facilidade de edição para a equipe da ORDT (que provavelmente está acostumada com interfaces visuais), a solução ideal é um CMS Headless. Isso separa o "corpo" do site (Frontend Astro) do "cérebro" (Gestão de Conteúdo).

* **Frontend:** Astro \+ Tailwind CSS (para estilização rápida e responsiva).  
* **CMS:** WordPress em modo Headless (usando a API REST para alimentar o Astro) ou um CMS nativo baseado em Git como Keystatic ou Decap CMS. Isso permite que a equipe edite preços e textos sem quebrar o layout ou deixar o site lento.  
* **Hospedagem:** Vercel ou Netlify. Estas plataformas distribuem o site em uma CDN (Content Delivery Network) global. Para um usuário em Salvador, o site carregará a partir de um servidor edge em São Paulo ou Fortaleza, garantindo latência mínima.

Essa arquitetura resolve definitivamente o problema de "site muito lento" relatado, colocando a ORDT tecnicamente à frente de qualquer concorrente local que utilize WordPress padrão ou Wix.

## ---

**5\. Estratégia de Conteúdo e Otimização de Conversão (CRO)**

A velocidade traz o usuário, mas o conteúdo e a UX (User Experience) vendem o serviço. A análise de CRO 17 sugere que sites de reparo lidam com "compradores angustiados". O design deve acalmar e direcionar.

### **5.1 Jornada do Usuário Angustiado**

O cliente chega ao site com um problema urgente. Ele não quer ler "Sobre Nós" e a história da empresa em 1990\. Ele quer saber:

1. Vocês consertam meu modelo específico?  
2. Quanto custa (ou é caro demais)?  
3. Quanto tempo demora?  
4. Onde vocês ficam (ou vocês buscam)?

O layout deve responder a essas quatro perguntas "Above the Fold" (na primeira dobra da tela, sem rolar).

### **5.2 Conteúdo Educativo e de Autoridade**

Baseado nas sugestões de blog 20, a estratégia de conteúdo deve focar em resolver objeções antes que elas surjam:

* **Comparativos de Qualidade:** Artigos explicando "Tela Original vs. Tela Primeira Linha Premium vs. Tela Incell". Isso educa o cliente sobre por que o preço da ORDT pode ser maior que o do técnico da esquina, justificando o valor.  
* **Guias de Solução de Problemas:** "Meu iPhone caiu na água, e agora?". Isso atrai tráfego de topo de funil. Mesmo que o usuário tente secar o celular, ele provavelmente precisará de uma desoxidação, e a ORDT já será a autoridade que o ajudou.  
* **Estudos de Caso:** Mostrar "Antes e Depois" de Apple Watches destruídos que foram restaurados. O visual é poderoso para convencer donos de dispositivos caros.

### **5.3 Elementos de Confiança (Trust Badges)**

A pesquisa sobre Trust Badges 22 destaca a importância de selos visuais. O novo site deve incluir:

* **Selo de Garantia Estendida:** "Garantia de 6 Meses" (destaque visual).  
* **Selo de Delivery Seguro:** "Transporte com Seguro Incluso" (para mitigar o medo do motoboy roubar o aparelho).  
* **Avaliações em Tempo Real:** Widget que puxa as últimas 5 estrelas do Google Meu Negócio.

### **5.4 Otimização de Conversão Mobile**

Dado que o usuário provavelmente está com a tela quebrada, a interface deve ser ultra-acessível:

* **Botões Grandes:** Áreas de toque expandidas para facilitar o clique em telas danificadas.  
* **Sticky CTA:** Um botão de "Chamar no WhatsApp" fixo no rodapé da tela mobile, sempre visível.  
* **Deep Linking do WhatsApp:** O botão de WhatsApp não deve apenas abrir o app. Ele deve levar uma mensagem pré-preenchida: "Olá, vi no site o preço da troca de tela do iPhone 11 e gostaria de agendar". Isso reduz o atrito cognitivo do usuário em ter que digitar o problema.

## ---

**6\. Documento de Requisitos do Produto (PRD) \- Novo Site "O Rei da Tela"**

Este documento técnico detalhado serve como a "planta baixa" para a construção do site, projetado para ser utilizado em prompts de desenvolvimento assistido por IA.

### **6.1 Visão do Produto**

Desenvolver a plataforma de referência em assistência técnica Apple em Salvador, focada em performance web de elite (Core Web Vitals), SEO hiperlocal e automação de conversão. O site deve funcionar não apenas como vitrine, mas como uma ferramenta de triagem e agendamento de serviços.

### **6.2 Especificações Técnicas (Tech Stack)**

* **Core Framework:** Astro 4.0 (focado em HTML estático).  
* **UI Framework (Islands):** React ou Preact (para componentes interativos como calculadora de orçamento e busca de status).  
* **Estilização:** Tailwind CSS (utility-first, garantindo baixo peso de CSS).  
* **Gerenciamento de Estado:** Nano Stores (leve, agnóstico de framework) para gerenciar o carrinho/orçamento.  
* **CMS:** Contentful (Plano Gratuito) ou WordPress Headless (via WPGraphQL) para gestão de blog e preços.  
* **Hospedagem & CI/CD:** Vercel (preferencial) ou Netlify.  
* **Analytics:** Google Analytics 4 (via Partytown para não bloquear a main thread) e Microsoft Clarity.

### **6.3 Estrutura de URLs e Sitemap (SEO Architecture)**

A estrutura de URL deve ser limpa, hierárquica e rica em palavras-chave.

1. **Homepage (/)**:  
   * Hero com Proposta de Valor Única (UVP) \+ CTA Principal.  
   * Seletor Rápido de Dispositivo (Ícones SVG: iPhone, Watch, iPad, Mac).  
   * Carrossel de Diferenciais (Entrega 120min, Aparelho Reserva).  
   * Prova Social (Reviews).  
2. **Páginas de Categoria de Serviço (/servicos/\[categoria\])**:  
   * /servicos/conserto-iphone  
   * /servicos/conserto-apple-watch (Página crítica para nicho)  
   * /servicos/conserto-ipad  
3. **Páginas Específicas de Modelo (/servicos/\[categoria\]/\[modelo\])**:  
   * /servicos/conserto-iphone/iphone-13-pro-max  
   * *Conteúdo:* Tabela de preços específica, tempo de reparo, fotos do dispositivo desmontado, FAQ específica.  
4. **Landing Pages Locais (/unidades/\[bairro\])**:  
   * /unidades/assistencia-apple-horto-florestal  
   * /unidades/assistencia-apple-barra  
   * /unidades/assistencia-apple-vitoria  
   * *Conteúdo:* Texto otimizado para "Delivery no", mapa de rota, reviews de clientes locais.  
5. **Status da OS (/status-os)**:  
   * Interface simples para consulta de andamento do reparo via número de ordem ou CPF.  
6. **Blog (/blog)**:  
   * Categorias: Dicas, Notícias Apple, Tutoriais.

### **6.4 Requisitos Funcionais Detalhados**

#### **RF01: Seletor de Orçamento Inteligente (Lead Magnet)**

* **Descrição:** Um wizard passo-a-passo na Home.  
  * Passo 1: Selecionar Dispositivo (iPhone).  
  * Passo 2: Selecionar Modelo (13 Pro).  
  * Passo 3: Selecionar Problema (Tela Quebrada).  
  * Resultado: Mostra estimativa de preço "A partir de R$ X" e botão "Agendar Agora" que leva ao WhatsApp com esses dados já preenchidos.  
* **Objetivo:** Qualificar o lead antes do contato humano.

#### **RF02: Integração Dinâmica de WhatsApp**

* **Descrição:** O botão flutuante deve ser contextual.  
* **Lógica:**  
  * Se URL contém apple-watch \-\> Msg: "Olá, preciso de reparo no meu Apple Watch".  
  * Se URL contém barra \-\> Msg: "Olá, sou da Barra e preciso de delivery".  
* **Objetivo:** Aumentar a taxa de conversão reduzindo o esforço do usuário.

#### **RF03: Consulta de Status de Reparo (MVP)**

* **Descrição:** Formulário simples conectado a um backend leve (pode ser uma Google Sheet via API ou Supabase).  
* **Fluxo:** Usuário digita código OS \-\> Sistema retorna status (Aguardando Peça, Em Bancada, Pronto, Saiu para Entrega).  
* **Objetivo:** Reduzir ligações de suporte e aumentar tráfego recorrente.

#### **RF04: Sistema de SEO Programático para Bairros**

* **Descrição:** Um script no momento do build (Astro getStaticPaths) que lê uma lista de 50 bairros de Salvador e gera 50 páginas estáticas otimizadas, variando títulos e descrições para evitar conteúdo duplicado (usando templates de spin tax inteligente).

### **6.5 Requisitos Não-Funcionais e Métricas de Sucesso**

* **Performance:** Pontuação mínima de 95 no Google PageSpeed Insights (Mobile).  
* **Acessibilidade:** Compliance WCAG 2.1 AA (contraste de cor, navegação por teclado, compatibilidade com leitores de tela).  
* **SEO:** Implementação correta de Tags Canônicas, Open Graph e Twitter Cards.

### **6.6 Esquema de Dados (JSON-LD)**

O PRD exige a implementação dos seguintes schemas em cada template:

JSON

/\* Exemplo para Homepage \*/  
{  
  "@context": "https://schema.org",  
  "@type": "MobilePhoneRepair",  
  "name": "O Rei da Tela",  
  "image": "https://ordt.com.br/logo.png",  
  "@id": "https://ordt.com.br",  
  "url": "https://ordt.com.br",  
  "telephone": "+5571999999999",  
  "priceRange": "$$",  
  "address": {  
    "@type": "PostalAddress",  
    "streetAddress": "Endereço da Loja",  
    "addressLocality": "Salvador",  
    "addressRegion": "BA",  
    "postalCode": "40000-000",  
    "addressCountry": "BR"  
  },  
  "geo": {  
    "@type": "GeoCoordinates",  
    "latitude": \-12.9777,  
    "longitude": \-38.5016  
  },  
  "openingHoursSpecification": {  
    "@type": "OpeningHoursSpecification",  
    "dayOfWeek":,  
    "opens": "09:00",  
    "closes": "18:00"  
  },  
  "areaServed":  
}

## ---

**7\. Prompt Mestre para Desenvolvimento (AI-Assisted Coding)**

Para executar a construção deste site utilizando ferramentas de IA como GitHub Copilot, Cursor ou ChatGPT para gerar o código base, utilize o seguinte prompt estruturado. Ele incorpora todos os requisitos levantados na pesquisa.

Role: Senior Frontend Engineer & SEO Specialist.  
Project: "O Rei da Tela" \- High-Performance Phone Repair Website.  
Target Audience: Salvador, Brazil (Local Business).  
Tech Stack: Astro 4.0, React (for islands), Tailwind CSS, Lucide React (Icons).  
**Objective:** Build a pixel-perfect, 100/100 Lighthouse score website. It must replace a slow WordPress site.

Task 1: Project Scaffolding  
Initialize an Astro project with Tailwind integration. Configure astro.config.mjs to use React renderer. Setup a src/data folder to hold services.json (mock database of repairs) and neighborhoods.json (list of Salvador neighborhoods).  
Task 2: Layout & Components  
Create a global Layout.astro that accepts title, description, and schema as props.

* **Header:** Responsive navbar with links: Home, iPhones, Apple Watch, Status OS, Contato. Mobile menu must be a bottom-sheet or highly accessible drawer.  
* **Footer:** Must include comprehensive links to neighborhood pages (SEO Silo) and full NAP (Name, Address, Phone).  
* **WhatsAppFloatingButton:** A React component that is sticky on the bottom-right. It must read the current window path to customize the href message (e.g., if on /iphone-13, message is "Olá, quero orçamento para iPhone 13").

Task 3: Dynamic Pages (Programmatic SEO)  
Create dynamic routes src/pages/unidades/\[bairro\].astro.

* Use getStaticPaths to generate a page for every neighborhood in neighborhoods.json.  
* The H1 must be: "Assistência Técnica Apple em \- Delivery Rápido".  
* The content must dynamically insert the neighborhood name into the copy to ensure relevance.  
* Embed a Google Map iframe pointing to the main store location.

Task 4: Service Pages with Pricing  
Create src/pages/servicos/\[slug\].astro.

* Fetch data from services.json.  
* Display a "Pricing Table" component showing: "Troca de Vidro", "Troca de Tela Completa", "Bateria".  
* Include a FAQ section using the \<details\> and \<summary\> HTML tags for native accordion performance.  
* Inject specific Service JSON-LD schema into the head.

**Task 5: Trust & Conversion**

* Build a ReviewCarousel.astro component. Use mock data representing Google Reviews.  
* Ensure all images use \<Image /\> component from Astro for automatic WebP conversion and lazy loading.  
* Create a "StatusChecker" React component (form) that simulates checking a repair status (mock API response for now).

Tone & Style: Professional, Clean, Apple-esque aesthetics (Whites, Greys, Royal Blue accents). High contrast for readability.  
Language: Portuguese (PT-BR).

## ---

**8\. Plano de Implementação e Lançamento**

A transição do site lento atual para a nova plataforma deve seguir um cronograma rigoroso para minimizar o tempo de inatividade e maximizar o impacto no SEO.

### **Fase 1: Desenvolvimento e Fundação (Semanas 1-4)**

1. **Setup do Ambiente:** Iniciar o projeto Astro e configurar o repositório Git.  
2. **Produção de Conteúdo:** Escrever os textos base para os silos de serviço e descrições dos bairros. *Crucial:* Não copiar e colar o texto atual. Reescrever com foco nas palavras-chave pesquisadas.  
3. **Desenvolvimento dos Templates:** Criar os layouts de Home, Serviço e Bairro conforme o PRD.  
4. **Integração de Dados:** Popular os arquivos JSON ou o CMS Headless com os preços e modelos atualizados.

### **Fase 2: Otimização Local e Citações (Semanas 5-6)**

1. **Auditoria GMB:** Revisar o perfil do Google Meu Negócio. Garantir que as categorias secundárias (ex: "Loja de acessórios para celular", "Serviço de reparo de tela de celular") estejam ativadas.  
2. **Construção de Citações:** Iniciar o cadastro manual nos diretórios locais.11 Usar uma planilha para garantir que o Endereço e Telefone sejam idênticos em todos (ex: se usar "R.", usar "R." em todos, não "Rua").  
3. **Configuração de Analytics:** Implementar o GA4 e configurar eventos de conversão (clique no WhatsApp, envio de formulário).

### **Fase 3: Migração e Go-Live (Semana 7\)**

1. **Testes de Performance:** Rodar Lighthouse e PageSpeed Insights. Não aceitar nada abaixo de 90 no mobile.  
2. **Redirecionamentos 301:** Mapear todas as URLs antigas do WordPress e criar regras de redirecionamento para as novas URLs do Astro. Isso é vital para não perder a pouca autoridade que o site atual já possui.  
3. **DNS Switch:** Alterar os apontamentos do domínio para a Vercel/Netlify.  
4. **Indexação:** Enviar o novo sitemap.xml para o Google Search Console imediatamente.

### **Fase 4: Crescimento Pós-Lançamento (Mês 3 em diante)**

1. **Blog Ativo:** Publicar 1 artigo semanal focado em dúvidas de cauda longa ("iPhone 11 esquentando muito: o que pode ser?").  
2. **Monitoramento de Reviews:** Responder a todos os reviews no GMB em menos de 24 horas.  
3. **Link Building Local:** Buscar parcerias com influenciadores de Salvador ou portais de bairro para conseguir backlinks (links de outros sites apontando para o ORDT).

## **Conclusão**

A reformulação do site "O Rei da Tela" para uma arquitetura baseada em Astro, sustentada por uma estratégia de SEO hiperlocal focada nos bairros nobres de Salvador, representa a melhor oportunidade para a empresa capturar a liderança de mercado. Ao resolver o problema técnico da lentidão na raiz e alinhar o conteúdo com a intenção geográfica e de urgência do usuário, a ORDT deixará de ser apenas mais uma opção na lista para se tornar a escolha óbvia e confiável para o consumidor soteropolitano. O PRD e o plano estratégico apresentados fornecem todas as ferramentas necessárias para executar essa visão com precisão.

#### **Referências citadas**

1. O Rei da Tela – Excelencia e qualidade, acessado em dezembro 24, 2025, [https://ordt.com.br/](https://ordt.com.br/)  
2. Assistência Técnica Citytec | \- Assistência Técnica em Salvador e Lauro de freitas, acessado em dezembro 24, 2025, [https://citytecba.com.br/bairros/](https://citytecba.com.br/bairros/)  
3. Melhores bairros de Salvador: conheça regiões que mais se desenvolveram na capital baiana nos últimos anos \- Quinto Andar, acessado em dezembro 24, 2025, [https://www.quintoandar.com.br/guias/cidades/melhores-bairros-de-salvador/](https://www.quintoandar.com.br/guias/cidades/melhores-bairros-de-salvador/)  
4. Assistência Técnica Apple em Salvador | R$ 99,00 (a partir), acessado em dezembro 24, 2025, [https://www.consertasmart.com/assistencia-tecnica/apple/salvador](https://www.consertasmart.com/assistencia-tecnica/apple/salvador)  
5. PlayConsert: Assistência Técnica Apple em Salvador, acessado em dezembro 24, 2025, [https://playconsert.com.br/](https://playconsert.com.br/)  
6. Assistência Técnica autorizada Apple \- iPlace, acessado em dezembro 24, 2025, [https://www.iplace.com.br/assistencia-tecnica-iplace](https://www.iplace.com.br/assistencia-tecnica-iplace)  
7. ASSISTÊNCIA TÉCNICA IPHONE SALVADOR – AROUCA – A SUA ASSISTÊNCIA iPhone EM SALVADOR, acessado em dezembro 24, 2025, [https://assistenciatecnicaiphone.salvador.br/](https://assistenciatecnicaiphone.salvador.br/)  
8. Os Melhores Bairros de Salvador para Quem Busca Qualidade de Vida \- Magnavita Imóveis, acessado em dezembro 24, 2025, [https://magnavitaimoveis.com/os-melhores-bairros-de-salvador-para-quem-busca-qualidade-de-vida/](https://magnavitaimoveis.com/os-melhores-bairros-de-salvador-para-quem-busca-qualidade-de-vida/)  
9. Add Multiple "areaServed" Cities to Your LocalBusiness Schema \- Rank Math, acessado em dezembro 24, 2025, [https://rankmath.com/kb/add-multiple-areaserved-cities-to-localbusiness-schema/](https://rankmath.com/kb/add-multiple-areaserved-cities-to-localbusiness-schema/)  
10. Schema Multiple Areas Served (AreaServed) \- Webmasters Stack Exchange, acessado em dezembro 24, 2025, [https://webmasters.stackexchange.com/questions/100536/schema-multiple-areas-served-areaserved](https://webmasters.stackexchange.com/questions/100536/schema-multiple-areas-served-areaserved)  
11. 20 Melhores Serviços de Técnico de Celulares em Salvador, BA \- GuiaFix, acessado em dezembro 24, 2025, [https://guiafix.com.br/salvador-ba/tecnico-de-celulares](https://guiafix.com.br/salvador-ba/tecnico-de-celulares)  
12. Encontre Profissionais e Serviços em Salvador \- BA \- GetNinjas, acessado em dezembro 24, 2025, [https://www.getninjas.com.br/local/ba/salvador](https://www.getninjas.com.br/local/ba/salvador)  
13. Anúncio | Jornal Bahia Santa, acessado em dezembro 24, 2025, [https://www.bahiasanta.com.br/anuncio](https://www.bahiasanta.com.br/anuncio)  
14. Astro vs WordPress in 2025: A Comprehensive Comparison \- Lexington Themes, acessado em dezembro 24, 2025, [https://lexingtonthemes.com/blog/astro-vs-wordpress-in-2025-a-comprehensive-comparison](https://lexingtonthemes.com/blog/astro-vs-wordpress-in-2025-a-comprehensive-comparison)  
15. Astro vs WordPress: Best for Sunshine Coast Businesses? \- Laser Unicorn, acessado em dezembro 24, 2025, [https://www.laserunicorn.cc/sunshine-coast-web-design/astro-vs-wordpress-sunshine-coast/](https://www.laserunicorn.cc/sunshine-coast-web-design/astro-vs-wordpress-sunshine-coast/)  
16. Astro vs WordPress: A Performance Comparison After Migrating My Blog \- mfyz, acessado em dezembro 24, 2025, [https://mfyz.com/wordpress-to-astro-migration-performance-comparison/](https://mfyz.com/wordpress-to-astro-migration-performance-comparison/)  
17. Guide To Conversion Rate Optimization \- Invesp, acessado em dezembro 24, 2025, [https://www.invespcro.com/cro/](https://www.invespcro.com/cro/)  
18. Top 20 Conversion Rate Optimization Tips \- VWO, acessado em dezembro 24, 2025, [https://vwo.com/conversion-rate-optimization/conversion-rate-optimisation-tips/](https://vwo.com/conversion-rate-optimization/conversion-rate-optimisation-tips/)  
19. What Is Conversion Rate Optimization (CRO)? Strategies and Tools (2024) \- Shopify, acessado em dezembro 24, 2025, [https://www.shopify.com/blog/120261189-conversion-rate-optimization](https://www.shopify.com/blog/120261189-conversion-rate-optimization)  
20. Boost Your Phone Repair Shop SEO With These Content Ideas \- Blawgy Blog, acessado em dezembro 24, 2025, [https://blawgy.com/blog/boost-your-phone-repair-shop-seo-with-these-content-ideas-20250810](https://blawgy.com/blog/boost-your-phone-repair-shop-seo-with-these-content-ideas-20250810)  
21. 8 Ways To Improve Your Cell Phone Repair Shop Visibility on Search Engines, acessado em dezembro 24, 2025, [https://blog.repairdesk.co/2021/02/10/8-ways-improve-your-cell-phone-repair-shop-visibility-on-search-engines/](https://blog.repairdesk.co/2021/02/10/8-ways-improve-your-cell-phone-repair-shop-visibility-on-search-engines/)  
22. Trust Badges \- VWO, acessado em dezembro 24, 2025, [https://vwo.com/glossary/trust-badges/](https://vwo.com/glossary/trust-badges/)  
23. TrustedSite Certification | Build trust and boost sales., acessado em dezembro 24, 2025, [https://www.trustedsite.com/](https://www.trustedsite.com/)