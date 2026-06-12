# Vídeo de Apresentação — Pokédex

> Roteiro + brief técnico para gerar o vídeo via **HyperFrames** (HTML → MP4).
> Este documento é o material a ser entregue ao agente que vai construir o projeto.

---

## 1. Visão geral

| Item | Valor |
|---|---|
| Formato | **16:9 horizontal — 1920×1080** |
| Frame rate | **30fps** |
| Duração | **~45s** (1350 frames) |
| Ângulo | Showcase de produto (as features rodando) |
| Tom | **Jovem, moderno, gamer/cyber** — direto, sem corporativês |
| Idioma | **Português (Brasil)** — toda copy on-screen em PT-BR |
| Técnica | **Screenshots reais das telas** + motion graphics da marca por cima |
| Engine | HyperFrames (HTML/CSS/GSAP → MP4 via CLI) |

**Princípio visual:** o vídeo mostra a Pokédex de verdade — screenshots reais das telas entram como "device frames"/painéis, e por cima rodam os elementos de marca (logo, cartelas, lower-thirds, highlights, sprites soltos com glow). Nada de recriar a UI do zero: a estrela são as telas reais.

---

## 2. Identidade visual (valores exatos da Pokédex)

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `background` | `#040714` | Fundo base (deep gaming dark) |
| `secondary` | `#00f0ff` | **Cyan** — glow principal, destaques, linhas HUD |
| `accent` | `#9d4edd` | **Roxo cyberpunk** — gradientes, acentos secundários |
| `primary` | `#3b82f6` | **Azul neon** — botões, links |
| `header` | `#ff2c55` | **Pink-red** — pontos de tensão (arena, CTA) |

### Cores de tipo (para chips/glows quando aparecer Pokémon)

`fire #ff5a00` · `water #00b0ff` · `grass #10b981` · `electric #ffea00` · `flying #3C92FF` · `psychic #ff4081` · `dragon #3d34ff` · `ice #00e5ff` · `fairy #CB10CB` · `poison #d340ff` · `ground #e07a34` · `rock #8e793e` · `bug #65A703` · `ghost #4b52d6` · `steel #4b637a` · `fighting #ff1a53` · `dark #1e1b4b` · `normal #9fa39d`

### Tipografia

- **Display/títulos:** `Outfit` (Google Fonts) — pesos 700/900
- **Mono/labels/HUD:** `Roboto Mono` (Google Fonts) — uppercase, tracking largo

### Linguagem de motion (consistente com o portfólio thiilins)

- Easing padrão de entrada: `cubic-bezier(0.33, 1, 0.68, 1)` (easeOutCubic)
- Glows em cyan/roxo, scanlines sutis, grid HUD 40px de fundo
- Cantos em "L" (corner brackets) como assinatura
- Tudo respira: nada estático por mais de 1s

---

## 3. Storyboard — cena a cena

> Timing em segundos · `[copy on-screen]` é o texto que aparece, em PT-BR.

### S1 · INTRO — "a tela ligando" (0.0 – 4.0s)

> Usa a **hero real** da Pokédex (`00-hero.png`) — já traz logo, stats e o "Destaque do Dia". Abertura muito mais forte que motion graphics puro.

- **Beat 1 (0–1.2s):** fundo `#040714` + grid HUD + scanline. Uma pokébola em linha cyan se desenha (`stroke-dashoffset`) e dá um "power on" — como um sistema bootando.
- **Beat 2 (1.2–4s):** o **hero real** entra (fade + scale 0.97→1, como tela acendendo). Em sequência:
  - O logo **POKÉDEX** (gradiente cyan→pink, já na imagem) ganha um glow que pulsa.
  - Os 4 indicadores **acendem** um a um com glow cyan: `1025 ESPÉCIES` → `18 ELEMENTOS` → `GEN 9` → `ATIVO ●`.
  - No canto, o card **"DESTAQUE DO DIA"** (Corvisquire) brilha com um sweep de luz — plantando que tem Pokémon do dia.
