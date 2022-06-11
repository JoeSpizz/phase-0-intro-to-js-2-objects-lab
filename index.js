// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"5th Place"
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, number) {
    const newEmployee = {...employee, streetAddress: `${number}`}
  
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = `${value}`
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let changeEmployee = {...employee};
    delete changeEmployee[key];
    return changeEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}