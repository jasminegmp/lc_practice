const HiCal = function(schedule){

    // first sort by start time
    schedule.sort((a,b) => (a.startTime-b.startTime));

    let mergedSchedule = [schedule[0]];

    // loop through schedule array
    for (let i = 1; i < schedule.length ; i++ ){

        let currentMeeting = schedule[i];
        let mergedMeeting = mergedSchedule[mergedSchedule.length-1];
        //console.log("merged", mergedMeeting)

        // check to see if there is overlap
        if (mergedMeeting.endTime >= currentMeeting.startTime){
            //console.log("overlapped")
            mergedMeeting.endTime = Math.max(mergedMeeting.endTime, currentMeeting.endTime);
        }
        else{
            mergedSchedule.push(schedule[i])
        }
        prev = schedule[i];
       // console.log(mergedSchedule);

    }
    return mergedSchedule;


}

output =  HiCal(   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ])

console.log(output)