- **Copy (opcional, Roboto Mono):** o próprio hero já comunica; se quiser reforço: `[ CENTRAL DE INTELIGÊNCIA · 1025 POKÉMON ]`
- **Animação GSAP:** pokébola `stroke-dashoffset` (0→full 1.2s); hero `opacity`+`scale`; indicadores com stagger `y: 10→0` + glow flash; sweep no card do dia via gradiente animado.
- **Som:** "power on" sintetizado + whoosh; blips nos indicadores acendendo.
- **Saída:** flash cyan → corta pra S2 (grid).

### S2 · CATÁLOGO — "tem todos" (4.0 – 12.5s)

- **Tela real:** screenshot da **home/grid** da Pokédex (os cards). Entra como painel grande, leve perspectiva 3D (rotateY 6°→0).
- **Beat 1 (4–7s):** o grid faz scroll vertical automático (rápido, suave), passando dezenas de cards. Contador no canto sobe de `0001` até `1025` em Roboto Mono.
  - **Copy (lower-third):** `[ TODOS OS 1025. DE TODAS AS GERAÇÕES. ]`
- **Beat 2 (7–10s):** cursor/foco vai pra barra de busca. Texto digita `char` (efeito typewriter) → o grid filtra e sobra o Charizard em destaque.
  - **Copy:** `[ ACHA QUALQUER UM EM 1 SEGUNDO ]`
- **Beat 3 (10–12.5s):** chips de tipo aparecem e um (ex: 🔥 FIRE, cor `#ff5a00`) é "clicado" — grid re-filtra com glow da cor do tipo.
  - **Copy:** `[ FILTRA POR TIPO, NOME OU NÚMERO ]`
- **Animação GSAP:** scroll via `y` translate no container do screenshot (mask/overflow hidden); contador com `innerText` interpolado; typewriter via `SplitText`/substring; chips com `scale 0.8→1` + glow.
- **Som:** ticks de UI nos cortes, "blip" na busca.

### S3 · FICHA — "olha o nível de detalhe" (12.5 – 22.5s)

- **Tela real:** screenshot da **ficha detalhada** (ex: Charizard) entra com push lateral.
- **Beat 1 (12.5–15s):** artwork oficial do Charizard "salta" do screenshot (sprite solto via URL da PokeAPI, com drop-shadow/glow fire). Tipos `FIRE` + `FLYING` como chips com cores reais.
  - **Copy (lower-third):** `[ CHARIZARD · #0006 ]` com label `FICHA COMPLETA`
- **Beat 2 (15–18s):** barras de **stats** preenchem da esquerda pra direita (HP, ATK, DEF, SPD...), com números subindo. Glow cyan nas barras.
  - **Copy:** `[ STATS, HABILIDADES, FRAQUEZAS ]`
- **Beat 3 (18–20s):** **cadeia de evolução** — Charmander → Charmeleon → Charizard, três sprites surgindo em sequência com seta cyan entre eles.
  - **Copy:** `[ EVOLUÇÕES E FORMAS ]`
- **Beat 4 (20–22.5s):** **galeria de sprites** — strip horizontal passando sprites retrô (Game Boy → atual) + variação shiny brilhando.
  - **Copy:** `[ ATÉ OS SPRITES RETRÔ E SHINY ]`
- **Animação GSAP:** stats com `width: 0%→X%` + `innerText` count; evolução com stagger + seta `scaleX`; strip de sprites com `x` infinito (marquee); shiny com filtro `brightness`/`hue-rotate` pulsando.
- **Som:** "cry" do Charizard (curtinho) no beat 1; ticks nas barras.

### S4 · ARENA — "bota dois pra brigar" (22.5 – 31.0s)

> A Pokédex tem uma **Arena de Duelo com 3 modos** — esse é um diferencial forte, vale mostrar os três.

