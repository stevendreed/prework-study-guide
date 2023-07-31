
// script.js

var topicOptions = ["HTML", "CSS", "Git", "JavaScript"];

function listTopics(inputArray)
{
    for (let i = 0; i < inputArray.length; ++i)
    {
        if(inputArray[i]) 
        {
            console.log(inputArray[i]);
        }
    }
}

function selectTopic (inputArray)
{
    let topic = inputArray[Math.floor(Math.random() * inputArray.length)];
    console.log(`Let's study ${topic}!`);
}

listTopics(topicOptions);

selectTopic(topicOptions);

