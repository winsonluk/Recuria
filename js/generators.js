var verbs = ["accept", "add", "admire", "admit", "advise", "afford", "agree", "alert", "allow", "amuse", "analyze", "announce", "annoy", "answer", "apologise", "appear", "applaud", "appreciate", "approve", "argue", "arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", "attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bathe", "battle", "beam", "beg", "behave", "belong", "bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "breathe", "bruise", "brush", "bubble", "bump", "burn", "bury", "buzz", "calculate", "call", "camp", "care", "carry", "carve", "cause", "challenge", "change", "charge", "chase", "cheat", "check", "cheer", "chew", "choke", "chop", "claim", "clap", "clean", "clear", "clip", "close", "coach", "coil", "collect", "colour", "comb", "command", "communicate", "compare", "compete", "complain", "complete", "concentrate", "concern", "confess", "confuse", "connect", "consider", "consist", "contain", "continue", "copy", "correct", "cough", "count", "cover", "crack", "crash", "crawl", "cross", "crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", "dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", "depend", "describe", "desert", "deserve", "destroy", "detect", "develop", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", "double", "doubt", "drag", "drain", "dream", "dress", "drip", "drop", "drown", "drum", "dry", "dust", "earn", "educate", "embarrass", "employ", "empty", "encourage", "end", "enjoy", "enter", "entertain", "escape", "examine", "excite", "excuse", "exercise", "exist", "expand", "expect", "explain", "explode", "extend", "face", "fade", "fail", "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", "fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", "flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", "fry", "gather", "gaze", "glow", "glue", "grab", "grate", "grease", "greet", "grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "heat", "help", "hook", "hop", "hover", "hug", "hum", "hunt", "hurry", "identify", "ignore", "imagine", "impress", "improve", "include", "increase", "influence", "inform", "inject", "injure", "instruct", "intend", "interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", "launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", "listen", "live", "load", "lock", "long", "look", "love", "man", "manage", "march", "mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorise", "mend", "mess", "up", "milk", "mine", "miss", "mix", "moan", "mourn", "move", "muddle", "mug", "multiply", "murder", "nail", "name", "need", "nest", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", "pass", "paste", "pat", "pause", "peck", "pedal", "perform", "permit", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practice", "pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", "provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", "race", "radiate", "rain", "raise", "reach", "realise", "receive", "recognise", "record", "reduce", "reflect", "refuse", "reign", "reject", "rejoice", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", "rob", "rock", "roll", "rot", "rub", "rule", "rush", "sack", "sail", "satisfy", "save", "saw", "scare", "scatter", "scold", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", "share", "shave", "shelter", "shock", "shop", "shrug", "sigh", "sign", "signal", "sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", "snatch", "sniff", "snore", "snow", "soak", "soothe", "sound", "spare", "spark", "sparkle", "spell", "spill", "spoil", "spot", "spray", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", "stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", "tap", "taste", "tease", "tempt", "terrify", "test", "thank", "thaw", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", "trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", "unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", "wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "weigh", "welcome", "whip", "whirl", "whisper", "whistle", "wink", "wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "x-ray", "yawn", "yell", "zip", "zoom"];

var inspVerbs = ["accomplish", "achieve", "act", "adventure", "appreciate", "attain", "believe", "build", "overcome", "challenge", "commit", "concentrate", "control", "conquer", "create", "dedicate", "desire", "determine", "dream", "drive", "empower", "encourage", "endure", "enjoy", "envision", "finish", "focus", "fulfill", "work", "harmonize", "honor", "humble", "imagine", "inspire", "know", "learn", "journey", "love", "motivate", "overcome", "persevere", "persist", "plan", "prioritize", "reach", "satisfy", "succeed", "sustain", "teach", "trust", "value", "ignite", "grow", "invest", "benefit", "perform", "strike", "give", "earn", "change", "explore", "think", "analyze", "sweat", "devote"];

var nouns = ["people", "history", "way", "art", "world", "information", "map", "two", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "industry", "media", "thing", "oven", "community", "definition", "safety", "quality", "development", "language", "management", "player", "variety", "video", "week", "security", "country", "exam", "movie", "organization", "equipment", "physics", "analysis", "policy", "series", "thought", "basis", "boyfriend", "direction", "strategy", "technology", "army", "camera", "freedom", "paper", "environment", "child", "instance", "month", "truth", "marketing", "university", "writing", "article", "department", "difference", "goal", "news", "audience", "fishing", "growth", "income", "marriage", "user", "combination", "failure", "meaning", "medicine", "philosophy", "teacher", "communication", "night", "chemistry", "disk", "energy", "nation", "road", "role", "soup", "advertising", "location", "success", "addition", "apartment", "education", "math", "moment", "painting", "politics", "attention", "decision", "event", "property", "shopping", "student", "wood", "competition", "distribution", "entertainment", "office", "population", "president", "unit", "category", "cigarette", "context", "introduction", "opportunity", "performance", "driver", "flight", "length", "magazine", "newspaper", "relationship", "teaching", "cell", "dealer", "finding", "lake", "member", "message", "phone", "scene", "appearance", "association", "concept", "customer", "death", "discussion", "housing", "inflation", "insurance", "mood", "woman", "advice", "blood", "effort", "expression", "importance", "opinion", "payment", "reality", "responsibility", "situation", "skill", "statement", "wealth", "application", "city", "county", "depth", "estate", "foundation", "grandmother", "heart", "perspective", "photo", "recipe", "studio", "topic", "collection", "depression", "imagination", "passion", "percentage", "resource", "setting", "ad", "agency", "college", "connection", "criticism", "debt", "description", "memory", "patience", "secretary", "solution", "aspect", "attitude", "director", "personality", "psychology", "recommendation", "response", "selection", "storage", "version", "alcohol", "argument", "complaint", "contract", "emphasis", "highway", "loss", "membership", "possession", "preparation", "steak", "union", "agreement", "currency", "employment", "engineering", "entry", "interaction", "mixture", "preference", "region", "republic", "tradition", "actor", "classroom", "delivery", "device", "difficulty", "drama", "election", "engine", "football", "guidance", "hotel", "owner", "priority", "protection", "suggestion", "tension", "variation", "anxiety", "atmosphere", "awareness", "bath", "bread", "candidate", "climate", "comparison", "confusion", "construction", "elevator", "emotion", "employee", "employer", "guest", "height", "leadership", "mall", "manager", "operation", "recording", "sample", "transportation", "charity", "cousin", "disaster", "editor", "efficiency", "excitement", "extent", "feedback", "guitar", "homework", "leader", "mom", "outcome", "permission", "presentation", "promotion", "reflection", "refrigerator", "resolution", "revenue", "session", "singer", "tennis", "basket", "bonus", "cabinet", "childhood", "church", "clothes", "coffee", "dinner", "drawing", "hair", "hearing", "initiative", "judgment", "lab", "measurement", "mode", "mud", "orange", "poetry", "police", "possibility", "procedure", "queen", "ratio", "relation", "restaurant", "satisfaction", "sector", "signature", "significance", "song", "tooth", "town", "vehicle", "volume", "wife", "accident", "airport", "appointment", "arrival", "assumption", "baseball", "chapter", "committee", "conversation", "database", "enthusiasm", "error", "explanation", "farmer", "gate", "girl", "hall", "historian", "hospital", "injury", "instruction", "maintenance", "manufacturer", "meal", "perception", "pie", "poem", "presence", "proposal", "reception", "replacement", "revolution", "river", "son", "speech", "tea", "village", "warning", "winner", "worker", "writer", "assistance", "breath", "buyer", "chest", "chocolate", "conclusion", "contribution", "cookie", "courage", "dad", "desk", "drawer", "establishment", "examination", "garbage", "grocery", "honey", "impression", "improvement", "independence", "insect", "inspection", "inspector", "king", "ladder", "menu", "penalty", "piano", "potato", "profession", "professor", "quantity", "reaction", "requirement", "salad", "sister", "supermarket", "tongue", "weakness", "wedding", "affair", "ambition", "analyst", "apple", "assignment", "assistant", "bathroom", "bedroom", "beer", "birthday", "celebration", "championship", "client", "consequence", "departure", "diamond", "dirt", "ear", "fortune", "friendship", "funeral", "gene", "girlfriend", "hat", "indication", "intention", "lady", "midnight", "negotiation", "obligation", "passenger", "pizza", "platform", "poet", "pollution", "recognition", "reputation", "shirt", "sir", "speaker", "stranger", "surgery", "sympathy", "tale", "throat", "trainer", "uncle", "youth", "time", "work", "film", "water", "money", "example", "while", "business", "study", "game", "life", "form", "air", "day", "place", "number", "part", "field", "fish", "back", "process", "heat", "hand", "experience", "job", "book", "end", "point", "type", "home", "economy", "value", "body", "market", "guide", "interest", "state", "radio", "course", "company", "price", "size", "card", "list", "mind", "trade", "line", "care", "group", "risk", "word", "fat", "force", "key", "light", "training", "name", "school", "top", "amount", "level", "order", "practice", "research", "sense", "service", "piece", "web", "boss", "sport", "fun", "house", "page", "term", "test", "answer", "sound", "focus", "matter", "kind", "soil", "board", "oil", "picture", "access", "garden", "range", "rate", "reason", "future", "site", "demand", "exercise", "image", "case", "cause", "coast", "action", "age", "bad", "boat", "record", "result", "section", "building", "mouse", "cash", "class", "nothing", "period", "plan", "store", "tax", "side", "subject", "space", "rule", "stock", "weather", "chance", "figure", "man", "model", "source", "beginning", "earth", "program", "chicken", "design", "feature", "head", "material", "purpose", "question", "rock", "salt", "act", "birth", "car", "dog", "object", "scale", "sun", "note", "profit", "rent", "speed", "style", "war", "bank", "craft", "half", "inside", "outside", "standard", "bus", "exchange", "eye", "fire", "position", "pressure", "stress", "advantage", "benefit", "box", "frame", "issue", "step", "cycle", "face", "item", "metal", "paint", "review", "room", "screen", "structure", "view", "account", "ball", "discipline", "medium", "share", "balance", "bit", "black", "bottom", "choice", "gift", "impact", "machine", "shape", "tool", "wind", "address", "average", "career", "culture", "morning", "pot", "sign", "table", "task", "condition", "contact", "credit", "egg", "hope", "ice", "network", "north", "square", "attempt", "date", "effect", "link", "post", "star", "voice", "capital", "challenge", "friend", "self", "shot", "brush", "couple", "debate", "exit", "front", "function", "lack", "living", "plant", "plastic", "spot", "summer", "taste", "theme", "track", "wing", "brain", "button", "click", "desire", "foot", "gas", "influence", "notice", "rain", "wall", "base", "damage", "distance", "feeling", "pair", "savings", "staff", "sugar", "target", "text", "animal", "author", "budget", "discount", "file", "ground", "lesson", "minute", "officer", "phase", "reference", "register", "sky", "stage", "stick", "title", "trouble", "bridge", "campaign", "character", "club", "edge", "evidence", "fan", "letter", "lock", "maximum", "novel", "option", "pack", "park", "plenty", "quarter", "skin", "sort", "weight", "baby", "background", "carry", "dish", "factor", "fruit", "glass", "joint", "master", "muscle", "red", "strength", "traffic", "trip", "vegetable", "appeal", "chart", "gear", "ideal", "kitchen", "land", "log", "mother", "net", "party", "principle", "relative", "sale", "season", "signal", "spirit", "street", "tree", "wave", "belt", "bench", "commission", "copy", "drop", "minimum", "path", "progress", "project", "sea", "south", "status", "stuff", "ticket", "tour", "angle", "blue", "breakfast", "confidence", "daughter", "degree", "doctor", "dot", "dream", "duty", "essay", "father", "fee", "finance", "hour", "juice", "limit", "luck", "milk", "mouth", "peace", "pipe", "seat", "stable", "storm", "substance", "team", "trick", "afternoon", "bat", "beach", "blank", "catch", "chain", "consideration", "cream", "crew", "detail", "gold", "interview", "kid", "mark", "match", "mission", "pain", "pleasure", "score", "screw", "sex", "shop", "shower", "suit", "tone", "window", "agent", "band", "block", "bone", "calendar", "cap", "coat", "contest", "corner", "court", "cup", "district", "door", "east", "finger", "garage", "guarantee", "hole", "hook", "implement", "layer", "lecture", "lie", "manner", "meeting", "nose", "parking", "partner", "profile", "respect", "rice", "routine", "schedule", "swimming", "tip", "winter", "airline", "bag", "battle", "bed", "bill", "bother", "cake", "code", "curve", "designer", "dimension", "dress", "ease", "emergency", "evening", "extension", "farm", "fight", "gap", "grade", "holiday", "horror", "horse", "host", "husband", "loan", "mistake", "mountain", "nail", "noise", "occasion", "package", "patient", "pause", "phrase", "proof", "race", "relief", "sand", "sentence", "shoulder", "smoke", "stomach", "string", "tourist", "towel", "vacation", "west", "wheel", "wine", "arm", "aside", "associate", "bet", "blow", "border", "branch", "breast", "brother", "buddy", "bunch", "chip", "coach", "cross", "document", "draft", "dust", "expert", "floor", "god", "golf", "habit", "iron", "judge", "knife", "landscape", "league", "mail", "mess", "native", "opening", "parent", "pattern", "pin", "pool", "pound", "request", "salary", "shame", "shelter", "shoe", "silver", "tackle", "tank", "trust", "assist", "bake", "bar", "bell", "bike", "blame", "boy", "brick", "chair", "closet", "clue", "collar", "comment", "conference", "devil", "diet", "fear", "fuel", "glove", "jacket", "lunch", "monitor", "mortgage", "nurse", "pace", "panic", "peak", "plane", "reward", "row", "sandwich", "shock", "spite", "spray", "surprise", "till", "transition", "weekend", "welcome", "yard", "alarm", "bend", "bicycle", "bite", "blind", "bottle", "cable", "candle", "clerk", "cloud", "concert", "counter", "flower", "grandfather", "harm", "knee", "lawyer", "leather", "load", "mirror", "neck", "pension", "plate", "purple", "ship", "skirt", "slice", "snow", "specialist", "stroke", "switch", "trash", "tune", "zone", "anger", "award", "bid", "bitter", "boot", "bug", "camp", "candy", "carpet", "cat", "champion", "channel", "clock", "comfort", "cow", "crack", "engineer", "entrance", "fault", "grass", "guy", "hell", "highlight", "incident", "island", "joke", "jury", "leg", "lip", "mate", "motor", "nerve", "passage", "pen", "pride", "priest", "prize", "promise", "resident", "resort", "ring", "roof", "rope", "sail", "scheme", "script", "sock", "station", "toe", "tower", "truck", "witness", "a", "you", "it", "can", "will", "if", "one", "many", "most", "other", "use", "make", "good", "look", "help", "go", "great", "being", "few", "might", "still", "public", "read", "keep", "start", "give", "human", "local", "general", "she", "specific", "long", "play", "feel", "high", "tonight", "put", "common", "set", "change", "simple", "past", "big", "possible", "particular", "today", "major", "personal", "current", "national", "cut", "natural", "physical", "show", "try", "check", "second", "call", "move", "pay", "let", "increase", "single", "individual", "turn", "ask", "buy", "guard", "hold", "main", "offer", "potential", "professional", "international", "travel", "cook", "alternative", "following", "special", "working", "whole", "dance", "excuse", "cold", "commercial", "low", "purchase", "deal", "primary", "worth", "fall", "necessary", "positive", "produce", "search", "present", "spend", "talk", "creative", "tell", "cost", "drive", "green", "support", "glad", "remove", "return", "run", "complex", "due", "effective", "middle", "regular", "reserve", "independent", "leave", "original", "reach", "rest", "serve", "watch", "beautiful", "charge", "active", "break", "negative", "safe", "stay", "visit", "visual", "affect", "cover", "report", "rise", "walk", "white", "beyond", "junior", "pick", "unique", "anything", "classic", "final", "lift", "mix", "private", "stop", "teach", "western", "concern", "familiar", "fly", "official", "broad", "comfortable", "gain", "maybe", "rich", "save", "stand", "young", "fail", "heavy", "hello", "lead", "listen", "valuable", "worry", "handle", "leading", "meet", "release", "sell", "finish", "normal", "press", "ride", "secret", "spread", "spring", "tough", "wait", "brown", "deep", "display", "flow", "hit", "objective", "shoot", "touch", "cancel", "chemical", "cry", "dump", "extreme", "push", "conflict", "eat", "fill", "formal", "jump", "kick", "opposite", "pass", "pitch", "remote", "total", "treat", "vast", "abuse", "beat", "burn", "deposit", "print", "raise", "sleep", "somewhere", "advance", "anywhere", "consist", "dark", "double", "draw", "equal", "fix", "hire", "internal", "join", "kill", "sensitive", "tap", "win", "attack", "claim", "constant", "drag", "drink", "guess", "minor", "pull", "raw", "soft", "solid", "wear", "weird", "wonder", "annual", "count", "dead", "doubt", "feed", "forever", "impress", "nobody", "repeat", "round", "sing", "slide", "strip", "whereas", "wish", "combine", "command", "dig", "divide", "equivalent", "hang", "hunt", "initial", "march", "mention", "smell", "spiritual", "survey", "tie", "adult", "brief", "crazy", "escape", "gather", "hate", "prior", "repair", "rough", "sad", "scratch", "sick", "strike", "employ", "external", "hurt", "illegal", "laugh", "lay", "mobile", "nasty", "ordinary", "respond", "royal", "senior", "split", "strain", "struggle", "swim", "train", "upper", "wash", "yellow", "convert", "crash", "dependent", "fold", "funny", "grab", "hide", "miss", "permit", "quote", "recover", "resolve", "roll", "sink", "slip", "spare", "suspect", "sweet", "swing", "twist", "upstairs", "usual", "abroad", "brave", "calm", "concentrate", "estimate", "grand", "male", "mine", "prompt", "quiet", "refuse", "reveal", "rush", "shake", "shift", "shine", "steal", "suck", "surround", "anybody", "bear", "brilliant", "dare", "dear", "delay", "drunk", "female", "hurry", "inevitable", "invite", "kiss", "neat", "pop", "punch", "quit", "reply", "representative", "resist", "rip", "rub", "silly", "smile", "spell", "stretch", "stupid", "tear", "temporary", "tomorrow", "wake", "wrap", "yesterday", "pipeline", "bioinformatics", "field", "innovation", "webinar", "money", "vacation", "equity", "email", "data", "network", "application", "laptop", "computer", "back-end"];

verbs = verbs.concat(inspVerbs);

function random (seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function randomInt (seed, max, min) {
    if (!min) min = 0;
    return min + Math.floor(random(seed) * (max - min + 1));
}

function seedChoice (seed, choices) {
    return choices[Math.floor(random(seed) * choices.length)];
}

function someChoices(seed, choices, n) {
    var newChoices = choices.slice();
    var results = [];
    while (n > 0) {
        var index = Math.floor(random(seed * n + n) * newChoices.length);
        results.push(newChoices[index]);
        newChoices.splice(index, 1);
        n--;
    }
    return results;
}

function verb (seed) {
    return seedChoice(seed, verbs);
}

function noun (seed) {
    return seedChoice(seed, nouns);
}

function commonWord (seed) {
    if (random(seed) > 0.5) {
        return verb(seed);
    } else {
        return noun(seed);
    }
}

function seedChance (seed, chance) {
    return random(seed) < chance;
}

function capitalizeFirst (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function getBackground (seed) {
	return bgRoot + seedChoice(seed, backgrounds);
}

function getFont (seed) {
    var f = someChoices(seed, fonts, 5);
    var res = f[0];
    for (var i = 1; i < f.length; i++) {
        res = res + ", " + f[i];
    }
    return res;
}

function getLogoFont (seed, cursive) {
    var data = fonts.concat(logoFonts);
    if (cursive) {
        data = data.concat(cursiveFonts);
    }
    var f = someChoices(seed, data, 5);
    var res = f[0];
    for (var i = 1; i < f.length; i++) {
        res = res + ", " + f[i];
    }
    return res;
}

function getAlpha (seed, min, max) {
  if (!min) min = 0;
  if (!max) max = 1;
  var ans = (min + (random(seed) * (max - min)));
  return Math.floor(ans * 100) / 100;
}

function hslToRgb(h, s, l){
    var r, g, b;
    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function getColor (seed) {
    var h = random(seed * 43 + 32);
    var s = Math.min(Math.max(random(seed * 12 + 44), 0.5), .8);
    var l = Math.min(Math.max(random(seed * 65 + 21), 0.3), 0.5);
    return hslToRgb(h, s, l);
}

function getLogo (seed) {
    var logo; 
    if (random(seed) < 0.5) {
        // Use Font Awesome
        logo = seedChoice(seed, fontAwesome);
        logo = '<i class="fa ' + logo + '"></i>';
    } else {
        // Use Glyphicons
        logo = seedChoice(seed, glyphicons);
        logo = '<span class="glyphicon ' + logo + '"></span>';
    }
    return logo;
}

/**
 * Returns an array of team member's photos and stuff. 
 */
function getTeam (seed) {
    var ratio = Math.min(random(seed), random(seed * 2));
    var size = randomInt(seed * 4, 2, 8); 
    var girlCount = Math.floor(size * ratio);
    var guyCount = size - girlCount;
    var girls = someChoices(seed, females, girlCount);
    var guys = someChoices(seed, males, guyCount);
    var jobs = someChoices(seed + 1, titles, girlCount + guyCount);
    var mult = 3;
    var results = [];
    var m = 0;
    var f = 0;
    while (m < guyCount || f < girlCount) {   
        if (random(seed * mult + 1) > 0.5 && f < girlCount) {
            // Add the next girl
            var name = femaleName(seed * mult) + " " + lastName(seed * mult + 2);
            var photo = femaleRoot + girls[f];
            var job = jobs[m + f];
            results.push({'name': name, 'photo': photo, 'job': job});
            f++;
        } else if (m < guyCount) {
            // Add the next guy
            var name = maleName(seed * mult) + " " + lastName(seed * mult + 2);
            var photo = maleRoot + guys[m];
            var job = jobs[m + f];
            results.push({'name': name, 'photo': photo, 'job': job});
            m++;
        }
        mult *= 3;
    }
    return results;
}

function getPeople (seed, n) {
    var results = [];
    var i = n;
    while (i > 0) {
        results.push(femaleName(seed * i + 1) + " " + lastName(seed * i + 2));
        results.push(femaleName(seed * i + 3) + " " + lastName(seed * i + 4));
        i--;
    }
    return someChoices(seed + 5, results, n);
}

function removeLastVowel (seed) {
    var word = commonWord(seed);
    if (word.length <= 4) {
        return word;
    }
    var lastVowel = -1;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            lastVowel = i;
        }
    }
    if (lastVowel > -1) {
        return word.slice(0, lastVowel) + word.slice(lastVowel + 1);
    } else {
        return word;
    }
}

function startupify (seed) {
    var results = [];
    results.push(commonWord(seed) + "it");
    results.push(commonWord(seed) + "ly");
    results.push(commonWord(seed) + "ify");
    results.push(commonWord(seed) + "hub");
    results.push(commonWord(seed) + "me");
    results.push("you" + commonWord(seed));
    results.push(commonWord(seed) + "str");
    results.push(commonWord(seed) + "Now");
    results.push(commonWord(seed) + "Link");
    results.push(commonWord(seed) + "in");
    results.push(commonWord(seed) + "able");
    results.push("Smart" + commonWord(seed));
    return capitalizeFirst(seedChoice(seed + 1, results));
}

//Here are functions to make slogans
function threeVerbs (seed) {
    var resultList = someChoices(seed, inspVerbs, 3);
    return (capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(resultList[2]) + ".");
}

function threeAdjs (seed) {
    var resultList = someChoices(seed, bizAdjs, 3);
    return (capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(resultList[2]) + ".");
}

function adjNoun (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Your " + seedChoice(seed + 1, bizAdjs) + " " + seedChoice(seed, nouns) + ".";
    } else {
        return "Dare to " + commonWord(seed) + ".";
    }
}

function neverBefore (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Like no other " + noun(seed) + ".";
    } else {
        return capitalizeFirst(commonWord(seed)) + " like never before.";
    }
}

