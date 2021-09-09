# Speculative_Speculation
Documenting and storing the design and building processes for the Speculative Play project (V00717).

15-19/07/2021 | Introductive Ranting  
[Exploring Speculative Design & Possible Interpretations of Theme](https://docs.google.com/document/d/1tAFpLuu1fsyRhrwTuMa5tBI6hm-bwEVeyZS5s5nHQAU/edit?usp=sharing)        


## Project Scope
24/07/2021
### Theme & Prompts
After exploring the definition of 'speculative design', as well as different interpretations of the notion of death via eras and cultures, I have reached the conclusion of approaching the given theme as a potentially tangible and relatable experience; grieving. In other words, death really only perceived and thus experienced by "who's left behind".

### Context & Set Up
In order to make my concept work, I needed a context in which grieving (so, to some extent and form, also death) is no longer present - or rather, so disfigured to disrupt its own concept defined in present terms.

A first attempt envisioned the permanent arrest to organic/biological death via super-advanced tech and medicine (partly-inorganic population) - but that just left too many holes; if no one dies, wouldn't they eventually just kill themselves? Or maybe others? And if you get shot, do you die? Are we more machines than humans? But then again, machines can be broken or severely damaged too, so the logic just doesn't hold. Perhaps slapping the 'sci-fi' label could have done the trick - but I'm usually the first one to ask questions about context and parameters - it'd just feel insufficient for me.

SO: a second, much more convincing idea popped into my mind.\
Death still very much exists, but AI/machines (whatever) can successfully simulates voice/behavior/patterns of our lost ones, so the death of someone (and therefore grieving) is really not comparable to our current experience.
In this sense, it seems closely linked to a more religious approach, where it serves as a mere "moment of transition" to reach the afterlife.
I think it a much more solid and sensible approach - pervasive technologies and mobile devices are already an ubiquitous presence, spurring heated discussions. It seems like a reliable projection of a near-future.

In this newly acquired set up, the main project can actually take root; in a world that nullifies the experience of loss and the process of truly grieving, would it be so absurd to imagine a simulation of the sort?\
Well spoiler alert - obviously I don't believe so, otherwise I wouldn't be writing this.
A game advertising to the user a limited/timed and therefore invaluable simulated friendship; a sort of YOLO philosophy, but taken seriously.
The game/simulation (I'm still thinking of a title - smth like _And the train blew its whistle_ was an option floating around, but idk) takes place in a train (I'll try to make it fancy schmancy) - kind of explicit reference to death/life as a journey - where the user will meet a simulated friend/avatar, develop a friendship(I mean - hopefully), loose it, and grieve it.

### Narrative
#### Phases | Subject to Updates/Changes
##### Intro & Set Up
Multiscreen intro engages with user via chats/calls (worldbuilding mostly/indirectly explained here), in which game promo also pops up - user starts playing (game window becomes full screen).
##### Wagons
Currently envisioned 4 max.
###### Intro Wagon
Train stops, user hops on, train starts running.\
User meets SA (Simulated Avatar - it's shorter that way) - mostly dialogue-based(kinda one-sided though? It's like the user's speech won't be spelled out; kinda like pokemon)\
_mechanics: dialogues >> JSON_

##### Loss
SA disappears (no graphic deaths here) or smth; user can look around in wagons, but won't find anyone
##### Grief
While revisiting other wagons, user's memory starts to trick him - not only they start to forget, they remember things differently\
_mechanics: black inaccessible blocks spawning and sporadically growing >> OOP_
##### Stop
Train comes to a stop; user gets off, game ends.

### Time
Time is CRUTIAL and not at all reliable here:
- timer will be displayed at all times for user to see
- time will actually change pace depending on the user's choices - recreating the effect that 'time flies when you're having fun'; you're having fun with your friend? Time will pass by faster, not doing much? Time will slow down (this concept actually came up in a discussion with zi di, and how time can be perceived differently depending on how we spend it)
- similarly, grief will also distort the regular pacing of time
- SA will age throughout game (and so will their behavior and attitude, ofc)

### Mechanics & Programming | Subject to Updates/Changes
Can confirm - will use p5.js
- lots of OOP
- wagons functioning similarly (if not identically) to 'room system' from CART263 final project
- dialogues >> JSON (again, CART263 final)
- the timer element will be a bit trickier > probably regular counting frames/secs function with variables - each different according to the room
- interactions - I'd like to include in the characters OOP classes a key enabling interacting with objects (thus triggering dialogues or other stuff)

### Aesthetics | Subject to Updates/Changes
Simple simple. Image files coming soon.\
-UPDATE 16/08-
_(Heh, I lied)_
I'm following what seems to be a pattern and going with what I fantasize as a sort of arcade (but mild and quieter) - not really but let's pretend; a smaller canvas may result "downgraded" if the user is (most likely) used to full-screened content, yet I truly do find this format nostalgic and simple - fitting my project.

### Sounds | Subject to Updates/Changes
I plan:
- 'beep bop boop' sounds - for lack of better term - for interactions/voices and SFXs
- actual soundtracks, though I fucking sucks at creating those - and stealing some doesn't seem too appealing - so idk. Maybe there's guides online or smth - worst case scenario, go for easy/repeated chords and scales.\
-UPDATE (16/08)-
- I thought about the envisioned sounds planned for this program and my incapacity to create soundtracks - I think I found a plausible solution: p5 sound library >:D
I _think_ it'd fit nicely the project and speculative design' vibes, in addition to being quite easy and fun to work with. It _might_ result a bit annoying - kind of like a triggering ringing (especially the sawtooth tool or smth); the only thing to do is try it out and see. Further updates will follow (albeit designing the sounds will be left among the last tasks, so...).

### Coding the Program | Progress & Phases
-16/08-\
Basic set up:
- included p5 and p5 sound libraries( > more in 'Sounds'), as well as .json file for dialogues. I'm currently hoping to adapt my dialogues system from the CART263 - Final Project, in which the lines are contained in one single file and displayed depending on the current state; although here the lines are numerous so it'll require a bit more testing. Updates required.
- adjusted CSS in order to center canvas and change page's bg color (yes I am adopting the usual -probably unappreciated- technique of a canvas smaller than the screen > more in 'aesthetics').
- set up very basic settings in main script such as canvas size, bg color (a dark grey > again, 'aesthetics');
- set up states (they'll probably be subjected to change throughout the project); it personally helps me in having a very basic skeleton/bigger picture before tackling the single more specific tasks.
- set up avatar as Class; directed by the arrow keys, it possesses both an idle icon and moving animation (currently under construction, so for now it's only creepy and irrelevant .pngs) and is constrained to the canvas. This, however, might change - after all, the avatar will mostly move within the wagons which, in turn, will...'expand', so yeah, the constraining method might be removed further ahead.

-19/08-\
Intro State set up:\
|Rant, Description & Updates|\
Although I wasn't necessarily aiming for a '1st person screen layout', it did end up being the set up for the project. Just a shy introduction to the program, yet crucial for several reasons - among those, giving precious (though quite subtle) context to the player, as well as, hopefully, allowing for a more engaging experience. At first, I wanted to create a defined line between introduction and simulation (game within the game) and thought of doing so by maybe setting up a room(living room/desk/whatever) or smth where the player could, via a device, play the game. Yet I'm much happier with these aesthetics and dynamics:\
- the program starts with this 'game' already downloading on the user's device screen (1st pov - no material surroundings and barely a 'desktop' to speak of); some snippets/captions (I'm not sure what to call them) about the game appear/alternate on the same window in the meantime (this concept was 200% burrowed from the sims loading menus);
- eventually, 2 icons will pop up, and, if clicked/accessed by the user, will lead to two chats - aka what I'm hoping to be key context sources - among a deceased family member (grandma/aunt/whatever) and a live one(a bother? idk);
- when the download is complete, the chats close and the screen changes for the game "runs" automatically.

Visually/experience-wise, I intend for many things (the game downloading and kind of introducing itself as well as two conversations) to go on at the same time, for different reasons:
- multitasking/multiple open windows is already an increasingly common practice in the present, so I can only imagine how it will amplify in the future;
- I want to give it a bit of a "cursed" vibe - or rather, I want to create a framework saturated with information, but subtly; windows and texts will kind of overlap (not _tremendously_ so - but still), so the user has many quiet voices requiring attention at once. On that note, I also personally find interesting seeing which sections the user would prioritize. I am still undecided whether the user is in control of the order of the windows - in other words, if they have the possibility to bring forward/send backward a window in order to prioritize another one (exactly like a real desktop would behave).

Aesthetic-wise, I opted for _extremely_ simple set up.

I still haven't included the actual texts/conversations (that will be a separate update/class/etc). On another (random) note, I opted to create a major class (in this case, an entire state) with multiple (a bit repetitive) elements within, rather than having many small classes. Not sure if I'll keep this strategy, might be interesting to bring up during meeting.

-25/08 - 09/09-\
Title Screen State set up:\
|Rant, Description & Updates| - BOY OH BOY DO I HAVE A RANT\
Although I do plan to only commit changes to GitHub when major updates (aka states or major components - such as the dialogues/texts), this one was _ridiculous_. It took me 2 days to build a state that in the end I was not satisfied with, so ended up re-doing in 3 hours. Life is good :)))))))))))\
Somehow - for this project at least -, it feels like the mechanics of the program should be in tune with its (envisioned) atmosphere - that is to say, smooth and simple, and hopefully elegant-like. In this case, specifically, I had built a set up & visuals that had many steps to accomplish a fairly simple scheme. To better try to explain, it felt like inserting too many 'anchor points' when drawing a vector; too many and the lines looses its smoothness. The same effect had the first version of the Title Screen set up; too many steps here and there produced a noisy (and 'laggy', if that makes sense) final product - personally, at least (I'm building this so I get to decide what feels right and what doesn't XD). And as sometimes happens with coding, it can feel easier to simply start from scratch than trying to understand what doesn't work (in a 'visual' sense - the code worked as it was supposed to I swear haha, it was just not projecting the envisioned vibe).
SO, this version (that I do prefer over the first one) includes:
- Title Screen with title(shocking, I know) and floating smoke clouds (generous way to describe circles). User presses SPACEBAR to start game - particularly a 'cutscene' of sorts: train tracks and flashing red lights appear and train decelerates (yea, I put effort into those physics), opens/closes door, and restarts (cue acceleration). Coding-wise:
- classes: state class, train(currently ugly stolen image, though I do plan to "build" its aesthetics via p5 geometry), train tracks, flashing red lights, and "smoke clouds" (they look more like bubbles, but it's a quite simplified version of smoky clouds originating from the train - but also a metaphor for something else hehe); of course, all classes are intertwined with one another, and all are called in the Title Screen State/Class.
- the title screen (which title is definitely temporary - I am _not_ calling it "choof choof") functions as mostly a cut-scene (aka - TIMERS) and should introduce the concept/metaphor of the train/journey. Hopefully, this way it appears as subtle as I intended.

This minor update required way too much time, but I feel it important to document all ups and downs of my work.

As a random note, I think I'll reduce the numbers of featured "wagons" from 4 to 3, for it fits best with the overall vibe of the project (I do want it to be a one-sitting experience; I also have very defined visions for the wagons) and it's less time-consuming :3
