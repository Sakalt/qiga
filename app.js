const specialWords = {
    "独立": "りぇとこに",
    "国": "こに",
    "ホタル": "きがらまぁの",
    "滋賀": "ちが",
    "帝国": "てぇいこに",
    "暗号": "ぱすわぁどぅ",
    "硫黄": "ぅいヴぉう",
    "鮒寿司": "ぶぁなぁづし",
    "いごねり": "ぅいぐぉにぇるぃ",
    "魔理沙": "まぁりぃしゃ",
    "楽天": "るぁくつぅえん",
    "モバイル": "すむぁふぅおゆぅずや",
    "糞": "ひぃん",
    "京": "けい",
    "何": "なにゃ",
    "ください": "くでせーれ",
    "満たす": "でびゅる",
    "馬鹿": "うましか"
};

function transformWord(word) {
    const transformMap = {
        'あ': 'あ', 'い': 'ぅい', 'う': 'う', 'え': 'い', 'お': 'おぁ',
        'か': 'け', 'き': 'くぃ', 'く': 'こ', 'け': 'き', 'こ': 'か',
        'さ': 'せ', 'し': 'すぃ', 'す': 'そ', 'せ': 'し', 'そ': 'さ',
        'た': 'て', 'ち': 'ちぇ', 'つ': 'と', 'て': 'ち', 'と': 'た',
        'な': 'ね', 'に': 'にぇ', 'ぬ': 'の', 'ね': 'に', 'の': 'な',
        'は': 'はぁ', 'ひ': 'ひぇ', 'ふ': 'ほ', 'へ': 'ひ', 'ほ': 'ほぁ',
        'ま': 'め', 'み': 'みぇ', 'む': 'もぅ', 'め': 'み', 'も': 'ま',
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
    // 特別単語を変換
    for (let [key, value] of Object.entries(specialWords)) {
        const regex = new RegExp(key, 'g');
        text = text.replace(regex, value);
    }

    // 特別単語変換後の文字列をさらに変換
    let transformedText = '';
    for (let char of text) {
        transformedText += transformWord(char);
    }
    return transformedText;
}

function transformAndDisplay() {
    const inputText = document.getElementById('inputText').value;
    const outputText = transformText(inputText);
    document.getElementById('outputText').textContent = outputText;
}
