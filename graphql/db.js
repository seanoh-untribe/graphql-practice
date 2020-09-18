export const people = [
    {   
        id: 1,
        school: "ucalgary",
        name: "sean"
    },
    {
        id: 2,
        school: "utoronto",
        name: "john"
    },
    {
        id: 3,
        school: "ubc",
        name: "tom"
    }
];

export const getById = id =>{
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

export const addPerson = (name, school) => {
    const newPerson = {
        id: `${people.length+1}`,
        name,
        school
    }
    people.push(newPerson);
    return newPerson;
}