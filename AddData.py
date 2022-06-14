def read_file(txt_file_name: str, js_file_name: str, js_obj_name: str) -> None:
    """
    Read the text file containing our pasted scoredle data.
    Currently this script overwrites the JS files everytime
    """
    infile = open(txt_file_name, "r")
    outfile = open(js_file_name, "w")
    
    eof = True
    scoredles = []
    while eof:
        scoredle = get_wordle_data(infile)
        scoredles.append(scoredle)

        # this should read the empty line between each scoredle
        # or if it is end of file, terminate
        eof = infile.readline()
    
    scoredles_str_inner = str(scoredles).replace("'", "\"")
    scoredles_str = js_obj_name + " = '" + str(scoredles_str_inner) + "'"
    outfile.writelines(scoredles_str)

    infile.close()
    outfile.close()


def get_wordle_data(infile) -> dict:
    """
    Parse and return a single day's wordle data as a dictionary
    """
    scoredle = {}

    metadata_line = infile.readline().split()

    # parse the wordle ID
    WORDLE_ID_IDX = 1
    wordle_id = metadata_line[WORDLE_ID_IDX]
    scoredle[wordle_id] = {}

    # parse the score from the first scoredle line
    SCORE_IDX = 2
    score = int(metadata_line[SCORE_IDX][0])

    # hard mode?
    scoredle[wordle_id]["hard_mode"] = "true" if metadata_line[SCORE_IDX][-1] == "*" else "false"

    # discard empty line and all possible guesses line
    infile.readline()
    infile.readline()

    # read the guesses
    GUESS_IDX = 1
    guesses = []
    for i in range(score):
        guess = infile.readline().split()[GUESS_IDX].lower()
        guess = guess.replace("|", "")
        guesses.append(guess)

    scoredle[wordle_id]["score"] = score
    scoredle[wordle_id]["guesses"] = guesses

    return scoredle

def main():
    read_file("data/txt/skyler.txt", "data/js/skyler.js", "skylersData")
    read_file("data/txt/thuy.txt", "data/js/thuy.js", "thuysData")

if __name__ == "__main__":
    main()