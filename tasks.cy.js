/// <reference types="cypress" />

describe('tarefas', () => {

    it('deve cadastrar uma nova tarefa', () => {
        cy.visit('localhost:8080')
        cy.get('input[placeholder="Add a new Task"]').type('tarefa numero 1')
        cy.contains('button', "Create").click()

    })


})
