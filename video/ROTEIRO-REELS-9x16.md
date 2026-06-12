# Vídeo Reels / Story — Pokédex (9:16 vertical)

> Versão vertical, punchy, pra Instagram Reels / TikTok / Stories.
> Reaproveita a **mesma identidade e assets** do roteiro principal (`ROTEIRO-VIDEO.md`) — leia a seção 2 (paleta/fontes) e a 5 (assets) de lá. Aqui muda **formato, ritmo, layout e copy**.

---

## 1. Visão geral

| Item | Valor |
|---|---|
| Formato | **9:16 vertical — 1080×1920** |
| Frame rate | 30fps |
| Duração | **~28s** (840 frames) — atenção curta, feito pra **loop** |
| Tom | Jovem, rápido, gamer. Texto GRANDE, lê sem som. |
| Idioma | PT-BR |
| Técnica | Telas reais (verticais!) + motion graphics da marca |
| Engine | HyperFrames (HTML/CSS/GSAP → MP4) |

**Por que vertical funciona aqui:** suas capturas são **altas** (`00-hero`, `01-grid` 1718×2718, `03-ficha` 1718×3087) e os 4 cards são **3:4** — tudo encaixa no 9:16 com scroll vertical natural. É o formato que o conteúdo pede.

---

## 2. Safe zones (NÃO cobrir com texto)

No Reels/TikTok a UI da plataforma cobre as bordas. Mantenha **texto e foco no miolo**:

- **Topo:** evitar os primeiros **~220px** (foto/username).
- **Base:** evitar os últimos **~420px** (legenda, like, comentar, compartilhar).
- **Zona segura de copy:** vertical entre **y≈260** e **y≈1480**. Logo/CTA final também aí.
- Telas podem sangrar até a borda (full-bleed) — só o **texto** respeita a safe zone.

---

## 3. Storyboard — ritmo de Reels (cortes a cada ~2–4.5s)

> Copy on-screen GRANDE (Outfit 900), centralizada na safe zone. Cada corte cai no beat.

### HOOK (0.0 – 2.5s) — segura o dedo

- **Visual:** `00-hero.png` entra em scale 1.05→1 (push-in lento). Grid HUD + scanline por cima.
- **Copy (enorme, centro):** **`1025 POKÉMON.`** / **`UMA POKÉDEX SÓ.`** (2 linhas, a 2ª entra 0.3s depois)
- **Selo (canto, dentro da safe zone):** `FEITO COM NEXT.JS 16`
- **Animação:** copy `y: 40→0` + `blur(10px)→0`; glow cyan pulsa no logo do hero.
- **Som:** "power on" + primeira batida forte.

### GRID (2.5 – 6.5s) — "tem todos mesmo"

- **Visual:** `01-grid.png` (full-page alto) faz **scroll vertical rápido** preenchendo a tela — sensação de "não acaba". Contador `0001 → 1025` em Roboto Mono no topo da safe zone.
- **Copy (base da safe zone):** **`TODAS AS GERAÇÕES.`**
- **Animação:** `y` translate no screenshot (mask overflow); contador interpolado; leve zoom out no fim.
- **Som:** ticks acompanhando o scroll.

### BUSCA (6.5 – 9.5s) — "acha na hora"

- **Visual:** `02-busca.png`. Typewriter digita `char` numa barra ampliada; grid colapsa pro Charizard.
- **Copy:** **`ACHA QUALQUER UM`** / **`EM 1 SEGUNDO`**
- **Animação:** typewriter; resultado com `scale` punch + glow fire `#ff5a00`.
- **Som:** blips de digitação + "ping".

### FICHA (9.5 – 14.5s) — "olha o detalhe"

- **Visual:** `03-ficha.png` (full-page alto) entra e faz scroll vertical revelando stats → evolução → sprites. Artwork do Charizard "salta" com glow fire.
- **Copy (sobe junto, 3 flashes):** **`STATS`** → **`EVOLUÇÕES`** → **`ATÉ OS SPRITES RETRÔ`**
- **Animação:** scroll vertical; barras de stat com `width`; chips de tipo fire/flying com cor real.
- **Som:** "cry" do Charizard no salto; ticks nas barras.

