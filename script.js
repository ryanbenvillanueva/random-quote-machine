const quotes = [
    {
        quote: 'There is a light you can’t always see, if there is a world we can’t always be. If there is a dark that we shouldn’t doubt, and there is a light, don’t let it go out.',
        title: '13 (There Is A Light)'
    },
    {
        quote: 'I will sing, sing a new song. I will sing, sing a new song. How long to sing this song? How long to sing this song?',
        title: '40'
    },
    {
        quote: 'I could never take a chance of losing love to find romance in the mysterious distance between a man and a woman.',
        title: 'A Man And A Woman'
    },
    {
        quote: "Oh, don't sorrow, no don't weep for tonight at last I am coming home. I am coming home.",
        title: 'A Sort Of Homecoming'
    },
    {
        quote:'This is an invitation to a high location for someone who wants to belong. This is a meditation on your radio station. If you like it you can sing along.',
        title: 'Ahimsa'
    },
    {
        quote: 'All because of you. All because of you. All because of you. I am.',
        title: 'All Because Of You'
    },
    {
        quote: 'You say you want diamonds on a ring of gold. You say you want your story to remain untold. All the promises we make from the cradle to the grave when all I want is you.',
        title: 'All I Want Is You'
    },
    {
        quote: 'If you twist and turn away. If you tear yourself in two again. If I could, yes I would If I could, I would let it go. Surrender, dislocate.',
        title: 'Bad'
    },
    {
        quote: 'What you don\'t have you don\'t need it now. What you don\'t know you can feel it somehow.',
        title: 'Beautiful Day'
    },
    {
        quote: 'There\'s nothing you have that I need, I can breathe. Breathe now.',
        title: 'Breathe'
    },
    {
        quote: 'All I know, and all I need to know is there is no end to love.',
        title: 'California (There Is No End To Love)'
    },
    {
        quote: 'A heart that is broken is a heart that is open.',
        title: 'Cedarwood Road'
    },
    {
        quote: 'And I miss you when you\'re not around. I\'m getting ready to leave the ground. Oh you look so beautiful tonight, in the city of blinding lights.',
        title: 'City Of Blinding Lights'
    },
    {
        quote: 'You speak of signs and wonders, but I need something other. I would believe if I was able, but I\'m waiting on the crumbs from your table.',
        title: 'Crumbs From Your Table'
    },
    {
        quote: 'I\'m in a fever, when I\'m beside her. Desire. Desire.',
        title: 'Desire'
    },
    {
        quote: 'You get confused, but you know it, Yeah, you hurt for it, work for it, love. You don\'t always show it - love.',
        title: 'Discotheque'
    },
    {
        quote: 'You\'re in my mind all of the time I know that\'s not enough. Well if the sky can crack there must be someway back to love and only love.',
        title: 'Electrical Storm'
    },
    {
        quote: 'Love, lift me out of these blues. Won\'t you tell me something true, I believe in you.',
        title: 'Elevation'
    },
    {
        quote: 'Give me one more chance, let me be your lover tonight.',
        title: 'Even Better Than The Real Thing'
    },
    {
        quote: 'If you go? If you go your way and I go mine, Are we so? Are we so helpless against the tide?',
        title: 'Every Breaking Wave'
    },
    {
        quote: 'You don\'t know how beautiful you are. You don\'t know, and you don\'t get it, do you?',
        title: 'Get On Your Boots'
    },
    {
        quote: 'Nothing\'s stopping you except what\'s inside. I can help you but it\'s your fight your fight.',
        title: 'Get Out Of Your Own Way'
    },
    {
        quote: 'Gloria in te domine, Gloria exultate. Oh, Lord, if I had anything, anything at all, I\'d give it to you.',
        title: 'Gloria'
    },
    {
        quote: 'What once was hurt, what once was friction, what left a mark, no longer stings. Because Grace makes beauty out of ugly things.',
        title: 'Grace'
    },
    {
        quote: 'When the night has no end and the day yet to begin. As the room spins around, I need your love. I need your love.',
        title: 'Hawkmoon 269'
    },
    {
        quote: 'I have climbed the highest mountains, I have run through the fields only to be with you. Only to be with you.',
        title: 'I Still Haven\'t Found What I\'m Looking For'
    },
    {
        quote: 'If you walk away, walk away, I walk away, walk away, I will follow.',
        title: 'I Will Follow'
    },
    {
        quote: 'It\'s not a hill, it\'s a mountain as you start out the climb. Do you believe me, or are you doubting we\'re gonna make it all the way to the light.',
        title: 'I\'ll Go Crazy If I Don\'t Go Crazy Tonight'
    },
    {
        quote: 'If God will send his angels and if God will send a sign.Well if God will send his angels, Where do we go? Where do we go?',
        title: 'If God Will Send His Angels'
    },
    {
        quote: 'In a little while, surely you\'ll be mine. In a little while I\'ll be there. In a little while, this hurt will hurt no more. I\'ll be home, love.',
        title: 'In a Little While'
    },
    {
        quote: 'Into the heart, into the heart of a child, I can\'t go back. I can\'t stay awhile. Into the heart.',
        title: 'Into The Heart'
    },
    {
        quote: 'There is no them. There is no them. There\'s only us. There\'s only us. There is no them. There is no them. There\'s only you. There\'s only me. There is no them.',
        title: 'Invisible'
    },
    {
        quote: 'Hold me close and don\'t let me go. Hold me close like I\'m someone that you might know. Hold me close, the darkness just lets us see who we are. I\'ve got your light inside of me.',
        title: 'Iris'
    },
    {
        quote: 'Who\'s to know when the time has come around, I don\'t wanna see you cry, I know that this is not goodbye.',
        title: 'Kite'
    },
    {
        quote: 'The landlady takes me up in the air. I go, I go where I would not dare. The landlady shows me the stars up there, I\'m weightless, weightless when she is there.',
        title: 'Landlady'
    },
    {
        quote: 'Hey now do you know my name? Hey now or where I\'m going? If I can\'t get an answer, in your eyes I see it. In your eyes alone I see the lights of home.',
        title: 'Lights Of Home'
    },
    {
        quote: 'I don\'t know if I can take it I\'m not easy on my knees. Here\'s my heart you can break it, I need some release, release, release. We need love and peace.',
        title: 'Love And Peace Or Else'
    },
    {
        quote: 'Love and love is all we have left. The only thing that can be kept, love is all we have left.',
        title: 'Love Is All We Have Left'
    },
    {
        quote: 'If you listen you can hear the silence say, when you think you\'re done, you\'ve just begun.',
        title: 'Love Is Bigger Than Anything In Its Way'
    },
    {
        quote: 'Sleep, sleep tonight and may your dreams be realised. If the thunder cloud passes rain so let it rain, rain down on he.',
        title: 'MLK'
    },
    {
        quote: 'Only love, only love can leave such a mark. But only love, only love unites our hearts.',
        title: 'Magnificent'
    },
    {
        quote: 'The songs are in your eyes, I see them when you smile. I\'ve had enough of romantic love, I\'d give it up, yeah, I\'d give it up for a miracle, miracle drug.',
        title: 'Miracle Drug'
    },
    {
        quote: 'If you want to kiss the sky, better learn how to kneel. On your knees, boy!',
        title: 'Mysterious Ways'
    },
    {
        quote: 'One life with each other: sisters, brothers. One life, but we\'re not the same, we get to carry each other, carry each other.',
        title: 'One'
    },
    {
        quote: 'Free at last, they took your life, they could not take your pride. In the name of love, what more in the name of love.',
        title: 'Pride (In The Name Of Love)'
    },
    {
        quote: 'Sometimes you can\'t make it. The best you can do is to fake it. Sometimes you can\'t make it on your own.',
        title: 'Sometimes You Can\'t Make It On Your Own'
    },
    {
        quote: 'If I could stay, then the night would give you up. Stay, and the day would keep its trust. Stay, and the night would be enough.',
        title: 'Stay (Faraway, So Close)'
    },
    {
        quote: 'Don\'t say that later will be better now you\'re stuck in a moment and you can\'t get out of it.',
        title: 'Stuck In A Moment You Can\'t Get Out Of'
    },
    {
        quote: 'The real battle just begun to claim the victory Jesus won on...',
        title: 'Sunday Bloody Sunday'
    },
    {
        quote: 'And you give yourself away. With or without you, with or without you. I can\'t live with or without you.',
        title: 'With Or Without You'
    }
];

let id;

function getQuote() {
    id = Math.floor(Math.random() * quotes.length);
    $('#text').html(quotes[id].quote);
    $('#author').html('-' + quotes[id].title);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quotes[id].quote + '"' + '  -' + quotes[id].title));
};

$(document).ready(function () {

    getQuote();
    $('#new-quote').click(function (event) {
        event.preventDefault();
        getQuote();
    });

    $('#tweet-quote').on('click', function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quotes[id].quote + '"' + '  -' + quotes[id].title));
    });
});
