import cy from "cypress"


describe('My First Test', function () {
    it('Open the URL', function () {
        cy.visit('https://www.cheers2heroes.com')

        
        //    .should('have.value', 'fake@email.com')
   })
})

//<=========================================================>
// describe('My First Test', function () {
//     it('Open the URL', function () {
//         cy.visit('https://www.youtube.com')

//         cy.contains('Music').click()

//         // cy.url().should('include', '/login')
//         cy.get('.action-search')
//             .type('football')
//             .should('have.value', 'football')

//     })
// })


// describe('My First Test', function () {
//     it('Open the URL', function () {
//         cy.visit('https://pwa.stage.mymtn.com.gh/login')

//         cy.contains('placeholder').click()

//         // cy.url().should('include', '/login')
//         cy.get('.diZtfi')
//             .type(123456789)
//             .should('have.value', 123456789)

//     })
// })

//<=========================================================>
