const actionTaken = {
  label: 'Action Taken',
  options: [
    { id: '1', name: 'Loan Originated' },
    { id: '2', name: 'Application approved but not accepted' },
    { id: '3', name: 'Application denied' },
    { id: '4', name: 'Application withdrawn by applicant' },
    { id: '5', name: 'File closed for incompleteness' },
    { id: '6', name: 'Purchased loan' },
    { id: '7', name: 'Preapproval request denied' },
    { id: '8', name: 'Preapproval request approved but not accepted' }
  ]
}


const races = [
  'American Indian or Alaska Native',
  'Asian',
  'Black Or African American',
  'Native Hawaiian Or Other Pacific Islander',
  'White',
  '2 or more minority races',
  'Joint',
  'Free Form Text Only',
  'Race Not Available'
]

const race = {
  label: 'Race',
  options: races.map(race => {
    return {
      id: encodeURIComponent(race),
      name: race
    }
  })
}

export default {
  actionTaken,
  race
}