- **Tela real:** `04-arena-confronto.png` entra com slam (impacto). Dupla real: **Charizard (fire `#ff5a00`)** vs **Ivysaur (grass `#10b981`)**.
- **Beat 1 (22.5–25s):** os dois sprites entram pelos lados (artwork oficial via URL). No meio, "VS" grande em Outfit 900, glow pink `#ff2c55` + shake.
  - **Copy (topo):** `[ ARENA DE DUELO ]`
- **Beat 2 (25–28.5s):** foca no **Confronto de Atributos** (`04-arena-confronto.png`) — barras de stat comparando lado a lado, e o selo **"CHARIZARD É O VENCEDOR"** pulsa.
  - **Copy:** `[ COMPARA DOIS LADO A LADO ]`
- **Beat 3 (28.5–31s):** flash trocando rápido entre os outros dois modos — **Duelo RPG** (`04b-arena-rpg.png`, com golpes) e **Simulação Tática** (`04c-arena-simulacao.png`, com o log). Corte ritmado.
  - **Copy:** `[ 3 MODOS: ATRIBUTOS · RPG · SIMULAÇÃO ]`
- **Animação GSAP:** entrada dos sprites com `x` + overshoot (back.out); "VS" com `scale` punch + shake; barras com `width` + vencedor com glow pulsante; troca de modos com flash cyan + `scale` rápido.
- **Som:** impacto grave no slam; zap/flash nas trocas de modo.

### S5 · DESTAQUES — "ainda tem mais" (31.0 – 38.0s)

> Montagem rápida, 3 micro-beats de ~2.3s. Ritmo acelera.
> (Sem "Pokémon do dia" — a feature não está ativa hoje. Trocado pelo registro rápido.)

- **Beat 1 (31–33.3s) — Registro rápido:** o card preview (`05-registro-rapido.png`) abre por cima do grid, com as abas VISÃO / COMBATE / GOLPES. Mostra que dá pra espiar um Pokémon sem sair da lista.
  - **Copy:** `[ PREVIEW RÁPIDO SEM SAIR DA LISTA ]`
- **Beat 2 (33.3–35.6s) — Export em 4 estilos:** os 4 cards do Charizard fazem um **fan-out** (leque) entrando em sequência — TCG (`card-1-tcg.png`), Vetor (`card-2-vetor.png`), Retrô Games (`card-3-retro-games.png`) e Game Boy (`card-4-gameboy.png`). Um ícone de download pulsa.
  - **Copy:** `[ EXPORTA O CARD EM 4 ESTILOS · PNG ]`
  - **Animação:** cards entram com `rotation` + `x` formando o leque (stagger 0.12s, back.out); leve float/parallax.
- **Beat 3 (35.6–38s) — Cries/som:** ícone de áudio com ondas sonoras pulsando (sincronizadas com um "cry").
  - **Copy:** `[ E TOCA O CRY DE CADA UM 🔊 ]`
- **Animação GSAP:** cada beat com entrada `scale + opacity`, saída `y + blur`; ondas sonoras com `scale`/`opacity` em loop; ícone de download com `y` + bounce.
- **Som:** três blips distintos + um "cry" no beat 3.

### S6 · OUTRO — "feito por mim" + CTA (38.0 – 45.0s)

- **Visual:** volta pro fundo `#040714` com grid HUD. Os screenshots colapsam/encolhem pro centro virando um cluster.
- **Beat 1 (38–41s) — tech stamp:** três cartelas entram rápido, monospace, com check cyan:
  - `[ ✓ NEXT.JS 16 · CACHE COMPONENTS ]`
  - `[ ✓ PARTIAL PRERENDERING (PPR) ]`
  - `[ ✓ 1025 POKÉMON CACHEADOS ]`
- **Beat 2 (41–45s) — CTA/marca:** logo **POKÉDEX** volta ao centro. Embaixo:
  - URL grande: **pokedex.thiagolins.dev.br** (com glow cyan)
  - Assinatura: `por @thiilins` (Roboto Mono)
  - Linha final discreta: `[ CONFERE NO PORTFÓLIO → thiilins.tech ]`
