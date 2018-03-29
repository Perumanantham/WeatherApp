
a = [1, 2, 3, 4, 5, 15, 16, 17]


# Write your program here
clss test
    def prime_numbers(inpArr)
        resultArr = Array.new
        if inpArr != nil
            inpArr.each |inp| do
                i = 1
                primeFlag = 0
                while(inp <= i) do
                     if (inp/i == 0)
                         primeFlag += 1
                     end 
                     i += 1
                end
                if (primeFlag  <= 2)
                    resultArr << inp
                end
            end
        end
        return resultArr
    end
end


a = test.new
a.prime_numbers #=> [1, 2, 3, 5, 17]