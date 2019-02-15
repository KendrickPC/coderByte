def LongestWord(sen): 
    # Removing non alphanumeric characters from the string.
    # Using translate function which deletes the specified characters. 
    sen = sen.translate(None, "!@#$%^&*()_+=[]:;'<>?/|`~,.")

    # Separate the string into a list of words.
    arr = sen.split(" ")
    # code goes here 
    return max(arr, key=len)

print LongestWord("The longest word in this sentence is kendogiscodingchallenges!")
