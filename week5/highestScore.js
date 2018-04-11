function highestScore (students) {
  // Code disini
  let classGroup = [];
  let classObj   = {};

  let hscore = 0;
  let name = "";

  isGroup = true;

  for(i=0;i<=students.length-1;i++)
  {
    if(classGroup.length > 0)
    {
        for(j=0;j<=classGroup.length;j++)
        {
            if(students[i].class == classGroup[j])
            {
                isGroup = false;
            }
        }

        if(isGroup)
        {
            classGroup.push(students[i].class);
            classObj[students[i].class] = {name:"",score:0};
        }
    }
    else{
        classGroup.push(students[i].class);
        classObj[students[i].class] = {name:"",score:0};
    }    

    isGroup = true; // reset
  }

    //console.log(students[i].name);
    for(j=0;j<=classGroup.length-1;j++)
    {
        
        for(i=0;i<=students.length-1;i++)
        {
            if(students[i].class == classGroup[j])
            {
                // console.log("hscore awal : "+hscore+" & "+" score : "+students[i].score);
                if(hscore < students[i].score)
                {
                  
                    classObj[students[i].class] = {
                        name:students[i].name,
                        score:students[i].score
                    };
                    hscore = students[i].score;
                }
            }
        }
        hscore = 0;
        // /console.log(" done hscore = "+hscore);
      
    }

 return classObj;

}

// TEST CASE
/* console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }*/


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}