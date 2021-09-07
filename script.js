
const topNStudentsAttendees = (students, attendees, N) => {
	//TODO
    const occurenceObj = attendees.flat().reduce((a, v) => (a[v] = (a[v] || 0) + 1, a), {});
    return Object.keys(occurenceObj)
    .filter(key => students.includes(key))
    .sort((a,b) => occurenceObj[b] - occurenceObj[a])
    .slice(0,N);
}
students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas']

attendees = [['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'], 
 ['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'], 
 ['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'], 
            ['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal','Nitzan']],
N = 3	
console.log(topNStudentsAttendees(students,attendees,N));

