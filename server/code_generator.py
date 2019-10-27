import random
import string

bad_words_file = open('clickin/server/bad_words.txt', 'r')
BAD_WORDS_LIST = bad_words_file.read().split(' ')
bad_words_file.close()

def generate_code(num_of_chars):
    code = ''

    while not is_valid(code.lower()):
        code = generate_random_elems(num_of_chars)

    return code

def generate_random_elems(num_of_chars):
    POSSIBLE_CHARS = string.ascii_letters + string.digits
    code = ''

    for x in range(num_of_chars):
        random_elem = random.choice(POSSIBLE_CHARS)
        code += random_elem

    return code

def is_valid(code):
    return code or not BAD_WORDS_LIST in code