/*Grade Assigner
Given an array of marks, loop through and assign letter grades based on score (A, B, C...). */

const marksArrays = [90, 60, 56, 70, 30, 2];

for(let i=0; i<marksArrays.length; i++){
    const mark = marksArrays[i];



    if (mark >= 70) {
        console.log(`${mark} -> A`);
    } else if (mark >= 60 && mark < 70) {
        console.log(`${mark} -> B`);
    } else if (mark >= 50 && mark < 60) {
        console.log(`${mark} -> C`);
    } else if (mark >= 40 && mark < 50) {
        console.log(`${mark} -> D`);
    } else {
        console.log(`${mark} ->F\n You failed`);
    }

}