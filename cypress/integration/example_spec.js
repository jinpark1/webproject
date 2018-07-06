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
        // cy.visit('http://localhost:3000/settings')

        // cy.get('div.display-id').should('have.value', 'Online ID')

        // cy.url().should('include', '/commands/actions')

        // cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
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

})