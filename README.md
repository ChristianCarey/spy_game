# spy game
A browser party game.

### How to play:
#### Setup:
After choosing the number of players, the first player should click "show," without letting other players see the screen. This will either reveal the name of a location, or it will say "you're the spy." Without revealing what was displayed, the current player then clicks "hide," and passes the devise to the player on his/her left. Repeat this until all players (except for the one spy) know the location. Play now begins, with players interacting with each other as if they were in the location they were shown.

#### Playing as the spy
 Obviously, the spy will not know the location, but the other players will not know who the spy is. The spy must try to infer from context clues what the locations is, so that they can blend in with the non-spies. At any point, the spy can guess the location, which ends the game. A correct guess means the spy wins, an incorrect guess means non-spies win. 

#### Playing as a non-spy
It is the non-spies' job to out the spy. Each player(including the spy) gets to make one accusation. This involves singling out one other player who may be the spy, and having the rest of the players vote. If everyone votes that the accused is the spy, the game ends. The accused reveals his/her identity, and if they are the spy, they lose, otherwise, the spy wins. If all non-spies make accusations and no one is selected, the spy wins.

### Customization
Locations can easily be added or removed. They are hard-coded in the "locations" array at the top of the app.js file. Locations in the game are randomly selected from this array.