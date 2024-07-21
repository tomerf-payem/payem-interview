// db.js

// In-memory database
let db = [
    {
        id: 1,
        name: 'Task 1',
        description: 'This is task 1',
        amount: 100,
        currency: 'USD',
        employee_name: 'John Doe',
        status: 'Pending',
        created_at: new Date('2024-07-19T08:30:00Z'),
        updated_at: null,
        approved_amount: 90
    },
    {
        id: 2,
        name: 'Task 2',
        description: 'This is task 2',
        amount: 150,
        currency: 'EUR',
        employee_name: 'Jane Smith',
        status: 'Approved',
        created_at: new Date('2024-07-18T10:15:00Z'),
        updated_at: new Date('2024-07-20T14:20:00Z'),
        approved_amount: 140
    },
    {
        id: 3,
        name: 'Task 3',
        description: 'This is task 3',
        amount: 80,
        currency: 'USD',
        employee_name: 'Alice Johnson',
        status: 'Pending',
        created_at: new Date('2024-07-17T12:45:00Z'),
        updated_at: null,
        approved_amount: 75
    },
    {
        id: 4,
        name: 'Task 4',
        description: 'This is task 4',
        amount: 120,
        currency: 'EUR',
        employee_name: 'Bob Brown',
        status: 'Approved',
        created_at: new Date('2024-07-16T09:00:00Z'),
        updated_at: new Date('2024-07-18T11:30:00Z'),
        approved_amount: 110
    },
    {
        id: 5,
        name: 'Task 5',
        description: 'This is task 5',
        amount: 200,
        currency: 'USD',
        employee_name: 'Eve Green',
        status: 'Pending',
        created_at: new Date('2024-07-15T14:20:00Z'),
        updated_at: null,
        approved_amount: 180
    },
    {
        id: 6,
        name: 'Task 6',
        description: 'This is task 6',
        amount: 90,
        currency: 'EUR',
        employee_name: 'Chris White',
        status: 'Approved',
        created_at: new Date('2024-07-14T11:10:00Z'),
        updated_at: new Date('2024-07-17T16:45:00Z'),
        approved_amount: 85
    },
    {
        id: 7,
        name: 'Task 7',
        description: 'This is task 7',
        amount: 110,
        currency: 'USD',
        employee_name: 'Grace Black',
        status: 'Pending',
        created_at: new Date('2024-07-13T09:30:00Z'),
        updated_at: null,
        approved_amount: 105
    },
    {
        id: 8,
        name: 'Task 8',
        description: 'This is task 8',
        amount: 180,
        currency: 'EUR',
        employee_name: 'David Gray',
        status: 'Approved',
        created_at: new Date('2024-07-12T13:00:00Z'),
        updated_at: new Date('2024-07-15T17:00:00Z'),
        approved_amount: 170
    },
    {
        id: 9,
        name: 'Task 9',
        description: 'This is task 9',
        amount: 95,
        currency: 'USD',
        employee_name: 'Emma Brown',
        status: 'Pending',
        created_at: new Date('2024-07-11T16:45:00Z'),
        updated_at: null,
        approved_amount: 90
    },
    {
        id: 10,
        name: 'Task 10',
        description: 'This is task 10',
        amount: 130,
        currency: 'EUR',
        employee_name: 'Frank Johnson',
        status: 'Approved',
        created_at: new Date('2024-07-10T08:00:00Z'),
        updated_at: new Date('2024-07-13T10:30:00Z'),
        approved_amount: 120
    }
];

let nextId = 11;

module.exports = {db, nextId};
