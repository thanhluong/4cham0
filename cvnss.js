tone_hanging = {
    "a": "à",
    "ă": "ằ",
    "â": "ầ",
    "e": "è",
    "ê": "ề",
    "i": "ì",
    "o": "ò",
    "ô": "ồ",
    "ơ": "ờ",
    "u": "ù",
    "ư": "ừ",
    "y": "ỳ"
};

tone_sharp = {
    "a": "á",
    "ă": "ắ",
    "â": "ấ",
    "e": "é",
    "ê": "ế",
    "i": "í",
    "o": "ó",
    "ô": "ố",
    "ơ": "ớ",
    "u": "ú",
    "ư": "ứ",
    "y": "ý"
};

tone_asking = {
    "a": "ả",
    "ă": "ẳ",
    "â": "ẩ",
    "e": "ẻ",
    "ê": "ể",
    "i": "ỉ",
    "o": "ỏ",
    "ô": "ổ",
    "ơ": "ở",
    "u": "ủ",
    "ư": "ử",
    "y": "ỷ"
};

tone_tumbling = {
    "a": "ã",
    "ă": "ẵ",
    "â": "ẫ",
    "e": "ẽ",
    "ê": "ễ",
    "i": "ĩ",
    "o": "õ",
    "ô": "ỗ",
    "ơ": "ỡ",
    "u": "ũ",
    "ư": "ữ",
    "y": "ỹ"
};

tone_heavy = {
    "a": "ạ",
    "ă": "ặ",
    "â": "ậ",
    "e": "ẹ",
    "ê": "ệ",
    "i": "ị",
    "o": "ọ",
    "ô": "ộ",
    "ơ": "ợ",
    "u": "ụ",
    "ư": "ự",
    "y": "ỵ"
};

over_moon = {
    "a": "ă",
    "o": "ơ",
    "u": "ư"
};

over_cap = {
    "a": "â",
    "e": "ê",
    "o": "ô"
};

rhymes_old = [
    "uyêt", "uyên",
    "iêt", "iêp", "iêc", "iên", "iêm", "iêng", "iêu",
    "yêt", "yên", "yêm", "yêng", "yêu",
    "uôt", "uôc", "uôn", "uôm", "uông", "uôi",
    "ươt", "ươp", "ươc", "ươn", "ươm", "ương", "ươu", "ươi",
    "uât", "uân", "uâng", "uây",
    "uơt", "uơn",
    "oăt", "oăc", "oăn", "oăm", "oăng",
    "oet", "oen", "oem", "oeo",
    "oat", "oap", "oac", "oan", "oam", "oang", "oao", "oai", "oay",
    "uy", "y"
];

rhymes_new = [
    "yd", "yl",
    "id", "if", "is", "il", "iv", "iz", "iw",
    "id", "il", "iv", "iz", "iw",
    "ud", "us", "ul", "uv", "uz", "uj",
    "ưd", "ưf", "ưs", "ưl", "ưv", "ưz", "ưw", "ưj",
    "âd", "âl", "âz", "âj",
    "ơd", "ơl",
    "ăd", "ăs", "ăl", "ăv", "ăz",
    "ed", "el", "ev", "ew",
    "od", "of", "os", "ol", "ov", "oz", "ow", "oj", "aj",
    "y", "i"
];

tone_id = {
    "sharp": 0,
    "hanging": 1,
    "asking": 2,
    "tumbling": 3,
    "heavy": 4 
};

over_id = {
    "none": 0,
    "moon": 1,
    "cap": 2
};

tone_char = [
    ["j", "l", "z", "s", "r"],
    ["x", "k", "v", "w", "h"],
    ["b", "d", "q", "g", "f"]
];

over_char = {
    "moon": "o",
    "cap": "y",
    "none": "p"
};

obj_has_value = (obj, v) => {
    return (Object.values(obj).indexOf(v) > -1);
};

obj_get_key = (obj, v) => {
    return (Object.keys(obj).find(key => obj[key] === v));
};

get_tone_chr = (chr) => {
    if(obj_has_value(tone_hanging, chr)) return "hanging";
    if(obj_has_value(tone_sharp, chr)) return "sharp";
    if(obj_has_value(tone_asking, chr)) return "asking";
    if(obj_has_value(tone_tumbling, chr)) return "tumbling";
    if(obj_has_value(tone_heavy, chr)) return "heavy";
    return "level";
};

get_tone_word = (word) => {
    for(const c of word){
        let cur_tone = get_tone_chr(c);
        if(cur_tone != "level")
            return cur_tone;
    };
    return "level";
};

remove_tone_chr = (chr) => {
    if(obj_has_value(tone_hanging, chr)) return obj_get_key(tone_hanging, chr);
    if(obj_has_value(tone_sharp, chr)) return obj_get_key(tone_sharp, chr);
    if(obj_has_value(tone_asking, chr)) return obj_get_key(tone_asking, chr);
    if(obj_has_value(tone_tumbling, chr)) return obj_get_key(tone_tumbling, chr);
    if(obj_has_value(tone_heavy, chr)) return obj_get_key(tone_heavy, chr);
    return chr;
};

remove_tone_word = (word) => {
    var new_word = "";
    for(const c of word){
        let new_c = remove_tone_chr(c);
        new_word += new_c;
    };
    return new_word;
};