function worldsMost (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "World's most " + seedChoice(seed + 1, bizAdjs) + " " + noun(seed) + ".";
    } else {
        return "The " + seedChoice(seed + 1, bizAdjs) + " way to " + verb(seed) + ".";
    }
}

function doSomethingGreat (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "The " + seedChoice(seed + 1, bizAdjs) + " " + noun(seed) + ".";
    } else {
        return capitalizeFirst(verb(seed)) + " something " + seedChoice(seed + 1, bizAdjs) + ".";
    }
}

function aShift (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Your " + seedChoice(seed + 1, bizAdjs) + " new " + noun(seed) + ".";
    } else {
        return "We " + verb(seed) + ".";
    }
}

function madeEasy (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "The evolution of the " + noun(seed) + ".";
    } else {
        return "For those who " + verb(seed) + ".";
    }
}

function doYou (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Your " + noun(seed) + ". " + capitalizeFirst(seedChoice(seed + 1, bizAdjs)) + ".";
    } else {
        return "Do you " + verb(seed) + "?";
    }
}

function youllNever (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "The " + noun(seed) + " you've been waiting for.";
    } else {
        var resultList = someChoices(seed, inspVerbs, 2);
        return  capitalizeFirst(resultList[0]) + ". " + capitalizeFirst(resultList[1]) + ". " + capitalizeFirst(verb(seed)) + ".";
    }
}

