const QUESTIONS = [
    {
        question: "What does reverse() return?",
        answers: [
            "A string that is the reverse of the input array",
            "A new array that is the reverse of the input array",
            "The same array with all of its elements in the reverse order",
            "A boolean"
        ],
        correct: "The same array with all of its elements in the reverse order",
        definition: "The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first."
    },
    {
        question:"What does push() return?",
        answers: [
            "An array with one more element than it had before",
            "A string of the element that was added to the array",
            "The new length of the array",
            "Two new arrays"
        ],
        correct:"The new length of the array",
        definition: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
        question:"What method would you use to add an element to the beginning of an array?",
        answers: [
            "add()",
            "unshift()",
            "shift()",
            "push()"
        ],
        correct:"unshift()",
        definition: "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array."
    },
    {
        question:"What method would you use if you had an array of numbers and you wanted a new array of each of those numbers times 3?<br>Example: <code>arr = [1,2,3,4]<br>newArr = [3,6,9,12]</code>",
        answers: [
            "forEach()",
            "every()",
            "sort()",
            "map()"
        ],
        correct:"map()",
        definition: "The map() method creates a new array with the results of calling a provided function on every element in the calling array."
    },
    {
        question:"What does every() return?",
        answers: [
            "The same array that has had every element mutated by a function",
            "A boolean",
            "The length of the array",
            "A new array that's an exact copy of the original array"
        ],
        correct:"A boolean",
        definition: "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value."
    },
    {
        question:"What would I use if I wanted a new array that's consists of a portion of an existing array?",
        answers: [
            "slice()",
            "splice()",
            "filter()",
            "from()"
        ],
        correct:"slice()",
        definition:"The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified."
    },
    {
        question:"<code>let arr1 = [19,65,35,6,4,78]<br>let output = arr1.find(function(element){<br> &nbsp return element < 30;<br>});<br>console.log(output);</code><br>What is the output for this code snippet?",
        answers: [
            "3",
            "19",
            "[19,6,4]",
            "[19]"
        ],
        correct:"19",
        definition:"The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned."
    },
    {
        question:"<code>let arr = [1,2,3,4];<br>console.log(arr.fill(5,2,4);</code>What output would you expect from this code?",
        answers: [
            "[5,2,4,4]",
            "[1,5,2,4]",
            "[1,2,3,4]",
            "[1,2,5,5]"
        ],
        correct:"[1,2,5,5]",
        definition:"The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array."
    }
]