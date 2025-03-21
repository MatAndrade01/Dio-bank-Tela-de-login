import { multiplicar, soma } from "./soma"

describe('soma', () => {
  it('deve somar 1 ao numero informado!', () => {
    const value = soma(1);
    expect(value).toBe(2);
  })

  it('Deve multiplicar um numero por dois', () => {
    const value = multiplicar(2, 2);
    expect(value).toBe(4);
  })

  it('Deve multiplicar o numero por tres', () => {
    const value = multiplicar(2, 3);
    expect(value).toBe(6);
  })

  it('Deve informar um erri, com multiplicador diferente de 2 ou 3', () => {
    const value = multiplicar(2, 4)
    expect(value).toBe('Multiplicador não aceito')
  })
})