function doMore (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return capitalizeFirst(seedChoice(seed + 1, inspVerbs)) + " your " + noun(seed) + ".";
    } else {
        return "Start " + seedChoice(seed, gerunds) + ".";
    }
}

function ally (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return capitalizeFirst(seedChoice(seed + 1, inspGerunds)) + " your " + seedChoice(seed, nouns) + ".";
    } else {
        return capitalizeFirst(seedChoice(seed + 1, bizAdvbs)) + " " + seedChoice(seed, gerunds) + ".";
    }
}



function makeSlogan (seed) {
    var results = [];
    results.push(threeVerbs(seed));
    results.push(threeAdjs(seed));
    results.push(adjNoun(seed));
    results.push(neverBefore(seed));
    results.push(worldsMost(seed));
    results.push("We Are " + startupify(seed) + ".");
    results.push(doSomethingGreat(seed));
    results.push(aShift(seed));
    results.push(madeEasy(seed));
    results.push("Meet " + startupify(seed) + ".");
    results.push(doYou(seed));
    results.push(youllNever(seed));
    results.push(doMore(seed));
    results.push(ally(seed));
    return seedChoice(seed + 1000, results);
}

function maleName (seed) {
    var total = random(seed) * maleNameTotal;
    var i = 0;
    while (total > 0) {
        total -= maleWeights[i];
        i++
    }
    return maleNames[i];
}

