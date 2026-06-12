# Direção de Arte — Vídeo Pokédex (RETRÔ-GAMER)

> Direção de arte detalhada para o vídeo COMPLETO (16:9, 1920×1080, 30fps, ~47s, MUDO no piloto).
> Vibe: **retrô-gamer / console anos 90 / RPG de Pokémon**. Objetivo: nível de motion designer profissional. **Anti-AI-slop**: nada de fade/slide/stagger genérico — composição, ritmo, profundidade e transições com intenção.

---

## Conceito central

**"Você está ligando um console e jogando."** O vídeo é uma jornada por um RPG retrô: liga a TV → boot do cartucho → navega pelos menus → entra em batalha → coleciona cartas → "CONTINUE?". As telas reais da Pokédex (Next.js, modernas) aparecem **emolduradas** nessa linguagem retrô — é o contraste nostalgia × moderno que deixa sofisticado, não infantil.

Cada cena = uma "tela de jogo":
| Cena | Metáfora de jogo | Screenshots |
|---|---|---|
| S1 Boot | Ligar a TV + boot do cartucho | `00-hero.png` |
| S2 Catálogo | Menu de seleção de personagem | `01-grid.png`, `02-busca.png` |
| S3 Ficha | Tela de status do RPG | `03-ficha.png` |
| S4 Arena | Tela de batalha (3 rounds) | `04-arena-confronto.png`, `04b-arena-rpg.png`, `04c-arena-simulacao.png` |
| S5 Coleção | Abrir pacote de cartas | `05-registro-rapido.png`, `card-1..4` |
| S6 CTA | "CONTINUE?" de fliperama | (motion graphics) |

**Todos os screenshots aparecem** — nenhum fica de fora.

---

## Style guide (aplicar em TODAS as cenas)

### CRT autêntico (a alma do visual)
- **Scanlines**: linhas horizontais escuras finas, repetidas, opacidade ~0.08–0.12. Sutil — TV de tubo de verdade, não filtro barato.
- **Curvatura/vinheta**: leve barrel nas bordas (border-radius grande no "tubo" + box-shadow inset escuro nos cantos).
- **Aberração cromática**: RGB split de 1–2px nos títulos grandes e em momentos de impacto (text-shadow vermelho à esq + ciano à dir).
- **Flicker**: bem leve e ocasional (variação de brilho ~2%), não epilético.
- **Phosphor glow**: brilho suave (text-shadow/box-shadow) nos elementos claros, como fósforo de CRT.

### Paleta
- Fundo `#040714` · cyan `#00f0ff` · accent roxo `#9d4edd` · primary azul `#3b82f6` · pink/tensão `#ff2c55`
- Tipos: fire `#ff5a00` (Charizard) · grass `#10b981` (Ivysaur) · flying `#3C92FF`
- **Game Boy green `#9bbc0f`** e `#0f380f` — detalhes/molduras retrô

### Tipografia
- **Títulos grandes**: `Outfit` 900 (Google Fonts) com sombra pixel (offset duro) + glow.
- **Labels / HUD / log / contadores**: `Press Start 2P` (pixel) ou `VT323` (terminal) — Google Fonts. É o que "carimba" a vibe retrô.
- Mistura proposital: pixel font no HUD, Outfit nos statements.

### Transições entre cenas (NÃO corte seco)
- **Início de batalha Pokémon** (entrada da arena): flash branco↔preto 2–3x + wipe pixelado (blocos/diagonal).
- **Wipe pixelado / dithering** entre seções (dissolve em quadradinhos).
- **CRT power**: linha horizontal que expande/colapsa (liga/desliga tela) no boot e no fecho.
- **Match cut**: quando fizer sentido, um elemento de uma cena vira o de outra.

