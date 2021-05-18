const NAMES_FORWORDS = localStorage.getItem("names");
const words = document.querySelector(".novel-words")

const NOVEL_WORDS = [
    '"나 좋아하지마." \n "그게 뭔데." \n "나 좋아하지 말라고." \n\n "그게 어떻게 하는건데." - 아웃사이더 中', 
    '"너 혹시 나 좋아했었냐? \n "아니" \n "근데 왜.." \n "사랑했었어. 죽도록, 미치도록 \n\n 우주가 다 터져나가도록" \n - 아웃사이더 中', 
    '"....가지마." \n "......" \n "..강지한..가지마..." \n "뭔가 빠졌어." \n\n "....사랑해......" \n - 나쁜남자가끌리는이유 中',
    '"누나... 이렇게 보고싶었는데... \n 사랑하는데.. 안고 싶었는데... \n 그럴 수가 없어서... 지켜주지 못해서 미안해요." \n\n - 한살연하전국서열일위유혹하기 中',
    '"려한국. 정말 병신이야? 진달래가, 너한테 뭔데, \n 뭔데 이래? 너 지금 눈에 눈물 맺혀있는거 알아?  \n 걔가 너한테 도대체 뭐냐구!!  \n 뭔데, 뭔데 이러냐구!!"  \n\n "내 심장"  \n - 오리도날수있다 中',
    '내 심장은 병신이다  \n\n 그래서 한 사람 밖에 사랑할 줄 모른다. \n - 내남자친구에게 中',
    '사랑은 말이죠. 자신을 위해서 하는게 아니래요  \n 사랑하는 사람을 위해서.  \n 나한테 가장 소중한 그 사람을 위해서 하는게  \n\n 그게 사랑이래요 \n - 온새미로 中',
    '"...왜 울었는데.."  \n "....양파 썰다가!..."  \n "왜 울었냐고?  \n "양파때문이라고 대답했어"  \n\n "...내가 양파냐..."  \n - 개기면죽는다 中',
    '"내 이름이 뭐지 강은한.."  \n "한설"  \n "난 너한테 뭐지 강은찬"  \n "한설"  \n "그거말고.. 그거말고 또..."   \n\n "죽을때까지 가질 수 없는 사람"  \n - 아웃사이더 中',
]

const WORDS_NUMBERS = NOVEL_WORDS.length;

const novelWords = function paintWord(){
    const randomNumber = Math.floor(Math.random() * WORDS_NUMBERS);
    if (NAMES_FORWORDS !== null) {
        words.classList.add("showing")
        words.innerText = NOVEL_WORDS[randomNumber];
    } 
}

novelWords()