function femaleName (seed) {
    var total = random(seed) * femaleNameTotal;
    var i = 0;
    while (total > 0) {
        total -= femaleWeights[i];
        i++
    }
    return femaleNames[i];
}

function lastName (seed) {
    var total = random(seed) * lastNameTotal;
    var i = 0;
    while (total > 0) {
        total -= lastWeights[i];
        i++
    }
    return lastNames[i];
}

function makeTown (seed) {
    var total = random(seed) * populationTotal;
    var i = 0;
    while (total > 0) {
        total -= populations[i];
        i++
    }
    return towns[i];
}

//Here are functions to make openers
function isRevo (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is revolutionizing the way people think about " + seedChoice(seed, plurals) + ".";
    } else {
        return startupify(seed) + " is why you'll never " + seedChoice(seed, verbs) + " the same way again.";
    }
}

function isLocal (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " was created to help you find " + seedChoice(seed, plurals) + " in your area. From local " + seedChoice(seed, plurals) + " to national brands, no one knows " + seedChoice(seed, plurals) + " like " + startupify(seed) + ". No one.";
    } else {
        return startupify(seed) + " is a place for people who enjoy " + seedChoice(seed, gerunds) + " to connect. Find local " + seedChoice(seed, gerunds) + " events or just share your favorite tips and stories with others who love to " + seedChoice(seed, verbs) + ".";
    }
}

