import { Poem } from './poem.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  public poem_preview: string;

  public _poems: Poem[] = [
    new Poem(
      'Morning Sex',
      this.getPreview(`Someone turned off the music last night. 
 In the early morning, I catch the sun 
 like an ember on a dry leaf
 my face smothered in your chestnut hair
 that smells of ripe apples waiting to be picked
 from the wicker basket
 and I go down
 like sleep, like a soft dream 
 where we are dancing on the front lawn
 of our neighbors home 
 because we drank whiskey at 10 am
 and started the grill at noon 
 and we kiss because the song that’s playing
 is our favorite and we’ve come to our favorite part:
 A man singing about what he lost, about love
 and how it ruined him
 how love feels when you are undressed
 to the bone, the hard calcium and soft marrow
 of it
 I say I don’t want as much as yearn, I don’t ask
 as much as I ache and expect you to understand
 without a word my need, this music is so sad, 
 I want to listen to it at the end of dusk when the fireflies
 are a burnt orange, when the neighbor and his wife 
 are making love in their tiny bedroom
 and you can hear her moaning through the thin walls
 I want to listen to you sing, I want you to sing 
 our favorite part, but this time, you are the man 
 and I’m what he lost. This time, I decide when
 we can listen no longer.
 `),
      `Someone turned off the music last night. 
 In the early morning, I catch the sun 
 like an ember on a dry leaf
 my face smothered in your chestnut hair
 that smells of ripe apples waiting to be picked
 from the wicker basket
 and I go down
 like sleep, like a soft dream 
 where we are dancing on the front lawn
 of our neighbors home 
 because we drank whiskey at 10 am
 and started the grill at noon 
 and we kiss because the song that’s playing
 is our favorite and we’ve come to our favorite part:
 A man singing about what he lost, about love
 and how it ruined him
 how love feels when you are undressed
 to the bone, the hard calcium and soft marrow
 of it
 I say I don’t want as much as yearn, I don’t ask
 as much as I ache and expect you to understand
 without a word my need, this music is so sad, 
 I want to listen to it at the end of dusk when the fireflies
 are a burnt orange, when the neighbor and his wife 
 are making love in their tiny bedroom
 and you can hear her moaning through the thin walls
 I want to listen to you sing, I want you to sing 
 our favorite part, but this time, you are the man 
 and I’m what he lost. This time, I decide when
 we can listen no longer.
 `
    ),
    new Poem(
      'Saturday Night',
      this.getPreview(`Who would’ve guessed after all the I’ll love you forevers
  and late risings on weekend noons,
  I would find you again like this:
  the curtains drawn, your back turned to me, and outside,
  an empty parking lot with your car right next to mine,
  the sun, already high above, fervently questioning us --
  
  who would’ve guessed the I miss yous outside the bar,
  the late check-in, the stumbling and laughing to the room,
  the way I would pull you closer into me      
  when I sensed you were on the edge of cumming --
  who would’ve guessed the way we would lie there afterwards,
  
  your head nuzzled perfectly in my arms, your quiet breathing,
  of how, when I would whisper in your ear
  I still love you,       
  there would be no response,
  how you would already be asleep,
  far away from me.
  `),
      `Who would’ve guessed after all the I’ll love you forevers
  and late risings on weekend noons,
  I would find you again like this:
  the curtains drawn, your back turned to me, and outside,
  an empty parking lot with your car right next to mine,
  the sun, already high above, fervently questioning us --
  
  who would’ve guessed the I miss yous outside the bar,
  the late check-in, the stumbling and laughing to the room,
  the way I would pull you closer into me      
  when I sensed you were on the edge of cumming --
  who would’ve guessed the way we would lie there afterwards,
  
  your head nuzzled perfectly in my arms, your quiet breathing,
  of how, when I would whisper in your ear
  I still love you,       
  there would be no response,
  how you would already be asleep,
  far away from me.
  `
    ),
    new Poem(
      'A Child’s Belief',
      this.getPreview(`When I was only five or six, I was fascinated with the time
  it took for a rock to hit the ocean floor.
  I would stand on the pier and throw one after another,
  and after each one, look up at my Father and ask, 
  Do you think it hit the bottom yet?
  Somehow persuaded they would never make it there.
  Not yet accepting the downward force of gravity, or 
  the notion that there can be an end to something 
  so privately deep as the ocean.
  When I was a little older, it was the idea of magnets.
  The decorative ones painted as bluebirds stuck onto the fridge, 
  holding mom’s daily reminders. The ones with the thin layer
  that were as good as stickers -- consolation prizes
  for when you didn’t win enough tickets.
  The minutes I would spend trying to push two positively
  charged ones together, not understanding or caring how
  they actually worked. Believing that, with enough
  effort, I could force their heads to perfectly touch.
  After high school it was girls, of course. Beautiful girls.
  How I took to the same level of scientific thought
  to understand them as I once did magnets or rocks --
  wanting them to behave in ways they couldn’t,
  ways, fundamentally against their nature. 
  And for so long, I didn’t know what it meant to love
  or be loved by someone because I never tried to know. 
  Because every time I tried, I started with 
  a questionable premise and worked into a willing lie.
  Then one day you meet someone, of course. They tell you
  up is down, and if you jumped you would fly.
  That there’s no push and pull -- no North, no South. 
  You are a child again. But how quickly you learn then
  that everything feels like iron, nickel, and cobalt 
  until it’s paper. That gravity is weak but everywhere, 
  ready to assert you back onto the ground. 
  That the rock you threw back when you were a kid
  probably isn’t still sinking.
  `),
      `When I was only five or six, I was fascinated with the time
  it took for a rock to hit the ocean floor.
  I would stand on the pier and throw one after another,
  and after each one, look up at my Father and ask, 
  Do you think it hit the bottom yet?
  Somehow persuaded they would never make it there.
  Not yet accepting the downward force of gravity, or 
  the notion that there can be an end to something 
  so privately deep as the ocean.
  When I was a little older, it was the idea of magnets.
  The decorative ones painted as bluebirds stuck onto the fridge, 
  holding mom’s daily reminders. The ones with the thin layer
  that were as good as stickers -- consolation prizes
  for when you didn’t win enough tickets.
  The minutes I would spend trying to push two positively
  charged ones together, not understanding or caring how
  they actually worked. Believing that, with enough
  effort, I could force their heads to perfectly touch.
  After high school it was girls, of course. Beautiful girls.
  How I took to the same level of scientific thought
  to understand them as I once did magnets or rocks --
  wanting them to behave in ways they couldn’t,
  ways, fundamentally against their nature. 
  And for so long, I didn’t know what it meant to love
  or be loved by someone because I never tried to know. 
  Because every time I tried, I started with 
  a questionable premise and worked into a willing lie.
  Then one day you meet someone, of course. They tell you
  up is down, and if you jumped you would fly.
  That there’s no push and pull -- no North, no South. 
  You are a child again. But how quickly you learn then
  that everything feels like iron, nickel, and cobalt 
  until it’s paper. That gravity is weak but everywhere, 
  ready to assert you back onto the ground. 
  That the rock you threw back when you were a kid
  probably isn’t still sinking.
  `
    ),
    new Poem(
      ' Love and Entanglement',
      this.getPreview(`I am here at one point, affected by you,
  wherever you are
  
  the great distance separating us, 
  the memories, in a more quiet place -- 
  it has been a few summers
  
  & still I wonder when you hear my name 
  or stumble upon a picture,
  are you brought to action: a thought, 
  a movement closer to me?
  
  somehow I still love you, somehow,
  there is still a pain linking us
  
  as I fall asleep tonight, I turn my head
  towards your side of the bed -- 
  those minutes
  we would spend just looking at each other --
  
  if only by habit, I reach across --
  & there you are the same,
  thinking of me.
  `),
      `I am here at one point, affected by you,
  wherever you are
  
  the great distance separating us, 
  the memories, in a more quiet place -- 
  it has been a few summers
  
  & still I wonder when you hear my name 
  or stumble upon a picture,
  are you brought to action: a thought, 
  a movement closer to me?
  
  somehow I still love you, somehow,
  there is still a pain linking us
  
  as I fall asleep tonight, I turn my head
  towards your side of the bed -- 
  those minutes
  we would spend just looking at each other --
  
  if only by habit, I reach across --
  & there you are the same,
  thinking of me.
  `
    ),
    new Poem(
      'Because I Love You',
      this.getPreview(`I love you 
  because you slice an apple so precisely
  because you’ll sometimes use a butter knife
    when you should use a steak
  because you never pass up an opportunity to say, “Bless you”
    lest thinking yourself rude
  because you’ll sing a quiet song in the kitchen
    in the earlier morning
    and stop when I enter 
  too shy to continue
  I love you
  because you sound so good 
  singing it
  I love you 
  because you know how to use a hammer
  and drive a nail
  because you look good in grease and shimmer
  in sweat
  because you’ll drink beer until you’re drunk
  and laugh the night away with me
  because when you’re gone I’ll easily miss your kisses 
  more than our sex
  I love you
    because you know how to comfort someone
      when they weep
    because you’ll give the homeless man 
  outside the gas station	
  whatever he asks 
  if you can
    because you can sleep anywhere,
      on planes and metro tracks,
      in the car as I drive us home at 4 am
  Understand, I love you
    in secret, but not with shame
  I love you
    with simplicity, but not simply
  I love you
    as an act of sublimation through my body
  because the universe started with fire
     and will end in ice
    because I’m convinced 
  you were the first particle of light 
  illuminating its vacuum of darkness
  I love you 
  because, through everything, I’ve come to love 
  what is small, what we keep 
  between us 
  in the few silences of life
  because we once made promises to each other
  over things we didn’t understand,
  but kept each one 
  along the way
  And I love you 
  because of how you start every journal entry with,
  “What I loved about today…” 
  because once, I peaked over your shoulder
  and saw written in all caps and circled
  only my name.
  `),
      `I love you 
  because you slice an apple so precisely
  because you’ll sometimes use a butter knife
    when you should use a steak
  because you never pass up an opportunity to say, “Bless you”
    lest thinking yourself rude
  because you’ll sing a quiet song in the kitchen
    in the earlier morning
    and stop when I enter 
  too shy to continue
  I love you
  because you sound so good 
  singing it
  I love you 
  because you know how to use a hammer
  and drive a nail
  because you look good in grease and shimmer
  in sweat
  because you’ll drink beer until you’re drunk
  and laugh the night away with me
  because when you’re gone I’ll easily miss your kisses 
  more than our sex
  I love you
    because you know how to comfort someone
      when they weep
    because you’ll give the homeless man 
  outside the gas station	
  whatever he asks 
  if you can
    because you can sleep anywhere,
      on planes and metro tracks,
      in the car as I drive us home at 4 am
  Understand, I love you
    in secret, but not with shame
  I love you
    with simplicity, but not simply
  I love you
    as an act of sublimation through my body
  because the universe started with fire
     and will end in ice
    because I’m convinced 
  you were the first particle of light 
  illuminating its vacuum of darkness
  I love you 
  because, through everything, I’ve come to love 
  what is small, what we keep 
  between us 
  in the few silences of life
  because we once made promises to each other
  over things we didn’t understand,
  but kept each one 
  along the way
  And I love you 
  because of how you start every journal entry with,
  “What I loved about today…” 
  because once, I peaked over your shoulder
  and saw written in all caps and circled
  only my name.
  `
    ),
    new Poem(
      'An Answer',
      this.getPreview(`I’m about to ask you the most important question.
  But first, I want to know how gravity looks. Or 
  why some math is imaginary. Can you tell me
  where the bodies were dumped in the lake -- 
  the one we rolled into. Why the dog was
  shot behind the shed. Why mom wouldn’t stop 
  crying over a plate I dropped at the wake. 
  Can you tell me where you last stopped. 
  The movie. The letters. The remembering.
  Why I can’t ever fall asleep before you.
  Why I can’t drink sangria and not stain
  your sleeve. I want to know what to do
  when you feel like you’re dying but not.
  How I can get rid of this worm in me, the one 
  that’s always hungry. Maybe vinegar and garlic. 
  Maybe with some honey, so it doesn’t taste
  so bad swallowing. Name me all the metaphors
  for love, will you. Kiss me?
  Sorry. I’ll be quiet now.
  `),
      `I’m about to ask you the most important question.
  But first, I want to know how gravity looks. Or 
  why some math is imaginary. Can you tell me
  where the bodies were dumped in the lake -- 
  the one we rolled into. Why the dog was
  shot behind the shed. Why mom wouldn’t stop 
  crying over a plate I dropped at the wake. 
  Can you tell me where you last stopped. 
  The movie. The letters. The remembering.
  Why I can’t ever fall asleep before you.
  Why I can’t drink sangria and not stain
  your sleeve. I want to know what to do
  when you feel like you’re dying but not.
  How I can get rid of this worm in me, the one 
  that’s always hungry. Maybe vinegar and garlic. 
  Maybe with some honey, so it doesn’t taste
  so bad swallowing. Name me all the metaphors
  for love, will you. Kiss me?
  Sorry. I’ll be quiet now.
  `
    ),
    new Poem(
      'Double Rod Pendulum',
      this.getPreview(`We start here. Hugging each other
  like cork to champagne bottle, 
  wanting the same thing,
  hearts as brittle as autumn leaves
  
  & we’ve determined our path: 
  first marriage, then children,
  then uncertainty --
  
  Today, I walked the orchard
  & found the yellow apples askew
  on the ground -- tomorrow, no doubt,
  a similar pattern
  
  I think of my nose in your hair. 
  Of your brown eyes turning wheat at the centers
  of their perfect circles
  as you fall asleep in the warm afternoon
  `),
      `“Chaos: When the present determines the future, but the approximate present does not approximately determine the future.” - Edward Lorenz

  We start here. Hugging each other
  like cork to champagne bottle, 
  wanting the same thing,
  hearts as brittle as autumn leaves
  
  & we’ve determined our path: 
  first marriage, then children,
  then uncertainty --
  
  Today, I walked the orchard
  & found the yellow apples askew
  on the ground -- tomorrow, no doubt,
  a similar pattern
  
  I think of my nose in your hair. 
  Of your brown eyes turning wheat at the centers
  of their perfect circles
  as you fall asleep in the warm afternoon
  `
    ),
    new Poem(
      'No Man’s Land',
      this.getPreview(`Once, when it was 2 am and we had worn limp our arguing
  with friction & sweat, I could not find rest 
  as easily as you
  
  if only because the cigarettes I burned hours before
  on the street below us -- which, in all their time, 
  have never proven themselves 
  by one breath of relief or any measure of assurance --
   
  & a man I spotted over your brown hair across the way 
  pacing his large flat, 
  who I’ve seen many times before, awake at the same hour;
  
  sometimes, stumbling in the darkness alone,
  sometimes with a woman, but mostly, 
  without her --
  this man, I know him in a way, 
  though he doesn’t know who I am.
  
  I know his quiet sadness, his loneliness, his private pain;
  the way he’ll pick up his phone and place it back down,
  unsure of so many things 
  & worst, 
  with no one to ask --
  
  that night I wanted to call out to him 
  and tell him that it gets easier;
  tell him that love is in the middle of no man’s land
  & victory is won when one surrenders
  
  but it’s not true, of course, 
  as much as we want to believe --
  as much as there was a time when a man 
  wouldn’t dare light his cigarette at night,
  fearing the person waiting on the other side.
  `),
      `Once, when it was 2 am and we had worn limp our arguing
  with friction & sweat, I could not find rest 
  as easily as you
  
  if only because the cigarettes I burned hours before
  on the street below us -- which, in all their time, 
  have never proven themselves 
  by one breath of relief or any measure of assurance --
   
  & a man I spotted over your brown hair across the way 
  pacing his large flat, 
  who I’ve seen many times before, awake at the same hour;
  
  sometimes, stumbling in the darkness alone,
  sometimes with a woman, but mostly, 
  without her --
  this man, I know him in a way, 
  though he doesn’t know who I am.
  
  I know his quiet sadness, his loneliness, his private pain;
  the way he’ll pick up his phone and place it back down,
  unsure of so many things 
  & worst, 
  with no one to ask --
  
  that night I wanted to call out to him 
  and tell him that it gets easier;
  tell him that love is in the middle of no man’s land
  & victory is won when one surrenders
  
  but it’s not true, of course, 
  as much as we want to believe --
  as much as there was a time when a man 
  wouldn’t dare light his cigarette at night,
  fearing the person waiting on the other side.
  `
    ),
    new Poem(
      'A Long Afternoon',
      this.getPreview(`It is natural that in winter we dream of spring,
  and wish the cold to pass in return for flowers 
  
  to desire, again, the ability to brave the weather 
  without an abundance of layers to keep warm 
  
  and some would say death is like a winter 
  for the living but one that’s impossible 
  to shelter yourself from, that carries a frost 
  which burrows far beneath the skin into the roots
  
  so it is, when those who we love leave us
  that we find our grief has no seasons, 
  no spring to promise renewal or rebirth --
  it is, at first, winter for awhile, 
  then it is winter 
  & only winter. 
  `),
      `It is natural that in winter we dream of spring,
  and wish the cold to pass in return for flowers 
  
  to desire, again, the ability to brave the weather 
  without an abundance of layers to keep warm 
  
  and some would say death is like a winter 
  for the living but one that’s impossible 
  to shelter yourself from, that carries a frost 
  which burrows far beneath the skin into the roots
  
  so it is, when those who we love leave us
  that we find our grief has no seasons, 
  no spring to promise renewal or rebirth --
  it is, at first, winter for awhile, 
  then it is winter 
  & only winter. 
  `
    ),
    new Poem(
      'A Painting of a Woman',
      this.getPreview(`A fertile landscape. River delta thighs stretched
  marked from latitude to longitude, the point
  where I kneel to the stream for water.
  Geese take flight. Mountains rise
  beneath the crust. I am not a traveler. I am
  not a passerby as many before me. The world spins
  on its axis but it’s imaginary, just something
  for mathematicians to measure their coordinates on.
  Longitude. Latitude. Here is a point, and I move
  my hand. There are a few geese left. Eyes
  roll back like the sun time-lapsing
  across the sky. The sun has an axis too,
  but it’s imaginary. It’s dark now, 
  but I can feel my way around.
  Latitude. Longitude. I say 
  you are my world, and I walk my finger
  to the center of your hips. 
  There are plates smashing beneath your skin.
  I say you are my sun and I find
  mathematicians to be liars.
  All the geese have left now.
  My body, a little north
  Of yours. 
  `),
      `A fertile landscape. River delta thighs stretched
  marked from latitude to longitude, the point
  where I kneel to the stream for water.
  Geese take flight. Mountains rise
  beneath the crust. I am not a traveler. I am
  not a passerby as many before me. The world spins
  on its axis but it’s imaginary, just something
  for mathematicians to measure their coordinates on.
  Longitude. Latitude. Here is a point, and I move
  my hand. There are a few geese left. Eyes
  roll back like the sun time-lapsing
  across the sky. The sun has an axis too,
  but it’s imaginary. It’s dark now, 
  but I can feel my way around.
  Latitude. Longitude. I say 
  you are my world, and I walk my finger
  to the center of your hips. 
  There are plates smashing beneath your skin.
  I say you are my sun and I find
  mathematicians to be liars.
  All the geese have left now.
  My body, a little north
  Of yours.
  `
    ),
    // End of Page 1 Poems
    // ------------------------------------------------------------------------------------------------------------------------------------------


    new Poem(
      'After Many Accidents',
      this.getPreview(`Two lanes over on the side
  of the road--
  I’m sure he looked away
  for only a second.
  
  An accordion of a bumper, a 
  rather important looking woman
  pacing on the phone
  too close to oncoming traffic; 
  the slowing of it like a pulse.
  
  A man is saying now
  he didn’t have enough time
  to stop -- his wife, climbing 
  into the back seat to try and
  hush their screaming child --
  I’m sure he looked away
  for only a second.
  
  I wonder what he was doing
  in that second -- smiling at his wife,
  changing the radio, peaking in the
  rearview at his kid -- seeing next
  a staple of red lights and applying
  the breaks, knowing 
  within that second it was already
  too late.
  
  A second isn’t much, but they add up.
  All those cars parked
  two lanes over on the side of the road.
  
  I arrive home to find the back
  of your head in a quiet living room --
  I know what’s going on. 
  I don’t have to look away 
  then look back to be shocked. 
  
  How quickly the damages add up.
  I wish I could say
  I was only doing something as innocent
  as changing the radio.
  `),
      `Two lanes over on the side
  of the road--
  I’m sure he looked away
  for only a second.
  
  An accordion of a bumper, a 
  rather important looking woman
  pacing on the phone
  too close to oncoming traffic; 
  the slowing of it like a pulse.
  
  A man is saying now
  he didn’t have enough time
  to stop -- his wife, climbing 
  into the back seat to try and
  hush their screaming child --
  I’m sure he looked away
  for only a second.
  
  I wonder what he was doing
  in that second -- smiling at his wife,
  changing the radio, peaking in the
  rearview at his kid -- seeing next
  a staple of red lights and applying
  the breaks, knowing 
  within that second it was already
  too late.
  
  A second isn’t much, but they add up.
  All those cars parked
  two lanes over on the side of the road.
  
  I arrive home to find the back
  of your head in a quiet living room --
  I know what’s going on. 
  I don’t have to look away 
  then look back to be shocked. 
  
  How quickly the damages add up.
  I wish I could say
  I was only doing something as innocent
  as changing the radio.`
    ),
    new Poem(
      'When She Leaves',
      this.getPreview(`
  Language leaves too.
  
  I point to her, then to myself;
  I take her hand in mine,
  then lift her chin with
  my finger
  
  It’s not that we forgot how to speak,
  only that we’ve become wiser--
  over the years, you learn 
  with someone the cheapness
  of words like Goodbye
  
  Forehead to forehead. Now,
  neurons fire and synapses
  jump-- I know this language
  the easiest, how certain silent letters 
  roll off my tongue 
  onto hers
  
  It’s not that we forgot how to speak;
  words will come later when it’s
  all we have 
  again
  
  I call her that night and she says,
  Hello
  to which I promptly say,
  I miss you
  
  and she gives no response,
  but it’s because I know
  language has not touched
  down with her yet, so we sit
  for a few hours
  as I think of every way to say 
  I love you,
  saying nothing, 
  listening only to the sound 
  of each other breathing.
  
  `),
      `
  Language leaves too.
  
  I point to her, then to myself;
  I take her hand in mine,
  then lift her chin with
  my finger
  
  It’s not that we forgot how to speak,
  only that we’ve become wiser--
  over the years, you learn 
  with someone the cheapness
  of words like Goodbye
  
  Forehead to forehead. Now,
  neurons fire and synapses
  jump-- I know this language
  the easiest, how certain silent letters 
  roll off my tongue 
  onto hers
  
  It’s not that we forgot how to speak;
  words will come later when it’s
  all we have 
  again
  
  I call her that night and she says,
  Hello
  to which I promptly say,
  I miss you
  
  and she gives no response,
  but it’s because I know
  language has not touched
  down with her yet, so we sit
  for a few hours
  as I think of every way to say 
  I love you,
  saying nothing, 
  listening only to the sound 
  of each other breathing.`
    )
  ];

  getPreview(poem: string) {
    this.poem_preview = poem.substring(0, 95)
    return this.poem_preview + "..."
  }

  constructor() { }

  getPoems(): Observable<Poem[]> {
    return of(this._poems);
  }

  getPoem(poem_title: string) {
    return this.getPoems().pipe(
      map((_poems: Poem[]) => _poems.find(poem => poem.poem_title === poem_title))
    );
  }
}
