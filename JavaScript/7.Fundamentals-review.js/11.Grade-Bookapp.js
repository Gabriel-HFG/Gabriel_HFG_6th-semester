function getAverage(arrScores) {
  let sum = 0;
    for (let char of arrScores) {
      sum = sum + char
  }
  return sum/arrScores.length
}

function getGrade(studentScore) {
  let grades = { 90:	"A",
          80:	"B",
          70:	"C",
          60:	"D",}

  if (studentScore === 100) {
    return "A+";
  } if (studentScore < 60) {
    return "F";
    }else {
    let roundedScore = (Math.floor(studentScore / 10)) * 10;
    return grades[roundedScore]
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) === "F") {
    return false
  } else {
    return true
  }
}

function studentMsg(arrayOfScores,studentScore) {
  if (hasPassingGrade(studentScore) === true) {
  return `Class average: ${getAverage(arrayOfScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
} else {
  return `Class average: ${getAverage(arrayOfScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))