function shareAnd (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Share your favorite " + seedChoice(seed, plurals) + " and discover new ones. With " + startupify(seed) + " you never know what you might find!";
    } else {
        return startupify(seed) + " was founded by people who love " + seedChoice(seed, gerunds) + " just like you! Enter your favorite ways to " + seedChoice(seed, verbs) + " and we'll help you fit it all in. Since we're using " + seedChoice(seed, bizAdjs) + " technologies, you can count on us next time you " + seedChoice(seed, verbs) + ".";
    }
}

function theMax (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is the last word in " + seedChoice(seed + 1, bizAdjs) + " " + seedChoice(seed, plurals) + ". We know you never settle for less than the best and neither do we. " + capitalizeFirst(seedChoice(seed, inspVerbs)) + " with professional grade tools and " + seedChoice(seed + 1, inspVerbs) + " your future.";
    } else {
        return capitalizeFirst(seedChoice(seed, gerunds)) + ". Everyone talks about it but only the truly " + seedChoice(seed, bizAdjs) + " are able to " + seedChoice(seed, verbs) + " day in and day out. Here at " + startupify(seed) + " we understand your commitment and want to give you what you need to take your " + seedChoice(seed, gerunds) + " to the next level.";
    }
}

function anApp (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, nouns) + " app.";
    } else {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, gerunds) + " app.";
    }
}

