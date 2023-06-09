/// <reference types="cypress" />

import prodavnica from "../7-pcPressPageObjects/prodavnicaPage.cy.js"
import uplatnica from "../7-pcPressPageObjects/uplatnicaPage.cy.js"
import narudzbenica from "../7-pcPressPageObjects/narudzbenicaPage.cy.js"
import pcpress from "../../fixtures/pcPress.json"

context('PC Press', () => {

    beforeEach(() => {
        cy.visit('https://pcpress.rs/prodavnica/')
    })

    it('TC_1 POSITIVE', () => {

        prodavnica.pc11brojevaCheck()
        prodavnica.kolicinaMinimalAssert()
        prodavnica.pc11brojevaKupujemClick()

        uplatnica.uplatnicaMinimalValues()

    })

    it('TC_2 POSITIVE', () => {

        prodavnica.polugodisnjaCheck()
        prodavnica.kolicinaMinimalAssert()
        prodavnica.kolicinaMaximalType(pcpress.maximum.kolicina)
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.uplatnicaMaximumValues()

        narudzbenica.predracunBrojAssert()



    })

    it('TC_3 POSITIVE', () => {
        
        prodavnica.pretplataNaDigitalnoIzdanjePolugodisnjaCheck()
        prodavnica.kolicinaMinimalAssert()
        prodavnica.kolicina2Type(pcpress.aboveminimum.kolicina)
        prodavnica.pretplataNaDigitalnoIzdanjePolugodisnjaKupujemClick()

        uplatnica.uplatnicaAboveMinimum()

        narudzbenica.predracunBrojAssert()


    })

    it('TC_4 POSITIVE', () => {

        prodavnica.knjiga50GodinaCheck()
        prodavnica.kolicinaMinimalAssert()
        prodavnica.kolicina99Type(pcpress.bellowmaximum.kolicina)
        prodavnica.knjiga50GodinaKupujemClick()

        uplatnica.uplatnicaBellowMaximum()

        narudzbenica.predracunBrojAssert()

        
    })

    it('TC_5 POSITIVE', () => {

        prodavnica.arhivaBrojevaCasopisaPCCheck()
        prodavnica.arhivaBrojevaCasopisaPCDropdownSelect()
        prodavnica.arhivaBrojevaCasopisaPCKupujemClick()

        uplatnica.uplatnicaMaximumValues()

        narudzbenica.predracunBrojAssert()

        
    })

    it('TC_6 POSITIVE', () => {

        prodavnica.aktuelniBrojCasopisaPCCheck()
        prodavnica.aktuelniBrojCasopisaPCDropdownSelect()

        prodavnica.pretplataNaDigitalnoIzdanjeGodisnjaCheck()
        prodavnica.kolicinaMinimalAssert()
        prodavnica.kolicina50Type(pcpress.nominal.kolicina)
        prodavnica.pretplataNaDigitalnoIzdanjeGodisnjaKupujemClick()

        uplatnica.uplatnicaNominal()

        narudzbenica.predracunBrojAssert()

        
    })

    it('TC_7 POSITIVE', () => {
        prodavnica.pcLogoClick()

        prodavnica.pcHomePageAssert()
        
    })

    // Ispitati zasto test prolazi u headed modu a ne u headless-u

    it.skip('TC_8 POSITIVE', () => {
        
        prodavnica.feedIconClick()
        cy.wait(4000)
        prodavnica.feedPageAssert()
    })

    it('TC_9 POSITIVE', () => {

        prodavnica.pcLogoFooterClick()
        prodavnica.pcHomePageAssert()
        
    })

    // Ispitati zasto test prolazi u headed modu a ne u headless-u

    it('TC_10 POSITIVE', () => {
        
        prodavnica.newsFeedClick()
        prodavnica.newsFeedAssert()
    })

    it('TC_11', () => {

        prodavnica.faceBookClick()
        prodavnica.faceBookPageAssert()
    })

    it('TC_12', () => {
        
        prodavnica.twitterClick()
        prodavnica.twitterPageAssert()
    })

    it.only('TC_13', () => {
        
        prodavnica.pravilaKoristenjaClick()
        prodavnica.pravilaKoristenjaPageAssert()
    })

    // Ispitati zasto test prolazi u headed modu a ne u headless-u

    it('TC_14', () => {
        
        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.uplatnicaNominal()

        narudzbenica.prodavnicaPcLinkClick()

        prodavnica.prodavnicaPageAssert()
    })

    // Naci kako hendlati new window za email 

    it.skip('TC_15', () => {
        
        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.uplatnicaNominal()

        narudzbenica.prodajaPCLinkClick()
    })

    it('TC_16', () => {
        
        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.uplatnicaNominal()

        narudzbenica.pcProdavniceClick()

        prodavnica.prodavnicaPageAssert()
    })

    it('TC_17', () => {
        
        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.narucujemButtonClick()

        narudzbenica.povratakNaVasuNarudzbenicuLinkClick()
        //narudzbenica.narudzbenicaFormAssert()
    })

    it('TC_18', () => {
        
        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.odustajemButtonClick()

        prodavnica.prodavnicaPageAssert()
    })

    it('TC_19', () => {
        
        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.xcloseIspisButtonClick()

        prodavnica.prodavnicaPageAssert()
    })

    it('TC_20 NEGATIVE' , () => {

        prodavnica.pc11brojevaCheck()
        prodavnica.kolicinaMinimalType(pcpress.invalid.kolicina)
        prodavnica.pc11brojevaKupujemClick()
        prodavnica.errorPopUpAssert()
    })

    it('TC_21 NEGATIVE' , () => {

        prodavnica.aktuelniBrojCasopisaPCKupujemClick()
        prodavnica.errorPopUpAssert()
        
    })

    it('TC_22 NEGATIVE' , () => {

        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.imePrezimeType(pcpress.invalid.imeprezime)
        uplatnica.ulicaBrojType(pcpress.nominal.ulicaibroj)
        uplatnica.postanskiBrojType(pcpress.nominal.postanskibroj)
        uplatnica.gradType(pcpress.nominal.grad)
        uplatnica.telefonType(pcpress.nominal.telefon)
        uplatnica.emailType(pcpress.nominal.email)
        uplatnica.narucujemButtonClick()

        prodavnica.errorNarudzbenicaAssert()
        
    })

    it('TC_23 NEGATIVE', () => {

        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.imePrezimeType(pcpress.nominal.imeprezime)
        uplatnica.ulicaBrojType(pcpress.invalid.ulicaibroj)
        uplatnica.postanskiBrojType(pcpress.nominal.postanskibroj)
        uplatnica.gradType(pcpress.nominal.grad)
        uplatnica.telefonType(pcpress.nominal.telefon)
        uplatnica.emailType(pcpress.nominal.email)
        uplatnica.narucujemButtonClick()

        prodavnica.errorNarudzbenicaAssert()
    })

    it('TC_24 NEGATIVE', () => {

        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.imePrezimeType(pcpress.nominal.imeprezime)
        uplatnica.ulicaBrojType(pcpress.nominal.ulicaibroj)
        uplatnica.postanskiBrojType(pcpress.invalid.postanskibroj)
        uplatnica.gradType(pcpress.invalid.grad)
        uplatnica.telefonType(pcpress.nominal.telefon)
        uplatnica.emailType(pcpress.nominal.email)

        uplatnica.gradSyncAssert()
    })

    it('TC_25 NEGATIVE', () => {

        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.imePrezimeType(pcpress.nominal.imeprezime)
        uplatnica.ulicaBrojType(pcpress.nominal.ulicaibroj)
        uplatnica.postanskiBrojType(pcpress.nominal.postanskibroj)
        uplatnica.gradType(pcpress.nominal.grad)
        uplatnica.telefonType(pcpress.invalid.telefon)
        uplatnica.emailType(pcpress.nominal.email)
        uplatnica.narucujemButtonClick()

        prodavnica.errorNarudzbenicaAssert()

    })

    it('TC_26 NEGATIVE', () => {

        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()

        uplatnica.imePrezimeType(pcpress.nominal.imeprezime)
        uplatnica.ulicaBrojType(pcpress.nominal.ulicaibroj)
        uplatnica.postanskiBrojType(pcpress.nominal.postanskibroj)
        uplatnica.gradType(pcpress.nominal.grad)
        uplatnica.telefonType(pcpress.nominal.telefon)
        uplatnica.emailType(pcpress.invalid.email)
        uplatnica.narucujemButtonClick()

        prodavnica.errorNarudzbenicaAssert()

    })

    it('TC_27 NEGATIVE', () => {

        prodavnica.polugodisnjaCheck()
        prodavnica.polugodisnjaKupujemClick()
        uplatnica.narucujemButtonClick()

        prodavnica.errorNarudzbenicaAssert()

    })
        
})