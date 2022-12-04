import { assert, describe, it } from "vitest";

import LpdpBBCode2Html from "./LpdpBBCode";

describe("Test LpdpBBCode2Html function", () => {

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
})