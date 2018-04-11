function graduates (students) {
    // Code disini
    // Code disini
    let classGroup = [];
    let classObj   = {};
    let isPush = true; // push data siswa yg lulus

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
                classObj[students[i].class] = [];
            }
        }
        else{
            classGroup.push(students[i].class);
            classObj[students[i].class] = [];
        }    

        isGroup = true; // reset
    }

    //console.log(students[i].name);
    for(j=0;j<=classGroup.length-1;j++)
    {   
        for(i=0;i<=students.length-1;i++)
        {
            if(students[i].score > 75)
            {
                for(k=0;k<=classObj[students[i].class].length-1;k++)
                {
                    if(classObj[students[i].class][k].name == students[i].name)
                    {
                        isPush = false;
                        //console.log(students[i].name+" sudah ada ");
                    }
                }

                if(isPush)
                {
                    classObj[students[i].class].push({
                        name:students[i].name,
                        score:students[i].score
                    });
                }
        
                isPush = true; // reset
            }

           
        }

       
    }

    return classObj;
}
  
  console.log(graduates([
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

  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
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
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}