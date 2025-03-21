const conta = {
  email: 'matheus@gmail.com',
  password: '123456',
  name: 'Matheus Andrade'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 3000)
})
