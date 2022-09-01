/// <reference types="cypress"/>

let data = require("../../fixtures/founderdata.json")


describe("Test Suite of Contact us Page",()=>{
  
    it('Browse Founder and Lighting url',()=>{
       
        cy.visit(data.url)
        cy.wait(3000)
        cy.title().should('eq', 'Founder and Lightning - launch your tech start-up.')
    })

    it('Click the Contact us Page',()=>{
        cy.contains('Contact us').click()
        cy.title().should('eq', 'Reach out to Founder and Lightning today')
    })

    it('Verify Validation with all blank fields',()=>{
        cy.get('.actions > .btn').click()
        cy.wait(3000)
        cy.get('.hs-error-msg').eq(1).should('have.text','Please complete this required field.')
        cy.get('.hs-error-msg').eq(2).should('have.text','Please complete this required field.')
        cy.get('.hs-error-msg').eq(3).should('have.text','Please complete this required field.')
        cy.get('.hs-error-msg').eq(4).should('have.text','Please complete this required field.')
        cy.get('.hs_message > .no-list > li > .hs-error-msg').should('have.text','Please complete this required field.')
    })

    it('Enter First name and check the Validation',()=>{

        cy.get("[placeholder='First name*']").type(data.Firstname)
        cy.get('.hs-error-msg').eq(1).should('have.text','Please complete this required field.')
        cy.get('.hs-error-msg').eq(2).should('have.text','Please complete this required field.')
        cy.get('.hs-error-msg').eq(3).should('have.text','Please complete this required field.')
        cy.get('.hs_message > .no-list > li > .hs-error-msg').should('have.text','Please complete this required field.')

    })

    it('Enter Last name and check the Validation',()=>{
        cy.get("[placeholder='Last name*']").type(data.Lastname)
        cy.get('.hs-error-msg').eq(1).should('have.text','Please complete this required field.')
        cy.get('.hs-error-msg').eq(2).should('have.text','Please complete this required field.')
        cy.get('.hs_message > .no-list > li > .hs-error-msg').should('have.text','Please complete this required field.')
    })

    it('Enter Email and check the Validation',()=>{
        cy.get("[placeholder='Email*']").type(data.InvalidFormalEmail)
        cy.get('.hs-error-msg').eq(0).should('have.text','Email must be formatted correctly.')
        cy.get("[placeholder='Email*']").clear()
        cy.get("[placeholder='Email*']").type(data.InavlidEmailaddress)
        cy.wait(5000)
        cy.get('.hs-error-msg').eq(0).should('have.text','Please enter a valid email address.')
        cy.get("[placeholder='Email*']").clear()
        cy.get("[placeholder='Email*']").type(data.ValidEmail)
    })

    it('Enter Phone number and check the validation',()=>{
        cy.get("[placeholder='Mobile phone number*']").type(data.Invalidphoneno)
        cy.get('.actions > .btn').click()
        cy.get('.hs-error-msg').eq(0).should('have.text','Must contain only numbers, +()-. and x.')
        cy.get("[placeholder='Mobile phone number*']").clear()
        cy.get("[placeholder='Mobile phone number*']").type(data.Invalidno)
    })

    it('Select Value from dropdown',()=>{
        cy.get('select').select('Facebook')
    })

    it('Enter the Message',()=>{
        cy.get("[name='message']").type(data.Message)
        cy.get('.actions > .btn').click()
    })

    it('Verify the Phone number Validation',()=>{
        cy.get('.hs-error-msg').eq(0).should('have.text','The number you entered is not in range.')
        cy.get("[placeholder='Mobile phone number*']").clear()
        cy.get("[placeholder='Mobile phone number*']").type(data.ValidPhoneno)
        cy.get('.actions > .btn').click()
    })

    it('Verify the Successful Submit',()=>{
        cy.get('.submitted-message > p').should('have.text',"Thank you for your message. We'll get back to you as soon as possible.")

    })

})