### Princípios anti-slop (obrigatório)
- **Ritmo com pausas** — nem tudo entra no mesmo tempo; respeite beats, deixe momentos respirarem e outros estourarem.
- **Easing com caráter** — `back.out`/`elastic` nos impactos, `power3/power4` nas entradas; NUNCA linear em UI.
- **Profundidade** — camadas, parallax leve, sombra real, sprites "saltando" das telas.
- **Hierarquia** — um foco por momento; texto nunca cobre a parte importante do screenshot.
- **Telas reais nítidas e bem enquadradas** — protagonistas, não cobertas/duplicadas.
- **Corner brackets** cyan como moldura recorrente (assinatura).

---

## Storyboard frame-a-frame (~47s)

### S1 · BOOT — "ligando o console" (0–5s)
1. (0–1s) Tela preta. **CRT power-on**: uma linha horizontal cyan nasce no centro e expande verticalmente abrindo a "tela" (com flicker e glow). 
2. (1–2.5s) **Boot screen** estilo Game Boy/Pokémon: fundo `#9bbc0f`/`#0f380f`, uma pokébola pixel desce do topo e quica (easing bounce), pixel font "CARREGANDO..." piscando.
3. (2.5–5s) **Reveal da hero**: a tela de boot dá um flash e revela o `00-hero.png` (a hero real) emergindo como se a TV sintonizasse. O logo **POKÉDEX** ganha glow + aberração cromática; os indicadores acendem um a um em pixel (`1025 ESPÉCIES` → `18 ELEMENTOS` → `GEN 9` → `ATIVO ●`); o card "DESTAQUE DO DIA" recebe um sweep de luz.
- **Copy**: `1025 POKÉMON · TODAS AS GERAÇÕES` (Outfit + sombra pixel)

### S2 · MENU DE SELEÇÃO — catálogo (5–14s)
1. (5–9s) `01-grid.png` (imagem alta) como **tela de seleção de personagem**: scroll vertical fluido, com um **cursor pixel ▶** correndo pelos cards. Contador estilo **placar arcade** `0001 → 1025` (pixel font, com "tick" visual).
   - **Copy**: `A POKÉDEX COMPLETA`
2. (9–11.5s) `02-busca.png`: uma caixa de input estilo menu de jogo; **typewriter** digita `char` (cursor pixel piscando); o grid filtra e o Charizard salta com glow fire.
   - **Copy**: `ENCONTRE QUALQUER UM EM SEGUNDOS`
3. (11.5–14s) Filtro por tipo: chips de tipo entram; o cursor ▶ seleciona `FOGO` (cor `#ff5a00`); o grid re-filtra com glow do tipo.
   - **Copy**: `FILTRE POR TIPO, NOME OU NÚMERO`

### S3 · TELA DE STATUS — ficha (14–23s)
- `03-ficha.png` (imagem alta) como **tela de status de RPG**. Entra com um wipe; **scroll vertical** revelando, na ordem do screenshot: stats → evolução → sprites (que JÁ existem na imagem — **NÃO recriar/duplicar**). Apenas lower-thirds pixel de destaque, sincronizados com o scroll.
- Os sprites retrô (que já são pixel) ganham um brilho/scanline reforçado — combinam com a vibe.
- **Copy** (flashes conforme o scroll): `CHARIZARD · #0006` → `FICHA COMPLETA` → `STATS E HABILIDADES` → `EVOLUÇÕES E FORMAS` → `SPRITES RETRÔ E SHINY`

### S4 · TELA DE BATALHA — arena, 3 modos (23–32s)
- **Entrada**: transição de **início de batalha Pokémon** (flash + wipe pixelado).
- **Título**: `ARENA DE DUELO` grande + `VS` pixel pulsando. Charizard (fire) e Ivysaur (grass) saltam dos screenshots em plataformas (sombra elíptica), estilo battle.
- **3 rounds** (mostrar OS TRÊS — o cliente printou de propósito):
  - **Round 1 — `04-arena-confronto.png`**: label `MODO 1 · CONFRONTO DE ATRIBUTOS`. Barras de stat comparando estilo **HP-bar** de Pokémon (enchendo; a vencedora pulsa). `CHARIZARD VENCE!` pisca (estilo "critical hit").
  - **Round 2 — `04b-arena-rpg.png`**: wipe. Label `MODO 2 · DUELO RPG`. Os 4 golpes aparecem como o clássico **menu de ataque** (box 4 opções + cursor ▶ pulando).
  - **Round 3 — `04c-arena-simulacao.png`**: wipe. Label `MODO 3 · SIMULAÇÃO TÁTICA`. O log/terminal aparece **linha a linha (typewriter)**, estilo mensagem de batalha, cursor piscando.
