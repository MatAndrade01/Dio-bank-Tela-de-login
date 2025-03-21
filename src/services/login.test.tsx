import { login } from "./login"

describe('login', () => {

  const mockAlert = jest.fn();
  window.alert = mockAlert
  const mockEmail = 'matheus@gmail.com'

  it('Deve exibir um alert com boas vindas', async() => {
    await login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo! ${mockEmail}`)
  })

  it('Não deve exibir a mensagem de boas vindas sem o e-mail se o e-mail for invalido', async() => {
    await login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
  })

  it('Exibir um erro caso o e-mail seja invalido', async() => {
    await login('email@invalido.com')
    expect(mockAlert).toHaveBeenCalledWith('Email invalido')
  })
})