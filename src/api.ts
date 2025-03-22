const conta = {
  id: '1',
  email: 'matheus@gmail.com',
  password: '123456',
  name: 'Matheus Andrade',
  balance: 2000.00
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})
