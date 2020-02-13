'''
Built in string functions
'''

# To all caps or all lower
print("hey".upper()) #returns HEY
print("HEY".lower())

# count number of times a substring appears
print("heyheyhey".count('hey')) #returns 3

# returns true if string ends with specified suffix
print("probation".endswith("tion")) # returns true

# returns true if string starts with prefix
print("professional".startswith("pro")) #returns true

# returns index where first occurence of substring appears
print("jellington".find('ing')) # returns 4
print("jellington".find('able')) #returns -1
#print("jellington".index('able')) #returns ValueError

# returns true if alphanumeric
print("p".isalnum()) # returns True
print(" ".isalnum()) #returns False

# returns true if all alphabetic
print("p".isalpha()) # returns True
print("1".isalpha()) # returns False

# returns true if all alphabetic
print("1".isdigit()) # returns True
print("1 2".isdigit()) # returns False

# returns true if all lowercase
print("abc".islower()) #returns True
print("A".islower()) #returns False

# returns true if all uppercase
print("ABC".isupper()) #returns True
print("aBc".isupper()) #returns False

# returns true if there are only whitespace characters
print("   ".isspace()) #returns True
print(" d ".isspace()) #returns False

# returns true if string is a titlecased string
print("This Is A Titlecased String".istitle()) #returns True
print("This is not a titlecased string".istitle()) # returns false

# returns a string in which argument is joined by separator
sep = '+'
print(sep.join(['1','2','3'])) #outputs 1+2+3

# replace all occurences
print('This is a string'.replace('s','p')) #returns Thip ip a ptring
print('This is a string'.replace('s', 'p', 2)) #returns Thip ip a string

# returns a list of words in a string using seperator
print('This is a string'.split(' ')) #['This', 'is', 'a', 'string'
print('This is !a string'.split('!')) #['This is ', 'a string'

# returns a list of lines in string
print('This is the first line.\n This is the second line.').splitlines() #['This is the first line.', 'This is the second line']

# returns copy of string with leading and trailing characters removed
print('This is a string'.strip('s')) #returns "This is a string" because 's' is not a leading or trailing character in the entire string
print('Apple'.strip('A')); # reutrns 'pple'