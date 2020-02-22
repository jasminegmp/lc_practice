# initializing a list
myList = []
ages = [1,24,2,12,53,23,57,2,34,2,12]
list1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
list2 = [1,2,3,4]
#print(myList, ages)

# access last item in list
last = ages[-1]
#print(last)

# Slice items in list - NOTE: start index is INCLUDED, end item is EXCLUDED
print(ages[2:4]) #2,12
print(ages[1:10:2]) #last value is optional stepper 24, 12, 23, 2, 2
print(ages[:4]) #1,24,2,12

# LIST METHODS

# append() - add item to list
myList.append('hello') #['hello']
print(myList)

# del - remove items from list based off index
del myList[0] #[]
print(myList)

#remove - remove items based on value of item
temp_list1 = list1[:] #['a', 'b', 'c', 'd', 'e', 'f', 'g']
temp_list1.remove('c')  #['a', 'b', 'd', 'e', 'f', 'g']
print(temp_list1)

# extend() - combine 2 lists
temp_list1 = list1[:] # <<<<<------- must do this or it will modify list1
temp_list1.extend(list2) # ['a', 'b', 'c', 'd', 'e', 'f', 'g', 1, 2, 3, 4]
print temp_list1

# in - checks if an item is in list
print(1 in list1) #false
print(1 in list2) #true

# insert() - adds item to a list at index
temp_list1 = list1[:]
temp_list1.insert(2, 'wee') #['a', 'b', 'wee', 'c', 'd', 'e', 'f', 'g']
print(temp_list1)
˜
# len() - get length
print(len(list1)) #7

# pop - defaults to popping off last item
temp_list1 = list1[:] #['a', 'b', 'c', 'd', 'e', 'f', 'g']
print(temp_list1.pop(), temp_list1) # 'g', ['a', 'b', 'c', 'd', 'e', 'f']
print(temp_list1.pop(1), temp_list1) # 'b', ['a', 'c', 'd', 'e', 'f']

# reverse
temp_list1 = list1[:] #['a', 'b', 'c', 'd', 'e', 'f', 'g']
temp_list1.reverse() #['g', 'f', 'e', 'd', 'c', 'b', 'a']
print(temp_list1)

# sort - sorts original list unless you create a copy
temp_list1 = ages[:] # [1,24,2,12,53,23,57,2,34,2,12]
temp_list1.sort() #[1, 2, 2, 2, 12, 12, 23, 24, 34, 53, 57]
print(temp_list1)

#sorted - sorts without sorting original list
newAges = sorted(ages) #[1, 2, 2, 2, 12, 12, 23, 24, 34, 53, 57]
print(newAges)

#### OPERATORS

# + - concatenates and adds it to end
templist2 = list2[:] # [1,2,3,4]
print(templist2 + [1,2]) #[1, 2, 3, 4, 1, 2]

# * - duplicates and adds it to end
templist2  = list2[:] # [1,2,3,4]
print(templist2 * 3) # [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]

#