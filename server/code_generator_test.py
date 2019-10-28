from code_generator import generate_code, generate_random_elems, is_valid
from random import randint
import pytest

@pytest.mark.parametrize(('code_input'), [(''), (' '), ('  ')])
def test_is_valid_returns_false_for_empty_input(code_input):
    assert is_valid(code_input) == False

@pytest.mark.parametrize(('code_input'), [('aSS'), ('ass'), ('12ass'), ('12Ass'), ('ass12'), ('Ass21')])
def test_is_valid_returns_false_for_invalid_input(code_input):
    assert is_valid(code_input) == False

@pytest.mark.parametrize(('code_input'), [('1'), ('541'), ('a'), ('abc'), ('A'), ('ABC'), ('10as13'), ('10asAFD13'), ('ASDas'), ('10AS13')])
def test_is_valid_returns_true_for_valid_input(code_input):
    assert is_valid(code_input) == True

@pytest.mark.parametrize(('code_length'), [(1), (4), (20)])
def test_generate_elems_returns_code_with_correct_length(code_length):
    code = generate_random_elems(code_length)
    assert len(code) == code_length

def test_generate_code_returns_valid_code():
    code_length = 4
    code = generate_code(code_length)
    assert is_valid(code)