function anApp (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, nouns) + " app.";
    } else {
        return startupify(seed) + " is a different kind of " + seedChoice(seed, gerunds) + " app.";
    }
}

function builtBy (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return capitalizeFirst(seedChoice(seed + 3, inspVerbs)) + " your niche in the " + seedChoice(seed, nouns) + " ecosystem with online branding that’s built by " + seedChoice(seed + 1, bizAdjs) + " people for " + seedChoice(seed + 2, bizAdjs) + " consumers.";
    } else {
        return capitalizeFirst(seedChoice(seed + 3, inspVerbs)) + " your niche in the " + seedChoice(seed, gerunds) + " ecosystem with online branding that’s built by " + seedChoice(seed + 1, bizAdjs) + " people for " + seedChoice(seed + 2, bizAdjs) + " consumers.";
    }
}

function intoCash (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is a " + seedChoice(seed + 7, bizAdjs) + " " + seedChoice(seed, nouns) + " service that makes it easy to turn your " + seedChoice(seed, plurals) + " into cash.";
    } else {
        return capitalizeFirst(seedChoice(seed + 7, inspVerbs)) + " & " + capitalizeFirst(seedChoice(seed, verbs)) + " together with your team.";
    }
}

function weUse (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "We use " + seedChoice(seed, plurals) + " to " + seedChoice(seed + 43, inspVerbs) + " things that matter.";
    } else {
        return "We're " + seedChoice(seed, gerunds) + " to " + seedChoice(seed + 43, inspVerbs) + " things that matter.";
    }
}

