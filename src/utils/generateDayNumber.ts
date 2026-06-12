import { TOTAL_POKEMON } from '@/constants/pokemon'

/**
 * Gera um número pseudoaleatório baseado em uma semente numérica.
 * Implementação do algoritmo Linear Congruential Generator (LCG).
 * @param {number} seed - A semente para inicializar o gerador.
 * @returns {function} Uma função que retorna um float entre 0 e 1.
 */
function createRandomGenerator(seed: any) {
  // Parâmetros clássicos do LCG (valores numéricos padrão do Numerical Recipes)
  const m = 2147483648 // 2^31
  const a = 1103515245
  const c = 12345

  let currentSeed = seed

  return function () {
    currentSeed = (a * currentSeed + c) % m
    return currentSeed / m
  }
}

/**
 * Retorna um número inteiro determinístico entre 1 e TOTAL_POKEMON (1025),
 * baseado no dia atual — garante que o Pokémon do dia sempre exista na PokeAPI.
 * @returns {number} Número gerado
 */
export function getDailyRandomNumber() {
  const today = new Date()

  // Criação da semente baseada em YYYYMMDD para consistência de fuso horário local
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  const seed = parseInt(`${year}${month}${day}`, 10)

  // Inicializa o gerador com a semente do dia
  const random = createRandomGenerator(seed)

  // Mapeia o float de 0-1 para o intervalo válido [1, TOTAL_POKEMON].
  // Antes usava 1350 (hardcoded) — IDs 1026..1350 não existem na PokeAPI,
  // o fetch dava 404 e o card do Pokémon do dia sumia (~24% dos dias).
  return Math.floor(random() * TOTAL_POKEMON) + 1
}
