# Have the function LetterChanges(str) take the str parameter being passed and
# modify it using the following algorithm. Replace every letter in the string
# with the letter following it in the alphabet (ie. c becomes d, z becomes a).
# Then capitalize every vowel in this new string (a, e, i, o, u) and finally
# return this modified string.

# Basically, it's a Caesar Cypher shift of 1 and capitalize every vowel.


def LetterChanges(str): 

  # Our new string begins with modified characters.
  newString = ""

  # Begin by looping through each character in the string.
  for char in str:
    # Check if the current character is an alphabetic character.
    if char.isalpha():
      # Check if character is z.
      if char.lower() == 'z':
        char = 'a'
      # If character is an alphabetic character, add 1 to its ASCII 
      # value by using the built-in ord function, then convert back
      # to the character.
      else:
        char = chr(ord(char) + 1)
    # If new character is a vowel then capitalize it.
    if char in 'aeiou':
      char = char.upper()

    # Add this modified character to the new string.
    newString = newString + char

  return newString

print LetterChanges("fun times!")
