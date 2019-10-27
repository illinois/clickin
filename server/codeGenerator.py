import random
import string

def generateCode(numOfChars):
    urlBase = "click.in/"
    code = ""

    while(not isValid(code.lower())):
        code = generateRandomElems(numOfChars)

    return code

def generateRandomElems(numOfChars):
    POSSIBLE_CHARS = string.ascii_letters + string.digits
    code = ""

    for x in range(numOfChars):
        randomElem = random.choice(POSSIBLE_CHARS)
        code += randomElem

    return code

def isValid(code):
    bad_words_file = open('bad_words.txt', 'r')
    bad_words_list = bad_words_file.read().split(' ')
    return code or not bad_words_list in code