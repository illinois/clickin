import random

bad_words_file = open('utils/bad_words.txt', 'r')
BAD_WORDS_LIST = bad_words_file.read().split('\n')
bad_words_file.close()

BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

def generate_code(n):
    while True:
        code = ''.join([random.choice(BASE58) for _ in range(n)])
        if is_clean(code):
            return code

def is_clean(code):
    for bad_word in BAD_WORDS_LIST:
        if bad_word in code.lower():
            return False
    return True