function gotBetter (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Buying " + seedChoice(seed, plurals) + " just got a whole lot better…";
    } else {
        return capitalizeFirst(seedChoice(seed, gerunds)) + " just got a whole lot better…";
    }
}

function manageYour (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Manage your organisation's " + seedChoice(seed, plurals) + " online, with our cloud software.";
    } else {
        return "Manage your organisation's " + seedChoice(seed, gerunds) + " online, with our cloud software."
    }
}

function worldsFirst (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Introducing the world’s first " + seedChoice(seed + 6543, bizAdjs) + " " + seedChoice(seed, nouns) + ".";
    } else {
        return "You like to " + seedChoice(seed, verbs) + ". " + startupify(seed) + " does too.";
    }
}

function makeOpener (seed) {
    var results = [];
    results.push(isRevo(seed));
    results.push(isLocal(seed));
    results.push(shareAnd(seed));
    results.push(theMax(seed));
    results.push(anApp(seed));
    results.push(builtBy(seed));
    results.push(intoCash(seed));
    results.push(weUse(seed));
    results.push(gotBetter(seed));
    results.push(manageYour(seed));
    results.push(worldsFirst(seed));
    return seedChoice(seed + 999, results);
}

function makeSubDescs (seed) {
    var results = [];
    results.push("What makes " + startupify(seed) + " *? Our commitment to + pursuing excellence at every turn.");
    results.push("You know what you want, something * that doesn't hold you back. With the latest * technologies, " + startupify(seed) + " has your back.");
    results.push("Unlike our competitors, we'll always be + looking for new ways to move forward.");
    results.push(startupify(seed) + " is * from the ground up. We have * products, * prices, and most of all * service.");
    results.push(startupify(seed) + " is a different kind of startup. We know what it means to be * and will never compromise when it comes to + delivering what you need.");
    results.push("Includes everything you need, find and buy in a truly * manner.");
    results.push("Our completely * calculator ensures you'll never overpay.");
    results.push("Fits you and your * lifestyle.");
    results.push("Get a complete picture of the * landscape in as little as 60 seconds.");
    results.push("Optimize your changes for a truly * impact.");
    results.push("Be the first to see * news in your area.");
    results.push(startupify(seed) + " is inherently * and community centric. It's time for the * community to have a voice.");
    results.push("In this market, only the * survive." );
    results.push("Worried about what happens next? We've got you covered.");
    results.push("Find out what people are saying using our * tools.");
    results.push("Say goodbye to spreadsheets forever.");
    results.push("Share and collaborate with others inside and outside your organization.");
    results.push("Turn Research into a Team Sport.");
    results.push("Welcome to the next generation of * insight and engagement.");
    results.push("Build * relationships with your customers.");
    results.push("Cut through the clutter and get * results in a fresh & exciting way.");
    results.push(startupify(seed) + " is easy to use, no matter who you are.");
    results.push(startupify(seed) + " customers love the product and the company. We love them too!");
    results.push("We provide 24x7x365 support with knowledgeable " + startupify(seed) + " staff answering your requests.");
    results.push("Our * information gathering system completes the view of the customer.");
    results.push("Found in * communities throughout the world.");
    results.push("Discover 100% more * content.");
    results.push("Your * workspace evolves your ideas into finished products.");
    results.push("Simply * results for teams of all sizes.");
    results.push("Our state-of-the-art technology keeps things *.");
    results.push("Engage your customers with a * campaign.");
    results.push(startupify(seed) + " is a simple and powerful tool that automatically organizes for * results.");
    results.push("Finding a * fit just got a whole lot easier.");
    return someChoices(seed + 11, results, 3);
}

//Generators for testimonials
function thanksTo (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "Thanks to " + startupify(seed) + " we now have beautiful, " + seedChoice(seed + 4, bizAdjs) + " " + seedChoice(seed, plurals) + " every day. Our customers are happy and engagement has drastically increased. Highly recommend!";
    } else {
        return "I've been " + seedChoice(seed, gerunds) + " for 15 years and I've never seen anything like " + startupify(seed) + ". They're really something else.";
    }
}

