myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter((nums)=>(nums>4));

//console.log(newNum);

const personalInfo = [
    {
        "name": "sangyan",
        "level": "undergrad",
        "sem": 1
    },
    {
        "name": "samak",
        "level": "undergrad",
        "sem": 3
    },
    {
        "name": "Atal",
        "level": "undergrad",
        "sem": 2
    }

]

const moreInfo = personalInfo.filter((info)=>(info.sem >=2));
console.log(moreInfo);