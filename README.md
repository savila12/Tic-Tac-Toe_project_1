# Tic-Tac-Toe_project_1
## HOW TO:
**When the screen loads up it will ask player 1 to choose X or O by draging the piece to the desired square.**
**It will notify who's turn it will be and also removing the piece that went.**
**A winner is determined by having the same pieces consecutively placed in a row/column/diagonally.**
**A reset button will pop up to restart the game and the winner of the previous rounds goes first.**
**HAVE FUN!!**

The game is playabe on any desktop or laptop with a browser and internet connection.
You can view the game on a phone but no touch screen feature has been implemented as of 3/19/2021


**Use the following link to play the game:** 
https://savila12.github.io/Tic-Tac-Toe_project_1/

Code implementation:
HTML, CSS, Javascript

![IMG_8512](https://user-images.githubusercontent.com/41445975/111794017-d03a8c00-8893-11eb-938e-2358b01fcc26.jpg)


First thing I wanted to do was draw a wireframe (picture above) of how I wanted my web game to look like.
Then decided how I wanted the user to implement the pieces to the game, which I chose a drag and drop feature.
A notification bar on top will let the user/s know who's turn it is and the winner of the outcome.
I needed to make sure that when one of the pieces goes it can't go again until the other piece goes.
When there is a winner or tie a reset button pops up to reset the game.
Have a Navigation bar that will allow them to choose a different playing piece

To find a winner I created an array of arrays for the squares and implemented conditional if else statements to determine which row/column had the same pieces. A reset button will pop up each time there's a winner or tie.

My favorite feature of the game is the drag and drop. To implement it, I had to add special attributes to the elements in HTML. The X and O had a dragstart and dragable attribute and the squares had a drop attribute. In javascript I added methods that that would, once I click on an X or an O, copy the inner text of X/O div.That copied text is what's being dragged. Once I release the copied text to a desired square it copies that text to the inner text of the square. The biggest struggle was figuring out once the piece is placed in the square is cannot be replaced by the other piece. 

For furture tweaks and add-ons I want to add a score counter to tally the wins and also other pieces to the users can choose a piecs of choice. I want to add a nav bar and add other images so the user can choose a different piece.



