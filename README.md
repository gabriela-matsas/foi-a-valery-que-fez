# Foi a Valery Que Fez

Site para uma confeitaria artesanal em São Paulo, com cardápio completo e encomendas via WhatsApp.

🔗 **Site no ar:** https://foiavaleryquefez.netlify.app/
<img width="1877" height="1002" alt="Captura de tela 2026-09-11 143536" src="https://github.com/user-attachments/assets/ba90a18a-c1a1-4285-839e-57908eece1c8" />

## Sobre o projeto

Site estático (HTML, CSS e JavaScript puros, sem frameworks) com duas páginas:

- **Página inicial** — apresentação da marca, categorias em destaque, galeria de fotos, depoimentos de clientes e botão direto para WhatsApp.
- **Cardápio completo** — todos os produtos organizados por categoria (bolos, tortas, salgados, culinária árabe, pães e doces).

## Funcionalidades

- Totalmente responsivo (celular, tablet e desktop), com um layout próprio para telas de até 900 px
- **Celular:** foto de destaque no topo com degradê, faixa de fotos que desliza de lado, cardápio em "sanfona", galeria com fotos maiores e página cerca de 40% mais curta que a versão anterior
- **Depoimentos:** carrossel de rolagem lateral — no celular desliza com o dedo; no computador mostra 2 por vez, com setas para navegar de 2 em 2
- Cardápio completo com layout compacto no celular (fotos e listas em duas colunas, foto da torta em pé, degradês entre foto e texto)
- Funciona bem no iPhone: cabeçalho fixo que respeita a barra de status (área segura) e telefone sem a cor azul automática do Safari
- Fotos com efeito sutil de zoom (Ken Burns) e hover
- Menu de navegação com hambúrguer animado no celular
- Integração direta com WhatsApp para encomendas
- Ícone da aba (favicon) em SVG embutido
- Ano do rodapé atualizado automaticamente via JavaScript

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox, media queries, animações)
- JavaScript puro (vanilla), sem dependências

## Estrutura

```
├── index.html        # Página inicial
├── cardapio.html      # Cardápio completo
├── style.css          # Estilos da página inicial
├── cardapio.css        # Estilos do cardápio
├── script.js          # Interatividade da página inicial
├── cardapio.js         # Interatividade do cardápio
└── *.png / *.jpg / *.jpeg  # Fotos dos produtos
```

## Como publicar

O site é estático: não há etapa de build. A publicação é manual no Netlify:

1. Gere o pacote do site a partir do último commit:
   ```
   git archive --format=zip -o site.zip HEAD
   ```
2. No Netlify, abra o site e vá em **Deploys**.
3. Arraste o `site.zip` para a área de upload e aguarde o status **Published**.

> Dica: para publicar automaticamente a cada `git push`, conecte este repositório ao Netlify em
> **Site configuration → Build & deploy → Link repository** (branch `main`, sem comando de build).

## Observações de desenvolvimento

- Todas as mudanças de celular ficam dentro de `@media (max-width: 900px)`; o desktop não é afetado.
- No Safari do iOS 26, camadas fixas em tela cheia por cima do cabeçalho (como uma textura de granulado) impedem o Safari de pintar a barra de status com a cor do cabeçalho. Por isso a textura fica desligada no celular.