get_over_chr = (chr) => {
    if(obj_has_value(over_moon, chr)) return "moon";
    if(obj_has_value(over_cap, chr)) return "cap";
    return "none";
};

get_over_word = (word) => {
    for(const c of word){
        let cur_over = get_over_chr(remove_tone_chr(c));
        if(cur_over != "none")
            return cur_over;
    };
    return "none";
};

remove_over_chr = (chr) => {
    if(obj_has_value(over_moon, chr)) return obj_get_key(over_moon, chr);
    if(obj_has_value(over_cap, chr)) return obj_get_key(over_cap, chr);
    return chr;
};

remove_over_word = (word) => {
    var new_word = "";
    for(const c of word){
        let new_c = remove_over_chr(c);
        new_word += new_c;
    };
    return new_word;    
};

update_first_consonant = (word) => {
    /*
        Rules:
        + k -> c, đ -> d, d -> z
        + ph -> f, qu -> q, kh -> k, gi -> j, gh -> g, ng -> w
        + ngh -> w
    */
    var n = word.length;
    if(n > 3){
        // 3-char-consonant
        let consonant = word[0] + word[1] + word[2];
        let suffix = word.slice(3);
        if(consonant == "ngh"){
            consonant = "w";
            let new_word = consonant + suffix;
            return new_word;
        }
    }
    if(n > 2){
        // 2-char-consonant
        let consonant = word[0] + word[1];
        let suffix = word.slice(2);
        if(consonant == "ph") consonant = "f";
        if(consonant == "qu") consonant = "q";
        if(consonant == "kh") consonant = "k";
        if(consonant == "gi") consonant = "j";
        if(consonant == "gh") consonant = "g";
        if(consonant == "ng") consonant = "w";
        if(consonant.length == 1){
            // consonant has been updated
            let new_word = consonant + suffix;
            return new_word;
        }
    }
    if(n > 1){
        // 1-char-consonant
        let consonant = word[0];
        let old_consonant = word[0];
        let suffix = word.slice(1);
        if(consonant == "k") consonant = "c";
        if(consonant == "d") consonant = "z";
        if(consonant == "đ") consonant = "d";
        if(consonant != old_consonant){
            // consonant has been updated
            let new_word = consonant + suffix;
            return new_word;
        }
    }
    return word;
};

update_final_consonant = (word) => {
    /*
        Rules:
        + g -> ng, nh -> h and ch -> k
    */
    var n = word.length;
    if(n <= 2) return word;
    var prefix = word.substr(0, n-2);
    var final_consonant = word.substr(n-2, n);
    if(final_consonant == "ng") final_consonant = "g";
    if(final_consonant == "nh") final_consonant = "h";
    if(final_consonant == "ch") final_consonant = "k";
    var new_word = prefix + final_consonant;
    return new_word;
};

is_alpha_chr = (chr) => {
    if(chr == "đ") return true;
    if(chr == "Đ") return true;
    chr = chr.toLowerCase();
    chr = remove_tone_chr(chr);
    chr = remove_over_chr(chr);
    is_alpha = (chr.match(/[a-z]/) != null);
    return is_alpha;
};

is_upper = (chr) => {
    chr_capitalized = chr.toUpperCase();
    return (chr == chr_capitalized);
};

reverse_str = (str) => {
    return str.split("").reverse().join("");
};

convert_cvnss = (word) => {
    var flag_upper = is_upper(word[0]);
    word = word.toLowerCase();

    var tone = get_tone_word(word);
    var over = get_over_word(word);

    if(tone == "sharp"){
        // 1st rule
        if(word.endsWith("c") 
            || word.endsWith("p") 
            || word.endsWith("t")
            || word.endsWith("ch"))
            tone = "level";
    }
    word = remove_tone_word(word);

    word = update_first_consonant(word); // replace first consonant
    word = update_final_consonant(word); // replace final consonant

    // replace rhyme
    m = rhymes_old.length;
    for(let i = 0; i < m; i++){
        if(word.match(rhymes_old[i])){
            word = word.replace(rhymes_old[i], rhymes_new[i])
            break;
        }
    }

    // replace tone and over
    word = remove_over_word(word);
    if(tone != "level"){
        let tid = tone_id[tone];
        let oid = over_id[over];
        word += tone_char[oid][tid];
    }
    else{
        word += over_char[over];
    } 

    if(flag_upper){
        // capitalize the word
        word = word[0].toUpperCase() + word.slice(1);
    }

    return word;
};

convert_word = (word) => {
    if(word == "") return "";
    var n = word.length;
    var left_part = "";
    var right_part = "";
    var start_pos = -1;
    var end_pos;

    for(let i = 0; i < n; i++){
        if(is_alpha_chr(word[i])){
            start_pos = i;
            break;
        }
        left_part += word[i];
    };
    if(start_pos == -1) return word; // no alpha char
    for(let i = n-1; i >= 0; i--){
        if(is_alpha_chr(word[i])){
            end_pos = i+1;
            break;
        }
        right_part += word[i];
    }
    right_part = reverse_str(right_part);
    text_part = word.substr(start_pos, end_pos);
    text_part = convert_cvnss(text_part);

    var new_word = left_part + text_part + right_part;
    return new_word;
};

convert_text = (given_text) => {
    var new_text = "";
    given_text = given_text.split(" ");
    for(const w of given_text){
        new_text += convert_word(w) + " ";
    }
    return new_text;
};