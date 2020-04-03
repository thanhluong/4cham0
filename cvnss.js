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
    "ư": "ừ"
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
    "ư": "ứ"
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
    "ư": "ử"
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
    "ư": "ữ"
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
    "ư": "ự"
};

obj_has_value = (obj, v) => {
    return (Object.values(obj).indexOf(v) > -1);
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
    }
    return "level";
};

convert_word = (word) => {
    if(word == "") return "";
    var new_word = word;
    return new_word;
};

convert_text = (given_text) => {
    var new_text = "";
    given_text = given_text.split(" ");
    for(const w of given_text)
        new_text += convert_word(w) + " ";
    return new_text;
};