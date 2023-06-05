import time

def number_test (quantity):
    results = []
    test_number = 1
    while len(results) < quantity:
        prime_number = True
        for i in range(2, test_number):
            if test_number % i == 0:
                prime_number = False
                break
        if prime_number == True:
            results.append(test_number)
        test_number += 1
    return results

number = int(input("Введите число: "))
start = time.time()
number_test(number)
end = time.time() - start
print(end)