function allMy (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "When my friends need new " + seedChoice(seed, plurals) + " there's only one word I tell them, " + startupify(seed) + ".";
    } else {
        return "As a professional in the " + seedChoice(seed, gerunds) + " industry, I tell all my new clients to start out with an account on " + startupify(seed) + ". It puts them miles ahead of the competition and makes my job that much easier!";
    }
}

function forMe (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "We’ve tried every " + seedChoice(seed, nouns) + " program available. " + startupify(seed) + " was the easiest to setup & the most effective.";
    } else {
        return capitalizeFirst(seedChoice(seed, gerunds)) + " apps are not for me. Being recommended by a friend on " + startupify(seed) + " is exactly what I need.";
    }
}

function toLearn (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return "When I needed a new " + seedChoice(seed, nouns) + " my best friend told me about " + startupify(seed) + ". I gave it a try and was completely thrilled!";
    } else {
        return startupify(seed) + " is a great idea, I started " + seedChoice(seed, gerunds) + " to learn this skill set! ";
    }
}

function tinderFor (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is like Tinder... but for " + seedChoice(seed, plurals) + "!";
    } else {
        return startupify(seed) + " is like Tinder... but for " + seedChoice(seed, gerunds) + "!";
    }
}

function facebookFor (seed) {
    if (seedChoice(seed, nouns) == commonWord(seed)) {
        return startupify(seed) + " is the Facebook of " + seedChoice(seed, plurals) + ".";
    } else {
        return startupify(seed) + " is the Facebook of " + seedChoice(seed, gerunds) + ".";
    }
}

function makeTest (seed, n) {
    var results = [];
    results.push(startupify(seed) + " was " + seedChoice(seed + 4, bizAdjs) + ", " + seedChoice(seed + 5, bizAdjs) + ", and " + seedChoice(seed + 6, bizAdjs) + ". Ten out of ten!");
    results.push("I was skeptical at first but " + startupify(seed) + " really came through. They answered all my questions and made the whole experience a plesant one.");
    results.push(thanksTo(seed));
    results.push(allMy(seed));
    results.push("One of the biggest challenges we faced after we hit our early goals was how do we stay top-of-mind and keep our users engaged? Enter " + startupify(seed) + ". Problem solved.");
    results.push(forMe(seed));
    results.push(toLearn(seed));
    results.push(startupify(seed) + " is the real deal. No doubt about it.");
    results.push("Pure and simple. You guys have nailed it.");
    results.push("I have to say this is probably the best platform I have seen of its kind.");
    results.push("Definitely recommended.  Great experience, which gave us a better perspective and helped to solve several business problems.");
    results.push(startupify(seed) + " was very useful not only in case of our project but just good basis for every business we would start in the future.");
    results.push("You shouldn’t think about whether to apply - just do it! It’s an unique opportunity to meet awesome people and change the world!");
    results.push("Once again, " + startupify(seed) + " came through. And even before estimated delivery date! Just impressive! Thank you! You’re awesome!");
    results.push(startupify(seed) + " was excellent - especially relative to other services I tried - and certainly 1000x better than the experiences I had with other providers.");
    results.push(tinderFor(seed));
    results.push(facebookFor(seed));
    results.push("I have to say I love this idea, it solved a big problem.");
    results.push("It feels good to be part of the " + startupify(seed) + " family.");
    results.push("We searched through a lot of providers and plans to find a good fit for our business. " + startupify(seed) + " made it easy to find the right fit for my business and my budget.");
    return someChoices(seed + 12, results, n);
}

function getSeedFromURL() {
    url = window.location.href;
    var n = url.lastIndexOf('?s=');
    if (n == -1 || isNaN(parseInt(url.substring(n + 3)))) {
        return "";
    }
    return url.substring(n + 3);
}

function ourSponsors(seed) {
    var results = [];
    results.push("Our Sponsors");
    results.push("Our Clients");
    results.push("Proudly Partenering With");
    results.push("As Seen On");
    results.push("Current Clients");
    return seedChoice(seed + 13, results);
}

function beTheFirst(seed) {
    var results = [];
    results.push("Be the first to try out ");
    results.push("Find out what's next at ");
    results.push("Keep up with what's happening at ");
    results.push("Learn more about ");
    results.push("Sign up for ");
    return seedChoice(seed + 14, results) + startupify(seed);
}

/*
module.exports.startupify = function (seed) {
    var results = [];
    results.push(commonWord(seed) + "it");
    results.push(commonWord(seed) + "ly");
    results.push(commonWord(seed) + "ify");
    results.push(commonWord(seed) + "hub");
    results.push(commonWord(seed) + "me");
    results.push("you" + commonWord(seed));
    results.push(commonWord(seed) + "str");
    results.push(commonWord(seed) + "Now");
    results.push(commonWord(seed) + "Link");
    results.push(commonWord(seed) + "in");
    results.push(commonWord(seed) + "able");
    results.push("Smart" + commonWord(seed));
    return capitalizeFirst(seedChoice(seed + 1, results));
}

require('make-runnable');
*/
