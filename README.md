# GrooverTechChallenge

This is my solution for the Groover Tech Challenge. I used TypeScript for my implementation.
There are two classes, `trackData.ts`, which has all of the track attributes, and `track.ts`, which
has the array, and keeps track of the current track. There are set and get methods for all of the
attributes, a `save()` method, a `load()` method, a `print()` method, and a `printVersions()` method. 

In the `main.ts`, I showcase some examples of creating tracks, updating tracks, and retrieving
the desired versions of those tracks. 

After looking through various design patterns, it didn't seem that they were all too necessary
for a somewhat simple program like this. If anything, the 'facade' design pattern seemed to be
closest to my implementation, as I tried to hide some of the complexities of the system
and provide an easy-to-use interface for the client.