### ARENA (14.5 – 19.5s) — "bota dois pra brigar"

- **Visual:** `04-arena-confronto.png` com slam. **Charizard (fire `#ff5a00`)** vs **Ivysaur (grass `#10b981`)**; "VS" gigante no centro com shake + glow pink `#ff2c55`.
- **Copy (topo safe):** **`ARENA DE DUELO`** · (subtexto) `3 MODOS`
- **Beat extra (~18–19.5s):** flash rápido pros outros modos (`04b` RPG, `04c` simulação).
- **Animação:** sprites entram com overshoot (back.out); "VS" punch; troca de modo com flash cyan.
- **Som:** impacto grave + zap nas trocas.

### CARDS (19.5 – 24.0s) — o "wow" vertical

- **Visual:** os 4 cards verticais entram em **swipe/leque** (perfeito no 9:16) — `card-1-tcg` → `card-2-vetor` → `card-3-retro-games` → `card-4-gameboy`, cada um preenchendo o centro e empurrando o anterior. No fim, os 4 num leque rápido.
- **Copy:** **`EXPORTA EM 4 ESTILOS`** / **`DE CARD`**
- **Animação:** entrada `x`/`rotation` com stagger 0.12s, back.out; float parallax; ícone download pulsa.
- **Som:** "swoosh" por card + click de "salvou".

### CTA / LOOP (24.0 – 28.0s) — fecha e reinicia

- **Visual:** volta pro `#040714` + grid HUD. Logo **POKÉDEX** (gradiente cyan→pink) ao centro da safe zone.
- **Copy:**
  - URL grande: **pokedex.thiagolins.dev.br**
  - `por @thiilins`
  - 3 selos rápidos: `NEXT.JS 16` · `PPR` · `1025 CACHEADOS`
- **Loop:** o último frame faz match com o hook (mesmo fundo/grid) — o Reels reinicia sem corte perceptível.
- **Animação:** logo `scale` in; corner brackets fecham nos cantos (respeitando safe zone); glow final.
- **Som:** batida final + tail; silêncio pro loop.

---

## 4. Diferenças-chave vs a versão 16:9

- **Mais curto e rápido:** 28s vs 45s; cortes mais secos.
- **Texto bem maior**, sempre na safe zone central (lê sem som, com a UI da plataforma por cima).
- **Scroll vertical** vira protagonista (telas altas) — em vez de painéis horizontais.
- **Cards em swipe vertical** no lugar do fan-out horizontal.
- **Loop perfeito** (hook ≈ frame final).
- Sem "respiro": energia constante do início ao fim.

---

## 5. Copy completa (PT-BR) — referência

| Cena | Texto on-screen |
|---|---|
| HOOK | `1025 POKÉMON.` · `UMA POKÉDEX SÓ.` · selo `FEITO COM NEXT.JS 16` |
| GRID | `TODAS AS GERAÇÕES.` · contador `0001→1025` |
| BUSCA | `ACHA QUALQUER UM EM 1 SEGUNDO` |
| FICHA | `STATS` · `EVOLUÇÕES` · `ATÉ OS SPRITES RETRÔ` |
| ARENA | `ARENA DE DUELO` · `3 MODOS` |
| CARDS | `EXPORTA EM 4 ESTILOS DE CARD` |
| CTA | `pokedex.thiagolins.dev.br` · `por @thiilins` · `NEXT.JS 16 · PPR · 1025 CACHEADOS` |

---

## 6. Brief técnico (delta sobre o `ROTEIRO-VIDEO.md` seção 6)

- Canvas **1080×1920 @ 30fps**, **28s**.
- Mesma paleta/fontes/regras de GSAP do roteiro principal.
- **Determinístico** (HyperFrames faz seek por frame — sem `Math.random()` em runtime).
- Respeitar as **safe zones** da seção 2 (texto/CTA no miolo).
- Render **MP4 H.264 1080×1920 30fps** → `pokedex-reels-9x16.mp4`.
- **Validar loop:** comparar frame 0 com frame final (devem casar visualmente).
- Áudio: trilha vertical/trend ~120BPM; cortes nos beats.