- **Copy**: `ARENA DE DUELO` · `COMPARE DOIS LADO A LADO` · `3 MODOS DE BATALHA`

### S5 · COLEÇÃO — registro + cards (32–40s)
1. (32–34.5s) `05-registro-rapido.png` entra como um **pop-up de item/menu**: "espie sem sair da lista". Abas VISÃO/COMBATE/GOLPES.
   - **Copy**: `ESPIE QUALQUER POKÉMON SEM SAIR DA LISTA`
2. (34.5–38s) **Abrir pacote de cartas**: os 4 cards (`card-1-tcg`, `card-2-vetor`, `card-3-retro-games`, `card-4-gameboy`) entram **GRANDES** (dominando ~75% da tela), num fan-out generoso — o card Game Boy combina demais com a vibe. Brilho de "carta rara".
   - **Copy**: `EXPORTE O CARD EM 4 ESTILOS`
3. (38–40s) Ícone de áudio pixel com ondas sonoras pulsando.
   - **Copy**: `OUÇA O SOM DE CADA POKÉMON`

### S6 · CONTINUE? — CTA (40–47s)
- Estilo **tela de fliperama "CONTINUE?"** / créditos de jogo, CRT pleno. Logo **POKÉDEX** ao centro.
- **CONTINUE?** com contador pixel `9...8...7...` (decorativo); a URL como "insira a ficha".
- **Copy**: `CONTINUE?` · `pokedex.thiagolins.dev.br` · `por @thiilins` · selos `NEXT.JS 16 · PPR · 1025 CACHEADOS`
- **Loop**: o fecho (CRT colapsando) conecta com o boot da S1.

---

## Copy completa (PT-BR correto — imperativo, "você")

| Cena | Texto |
|---|---|
| S1 | `1025 POKÉMON · TODAS AS GERAÇÕES` |
| S2 | `A POKÉDEX COMPLETA` · `ENCONTRE QUALQUER UM EM SEGUNDOS` · `FILTRE POR TIPO, NOME OU NÚMERO` |
| S3 | `CHARIZARD · #0006` · `FICHA COMPLETA` · `STATS E HABILIDADES` · `EVOLUÇÕES E FORMAS` · `SPRITES RETRÔ E SHINY` |
| S4 | `ARENA DE DUELO` · `COMPARE DOIS LADO A LADO` · `3 MODOS DE BATALHA` · `MODO 1 · CONFRONTO DE ATRIBUTOS` · `MODO 2 · DUELO RPG` · `MODO 3 · SIMULAÇÃO TÁTICA` · `CHARIZARD VENCE!` |
| S5 | `ESPIE QUALQUER POKÉMON SEM SAIR DA LISTA` · `EXPORTE O CARD EM 4 ESTILOS` · `OUÇA O SOM DE CADA POKÉMON` |
| S6 | `CONTINUE?` · `pokedex.thiagolins.dev.br` · `por @thiilins` · `NEXT.JS 16 · PPR · 1025 CACHEADOS` |

> Verbos no imperativo correto: **Encontre, Filtre, Compare, Espie, Exporte, Ouça, Confira**. NUNCA "filtra/acha/toca/confere".

---

## Sprites (URLs diretas, sem download)
- Charizard `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png`
- Ivysaur `.../2.png` · Charmander `.../4.png` · Charmeleon `.../5.png`

## Trilha (depois)
Chiptune / 8-bit, ~120BPM, com momentos: boot atmosférico → tema de exploração (catálogo) → jingle de batalha (arena) → vitória (cards) → tema de créditos (CTA). Cortes nos beats. **No piloto: mudo.**
