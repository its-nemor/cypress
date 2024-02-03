describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com')
  })
  // describe('My First Test', () => {
  //   it('Does not do much!', () => {
  //     expect(true).to.equal(true)
  //   })
  // })
  describe('Поиск номера телефона', () => {
    it('Ищет номер на главной странице', () => {
      cy.visit('https://www.demoblaze.com')
      cy.contains('+440 123456')
    })
  })
  describe('Проверка адаптации на 6 айфоне', () => {
    it('Открывает сайт с разрешением 375 на 667', () => {
      cy.visit('https://www.demoblaze.com')
      cy.viewport('iphone-6')
    })
  })
  describe('Проверка слайдера', () => {
    it('Прокручивает слайдер 5 раз', () => {
      cy.visit('https://www.demoblaze.com') 
      for (let i = 0; i < 5; i++) { 
        cy.get('.carousel-control-next').click()
        cy.wait(1000)
      }
    })
  })
  describe('Проверка категории "Ноутбуки"', () => {
    it('Открывет ноутбуки', () => {
      cy.visit('https://www.demoblaze.com') 
      cy.get('.list-group-item').eq(2).click()
    })
  })
  describe('Добавление товара в корзину', () => {
    it('Добавил товар в корзину', () => {
      cy.visit('https://www.demoblaze.com') 
      cy.get('.card-title').eq(2).click()
      cy.get('.btn-success.btn-lg').click()
    })
  })
  describe('Проверка наличия товара в корзине', () => {
    it('Нашел Macbook Air', () => {
      cy.visit('https://www.demoblaze.com')
      cy.get('.list-group-item').eq(2).click()
      cy.get('.card-title').eq(2).click()
      cy.get('.btn-success.btn-lg').click() 
      cy.get('.nav-item').eq(3).click()
      cy.wait(1000)
      cy.contains('MacBook air')
    })
  })
})