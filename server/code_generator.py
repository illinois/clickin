import random
import string

def generate_code(num_of_chars):
    code = ""

    while not is_valid(code.lower()):
        code = generate_random_elems(num_of_chars)

    return code

def generate_random_elems(num_of_chars):
    POSSIBLE_CHARS = string.ascii_letters + string.digits
    code = ""

    for x in range(num_of_chars):
        random_elem = random.choice(POSSIBLE_CHARS)
        code += random_elem

    return code

def is_valid(code):
    bad_words_file = open('bad_words.txt', 'r')
    bad_words_list = bad_words_file.read().split(' ')
    return code or not bad_words_list in code