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
