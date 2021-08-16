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
_mechanics: black inaccessible blocks spawning and sporadically growing >> OOP_\
##### Stop
Train comes to a stop; user gets off, game ends.
\\

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
Simple simple. Image files coming soon.
-UPDATE 16/08-
_(Heh, I lied)_
I'm following what seems to be a pattern and going with what I fantasize as a sort of arcade (but mild and quieter) - not really but let's pretend; a smaller canvas may result "downgraded" if the user is (most likely) used to full-screened content, yet I truly do find this format nostalgic and simple - fitting my project.

### Sounds | Subject to Updates/Changes
I plan:
- 'beep bop boop' sounds - for lack of better term - for interactions/voices and SFXs
- actual soundtracks, though I fucking sucks at creating those - and stealing some doesn't seem too appealing - so idk. Maybe there's guides online or smth - worst case scenario, go for easy/repeated chords and scales.
-UPDATE (16/08)-
- I thought about the envisioned sounds planned for this program and my incapacity to create soundtracks - I think I found a plausible solution: p5 sound library >:D
I _think_ it'd fit nicely the project and speculative design' vibes, in addition to being quite easy and fun to work with. It _might_ result a bit annoying - kind of like a triggering ringing (especially the sawtooth tool or smth); the only thing to do is try it out and see. Further updates will follow (albeit designing the sounds will be left among the last tasks, so...).

### Coding the Program | Progress & Phases
-16/08-
Basic set up:
- included p5 and p5 sound libraries( > more in 'Sounds'), as well as .json file for dialogues. I'm currently hoping to adapt my dialogues system from the CART263 - Final Project, in which the lines are contained in one single file and displayed depending on the current state; although here the lines are numerous so it'll require a bit more testing. Updates required.
- adjusted CSS in order to center canvas and change page's bg color (yes I am adopting the usual -probably unappreciated- technique of a canvas smaller than the screen > more in 'aesthetics').
- set up very basic settings in main script such as canvas size, bg color (a dark grey > again, 'aesthetics');
- set up states (they'll probably be subjected to change throughout the project); it personally helps me in having a very basic skeleton/bigger picture before tackling the single more specific tasks.
- set up avatar as Class; directed by the arrow keys, it possesses both an idle icon and moving animation (currently under construction, so for now it's only creepy and irrelevant .pngs) and is constrained to the canvas. This, however, might change - after all, the avatar will mostly move within the wagons which, in turn, will...'expand', so yeah, the constraining method might be removed further ahead.
