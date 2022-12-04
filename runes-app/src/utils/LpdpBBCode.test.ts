import { assert, describe, it } from "vitest";

import LpdpBBCode2Html from "./LpdpBBCode";

describe("Test LpdpBBCode2Html function", () => {

    it("Test: Retour à la ligne 1", () => {
        const sourceCode = "\r\nline 1\r\nline 2\r\n"
        assert.equal(LpdpBBCode2Html(sourceCode), "<br/>line 1<br/>line 2<br/>")
    })

    it("Test: Retour à la ligne 2", () => {
        const sourceCode = "\nline 1\nline 2\n"
        assert.equal(LpdpBBCode2Html(sourceCode), "<br/>line 1<br/>line 2<br/>")
    })

    it("Test: Retour à la ligne 3-4-5-6", () => {
        const sourceCode = "[BR]line 1[br]line 2\n[br]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<br/>line 1<br/>line 2<br/><br/>")
    })

    it("Test: Lien courriel", () => {
        const sourceCode = "[email]john.doe@domain.tld[/email]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<a href=\"mailto:john.doe@domain.tld\">Lien courriel : john.doe@domain.tld</a>")
    })

    it("Test: Mise en gras", () => {
        const sourceCode = "[b]john.doe@domain.tld[/b]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<span style=\"font-weight: bold;\">john.doe@domain.tld</span>")
    })

    it("Test: Mise en italique", () => {
        const sourceCode = "[i]john.doe@domain.tld[/i]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<span style=\"font-style: italic;\">john.doe@domain.tld</span>")
    })

    it("Test: Mise en souligné", () => {
        const sourceCode = "[u]john.doe@domain.tld[/u]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<span style=\"text-decoration: underline;\">john.doe@domain.tld</span>")
    })

    it("Test: Mise en barré", () => {
        const sourceCode = "[s]john.doe@domain.tld[/s]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<span style=\"text-decoration: line-through;\">john.doe@domain.tld</span>")
    })

    it("Test: Mise en texte pré-formaté", () => {
        const sourceCode = "[pre]john.doe@domain.tld[/pre]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<pre>john.doe@domain.tld</pre>")
    })

    it("Test: Mise en page - aligné à gauche", () => {
        const sourceCode = "[left]john.doe@domain.tld\r\ntest\r\n[/left]"
        assert.equal(LpdpBBCode2Html(sourceCode), "<span style=\"text-align: left;\">john.doe@domain.tld<br/>test<br/></span>")
    })
})