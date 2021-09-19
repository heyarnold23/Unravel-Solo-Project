'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Songs', [
        {artistName: 'Baby Keem', name: '16', albumName: 'The Melodic Blue',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2Ff9c52d1f383ba7228933cde73b2a7485.999x999x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/2860x560/https%3A%2F%2Fimages.genius.com%2Ff9c52d1f383ba7228933cde73b2a7485.999x999x1.png',
        body: `[Refrain]
        Born into status, tell nobody that you never had it
        Don't tell nobody that you was abandoned
        I'm the only one that know about your tragedy
        I can't feel sorry when you lost random
        I can't feel sorry, you're a lost ransom
        Drown yourself in expensive fabrics
        I think you picked up a lot of bad habits
        Just appreciate yourself

        [Chorus]
        Won't you think about you and I?
        Just grab my hand and look me in the eye
        But this ain't something you should decide
        This ain't something that you should decide
        Won't you think about you and I?
        Just grab my hand and look me in the eye
        But this ain't something you should decide
        This ain't something that you should decide

        [Refrain]
        Born into status, tell nobody that you never had it
        Don't tell nobody that you was abandoned
        I'm the only one that know about your tragedy
        I can't feel sorry 'cause your trust random
        I can't feel sorry, you're a lost ransom
        Drown yourself in expensive fabrics
        I think you picked up a lot of bad habits
        Just appreciate yourself

        [Chorus]
        Won't you think about you and I?
        Just grab my hand and look me in the eye
        But this ain't something you should decide
        This ain't something that you should decide
        Won't you think about you and I?
        Just grab my hand and look me in the eye
        But this ain't something you should decide
        This ain't something that you should decide

        [Verse]
        My mama mad at me, I know I fucked up big
        My girl mad at me, I know I fucked up big
        What's love? I guess I'll never understand
        Every time I say sorry, I do that shit again
        Check, check, check, I made a promise
        That I would never leave you stressed, I would be honest
        I should have never sent that text, I will be honest
        I'm sorry for the things I said, I will be honest

        [Chorus]
        Won't you think about you and I?
        Just grab my hand and look me in the eye
        But this ain't something you should decide
        This ain't something that you should decide
        Won't you think about you and I?
        Just grab my hand and look me in the eye
        But this ain't something you should decide
        This ain't something that you should decide`,
        createdAt: new Date(),
        updatedAt: new Date()
       },
        {artistName: 'Kanye West', name: 'Jail', albumName: 'Donda',
        albumUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Fe073a37e5ffcf442900c023bf4349036.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Fe073a37e5ffcf442900c023bf4349036.1000x1000x1.png',
        body:`[Intro: Kanye West]
        Take what you want
        Take everything
        Take what you want
        Take what you want

        [Verse 1: Kanye West]
        Better that I change my number so you can't explain
        Violence in the night, violence in the night
        Priors, priors, do you have any priors?
        Well, that one time
        I'll be honest, I'll be honest
        We all liars
        Let it go

        [Pre-Chorus: Kanye West]
        I'll be honest, we all liars
        I'll be honest, we all liars
        I'm pulled over and I got priors
        Guess we goin' down, guess who's goin' to jail?

        [Chorus: Kanye West]
        Guess who's goin' to jail tonight?
        Guess who's goin' to jail tonight?
        Guess who's goin' to jail tonight?
        God gon' post my bail tonight

        [Verse 2: Kanye West & Dem Jointz]
        Don't you curse at me on text, why you try to hit the flex?
        I hold up, like, "What?"
        I scroll, I scroll up like, "Next"
        Guess who's getting 'exed?
        Like, next
        Guess who's getting 'exed?
        You made a choice that's your bad, single life ain't so bad
        But we ain't finna go there
        Something's off, I'll tell you why
        Guess who's goin' to jail tonight?
        What a grand plan to sell you out
        I could scream and shout, let it out

        [Pre-Chorus: Kanye West]
        I'll be honest, we all liars
        I'll be honest, we all liars
        I'm pulled over and I got priors
        Guess we goin' down, guess who's goin' to jail?

        [Chorus: Kanye West]
        Guess who's goin' to jail tonight?
        Guess who's goin' to jail tonight?
        Guess who's goin' to jail tonight?
        God gon' post my bail tonight

        [Verse 3: JAY-Z]
        God in my cells, that's my celly
        Made in the image of God, that's a selfie
        Pray five times a day, so many felonies
        Who gon' post my bail? Lord, help me
        Hol' up, Donda, I'm with your baby when I touch back road
        Told him, "Stop all of that red cap, we goin' home"
        Not me with all of these sins, castin' stones
        This might be the return of The Throne (Throne)
        Hova and Yeezus, like Moses and Jesus
        You are not in control of my thesis
        You already know what I think 'bout think pieces
        Before you ask, he already told you who he think he is
        Don't try to jail my thoughts and think precincts
        I can't be controlled with programs and presets
        Reset
        On my cell, in my cell tonight
        Don't have to see you to touch you
        This is what braille look like, it's on sight
        If they take me to jail, call my girl, tell her send my mail
        We know what Hell look like
        Still, it's a hell of a life, yikes

        [Chorus: Kanye West]
        Guess who's goin' to jail tonight?
        Guess who's goin' to jail tonight?
        Guess who's goin' to jail tonight?
        God gon' post my bail tonight
        `,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Silk Sonic', name: 'Skate', albumName: 'An Evening with Silk Sonic',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F9c645b3c8d1829fd001ded17baa79894.640x640x1.jpg',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/2860x560/https%3A%2F%2Fimages.genius.com%2F9c645b3c8d1829fd001ded17baa79894.640x640x1.jpg',
        body:`[Intro: Anderson .Paak]
        Oh my, oh my

        [Verse 1: Anderson .Paak]
        In a room full of dimes
        You would be a hundred dollars
        If bein' fine was a crime
        Girl, they'd lock your lil' fine ass up in a tower
        The way you move like you do
        Ooh, it's like you do it for a livin'
        Do a lil' spin, do it again
        Shit, look like you playin' for the win, oh, baby

        [Pre-Chorus: Bruno Mars & Anderson .Paak, Anderson .Paak]
        I'm tryna roll, I'm tryna ride
        I'm tryna float, I'm tryna glide
        No, no, don't be shy, just take my hand and hold on tight

        [Chorus: Bruno Mars]
        Oh, skate to me, baby (Skate)
        Slide your way on over (Slide your way on over)
        Oh, skate to me, baby (Skate)
        I wanna get to know ya (I wanna get to know ya)
        Come on
        Oh my, oh my

        [Verse 2: Bruno Mars]
        Got your hair in the wind and your skin glistenin'
        I can smell your sweet perfume
        Mmm, you smell better than a barbecue
        Oh, superstar is what you are
        I'm your biggest fan
        If you're lookin' for a man, sugar, here I am
        Ooh

        [Pre-Chorus: Both, Bruno Mars]
        I'm tryna roll, I'm tryna ride (I'm tryna ride with ya, darlin')
        I'm tryna float, I'm tryna glide
        Oh, no, no, don't be shy, just take my hand and hold on tight

        [Chorus: Bruno Mars]
        Oh, skate to me, baby (Skate)
        Slide your way on over (Slide your way on over)
        Oh, skate to me, baby (Skate)
        Uh, I wanna get to know ya (I wanna get to know ya)

        [Bridge: Anderson .Paak & Bruno Mars]
        I never fall, but tonight, you got me fallin' for you
        And only you, you
        I'm reachin' out in hopes that you reach for me too
        Girl, let's groove
        Girl, you got me singin' "Ooh"
        My, oh my, my, oh my
        My, oh my, my, oh my

        [Chorus: Bruno Mars]
        Oh, skate to me, baby (Skate)
        Come on, slide your way on over (Slide your way on over)
        Oh, skate to me, baby (Skate)
        Ah, I wanna get to know you, girl (I wanna get to know ya)
        Skate to me, my baby (Skate)
        Just slide your way on over (Slide your way on over)
        Oh, skate to me, my baby (Skate)
        I wanna get to know ya (I wanna get to know ya)`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Baby Keem & Kendrick Lamar', name: 'Family Ties', albumName: 'The Melodic Blue',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2Fff030d4f08060d699222a7990f74e5da.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x640/https%3A%2F%2Fimages.genius.com%2F6db16318b47cb4bd465b9d9b9774080a.1000x563x1.jpg',
        body:`[Part I]

        [Intro: Baby Keem]
        Jump in that— (Hah, Hah), summon that bitch
        Jump in that— (Hah, hah), jump in that fire (Hah), jump in that bitch
        Hittin' that fire, jump in that whip, thumbin' that bitch
        Cum in that bitch (Ho), drummin' that— (Hah, hah)
        Drummin' that bitch (Yeah)

        [Verse: Baby Keem]
        Choppa doin' circles, it's a Bird, Bird
        Take him to the party, he's a nerd (Pop out)
        I see niggas hit corners in the motherfuckin' 'burbs, huh (Pop out)
        Done politickin' with the competition, what's the word? (Yeah)
        Put that on my mama, nigga, eight in the process
        Niggas tryna tippy-toe through the progress
        Tongue-tied when the truth is an object
        What's the pros and the cons of this next check?
        Wasn't nobody 'round, I was independent
        In the '90s, sittin' bum with the windows tinted
        Heard a bum got a strap in the party
        Who the fuck let this **** in the party?
        Beat 'em up, beat 'em up, beat 'em up, beat 'em up (Ah)
        I was seein' double in the projects
        Mad at myself when I put it to the side
        Mama had to cater for the coupe
        That we rode after school on the way to Popeyes
        And niggas wanna play both sides
        It's a red dot, don't get on the wrong red eye
        It's a headshot, Damien Kane, Woo
        Them guys
        Fuck around and bury two of them guys
        I'm OD in Paris, I'm OD in France
        I thought that I told you, I need the advance
        Put down your IG and look through my lens
        A million to grandma, who did I offend?
        The girl of your dreams to me is a fan
        I netted ten million and did a lil' dance
        I'm fuckin' the world, I unzip my pants
        My uncle G told me that I had a chance
        So then I popped out and did it again
        And did it again and did it again
        I can not respect them, where did he begin?
        Advice from the council, let nobody in
        Been swervin' through rumors
        Avoidin' the trends and duckin' the hoes
        I'm duckin' the loonies that come with the shows
        I'm grateful to Man-Man, he opened up doors
        A bunk on the tour bus to come and compose
        I reach to the stars on my tippy toes
        This greatest success where most niggas fold
        I tell you my past, that shit don't get old
        But how could you ask like I don't be writin' my raps?
        These critics got everyone tapped
        You gotta relax, the city where nobody sleep
        Just tap in and ask where I'm at, ho

        [Part II]

        [Intro: Kendrick Lamar]
        Smokin' on your top five tonight, tonight
        Yeah, I'm smokin' on your, what's his name, tonight, tonight
        Smokin' on you, shores, ain't two-nine, yeah, two

        [Verse: Kendrick Lamar]
        I am the omega, pgLang, Rollie gang, SIE
        Don't you address me unless it's with four letters
        I thought you'd known better
        I been duckin' the pandemic, I been—, social gimmicks
        I been duckin' the overnight activists, yeah
        I'm not a trending topic, I'm a—
        Hold on, y'all niggas playin' with me, man
        I am the omega, pgLang, Rollie gang, SIE
        Don't you address me unless it's with four letters
        Bitch, I thought you'd known better
        I been duckin' the pandemic, I been duckin' the social gimmicks
        I been duckin' the overnight activists, yeah
        I'm not a trending topic, I'm a prophet
        I answer to Metatron and Gabriel
        Bitch, looking for a better me
        I am a legacy, I come from the seventy
        The Al Green offspring, guns and the melody
        The big shot, wrist on cryotherapy
        Soon as I press that button
        Nigga better get right like the ambulance comin'
        Us two on a light, Keem been through nothin'
        Dave Free got at least one B in the oven
        I'm trippin', I'm juugin', my mental is amazing, brother
        Pop off, only on occasions, brother
        Rich nigga, momma know I made it, brother
        Go figure, never caught cases, brother
        Face it, brother, gracious brother
        New flows comin', be patient, brother
        Show my ass and take y'all to class
        I can multitask like Megan, brother
        2021, I ain't takin' no prisoner
        Last year, y'all fucked up all the listener
        Who went platinum? I call that a visitor
        Who the fuck backin' 'em? All been falsified
        The facts mean this a vaccine and the game need me to survive
        The Elohim, the rebirth
        Before you get to the Father, you gotta holla at me first, bitch
        Smokin' on top fives
        Motherfuck that album, fuck that single
        Burn that hard drive (Burn that shit)
        Ain't nobody safe
        When I come up killin' everybody that's outside (Who you with?)
        Yeah, Kanye changed his life
        But me, I'm still an old-school Gemini (Lil' bitch)
        Let me jump in this bitch

        [Outro: Baby Keem & Kendrick Lamar]
        Let me jump in this bitch
        Two phones, but I only bring one in this bitch
        One daughter, but they all my sons in this bitch
        No hoes, ain't shit gettin' done in this bitch
        I'm scary, I got a gun in this bitch
        Smokin' on top fives, stop playin', I'm that guy
        Number two DM'ing my bitch
        That's cool, I don't ask why`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Drake', name: 'Champagne Poetry', albumName: 'Certified Lover Boy',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2Ffa02d8bc4c7ee74b5a1408c2be032fea.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2Ffa02d8bc4c7ee74b5a1408c2be032fea.1000x1000x1.png',
        body:`[Part I]

        [Intro]
        I love you, I love you, I love you
        Until I, until I
        I love you, I love you, I love you
        Until I find the only words I know that you

        [Verse 1]
        I been hot since the birth of my son
        I remain unphased, trust, worse has been done
        Man, fuck evaluation, show me personal funds
        It's the pretty boys versus the petty boys
        Sold that already, got a whole new set of toys
        Shit is so surreal, Drizzy Drake, you better enjoy
        Nothing else bigger than the OVO letterman boys
        Cashmere knits for the nighttime boat rides
        Oli got the first edition parked up roadside
        The only sign of strugglin' is coming from those guys
        I'm trying to just relate what I can see through my own eyes
        And nothin' tell the truth like the eyes will
        Lived so much for others don't remember how I feel
        Friends that hide places and friends that I hide still
        Still managed to moonwalk straight through a minefield
        And then I'll come back to tell you how that feels (The only words I know that you)
        Built this house for us all, pain in my back still
        You niggas gassed up, you couldn't pay the (Until I, until I)

        [Interlude]
        I love you, I love you, I love you
        Until I, until I
        I love you, I love you, I love you
        Until I find the only words I know that you

        [Verse 2]
        Champagne poetry, these are the effortless flows
        Supposedly something else is controlling me
        Under a picture lives some of the greatest quotes from me
        Under me I see all the people that claim they over me
        And above me I see nobody
        I'd have to be dead for them to say that you took it from me
        The twenty percent of you that we own is my tootsie's money
        Nigga, I'm wilding with your bread, you owe it to me
        CJ grab racks out the bag and throw it to me
        They don't want a problem with the boy, but it's goin' to be
        Trust in my brothers is as strong as I know it should be
        Future sign the contracts, he don't even show it to me
        I don't have to second-guess nothing with no one I love
        'Bout to build a second guest house 'cause we growing too much
        Thing I got to scale the love back 'cause

        [Interlude]
        I need you, I need you, I need you
        I need to make you see
        What you mean to me
        Until I do, I'm hoping you will know what I mean

        [Part II]

        [Intro]
        Yeah, oh
        Heavy day for real
        Yeah
        Yeah

        [Verse]
        The city's on fire and people are in denial
        Charges being laid, but we'll see what they do with trial
        I'm calling this shit from now
        Sweetheart deals that the judges been handing down
        I haven't been able to see family for a while
        That shit is wearin' me out
        I used to hide my pain in Delilah behind the bar 'tll my niggas carried me out
        And if money's all I need in my grave, then bury me now
        I know I tend to talk about how I got a fortune on me
        But with that comes the politics the city been forcing on me
        Man, I can't even RIP and show my remorse to the homie
        Know I carry the guilt of the city's misfortune on me
        I even got the cleanin' staff plotting extortion on me
        My parents divorce is on me
        My therapist's voice is making the choices for me
        And I always censor myself 'cause no matter what, they reporting on me
        The pressure is weighin' on me
        Career is going great, but now the rest of me is fading slowly
        My soulmate is somewhere out in the world just waiting on me
        My chef got the recipe for disaster baking slowly
        My heart feel vacant and lonely, but still
        I'm makin' the most of this shit and more
        Every single move is like rolling dice on the board
        Seen too many brothers get twenty-five from the boys
        I'd rather see all of 'em get twenty-five from the Lord
        And if the last negotiation made you pay me twenty-five
        Well this is the perfect time to give me twenty-five more
        I'm bigger now than before
        Co-parent of the year, we figured out a rapport
        No fair what Drizzy made on the second leg of the tour
        How could anybody tell you the truth when they misinformed?
        How the niggas turnin' up with you turned you in for rewards?
        How the **** do we manage to win everything but awards?
        Windows of opportunity let me go through the doors
        This the part where I don't ever say "Pardon me" anymore
        This the part where I'ma find a new part of me to explore
        This the part where all my partners know what we in it for
        This the part where we gon' throw us a party after the war
        And if the last negotiation had you feeling out of pocket
        Well this is perfect time that I empty them shits for sure
        You owe that shit to the boy, yeah

        [Outro]
        I love you, I love you, I love you
        (What you mean to me)
        I need to make you, ooh`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'The Weeknd', name: 'Take My Breath', albumName: 'The Dawn',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F6dceaa610d72446fd1bc6ce5eabdfe2d.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/2860x560/https%3A%2F%2Fimages.genius.com%2F6dceaa610d72446fd1bc6ce5eabdfe2d.1000x1000x1.png',
        body:`[Verse 1]
        I saw the fire in your eyes
        I saw the fire when I look into your eyes
        You tell me things you wanna try (Uh)
        I know temptation is the devil in disguise
        You risk it all to feel alive, oh yeah
        You're offering yourself to me like sacrifice
        You said you do this all the time
        Tell me you love me if I bring you to the light

        [Pre-Chorus]
        It's like a dream what she feels with me
        She loves to be on the edge
        Her fantasy is okay with me
        Then suddenly, baby says

        [Chorus]
        Take my breath away
        And make it last forever, babe
        Do it now or never, babe (Ah)
        Take my breath away
        Nobody does it better, babe
        Bring me close to—

        [Verse 2]
        Want me to hold on to you tight
        You pull me closer, feel the heat between your thighs (Uh, say)
        You're way too young to end your life (Huh)
        Girl, I don't wanna be the one who pays the price

        [Pre-Chorus]
        Ooh, it's like a dream what she feels with me
        She loves to be on the edge
        Her fantasy is okay with me
        Then suddenly, baby says

        [Chorus]
        Take my breath away
        And make it last forever, babe
        Do it now or never, babe (Ah)
        Take my breath away
        Nobody does it better, babe
        Bring me close to heaven, babe (Uh)
        Take my breath

        [Bridge]
        Oh, oh-ooh
        And they'll see me
        Oh-ooh, ooh (Yeah, say)
        Oh-oh, oh-oh
        Oh-oh, oh-oh
        Oh-oh, oh-oh
        Oh-oh

        [Chorus]
        Take my breath away (Take my breath away)
        And make it last forever, babe
        Do it now or never, babe (Ah)
        Take my breath away (Take my breath away)
        Nobody does it better, babe
        Bring me close to heaven, babe (Take my breath)
        Take my breath (Take my breath a—, breath away)
        (Nobody)
        Take my breath (Take my breath a—, breath away)
        Nobody does it better, babe
        Bring me close to heaven, babe (Uh)
        Take my breath`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Olivia Rodrigo', name: 'good 4 u', albumName: 'SOUR',
        albumUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Fd82b5cd3ea274ca4461f2c67c706b3b8.1000x1000x1.jpg',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F1ae6234ae218c57374420f057da0d297.1000x1000x1.jpg',
        body:`[Intro]
        (Ah)

        [Verse 1]
        Well, good for you, I guess you moved on really easily
        You found a new girl and it only took a couple weeks
        Remember when you said that you wanted to give me the world?
        (World)
        And good for you, I guess that you've been workin' on yourself
        I guess that therapist I found for you, she really helped
        Now you can be a better man for your brand new girl (Girl)

        [Chorus]
        Well, good for you
        You look happy and healthy, not me
        If you ever cared to ask
        Good for you
        You're doin' great out there without me, baby
        God, I wish that I could do that
        I've lost my mind, I've spent the night
        Cryin' on the floor of my bathroom
        But you're so unaffected, I really don't get it
        But I guess good for you

        [Verse 2]
        Well, good for you, I guess you're gettin' everything you want (Ah)
        You bought a new car and your career's really takin' off (Ah)
        It's like we never even happened
        Baby, what the fuck is up with that? (Ah)
        And good for you, it's like you never even met me
        Remember when you swore to God I was the only
        Person who ever got you? Well, screw that, and screw you
        You will never have to hurt the way you know that I do

        [Chorus]
        Well, good for you
        You look happy and healthy, not me
        If you ever cared to ask
        Good for you
        You're doin' great out there without me, baby
        God, I wish that I could do that
        I've lost my mind, I've spent the night
        Cryin' on the floor of my bathroom
        But you're so unaffected, I really don't get it
        But I guess good for you

        [Break]
        (Ah-ah-ah-ah)
        (Ah-ah-ah-ah)

        [Bridge]
        Maybe I'm too emotional
        But your apathy's like a wound in salt
        Maybe I'm too emotional
        Or maybe you never cared at all
        Maybe I'm too emotional
        Your apathy is like a wound in salt
        Maybe I'm too emotional
        Or maybe you never cared at all

        [Chorus]
        Well, good for you
        You look happy and healthy, not me
        If you ever cared to ask
        Good for you
        You're doin' great out there without me, baby
        Like a damn sociopath
        I've lost my mind, I've spent the night
        Cryin' on the floor of my bathroom
        But you're so unaffected, I really don't get it
        But I guess good for you

        [Outro]
        Well, good for you, I guess you moved on really easily`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'The Kid Laroi & Justin Bieber', name: 'STAY', albumName: 'F*CK LOVE 3: OVER YOU',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F6b8c69dff2504539aaf711e38c824096.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F016eb8299a8878ae6a62443802e4db3f.1000x1000x1.jpg',
        body:`[Chorus: The Kid LAROI]
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey (Oh)

        [Verse 1: The Kid LAROI]
        I get drunk, wake up, I'm wasted still
        I realize the time that I wasted here
        I feel like you can't feel the way I feel
        Oh, I'll be fucked up if you can't be right here

        [Pre-Chorus: The Kid LAROI]
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, I'll be fucked up if you can't be right here

        [Chorus: The Kid LAROI]
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey

        [Verse 2: Justin Bieber]
        When I'm away from you, I miss your touch (Ooh)
        You're the reason I believe in love
        It's been difficult for me to trust (Ooh)
        And I'm afraid that I'ma fuck it up
        Ain't no way that I can leave you stranded
        'Cause you ain't ever left me empty-handed
        And you know that I know that I can't live without you
        So, baby, stay

        [Pre-Chorus: Justin Bieber, The Kid LAROI & Both]
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        Oh, ooh-woah (Oh, ooh-woah, ooh-woah)
        I'll be fucked up if you can't be right here

        [Chorus: The Kid LAROI with Justin Bieber]
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey
        I do the same thing I told you that I never would
        I told you I'd change, even when I knew I never could
        I know that I can't find nobody else as good as you
        I need you to stay, need you to stay, hey

        [Outro: The Kid LAROI & Justin Bieber]
        Woah-oh
        I need you to stay, need you to stay, hey`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Billie Eilish', name: 'Happier Than Ever', albumName: 'Happier Than Ever',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2Fb826bffa6a542a466c2143f4702b9f25.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2Fb826bffa6a542a466c2143f4702b9f25.1000x1000x1.png',
        body:`[Chorus]
        When I'm away from you
        I'm happier than ever
        Wish I could explain it better
        I wish it wasn't true

        [Verse 1]
        Give me a day or two to think of something clever
        To write myself a letter
        To tell me what to do, mm-mm
        Do you read my interviews?
        Or do you skip my avenue?
        When you said you were passin' through
        Was I even on your way?
        I knew when I asked you to (When I asked you to)
        Be cool about what I was tellin' you
        You'd do the opposite of what you said you'd do (What you said you'd do)
        And I'd end up more afraid
        Don't say it isn't fair
        You clearly weren't aware that you made me miserable
        So if you really wanna know

        [Chorus]
        When I'm away from you (When I'm away from you)
        I'm happier than ever (Happier than ever)
        Wish I could explain it better (Wish I could explain it better)
        I wish it wasn't true, mm-mm

        [Verse 2]
        You call me again, drunk in your Benz
        Drivin' home under the influence
        You scared me to death, but I'm wastin' my breath
        'Cause you only listen to your fuckin' friends
        I don't relate to you
        I don't relate to you, no
        'Cause I'd never treat me this shitty
        You made me hate this city

        [Verse 3]
        And I don't talk shit about you on the internet
        Never told anyone anything bad
        'Cause that shit's embarrassing, you were my everything
        And all that you did was make me fuckin' sad
        So don't waste the time I don't have
        And don't try to make me feel bad
        I could talk about every time that you showed up on time
        But I'd have an empty line 'cause you never did
        Never paid any mind to my mother or friends
        So I shut 'em all out for you 'cause I was a kid

        [Outro]
        You ruined everything good
        Always said you were misunderstood
        Made all my moments your own
        Just fuckin' leave me alone (Fuck you)
        (Ah)
        (Goddamn)
        (Ah)
        (Fuck you)
        (Fuck you)`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Dua Lipa', name: 'Levitating', albumName: 'Future Nostalgia',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2Fd2304429bd6b0f492325f1151bd21825.1000x1000x1.jpg',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/2860x560/https%3A%2F%2Fimages.genius.com%2Fd2304429bd6b0f492325f1151bd21825.1000x1000x1.jpg',
        body:`[Verse 1]
        If you wanna run away with me, I know a galaxy
        And I can take you for a ride
        I had a premonition that we fell into a rhythm
        Where the music don't stop for life
        Glitter in the sky, glitter in my eyes
        Shining just the way I like
        If you're feeling like you need a little bit of company
        You met me at the perfect time

        [Pre-Chorus]
        You want me, I want you, baby
        My sugarboo, I'm levitating
        The Milky Way, we're renegading
        Yeah, yeah, yeah, yeah, yeah

        [Chorus]
        I got you, moonlight, you're my starlight
        I need you all night, come on, dance with me
        I'm levitating
        You, moonlight, you're my starlight (You're the moonlight)
        I need you all night, come on, dance with me
        I'm levitating

        [Verse 2]
        I believe that you're for me, I feel it in our energy
        I see us written in the stars
        We can go wherever, so let's do it now or never
        Baby, nothing's ever, ever too far
        Glitter in the sky, glitter in our eyes
        Shining just the way we are
        I feel like we're forever every time we get together
        But whatever, let's get lost on Mars

        [Pre-Chorus]
        You want me, I want you, baby
        My sugarboo, I'm levitating
        The Milky Way, we're renegading
        Yeah, yeah, yeah, yeah, yeah

        [Chorus]
        I got you, moonlight, you're my starlight
        I need you all night, come on, dance with me
        I'm levitating
        You, moonlight, you're my starlight (You're the moonlight)
        I need you all night, come on, dance with me
        I'm levitating

        [Post-Chorus]
        You can fly away with me tonight
        You can fly away with me tonight
        Baby, let me take you for a ride
        Yeah, yeah, yeah, yeah, yeah
        I'm levitating (Woo)
        You can fly away with me tonight
        You can fly away with me tonight
        Baby, let me take you for a ride
        Yeah, yeah, yeah, yeah, yeah (Woo)

        [Bridge]
        My love is like a rocket, watch it blast off
        And I'm feeling so electric, dance my ass off
        And even if I wanted to, I can't stop
        Yeah, yeah, yeah, yeah, yeah
        My love is like a rocket, watch it blast off
        And I'm feeling so electric, dance my ass off
        And even if I wanted to, I can't stop
        Yeah, yeah, yeah, yeah, yeah

        [Pre-Chorus]
        You want me, I want you, baby
        My sugarboo, I'm levitating
        The Milky Way, we're renegading

        [Chorus]
        I got you (Yeah), moonlight, you're my starlight
        I need you all night (All night), come on, dance with me
        I'm levitating (Woo)

        [Post-Chorus]
        You can fly away with me tonight (Tonight)
        You can fly away with me tonight
        Baby, let me take you for a ride
        Yeah, yeah, yeah, yeah, yeah (Take you for a ride)
        I'm levitating (Woo)
        You can fly away with me tonight (Tonight)
        You can fly away with me tonight
        Baby, let me take you for a ride
        Yeah, yeah, yeah, yeah, yeah (Let me take you for a ride)

        [Chorus]
        I got you, moonlight, you're my starlight (You are my starlight)
        I need you all night, come on, dance with me (Come on, dance with me)
        I'm levitating
        You, moonlight, you're my starlight (You're the moonlight)
        I need you all night, come on, dance with me
        I'm levitating`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Lil Nas X', name: 'THATS WHAT I WANT', albumName: 'MONTERO (Deluxe)',
        albumUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F52ff516ba3efdd22cc0a154eb4c75d2d.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F52ff516ba3efdd22cc0a154eb4c75d2d.1000x1000x1.png',
        body:`[Intro]
        One, two, three, four

        [Verse 1]
        Need a boy who can cuddle with me all night
        Keep me warm, love me long, be my sunlight
        Tell me lies, we can argue, we can fight
        Yeah, we did it before, but we'll do it tonight
        That afro black boy with the gold teeth
        He dark skin, lookin' at me like he know me
        I wonder if he got the G or the B
        Let me find out and see, he comin' over to me, yeah

        [Pre-Chorus]
        These days, I'm way too lonely
        I'm missin' out, I know
        These days, I'm way too alone
        And I'm known for givin' love away, but

        [Chorus]
        I want (I), someone to love me
        I need (I), someone who needs me
        'Cause it don't feel right when it's late at night
        And it's just me in my dreams
        So I want (I), someone to love
        That's what I fuckin' want

        [Verse 2]
        Look, you know it's harder to find in these times
        But I got nothin' but love on my mind (My mind)
        I need a baby while I'm in my prime
        Need an adversary to my down and weary
        Like, tell me there's life when I'm stressin' at night
        Be like, "You'll be okay" and, "Everything is alright," uh
        Love me or nothin' 'cause I'm not wanting anything
        But your loving, your body, and a little bit of your brain

        [Pre-Chorus]
        These days, I'm way too lonely
        I'm missin' out, I know
        These days, I'm way too alone
        And I'm known for givin' love away, but

        [Chorus]
        I want (I), someone to love me
        I need (I), someone who needs me
        'Cause it don't feel right when it's late at night
        And it's just me in my dreams
        So I want (I), someone to love
        That's what I fuckin' want

        [Bridge]
        I want (I), someone to love me
        I need (I), someone who needs me

        [Chorus]
        'Cause it don't feel right when it's late at night
        And it's just me in my dreams
        So I want (I), someone to love
        That's what I fuckin' want`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'LISA', name: 'LALISA', albumName: 'LALISA',
        albumUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F0299c61517029ca496988b972f14405d.999x999x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F0299c61517029ca496988b972f14405d.999x999x1.png',
        body:`[리사 "라리사" 가사]

        [Intro]
        내 뒷모습만 봐도 알잖아
        어두워질 때 분홍빛이나
        새하얀 조명이 날 깨우면
        번쩍번쩍 세상을 흔들어 (Hey!)
        La, la-la-la, la, la-la-la
        La, la-la-la, la, la-la-la
        What's my name? What's my name? (Hey!)
        La, la-la-la, la, la-la-la
        La, la-la-la, la, la-la-la
        What's my name? What's my name?

        [Verse 1]
        머리를 하얗게 비운채
        시끄런 감정은 태울래
        Burn, burn, burn
        그때 난 네 갈증을 해소할 champagne
        Sip, sip, 나를 들이켜
        그래 더 저 높이 내 body 받들어

        [Pre-Chorus]
        Want you to ring the alarm, 세상에게 알려
        내 이름에다 입맞춰

        [Chorus]
        Say, "Lalisa, love me, Lalisa, love me" (Hey!)
        Call me, "Lalisa, love me, Lalisa, love me" (Hey!)
        Oh-ooh, 알잖아 attitude
        뭘 더 어쩌라구, the loudest in the room (Hoo! Hoo!)
        Just say, "Lalisa, love me, Lalisa, love me" (Hey!)
        Call me, "Lalisa, love me, Lalisa, love me" (Hey!)
        Oh-ooh, 알잖아 attitude
        뭘 더 어쩌라구, the loudest in the room (Hoo!)

        [Verse 2]
        Baby, get the megaphone, put it on speaker
        I said I can't hear you, so you need to speak up
        Put that shit on stereo, everyone else on very low
        Protect it like a barrier, promise there's nothing scarier
        Than me if anybody coming gunnin' for my man
        Gonna catch a case, gun up in my hand
        Bam, bam, bam! Hit after hit though
        Rocks in my wrist, so I call 'em the Flintstones

        [Pre-Chorus]
        Ring the alarm, 세상에게 알려
        내 이름에다 입맞춰

        [Chorus]
        Say, "Lalisa, love me, Lalisa, love me" (Hey!)
        Call me, "Lalisa, love me, Lalisa, love me" (Hey!)
        Oh-ooh, 알잖아 attitude
        뭘 더 어쩌라구, the loudest in the room (Hoo! Hoo!)
        Just say, "Lalisa, love me, Lalisa, love me" (Hey!)
        Call me, "Lalisa, love me, Lalisa, love me" (Hey!)
        Oh-ooh, 알잖아 attitude
        뭘 더 어쩌라구, the loudest in the room (Hoo!)

        [Bridge]
        누구와도 비교 못해 그래봤자
        You gon' still love me
        You need some L-A-L-I-S-A
        지금 너의 두 눈 앞에 서있는
        내 이름을 기억해
        Love you some L-A-L-I-S-A
        (Hoo!)

        [Verse 3]
        You cannot see me, 어떻게 하는지 다 보여줘도 (No)
        태국에서 한국 거쳐 여기까지, went for the throat (The throat)
        Being the greatest of all time ain't fantasy (Woo!)
        새까만 핑크빛 왕관 belongs to we (BLACKPINK)
        Lalisa, Lalisa, Lalisa, 하늘 위 당당해
        Lalisa, Lalisa, Lalisa, 저들은 날 원해
        Lalisa, Lalisa, Lalisa, catch me if you can
        Lalisa, Lalisa, Lalisa, Lalisa, Lalisa

        [Chorus]
        Say, "Lalisa, love me, Lalisa, love me" (Hey!)
        Call me, "Lalisa, love me, Lalisa, love me" (Hey!)
        Oh-ooh, 알잖아 attitude
        뭘 더 어쩌라구, the loudest in the room (Hoo! Hoo!)
        Just say, "Lalisa, love me, Lalisa, love me" (Hey!)
        Call me, "Lalisa, love me, Lalisa, love me" (Hey!)
        Oh-ooh, 알잖아 attitude
        뭘 더 어쩌라구, the loudest in the room (Hoo!)`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Glass Animals', name: 'Heat Waves', albumName: 'Dreamland',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F67abc49ab0c17779c4f63a9e8717cba4.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F25ffad8f4a6804e3efc869253f030baf.1000x1000x1.jpg',
        body:`[Intro]
        (Last night, all I think about is you
        Don't stop, baby, you can walk through
        Don't want, baby, think about you
        You know that I'm never gonna lose)
        Road shimmer wigglin' the vision
        Heat, heat waves, I'm swimmin' in a mirror
        Road shimmer wigglin' the vision
        Heat, heat waves, I'm swimmin' in a—

        [Chorus]
        Sometimes, all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Can't make you happier now
        Sometimes, all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Can't make you happier now

        [Verse 1]
        Usually I put somethin' on TV
        So we never think about you and me
        But today I see our reflections clearly
        In Hollywood, layin' on the screen
        You just need a better life than this
        You need somethin' I can never give
        Fake water all across the road
        It's gone now, the night has come, but

        [Chorus]
        Sometimes all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Can't make you happier now

        [Verse 2]
        You can't fight it, you can't breathe
        You say somethin' so lovin', but
        Now I gotta let you go
        You'll be better off in someone new
        I don't wanna be alone
        You know it hurts me too
        You look so broken when you cry
        One more and then I'll say goodbye

        [Chorus]
        Sometimes, all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Can't make you happier now
        Sometimes, all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Can't make you happier now

        [Bridge]
        I just wonder what you're dreamin' of
        When you sleep and smile so comfortable
        I just wish that I could give you that
        That look that's perfectly un-sad
        Sometimes, all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Heat waves been fakin' me out

        [Chorus]
        Sometimes, all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Can't make you happier now
        Sometimes, all I think about is you
        Late nights in the middle of June
        Heat waves been fakin' me out
        Can't make you happier now

        [Outro]
        Road shimmer wigglin' the vision
        Heat, heat waves, I'm swimmin' in a mirror
        Road shimmer wigglin' the vision
        Heat, heat waves, I'm swimmin' in a mirror`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Clinton Kane', name: "I GUESS I'M IN LOVE", albumName: 'CK1*',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F73e3f9e282d1b9e19274df45bc2cab08.1000x1000x1.jpg',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F73e3f9e282d1b9e19274df45bc2cab08.1000x1000x1.jpg',
        body:`[Verse 1]
        Oh, I'm obsessed
        With the way your head is layin' on my chest
        How you love the things I hate about myself that no one knows But with you, I see hope again
        Oh, I'm a mess
        When I overthink the little things in my head
        You seem to always help me catch my breath
        But then I lose it again
        When I look at you, that's the end

        [Pre-Chorus]
        And why do I get so nervous when I look into your eyes?
        Butterflies can't stop me fallin' for you

        [Chorus]
        And darling, this is more than anything I felt before
        You're everything that I want, but I didn't think I'd find
        Someone who was worth the wait of all the years of my heartbreak
        But I know now I found the one I love

        [Verse 2]
        And I love the way
        You can never find the right things to say
        And you can't sit still an hour in a day
        I'm so in love, let's run away because us is enough

        [Pre-Chorus]
        And why do I get so nervous when I look into your eyes?
        And butterflies can't stop me fallin' for you

        [Chorus]
        And darling, this is more than anything I felt before
        You're everything that I want, but I didn't think I'd find
        Someone who was worth the wait of all the years of my heartbreak
        But I know now I found the one

        [Bridge]
        Come close, let me be home for anything
        Good or bad, I know it's worth it, woah, ooh-woah

        [Chorus]
        And darling, this is more than anything I felt before
        You're everything that I want, but I didn't think I'd find
        Someone who was worth the wait of all the years of my heartbreak
        But I know now I found the one I love`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'BTS', name: 'Butter (Megan Thee Stallion Remix)', albumName: 'NOW That’s What I Call Music! 80 [US]',
        albumUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F9d03a7f0b19c81d85110d5c61c3e101f.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/2860x686/https%3A%2F%2Fimages.genius.com%2F9d03a7f0b19c81d85110d5c61c3e101f.1000x1000x1.png',
        body:`[Intro: Megan Thee Stallion]
        Ayy, it's the Hot Girl Coach and BTS, ah

        [Verse 1: Jung Kook, V, j-hope]
        Smooth like butter
        Like a criminal undercover
        Gon' pop like trouble
        Breakin' into your heart like that (Ooh)
        Cool shade stunner
        Yeah, I owe it all to my mother
        Hot like summer
        Yeah, I'm makin' you sweat like that
        Break it down

        [Pre-Chorus: Jin, RM]
        Ooh, when I look in the mirror
        I'll melt your heart into two
        I got that superstar glow so (Ooh)
        Do the boogie like

        [Chorus: Jung Kook, Jimin, V, Megan Thee Stallion]
        Side step, right, left to my beat
        High like the moon, rock with me, baby
        Know that I got that heat
        Let me show you 'cause talk is cheap
        Side step, right, left to my beat (Uh-hmm)
        Get it, let it roll

        [Verse 2: Megan Thee Stallion]
        Ayy, so smooth like the car I ride
        Even ya best party planner couldn't catch this vibe
        Big boss, and I make a hater stay on they job
        And I be on these girls necks like the back of they bobs
        Houston's finest, in the room with bosses
        Make 'em all get ratchet in they suits and blouses
        I remember writing flows in my room in college
        Now I need global entry to the shows I'm rocking (Yeah)
        Smooth like cocoa butter
        My drip more than a puddle
        They know that I'm the wave
        Take over every summer
        They must be giving Stevie if they ever had to Wonder
        'Cause every beat I get on get turned in to Hubba Bubba, ah

        [Chorus: Jimin, Jin, Jung Kook, Megan Thee Stallion]
        Side step, right, left to my beat (Yeah, yeah, yeah, ah)
        High like the moon, rock with me, baby (Moon, moon, moon)
        Know that I got that heat (Yeah)
        Let me show you 'cause talk is cheap (Yeah)
        Side step, right, left to my beat
        Get it, let it roll

        [Post-Chorus: Jimin]
        Get it, let it roll
        Get it, let it roll

        [Verse 3: SUGA, SUGA & Megan Thee Stallion, RM, All]
        Ice on my wrist, I'm the nice guy (Oh)
        Got the right body and the right mind (Oh)
        Rollin' up to party, got the right vibe
        Smooth like (Butter), hate us (Love us)
        Fresh boy pull up and we lay low
        All the playas get movin' when the bass low
        Got ARMY right behind us when we say so
        (Mmm-hmm-hmm-hmm) Let's go

        [Chorus: V, Jin, Jung Kook, Jimin]
        Side step, right, left to my beat (Right, left to my beat)
        High like the moon, rock with me, baby
        Know that I got that heat
        Let me show you 'cause talk is cheap (You know that talk is cheap)
        Side step, right, left to my beat
        Get it, let it roll

        [Post-Chorus: j-hope, j-hope & RM, RM, All, *Megan Thee Stallion*]
        Smooth like (Butter), cool shade (Stunner)
        And you know we don't stop
        Hot like (Summer), ain't no (Bummer)
        You be like, oh my God
        We gon' make you rock and you say (Yeah)
        We gon' make you bounce and you say (Yeah)
        *Hotter?* Sweeter! Cooler? Butter!

        [Outro: Jung Kook]
        Get it, let it roll`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Ed Sheeran', name: 'Bad Habits', albumName: '= (Equals)',
        albumUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2Ff4a55c73aab9c6ae348a283e2f5754b6.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2Fa191cd0aaa3c136ca5a4cbf5a8496b17.1000x1000x1.jpg',
        body:`[Intro]
        (One, two, three, four)
        Ooh, ooh

        [Verse 1]
        Every time you come around, you know I can't say no
        Every time the sun goes down, I let you take control
        I can feel the paradise before my world implodes
        And tonight had something wonderful

        [Chorus]
        My bad habits lead to late nights endin' alone
        Conversations with a stranger I barely know
        Swearin' this will be the last, but it probably won't
        I got nothin' left to lose, or use, or do
        My bad habits lead to wide eyes stare into space
        And I know I lose control of the things that I say
        Yeah, I was lookin' for a way out, now I can't escape
        Nothin' happens after two, it's true, it's true
        My bad habits lead to you

        [Post-Chorus]
        Ooh-ooh, ooh-ooh
        My bad habits lead to you
        Ooh-ooh, ooh-ooh
        My bad habits lead to you

        [Verse 2]
        Every pure intention ends when the good times start
        Fallin' over everything to reach the first time's spark
        It started under neon lights and then it all got dark
        I only know how to go too far

        [Chorus]
        My bad habits lead to late nights endin' alone
        Conversations with a stranger I barely know
        Swearin' this will be the last, but it probably won't
        I got nothin' left to lose, or use, or do
        My bad habits lead to wide eyes stare into space
        And I know I lose control of the things that I say
        Yeah, I was lookin' for a way out, now I can't escape
        Nothin' happens after two, it's true, it's true
        My bad habits lead to you

        [Post-Chorus]
        Ooh-ooh, ooh-ooh
        My bad habits lead to you
        Ooh-ooh, ooh-ooh

        [Bridge]
        We took the long way 'round
        Burned 'til the fun ran out, now

        [Chorus]
        My bad habits lead to late nights endin' alone
        Conversations with a stranger I barely know
        Swearin' this will be the last, but it probably won't
        I got nothin' left to lose, or use, or do
        My bad habits lead to wide eyes stare into space
        And I know I lose control of the things that I say
        Yeah, I was lookin' for a way out, now I can't escape
        Nothin' happens after two, it's true, it's true
        My bad habits lead to you

        [Post-Chorus]
        Ooh-ooh, ooh-ooh
        My bad habits lead to you
        Ooh-ooh, ooh-ooh
        My bad habits lead to you`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'YEBBA & Smino', name: 'Louie Bag', albumName: 'Dawn',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F04d5c833442f0b2795be8044db7929df.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2Fd07ed9f7539baf547333a04ade9caa3d.1000x1000x1.jpg',
        body:`[Intro: YEBBA]
        You, ooh

        [Verse 1: YEBBA]
        It was a stormy winter
        I watched the city burn
        And ever since I can remember
        That's just the way it hurts
        And it goes on and on and on
        Like I can never see the pinnacle of it all

        [Chorus: YEBBA]
        Put it in my Louie Bag, don't let it overflow
        Move it in, ship it out, tell me if they want some more (Some more)
        'Cause I got that fire, it's comin' for them now
        Friends are fallin' off, talkin' shit for no reason
        Checkin' all my locks 'cause it's robbin' season now
        La, da-da, da-da, da
        La-la, da-da, da-da, la, da, da-da, da-da

        [Verse 2: YEBBA]
        They cut my palms with paper
        Made from her Autumn leaves
        I'm bleedin' out disclaimers
        Into my family tree
        Fuck the interviews to enterprise
        I'd rather look into my mother's eyes
        And let it be
        Let it be, ee, yeah

        [Chorus: YEBBA]
        Put it in my Louie Bag, don't let it overflow
        Move it in, ship it out, tell me if they want some more (Some more)
        'Cause I got that fire, it's comin' for them now
        Friends are fallin' off, talkin' shit for no reason
        Checkin' all my locks 'cause it's robbin' season now
        La, da-da, da-da, da
        La-la, da-da, da-da, la, da, da-da, da-da

        [Verse 3: Smino]
        When the sky like this, I drop my top (I drop my top)
        Pull up on you just like a sock (Just like a sock)
        Come and ride, we ain't even gotta talk (We ain't gotta talk)
        Yeah, yeah, YEBBA
        Yeah, but I was 'posed to make it by now (Uh-oh)
        Yeah, but life threw me in the wrong realm (Uh-oh)
        Yeah, we always got time to do better (Uh-oh)
        YEBBA, I was tryna do it right now (Uh-oh)
        And we was growin' up in a town (Uh-oh)
        Where they never showed love to the brown (Uh-huh)
        Twenty-four hours ain't enough time (Uh-huh)
        I was fightin', throwin' hands with the clock (Uh-oh)
        Never been sweet, no honeycomb (Oh, oh)
        Money gone, granny gone, run along (Woah, oh)
        City burn, pin it on Pentagon (Oh, oh)
        Can't make it up no Revlon (Woah, oh)
        Shit bubble up, RevRun (Oh, oh)
        Had the episodes, this a re-run (Oh, oh)
        And they tell me, "Go pray to the reverend"
        Told God that I felt like a stepson (Oh)
        Buy a brand new coupe for the stress, huh
        Thick thang on the way for the stress, huh
        Big blunt on the way to my chest lungs
        Nowadays the distance hit me hard (Hit me hard)
        I admit, I'm addicted to livin' large (Livin' large)
        One, three, five, seven, beat the odds (Beat the odds)

        [Chorus: YEBBA]
        Put it in my Louie Bag, don't let it overflow
        Move it in, ship it out, tell me if they want some more (Some more)
        'Cause I got that fire, it's comin' for them now
        Friends are fallin' off, talkin' shit for no reason
        Checkin' all my locks 'cause it's robbin' season now
        La, da-da, da-da, da
        La-la, da-da, da-da, la, da, da-da, da-da`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Taylor Swift', name: 'august', albumName: 'folklore',
        albumUrl: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F4a6a06f7e361703062b0db46d0e4ec36.1000x1000x1.png',
        body:`[Verse 1]
        Salt air, and the rust on your door
        I never needed anything more
        Whispers of "Are you sure?"
        "Never have I ever before"

        [Chorus]
        But I can see us lost in the memory
        August slipped away into a moment in time
        'Cause it was never mine
        And I can see us twisted in bedsheets
        August sipped away like a bottle of wine
        'Cause you were never mine

        [Verse 2]
        Your back beneath the sun
        Wishin' I could write my name on it
        Will you call when you're back at school?
        I remember thinkin' I had you

        [Chorus]
        But I can see us lost in the memory
        August slipped away into a moment in time
        'Cause it was never mine
        And I can see us twisted in bedsheets
        August sipped away like a bottle of wine
        'Cause you were never mine

        [Bridge]
        Back when we were still changin' for the better
        Wanting was enough
        For me, it was enough
        To live for the hope of it all
        Cancel plans just in case you'd call
        And say, "Meet me behind the mall"
        So much for summer love and saying "us"
        'Cause you weren't mine to lose
        You weren't mine to lose, no

        [Chorus]
        But I can see us lost in the memory
        August slipped away into a moment in time
        'Cause it was never mine
        And I can see us twisted in bedsheets
        August sipped away like a bottle of wine
        'Cause you were never mine

        [Outro]
        'Cause you were never mine
        Never mine
        But do you remember?
        Remember when I pulled up and said "Get in the car"
        And then canceled my plans just in case you'd call?
        Back when I was livin' for the hope of it all, for the hope of it all
        "Meet me behind the mall"
        (Remember when I pulled up and said "Get in the car")
        (And then canceled my plans just in case you'd call?)
        (Back when I was livin' for the hope of it all, for the hope of it all)
        ("Meet me behind the mall")
        Remember when I pulled up and said "Get in the car"
        And then canceled my plans just in case you'd call?
        Back when I was livin' for the hope of it all (For the hope of it all)
        For the hope of it all, for the hope of it all
        (For the hope of it all, for the hope of it all)`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'Isaiah Rashad', name: 'Darkseid', albumName: 'The House Is Burning',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F0852294d30d3e58fc2f968a4b5fe471d.1000x1000x1.jpg',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/2860x560/https%3A%2F%2Fimages.genius.com%2F0852294d30d3e58fc2f968a4b5fe471d.1000x1000x1.jpg',
        body:`[Intro]
        Yeah
        Yeah
        Yeah, yeah

        [Chorus]
        What am I supposed to do outside but get rich? (Yeah)
        Work too hard, but boy, don't floss too hard and get yo' wig split (Yeah)
        Pray to God, I heard they got new Gods outside in this bitch (Yeah)
        Barely toddlers got them Purple Hearts outside in this bitch

        [Verse]
        Yeah, whatever gon' keep your nose dry, my nigga, I'm with it (Yeah)
        I know it got you froze, my nigga, I feel it (Yeah)
        Some niggas be runnin' away from life, some niggas cut off the legs
        If I was you, I'd be dead (Yeah, yeah)
        Whatever gon' keep your mind blown, my nigga, maintain the wheel (Uh-huh)
        My partner know I just came back, see, I done been dead for real (Uh-huh)
        They mixin' up all of that no name, you know we be scared to chill (Chill)
        You know we be scared to feel (Yeah), or anything else but, yeah
        Whatever gon' keep my kids safe, my kids full, I'm with it (Yeah)
        I know what's at your nose, my nigga, for really (Ayy)
        Some niggas gon' die in the cardboard, some niggas gon' die in the feds (Ayy)
        Is that you on the edge?
        Whatever was under the bunk bed, I ain't scared, I'm ready (Ready)
        They locked the horns with matadors, okay, don't get too heavy (Heavy)
        He shined his fangs and Cuban chain, okay, don't get too heavy (Too heavy)
        They dug a grave, he came alive, okay, don't get too heavy (Don't get too heavy)

        [Chorus]
        What am I supposed to do outside but get rich? (Yeah)
        Work too hard, but boy, don't floss too hard and get yo' wig split (Yeah)
        Pray to God, I heard they got new Gods outside in this bitch (Yeah)
        Barely toddlers got them Purple Hearts outside in this bitch
        What am I supposed to do outside but get rich? (Yeah)
        Work too hard, but boy, don't floss too hard and get yo' wig split (Ayy)
        Pray to God, I heard they got new Gods outside in this bitch (Ayy)
        Barely toddlers got them Purple Hearts outside in this bitch (Ayy)

        [Outro]
        Whatever gon' keep my kids safe, my kids full, I'm with it
        I know what's at your nose, my nigga, for really
        Some niggas gon' die in the cardboard, some niggas gon' die in the feds
        Whatever gon' keep my kids safe, my kids full, I'm with it
        I know what's at your nose, my nigga, for really
        Some niggas gon' die in the cardboard, some niggas gon' die in the feds`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {artistName: 'James Vickery & EARTHGANG', name: 'You Comfort Me', albumName: 'Songs That Made Me Feel',
        albumUrl: 'https://t2.genius.com/unsafe/440x0/https%3A%2F%2Fimages.genius.com%2F0454895d9668d9c2706e2c6918d7cda6.1000x1000x1.png',
        backgroundArtUrl: 'https://t2.genius.com/unsafe/1980x560/https%3A%2F%2Fimages.genius.com%2F0454895d9668d9c2706e2c6918d7cda6.1000x1000x1.png',
        body:`[Verse 1: James Vickery]
        Redefined, clearer mind, yeah
        Bad design, no denying
        Here's the thing, I've been wondering
        Are you my heaven?

        [Pre-Chorus: James Vickery]
        You wouldn't fake it
        And I wouldn't change it
        Let me just say that
        Either way

        [Chorus: James Vickery]
        You are the sun that shines down on me
        You are the one that's so heavenly
        And every time that I'm on my knees
        You take the weight off my shoulders
        When I'm in need, and so you comfort me

        [Verse 2: James Vickery]
        My whole life is a lie, yeah
        Took your time to realize it
        Without you I've been dying
        'Cause you're my saviour

        [Pre-Chorus: James Vickery]
        You wouldn't fake it
        And I wouldn't change it
        Let me just say that
        Either way

        [Chorus: James Vickery]
        You are the sun that shines down on me
        You are the one that's so heavenly
        And every time that I'm on my knees
        You take the weight off my shoulders
        When I'm in need, and so you comfort me

        [Bridge: James Vickery, Johnny Venus]
        Find a way to tell you everything
        Give you everything you need always (Okay)
        You make my life so different with your ways (Here we go)
        Baby I will tell you

        [Verse 2: Johnny Venus]
        Keep this shit a hundred, Never really wanted
        Nothing serious, wasn't lookin' for no lovin'
        Just someone to come with, Just some one-on-one shit
        Someone I could fly out, have a little fun with
        ATL to London, Skies are kinda gray
        But you brighten up my day with everything you say
        There's no way I can escape it
        Can I call you bae? All these other bitches basic (Basic)
        Never thought the day come that I'm feelin' bae sick
        When you not around, ain't no cure, no replacement
        So I run it up, keep the Benjamins racin' (Racin')
        Love is what you makin'
        Hold on 'fore we make kids
        Baby take it slow, take your time 'round the bases
        You the highlight through the night and the day shift (Sun and Moon)
        Can't conceal the rush or the blush, girl let's face it
        You the shit- Ha, ain't nothin' else to rhyme with

        [Chorus: James Vickery, Johnny Venus]
        You are the sun that shines down on me (I love you, girl)
        You are the one that's so heavenly (I love you, shawty)
        And every time that I'm on my knees
        You take the weight off my shoulders
        When I'm in need, and so you comfort me

        [Chorus: James Vickery]
        You are the sun that shines down on me
        You are the one that's so heavenly
        And every time that I'm on my knees
        You take the weight off my shoulders
        When I'm in need, and so you comfort me`,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Songs', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
