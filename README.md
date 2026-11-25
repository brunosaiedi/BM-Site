# BM Serviços & Soluções — Site institucional

Landing page *one page* da **BM Serviços & Soluções** · *Gestão Simplificada* · "Valorize seu tempo, organize seu negócio!"

Site 100% estático (HTML + CSS + JavaScript puro), sem etapa de build, sem backend e sem dependências — publicado diretamente no **GitHub Pages**.

## Estrutura

```
├── index.html                  # Página única (todas as seções)
├── assets/
│   ├── css/style.css           # Estilos (mobile first)
│   ├── js/main.js              # Menu, WhatsApp, rolagem, animações
│   └── img/
│       ├── logo-bm-fundo-azul.png      # Logo oficial (cabeçalho e rodapé)
│       ├── logo-bm-fundo-branco.png    # Logo oficial (reserva p/ áreas claras)
│       ├── logo-bm-transparente.png    # Logo oficial (ver observação)
│       ├── favicon-32.png, apple-touch-icon.png, icon-512.png
│       ├── og-image.jpg                # Imagem de compartilhamento (1200×630)
│       ├── hero-dashboard-800/1400.jpg      # Foto do hero
│       └── sobre-rotina-administrativa-700/1100.jpg  # Foto da seção Sobre
├── robots.txt, sitemap.xml
├── CNAME                       # Domínio próprio: bmservicosesolucoes.com.br
├── .nojekyll                   # Desativa o processamento Jekyll do GitHub
├── .github/workflows/deploy.yml # Publicação automática
└── README.md
```

Seções: Cabeçalho (sticky + menu hambúrguer) → Início (hero) → Serviços (7 cards) → Sobre → Contato (chamada para ação) → Rodapé.

## Logomarca

- As três versões oficiais estão em `assets/img/`. Apenas as margens vazias foram recortadas; proporção, cores e elementos foram preservados.
- Cabeçalho e rodapé usam `logo-bm-fundo-azul.png`, cujo fundo é exatamente `#002060` (mesma cor das faixas), portanto não há retângulo visível.
- O arquivo "transparente" recebido veio com fundo branco. Se houver uma versão PNG com transparência real, basta substituir o arquivo mantendo o nome.
- Favicon e ícones usam o símbolo (hexágono BM) sobre o azul institucional. A imagem de compartilhamento (`og-image.jpg`) usa a logo completa.

## Créditos das fotos

Fotos gratuitas do [Unsplash](https://unsplash.com), sob a [Licença Unsplash](https://unsplash.com/license) (uso comercial livre, atribuição não obrigatória):

- Hero: foto de Carlos Muza — https://unsplash.com/photos/hpjSkU2UYSU
- Sobre: foto de Microsoft 365 — https://unsplash.com/photos/oUbzU87d1Gc

Para trocar uma foto, substitua os arquivos mantendo os nomes (ou atualize `src`/`srcset` no `index.html`).

## Contatos (onde alterar)

- **WhatsApp e mensagem inicial:** `assets/js/main.js`, constantes `WHATSAPP_NUMERO` e `WHATSAPP_MENSAGEM`. Todos os botões usam esse valor automaticamente.
- **Telefone, e-mail e Instagram:** rodapé em `index.html` (e o bloco `application/ld+json` no `<head>`).

## Executar localmente

Basta abrir `index.html` no navegador. Para simular o servidor (recomendado), com Node.js instalado:

```powershell
npx serve .
```

Depois acesse o endereço exibido (ex.: http://localhost:3000).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `site-bm`) e envie os arquivos para a branch `main`:
   ```powershell
   git init
   git add .
   git commit -m "Site institucional BM Serviços & Soluções"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/site-bm.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` publica automaticamente a cada `push` na `main` (acompanhe em **Actions**).
4. O site ficará em `https://SEU-USUARIO.github.io/site-bm/`. Todos os caminhos são relativos, então funciona tanto nesse subcaminho quanto no domínio próprio.

## Domínio próprio `.com.br` (Registro.br)

Domínio registrado: **bmservicosesolucoes.com.br**. O arquivo `CNAME`, o `canonical`, o `og:url`, o `og:image` e o `sitemap.xml` já usam esse endereço.

1. Domínio já registrado no Registro.br.
2. No Registro.br, em **DNS → Editar zona** (usando os servidores DNS do próprio Registro.br), crie:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | *(vazio / @)* | 185.199.108.153 |
   | A | *(vazio / @)* | 185.199.109.153 |
   | A | *(vazio / @)* | 185.199.110.153 |
   | A | *(vazio / @)* | 185.199.111.153 |
   | AAAA (opcional) | *(vazio / @)* | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
   | CNAME | www | SEU-USUARIO.github.io |

3. O arquivo `CNAME` na raiz já contém `bmservicosesolucoes.com.br` (o workflow o copia para a publicação).
4. Em **Settings → Pages → Custom domain**, informe `bmservicosesolucoes.com.br` e salve. O GitHub redireciona automaticamente `www.bmservicosesolucoes.com.br` para ele. Recomenda-se também verificar o domínio em **Settings (da conta) → Pages → Verified domains**.
5. Após a propagação do DNS (minutos a 24 h), marque **Enforce HTTPS** — o certificado é emitido gratuitamente pelo GitHub.
6. Opcionalmente, cadastre o site no Google Search Console e envie `https://bmservicosesolucoes.com.br/sitemap.xml`.

## Manutenção

- Textos e serviços: editar diretamente em `index.html` (cada seção está comentada).
- Cores: variáveis no topo de `assets/css/style.css` (`--navy`, `--sky`, `--gold`, `--wa` …).
- Testar sempre em celular (360–430 px), tablet (768 px) e desktop.
