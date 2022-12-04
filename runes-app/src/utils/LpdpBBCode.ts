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
        targetString: "<span style=\"font-weight: bold;\">$2</span>"
    },
    {
        baliseDescription: "Mise en italique",
        sourceRegex: /(\[i\])(.*)(\[\/i\])/gmi,
        targetString: "<span style=\"font-style: italic;\">$2</span>"
    },
    {
        baliseDescription: "Mise en souligné",
        sourceRegex: /(\[u\])(.*)(\[\/u\])/gmi,
        targetString: "<span style=\"text-decoration: underline;\">$2</span>"
    },
    {
        baliseDescription: "Mise en barré",
        sourceRegex: /(\[s\])(.*)(\[\/s\])/gmi,
        targetString: "<span style=\"text-decoration: line-through;\">$2</span>"
    },
]

const LpdpBBCode2Html = (sourceText: string): string => {
    let targetText: string = sourceText
    for (let i = 0; i < RosettaStone.length; i++) {
        targetText = targetText.replaceAll(RosettaStone[i].sourceRegex, RosettaStone[i].targetString)
    }
    return targetText
}

export default LpdpBBCode2Html