- **Animação GSAP:** cartelas com stagger `x: -20→0` + check desenhando; URL com glow pulsante leve; corner brackets fecham nos cantos da tela; fade out final.
- **Som:** "power down" suave + última batida; silêncio no fade.

---

## 4. Trilha sonora

- **Estilo:** synthwave / cyber-gamer, ~120–124 BPM, energia crescente.
- **Estrutura:** intro atmosférica (S1) → beat entra forte na S2 → pico na arena (S4) → drop dos destaques (S5) → resolução no outro (S6).
- **Sugestão de fonte:** trilha royalty-free (Uppbeat, Pixabay Music, ou similar) — gênero "synthwave/retrowave/gaming". Marcar os **cortes de cena nos beats**.
- **SFX:** whoosh, blips de UI, impactos, "cry" real dos Pokémon (já existe no projeto — `cries`), zap no clash.

---

## 5. Assets

### Screenshots — ✅ JÁ CAPTURADOS em `assets/screenshots/`

| Arquivo | Tela | Usado em | Obs |
|---|---|---|---|
| `00-hero.png` | Hero da home (logo + stats + Destaque do Dia) | S1 | abertura real; já traz o Pokémon do dia (Corvisquire) |
| `01-grid.png` | Home/grid (full page, 1718×2718) | S2 | altura grande → ideal pro scroll vertical |
| `02-busca.png` | Busca ativa | S2 | |
| `03-ficha.png` | Ficha do Charizard (full page, 1718×3087) | S3 | altura grande → ideal pro scroll da ficha |
| `04-arena-confronto.png` | Arena — Confronto de Atributos (Charizard vs Ivysaur) | S4 | tem selo "Charizard é o vencedor" |
| `04b-arena-rpg.png` | Arena — Duelo RPG (golpes) | S4 beat 3 | |
| `04c-arena-simulacao.png` | Arena — Simulação Tática (log) | S4 beat 3 | |
| `05-registro-rapido.png` | Card preview / registro rápido do Charizard | S5 | substitui o "Pokémon do dia" |

### Cards de export — ✅ em `assets/cards/` (4 estilos do Charizard, ~1150×1588)

| Arquivo | Estilo | Usado em |
|---|---|---|
| `card-1-tcg.png` | TCG / Oficial (carta colecionável) | S5 beat 2 (fan-out) |
| `card-2-vetor.png` | Vetor / pop comics | S5 beat 2 |
| `card-3-retro-games.png` | Revista games retrô ("100% detonado") | S5 beat 2 |
| `card-4-gameboy.png` | Game Boy monocromático | S5 beat 2 |

> Formato vertical (3:4) — encaixam perfeito num leque/fan-out e na versão Reels 9:16.

> Resolução das telas: nativa 1718px de largura (< 1920). Como entram como **painéis com motion** (não edge-to-edge), fica nítido. Recapturar em 1920px é opcional.
> **"Pokémon do dia":** estava bugado (sorteava ID > 1025 → 404). **Corrigido** em `src/utils/generateDayNumber.ts` → voltou a aparecer e já está capturado no `00-hero.png` (Destaque do Dia: Corvisquire). Usado na abertura (S1).

### Sprites/artworks (URLs diretas — o agente usa sem download manual)

- Artwork oficial: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`
  - Charmander `#4`, Charmeleon `#5`, Charizard `#6` (evolução, S3) · Ivysaur `#2` (arena, S4)
- Shiny: `.../official-artwork/shiny/{id}.png`
- Sprites retrô (Game Boy etc.): `.../versions/generation-i/red-blue/{id}.png` (e outras gerações)

### Marca

- Wordmark/logo do projeto (se houver SVG); senão, montar "POKÉDEX" em Outfit 900 com o tratamento de glow descrito.

---

## 6. Brief técnico para o agente (HyperFrames)

> Instruções para o agente que vai **construir e renderizar** o vídeo.

### Setup

