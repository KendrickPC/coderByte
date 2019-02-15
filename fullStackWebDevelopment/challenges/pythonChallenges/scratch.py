def testingBuiltInchrFunction(str):
  newString = ""

  for char in str:
    char = chr(ord(char)+ 1)

    newString = newString + char

    return newString

print testingBuiltInchrFunction("Caesar Cypher...")
