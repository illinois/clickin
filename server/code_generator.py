import random
import string

bad_words_file = open('server/bad_words.txt', 'r')
BAD_WORDS_LIST = bad_words_file.read().split('\n')
bad_words_file.close()

def generate_code(num_of_chars):
    """ 
    Generates a valid code

    Re-generates random elements until code is valid
  
    Parameters: 
    num_of_chars (int): the intended length of code
  
    Returns: 
    String: A valid code of length num_of_chars
  
    """
    code = ''

    while not is_valid(code):
        code = generate_random_elems(num_of_chars)

    return code

def generate_random_elems(num_of_chars):
    """ 
    Generates a string of random elements

    The random elements are pulled from a pool of all letters both upper and lower and all digits
  
    Parameters: 
    num_of_chars (int): The amount of chars to be generated
  
    Returns: 
    String: A string of random elements of length num_of_chars
  
    """
    POSSIBLE_CHARS = string.ascii_letters + string.digits
    code = ''

    for x in range(num_of_chars):
        random_elem = random.choice(POSSIBLE_CHARS)
        code += random_elem

    return code

def is_valid(code):
    """ 
    Checks validity of given code

    Validity checks that code is not an empty string and that it doesn't contain any illegal words
  
    Parameters: 
    code (string): The string to be verified
  
    Returns: 
    boolean: Whether the code is valid
  
    """
    if not "".join(code.split()):
        return False

    for bad_word in BAD_WORDS_LIST:
        if bad_word in code.lower():
            return False

    return True