- Projeto HyperFrames novo nesta pasta (`pokedex-react/video/`).
- Canvas **1920×1080 @ 30fps**, duração **45s**.
- Importar **Outfit** e **Roboto Mono** (Google Fonts) no HTML.
- Usar **GSAP** (com timeline mestre) como motor de animação — HyperFrames suporta GSAP nativamente para animação "seekable".
- Tailwind opcional; se usar, configurar as cores da seção 2 como tokens. Caso contrário, CSS custom com as variáveis hex exatas.

### Estrutura sugerida

```
video/
├── ROTEIRO-VIDEO.md      (este arquivo)
├── index.html            (cena raiz — todas as scenes + timeline mestre)
├── styles.css            (paleta, fontes, HUD, corner brackets, scanlines)
├── timeline.js           (GSAP master timeline — orquestra S1→S6 pelos timings)
├── scenes/               (cada cena como módulo/seção, se o agente preferir modularizar)
└── assets/
    ├── screenshots/      (as 5 capturas da seção 5)
    └── audio/            (trilha + SFX + cries)
```

### Regras de animação

- **Uma timeline GSAP mestre** com labels por cena (`S1`, `S2`...) nos timings da seção 3. HyperFrames renderiza por frame fazendo seek na timeline — então **tudo deve ser determinístico** (sem `Math.random()` em runtime; se precisar de aleatório, fixar seed/valores).
- Easing padrão `power3.out` / `cubic-bezier(0.33,1,0.68,1)`. Impactos com `back.out`/`elastic` pontuais.
- Respeitar a paleta e o glow cyan como fio condutor.
- Legibilidade: copy on-screen com contraste alto (texto claro sobre painel escuro), nunca cobrir a parte importante do screenshot.
- Corner brackets (cantos em L cyan) como moldura recorrente — assinatura visual.

### Render

- Renderizar para **MP4 H.264, 1080p, 30fps** via CLI do HyperFrames.
- Validar: duração ≈ 45s, áudio sincronizado nos cortes, sem frame preto/saltos.
- Entregar `pokedex-showcase-1080p.mp4` na pasta `video/`.

### Critérios de qualidade (checklist do agente)

- [ ] Toda copy em PT-BR, tom jovem (conforme seção 3)
- [ ] Telas reais aparecem nítidas e em destaque (não cobertas por texto)
- [ ] Paleta e fontes batem com a Pokédex (seção 2)
- [ ] Cortes de cena caem nos beats da música
- [ ] Glow cyan + corner brackets presentes como assinatura
- [ ] CTA final com URL + @thiilins legível por ≥3s
- [ ] Determinístico (mesma saída a cada render)
- [ ] MP4 final ≈45s, 1080p30, áudio ok

---

## 7. Copy completa (PT-BR) — referência rápida

| Cena | Texto on-screen |
|---|---|
| S1 | `1025 POKÉMON · UMA POKÉDEX` |
| S2 | `TODOS OS 1025. DE TODAS AS GERAÇÕES.` · `ACHA QUALQUER UM EM 1 SEGUNDO` · `FILTRA POR TIPO, NOME OU NÚMERO` |
| S3 | `CHARIZARD · #0006` · `STATS, HABILIDADES, FRAQUEZAS` · `EVOLUÇÕES E FORMAS` · `ATÉ OS SPRITES RETRÔ E SHINY` |
| S4 | `ARENA DE DUELO` · `COMPARA DOIS LADO A LADO` · `3 MODOS: ATRIBUTOS · RPG · SIMULAÇÃO` |
| S5 | `PREVIEW RÁPIDO SEM SAIR DA LISTA` · `EXPORTA O CARD EM 4 ESTILOS · PNG` · `E TOCA O CRY DE CADA UM 🔊` |
| S6 | `✓ NEXT.JS 16 · CACHE COMPONENTS` · `✓ PARTIAL PRERENDERING (PPR)` · `✓ 1025 POKÉMON CACHEADOS` · `pokedex.thiagolins.dev.br` · `por @thiilins` · `CONFERE NO PORTFÓLIO → thiilins.tech` |
