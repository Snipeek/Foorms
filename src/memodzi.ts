
const url = 'https://motionprincess.com/wp-content/uploads/emoji-webm/';

const regex = /\w+/gi;

const emoji = {
  "😀": {
    "name": "grinning face",
    "i": 1
  },
  "😁": {
    "name": "grinning face with smiling eyes",
    "i": 6
  },
  "😂": {
    "name": "face with tears",
    "i": 3
  },
  "🤣": {
    "name": "rolling on the floor",
    "i": 4
  },
  "😃": {
    "name": "grinning face with big eyes",
    "i": 5
  },
  "😅": {
    "name": "grinning face with sweat",
    "i": 7
  },
  "😆": {
    "name": "grinning squinting face",
    "i": 8
  },
  "😉": {
    "name": "winking face",
    "i": 9
  },
  "🤭": {
    "name": "face with hand over mouth",
    "i": 83
  },
  "😋": {
    "name": "face savoring food",
    "i": 11
  },
  "😎": {
    "name": "smiling face with sunglasses",
    "i": 12
  },
  "😍": {
    "name": "smiling face with heart-eyes",
    "i": 13
  },
  "😘": {
    "name": "face blowing a kiss",
    "i": 14
  },
  "😗": {
    "name": "kissing face",
    "i": 15
  },
  "😙": {
    "name": "kissing face with smiling eyes",
    "i": 16
  },
  "😚": {
    "name": "kissing face with closed eyes",
    "i": 17
  },
  "☺️": {
    "name": "blushing closed eyes",
    "i": 18
  },
  "🙂": {
    "name": "slightly smiling face",
    "i": 19
  },
  "🤗": {
    "name": "hugging face",
    "i": 20
  },
  "🤩": {
    "name": "star-struck",
    "i": 21
  },
  "🤔": {
    "name": "thinking face",
    "i": 22
  },
  "🤨": {
    "name": "face with raised eyebrow",
    "i": 23
  },
  "😐": {
    "name": "neutral face",
    "i": 24
  },
  "😑": {
    "name": "expressionless face",
    "i": 25
  },
  "😶": {
    "name": "face without mouth",
    "i": 26
  },
  "🙄": {
    "name": "face with rolling eyes",
    "i": 27
  },
  "😏": {
    "name": "smirking face",
    "i": 28
  },
  "😣": {
    "name": "persevering face",
    "i": 29
  },
  "😥": {
    "name": "sad but relieved face",
    "i": 30
  },
  "😮": {
    "name": "face exhaling",
    "i": 95
  },
  "🤐": {
    "name": "zipper-mouth face",
    "i": 32
  },
  "😯": {
    "name": "hushed face",
    "i": 33
  },
  "😪": {
    "name": "sleepy face",
    "i": 34
  },
  "😫": {
    "name": "tired face",
    "i": 35
  },
  "😴": {
    "name": "sleeping face",
    "i": 36
  },
  "😌": {
    "name": "relieved face",
    "i": 37
  },
  "😛": {
    "name": "face with tongue",
    "i": 38
  },
  "😜": {
    "name": "winking face with tongue",
    "i": 39
  },
  "😝": {
    "name": "squinting face with tongue",
    "i": 40
  },
  "🤤": {
    "name": "drooling face",
    "i": 41
  },
  "😒": {
    "name": "unamused face",
    "i": 42
  },
  "😓": {
    "name": "downcast face",
    "i": 43
  },
  "😔": {
    "name": "pensive face",
    "i": 44
  },
  "😕": {
    "name": "confused face",
    "i": 45
  },
  "🙃": {
    "name": "upside-down face",
    "i": 46
  },
  "🤑": {
    "name": "money-mouth face",
    "i": 47
  },
  "😲": {
    "name": "astonished face",
    "i": 48
  },
  "☹️": {
    "name": "frowning face",
    "i": 49
  },
  "🙁": {
    "name": "slightly frowning face",
    "i": 50
  },
  "😖": {
    "name": "confounded face",
    "i": 51
  },
  "😞": {
    "name": "disappointed face",
    "i": 52
  },
  "😟": {
    "name": "worried face",
    "i": 53
  },
  "😤": {
    "name": "face with steam from nose",
    "i": 54
  },
  "😢": {
    "name": "crying face",
    "i": 55
  },
  "🥲": {
    "name": "smiling face with tear",
    "i": 56
  },
  "😭": {
    "name": "loudly crying face",
    "i": 57
  },
  "😦": {
    "name": "frowning face with open mouth",
    "i": 58
  },
  "😧": {
    "name": "anguished face",
    "i": 59
  },
  "😨": {
    "name": "fearful face",
    "i": 60
  },
  "😩": {
    "name": "weary face",
    "i": 61
  },
  "🤯": {
    "name": "exploding head",
    "i": 62
  },
  "😬": {
    "name": "grimacing face",
    "i": 63
  },
  "😰": {
    "name": "anxious face",
    "i": 64
  },
  "😱": {
    "name": "face screaming in fear",
    "i": 65
  },
  "😳": {
    "name": "flushed face",
    "i": 66
  },
  "🤪": {
    "name": "zany face",
    "i": 67
  },
  "😵": {
    "name": "face with spiral eyes",
    "i": 93
  },
  "😡": {
    "name": "pouting face",
    "i": 69
  },
  "😠": {
    "name": "angry face",
    "i": 70
  },
  "🤬": {
    "name": "face with symbols on mouth",
    "i": 71
  },
  "😷": {
    "name": "face with medical mask",
    "i": 72
  },
  "🤒": {
    "name": "face with thermometer",
    "i": 73
  },
  "🤕": {
    "name": "face with head-bandage",
    "i": 74
  },
  "🤢": {
    "name": "nauseated face",
    "i": 75
  },
  "🤮": {
    "name": "face vomiting",
    "i": 76
  },
  "🤧": {
    "name": "sneezing face",
    "i": 77
  },
  "😇": {
    "name": "smiling face with halo",
    "i": 78
  },
  "🤠": {
    "name": "cowboy hat",
    "i": 79
  },
  "🤡": {
    "name": "clown face",
    "i": 80
  },
  "🤥": {
    "name": "lying face",
    "i": 81
  },
  "🤫": {
    "name": "shushing face",
    "i": 82
  },
  "🧐": {
    "name": "face with monocle",
    "i": 84
  },
  "🤓": {
    "name": "nerd face",
    "i": 85
  },
  "🥵": {
    "name": "hot face",
    "i": 86
  },
  "🥳": {
    "name": "partying face",
    "i": 87
  },
  "🥺": {
    "name": "pleading face",
    "i": 88
  },
  "🥴": {
    "name": "woozy face",
    "i": 89
  },
  "🥶": {
    "name": "cold face",
    "i": 90
  },
  "🥰": {
    "name": "smiling face with hearts",
    "i": 91
  },
  "🥸": {
    "name": "disguised face",
    "i": 92
  },
  "🥱": {
    "name": "yawning face",
    "i": 94
  },
  "😈": {
    "name": "smiling face with horns",
    "i": 96
  },
  "👿": {
    "name": "angry face with horns",
    "i": 97
  },
  "😺": {
    "name": "grinning cat face",
    "i": 98
  },
  "😸": {
    "name": "grinning cat face with smiling eyes",
    "i": 99
  },
  "😹": {
    "name": "cat face with tears of joy",
    "i": 100
  },
  "😻": {
    "name": "smiling cat face with heart-eyes",
    "i": 101
  },
  "😼": {
    "name": "cat face with wry smile",
    "i": 102
  },
  "😽": {
    "name": "kissing cat face",
    "i": 103
  },
  "🙀": {
    "name": "weary cat face",
    "i": 104
  },
  "😿": {
    "name": "crying cat face",
    "i": 105
  },
  "😾": {
    "name": "pouting cat face",
    "i": 106
  },
  "🙈": {
    "name": "see-no-evil monkey",
    "i": 107
  },
  "🙉": {
    "name": "hear-no-evil monkey",
    "i": 108
  },
  "🙊": {
    "name": "speak-no-evil monkey",
    "i": 109
  },
  "❤️": {
    "name": "heart on fire",
    "i": 113
  },
  "💔": {
    "name": "broken heart",
    "i": 111
  },
  "💖": {
    "name": "sparkling heart",
    "i": 114
  },
  "💞": {
    "name": "revolving hearts",
    "i": 115
  },
  "💕": {
    "name": "two hearts",
    "i": 116
  },
  "💪": {
    "name": "flexed biceps",
    "i": 117
  },
  "🤙": {
    "name": "shaka hand",
    "i": 118
  },
  "👋": {
    "name": "waving hand",
    "i": 119
  },
  "👌": {
    "name": "ok hand",
    "i": 120
  },
  "✌️": {
    "name": "victory hand",
    "i": 121
  },
  "🤞": {
    "name": "crossed fingers",
    "i": 122
  },
  "🤘": {
    "name": "sign of the horns",
    "i": 123
  },
  "🤟": {
    "name": "love-you gesture",
    "i": 124
  },
  "👍": {
    "name": "thumbs up",
    "i": 125
  },
  "👎": {
    "name": "thumbs down",
    "i": 126
  },
  "🖖": {
    "name": "vulcan salute",
    "i": 127
  },
  "👏": {
    "name": "clapping hands",
    "i": 128
  },
  "🙏": {
    "name": "folded hands",
    "i": 129
  },
  "🖕": {
    "name": "middle finger",
    "i": 130
  },
  "👉": {
    "name": "backhand index pointing right",
    "i": 131
  },
  "🙌": {
    "name": "raising hands",
    "i": 132
  },
  "☝️": {
    "name": "index pointing up",
    "i": 133
  },
  "🤝": {
    "name": "handshake",
    "i": 134
  },
  "🤌": {
    "name": "pinched fingers",
    "i": 135
  },
  "✍️": {
    "name": "writing hand",
    "i": 136
  },
  "💅": {
    "name": "nail polish",
    "i": 137
  },
  "👀": {
    "name": "eyes",
    "i": 138
  },
  "🤷": {
    "name": "woman shrugging",
    "i": 140
  },
  "🤦": {
    "name": "woman facepalming",
    "i": 142
  },
  "🙅": {
    "name": "woman gesturing no",
    "i": 144
  },
  "☀️": {
    "name": "sun",
    "i": 145
  },
  "✨": {
    "name": "sparkles",
    "i": 146
  },
  "💫": {
    "name": "dizzy",
    "i": 147
  },
  "🔥": {
    "name": "fire",
    "i": 148
  },
  "🧨": {
    "name": "firecracker",
    "i": 149
  },
  "👑": {
    "name": "crown",
    "i": 150
  }
};

const next = {};

for (const emojiKey in emoji) {
  const { name, i} = emoji[emojiKey];

  next[emojiKey] = {
    src: `${url}100x100px/${i}_${name.replace(regex, (args) => `${args[0].toUpperCase()}${args.slice(1)}`)}.webm`,
    poster: `${url}webp-100x100px/${i}_${name.replace(regex, (args) => `${args[0].toUpperCase()}${args.slice(1)}`)}.webp`
  }
}

console.log(next)

export default next;
