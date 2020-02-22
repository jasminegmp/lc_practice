'''
Multiple variable definition
'''

userAge,userName = 30, 'Jello'
print(userName)

'''
Naming - 
Cannot start with a number
Case sensitive
'''
username = 'Sunny'
print(username, userName)

'''
Operators
+, -, *, /, //, %, **
'''
x = 5
y = 2
print(x+y) # 7
print(x-y) # 3
print(x*y) # 10
print(x / y) #2.5
print(x//y) # floor division, 2
print(x % y) # 1
print (x ** y) # 25

'''
Data types
'''

# Integers
myVar = 10

# Float
myFloat = 82.01

# String
myString = 'Hello'
myString2 = "Hello"
myString3 = myString + myString2
print(myString3) #returns 'HelloHello'

'''
Formatting Strings
'''

message = "The price of a %s is %d USD" %('pizza', 5) # The price of a pizza is 5 USD
print(message)

message = "The price of a {0:s} is {1:d} USD".format('salad', 10) # The price of a salad is 10 USD
print(message)
