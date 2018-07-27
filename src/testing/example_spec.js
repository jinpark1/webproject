describe('My First Test', function () {
    it('Does not do much', function() {
        expect(true).to.equal(true)
    })
})

describe('My Second Test', function () {
    it('Goes to settings page and inputs data and clicks a button', function() {
        cy.visit('http://localhost:3000/settings')
        cy.get('input.setting-bottom-left-onlineID').type('Online ID')
        cy.get('button.setting-bottom-left-button').click()
    })

    describe('My Third Test', () => {
        it('Accepts input', () => {
            const text = 'Hello There';
            cy.visit('http://localhost:3000/settings');
            cy.get('.setting-bottom-left-onlineID').type( text ).should('have.value', text)

        })
    })

    describe('My Fourth Test', () => {
        it('Accepts input and clicks save', () => {
            cy.visit('http://localhost:3000/settings');
            cy.get('.setting-bottom-left-onlineID').type('Hello Hello');
            cy.get('.setting-bottom-left-button').click();
        })
    })

    describe('Authorizatioin', () => {
        it('Logs user in successfully', () => {
            cy.visit('http://localhost:3000/auth');
            cy.get(':nth-child(2) > input').type('jin@gmail.com');
            cy.get(':nth-child(3) > input').type('Abcd1234');
            cy.get(':nth-child(4) > button').click()
            cy.url().should('include', 'http://localhost:3000/forum')
            cy.visit('http://localhost:3000/settings');
            cy.get('.setting-bottom-left-onlineID').type('Hello Hello');
            cy.get('.setting-bottom-left-button').click();
        })
    })
})