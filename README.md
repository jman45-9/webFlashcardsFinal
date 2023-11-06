# Web Flashcard Tools

This project serves as an alternative to paid flashcard tools such as creating tests(Can not name specific sites for legal reasons)

## Instructions for use

### Creating Sets

Sets must be created in plain text documents(.txt among others). Front and back of
cards must be separated by one of three separators. These are:  
tab(\\t), pipe(|), semicolon(;), colon(:), comma(,), space( )  
Each card must be placed on it's own line.

A tag can be added at the top of the file to define a separator for the file in
the format of:

```txt
#separator:<name-of-separator>
```

If this is not done the files will be separated by the first valid separator
found on each line.

If you want to have a line ignored start the line with '#' invalid lines stating
with a different character will trigger a error.

### Uploading Files

On every feature page the top of the page will contain a button to submit your set.
If a set has bad formatting a large red error will appear. *THIS ERROR WILL NOT
DISAPPEAR UPON UPLOADING A VALID SET.* When a valid set is uploaded a button to
start the feature will appear. *THIS BUTTON WILL NOT GO AWAY UPON UPLOADING A
INVALID SET*. Due to the errors and continue buttons not disappearing, it is
recommended to reload the page in between uploading a new set.

### Mass Study (Standard Flashcards)

Mass Study works like regular index card flashcards. After uploading a set a next
card button will appear. The front of the card will appear with a flip card button.
This repeats for the entire set.