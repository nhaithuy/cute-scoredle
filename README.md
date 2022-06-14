# cute-scoredle
I'm bored let's make something cute.

## TODOS
- [ ] Handle mismatching datapoints (_e.g._ if one of the players miss a day, this script will display incorrect stats)

## Instructions on updating the text file with scoredle data
1. Go to `data/txt/YOUR_NAME.txt`.
2. Paste the Discord scoredle at the end of the file. 
   * Note that there must be **exactly** 1 blank line between each scoredle.
   * There must not be any empty line at the end of the file (see sample file below).
3. Save the file.
4. Run the Python script as follows to update the JS data files
```
$ python AddData.py
```

### Sample `.txt` file
This file below is a valid file.
```
Scoredle 357 5/6*

12,974
🟨⬛⬛⬛🟩 ||SPACE|| (93)
⬛🟩⬛🟩🟩 ||MORSE|| (20)
⬛🟩⬛🟩🟩 ||HOUSE|| (13)
⬛🟩🟩🟩🟩 ||LOOSE|| (4)
🟩🟩🟩🟩🟩 ||GOOSE||

Scoredle 358 4/6*

12,974
⬛⬛🟨⬛⬛ ||SPACE|| (1,142)
⬛🟨🟨🟨⬛ ||BATON|| (28)
🟨🟩🟩🟨🟩 ||ALOFT|| (1)
🟩🟩🟩🟩🟩 ||FLOAT||
```

This file below is an **invalid** file. **There must be an empty line between each scoredle entry.**
```
Scoredle 357 5/6*

12,974
🟨⬛⬛⬛🟩 ||SPACE|| (93)
⬛🟩⬛🟩🟩 ||MORSE|| (20)
⬛🟩⬛🟩🟩 ||HOUSE|| (13)
⬛🟩🟩🟩🟩 ||LOOSE|| (4)
🟩🟩🟩🟩🟩 ||GOOSE||
Scoredle 358 4/6*

12,974
⬛⬛🟨⬛⬛ ||SPACE|| (1,142)
⬛🟨🟨🟨⬛ ||BATON|| (28)
🟨🟩🟩🟨🟩 ||ALOFT|| (1)
🟩🟩🟩🟩🟩 ||FLOAT||
```

This file below is an **invalid** file. **There cannot be an empty line at the end of the file.**
```
Scoredle 357 5/6*

12,974
🟨⬛⬛⬛🟩 ||SPACE|| (93)
⬛🟩⬛🟩🟩 ||MORSE|| (20)
⬛🟩⬛🟩🟩 ||HOUSE|| (13)
⬛🟩🟩🟩🟩 ||LOOSE|| (4)
🟩🟩🟩🟩🟩 ||GOOSE||
Scoredle 358 4/6*

12,974
⬛⬛🟨⬛⬛ ||SPACE|| (1,142)
⬛🟨🟨🟨⬛ ||BATON|| (28)
🟨🟩🟩🟨🟩 ||ALOFT|| (1)
🟩🟩🟩🟩🟩 ||FLOAT||

```

