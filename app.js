function transformWord(word) {
    // 特別単語リストをチェック
    if (specialWords[word]) {
        return specialWords[word];
    }

    const transformMap = {
        'あ': 'え', 'い': 'れ', 'う': 'お', 'え': 'い', 'お': 'あ',
        'か': 'け', 'き': 'け', 'く': 'こ', 'け': 'き', 'こ': 'か',
        'さ': 'せ', 'し': 'しぇ', 'す': 'そ', 'せ': 'し', 'そ': 'さ',
        'た': 'て', 'ち': 'ちぇ', 'つ': 'と', 'て': 'ち', 'と': 'た',
        'な': 'ね', 'に': 'にぇ', 'ぬ': 'の', 'ね': 'に', 'の': 'な',
        'は': 'へ', 'ひ': 'ひぇ', 'ふ': 'ほ', 'へ': 'ひ', 'ほ': 'は',
        'ま': 'め', 'み': 'みぇ', 'む': 'も', 'め': 'み', 'も': 'ま',
        'や': 'いゃ', 'ゆ': 'いゅ', 'よ': 'いょ',
        'ら': 'れ', 'り': 'りぇ', 'る': 'ろ', 'れ': 'り', 'ろ': 'ら',
        'わ': 'え', 'を': 'お', 'ん': 'ん'
    };

    let transformedWord = '';
    for (let char of word) {
        transformedWord += transformMap[char] || char;
    }
    return transformedWord;
}

function transformDictionary(dictionary) {
    return dictionary.map(entry => ({
        ...entry,
        word: transformWord(entry.word),
        pronunciation: transformWord(entry.pronunciation),
        meaning: transformWord(entry.meaning),
        inflections: entry.inflections.map(transformWord),
        related_words: entry.related_words.map(transformWord),
        created_word: transformWord(entry.created_word)
    }));
}

// 例の辞書データ
const dictionaryData = [
    {
        "word": "独立",
        "pronunciation": "どくりつ",
        "meaning": "independence",
        "inflections": ["独立の", "独立に", "独立を"],
        "related_words": ["国"],
        "created_word": "独立国"
    },
    // 他の単語データをここに追加
];

// 特別単語リスト
const specialWords = {
    "独立": "りぇとこに",
    "国": "こに"
};

// 変換後の辞書データを取得
const transformedDictionary = transformDictionary(dictionaryData);

// 結果をコンソールに表示
console.log(transformedDictionary);
