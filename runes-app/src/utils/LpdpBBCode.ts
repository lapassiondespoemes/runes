interface TranslateFragment {
    baliseDescription?: string
    sourceRegex: RegExp
    targetString: string
}

const RosettaStone: TranslateFragment[] = [
    /* ATTENTION, L'ordre a une importance */
    {
        baliseDescription: "Retour à la ligne 1",
        sourceRegex: /(.*)(\r\n)/gmi,
        targetString: "$1<br\/>"
    },
    {
        baliseDescription: "Retour à la ligne 2",
        sourceRegex: /(.*)(\n)/gmi,
        targetString: "$1<br\/>"
    },
    /* *********************************** */
    {
        baliseDescription: "Retour à la ligne 3",
        sourceRegex: /(\[br\])(.*)/gmi,
        targetString: "<br\/>$2"
    },
    {
        baliseDescription: "Retour à la ligne 4",
        sourceRegex: /(\[BR\])(.*)/gmi,
        targetString: "<br\/>$2"
    },
    {
        baliseDescription: "Retour à la ligne 5",
        sourceRegex: /(.*)(\[br\])/gmi,
        targetString: "$1<br\/>"
    },
    {
        baliseDescription: "Retour à la ligne 6",
        sourceRegex: /(.*)(\[BR\])/gmi,
        targetString: "$1<br\/>"
    },
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
    {
        baliseDescription: "Mise en texte pré-formaté",
        sourceRegex: /(\[pre\])(.*)(\[\/pre\])/gmi,
        targetString: "<pre>$2</pre>"
    },
    {
        baliseDescription: "Mise en page: aligné à gauche",
        sourceRegex: /(\[left\])(.*)(\[\/left\])/gmi,
        targetString: "<span style=\"text-align: left;\">$2</span>"
    },
    {
        baliseDescription: "Mise en page: aligné à droite",
        sourceRegex: /(\[right\])(.*)(\[\/right\])/gmi,
        targetString: "<span style=\"text-align: right;\">$2</span>"
    },
    {
        baliseDescription: "Mise en page: justifié",
        sourceRegex: /(\[justify\])(.*)(\[\/justify\])/gmi,
        targetString: "<span style=\"text-align: justify;\">$2</span>"
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