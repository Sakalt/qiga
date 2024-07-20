const specialWords = {
    "独立": "りぇとこに",
    "国": "こに"
};

function transformWord(word) {
    // 特別単語リストをチェック
    if (specialWords[word]) {
        return specialWords[word];
    }

    const transformMap = {
        'あ': 'あ', 'い': 'れ', 'う': 'う', 'え': 'い', 'お': 'おぁ',
        'か': 'け', 'き': 'け', 'く': 'こ', 'け': 'き', 'こ': 'か',
        'さ': 'せ', 'し': 'しぇ', 'す': 'そ', 'せ': 'し', 'そ': 'さ',
        'た': 'て', 'ち': 'ちぇ', 'つ': 'と', 'て': 'ち', 'と': 'た',
        'な': 'ね', 'に': 'にぇ', 'ぬ': 'の', 'ね': 'に', 'の': 'な',
        'は': 'へ', 'ひ': 'ひぇ', 'ふ': 'ほ', 'へ': 'ひ', 'ほ': 'は',
        'ま': 'め', 'み': 'みぇ', 'む': 'も', 'め': 'み', 'も': 'ま',
        'や': 'いゃ', 'ゆ': 'いゅ', 'よ': 'いょ',
        'ら': 'れ', 'り': 'りぇ', 'る': 'りゅ', 'れ': 'り', 'ろ': 'ら',
        'わ': 'ヴぁ', 'を': 'お', 'ん': 'ん'
    };

    let transformedWord = '';
    for (let char of word) {
        transformedWord += transformMap[char] || char;
    }
    return transformedWord;
}

function transformText(text) {
    const words = text.split(/\s+/);
    const transformedWords = words.map(transformWord);
    return transformedWords.join(' ');
}

function transformAndDisplay() {
    const inputText = document.getElementById('inputText').value;
    const outputText = transformText(inputText);
    document.getElementById('outputText').textContent = outputText;
}
