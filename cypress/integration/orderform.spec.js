describe("Order Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })
    //getters
    const nameInput = () => cy.get("input[name=name]")
    const specialInput = () => cy.get("input[name=special]")
    const selectInput = () => cy.get("#size-dropdown")
    const form = () => cy.get("#pizza-form")
    // test that you cna submit the form
    describe("Testing MVP", () => {
        it("can add text to text boxes", () => {
            nameInput()
                .should("have.value", "")
                .type("Vince")
                .should("have.value", "Vince")
            specialInput()
                .should("have.value", "")
                .type("Light on the sauce")
            .should("have.value", "Light on the sauce")
        })
        it("can select multiple toppings", () => {
            cy.get("#checks input[type='checkbox']")
                .as("checkboxes")
                .check()
            cy.get("@checkboxes")
                .each(checkbox =>{
                    expect(checkbox[0].checked).to.be.equal(true)
                })
        })
        it("can submit the form", () => {
            nameInput().type("Vince")
            selectInput().select("M")
            form().submit()
        })
    })
})