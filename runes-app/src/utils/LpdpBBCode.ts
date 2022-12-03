interface TranslateFragment {
    baliseDescription?: string
    sourceRegex: RegExp
    targetString: string
}

const RosettaStone: TranslateFragment[] = [
    {
        baliseDescription: "Lien courriel",
        sourceRegex: /\[email\]([\w\.-]+)@([\w\.-]+)\[\/email\]/gmi,
        targetString: "<a href=\"mailto:$1@$2\">Lien courriel : $1@$2</a>"
    },
    {
        baliseDescription: "Mise en gras",
        sourceRegex: /(\[b\])(.*)(\[\/b\])/gmi,
        targetString: "<span style=\"font-weight:bold\">$2</span>"
    },
]

const LpdpBBCode2Html = (sourceText: string): string => {
    let targetText: string = ""
    RosettaStone.forEach((value) => {
        targetText = sourceText.replaceAll(value.sourceRegex, value.targetString)
    })
    return targetText
}

export default LpdpBBCode2Html