import unittest
from utils.code_generator import *

class TestCodeGenerator(unittest.TestCase):
  def test_is_clean(self):
    self.assertTrue(is_clean('clean'))
    self.assertTrue(is_clean('1234'))
    self.assertFalse(is_clean('ass'))
    self.assertFalse(is_clean('aSS1'))

  def test_generate_returns_correct_length(self):
    for n in range(1, 5):
      code = generate_code(n)
      self.assertEqual(len(code), n)

  def test_generate_returns_clean_code(self):
    code = generate_code(4)
    self.assertTrue(is_clean(code))
