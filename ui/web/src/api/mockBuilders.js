const buildersById = {
  '0': {
    owner: 'Michael Moore',
    companyName: 'Moore Home For Less, Inc.',
    type: 'Residential',
    founded: '1998',
    rating: '94%',
    locations: '42701, 42748',
    id: 0,
    pricePerSquareFoot: '$137 - $162',
    unitsBuilt: 660,
    avgCompletionTime: '3 - 6 months'
  },
  '1': {
    owner: 'Arthur London',
    companyName: 'London Bridge, LLC.',
    type: 'Commercial',
    founded: '1987',
    rating: '92%',
    locations: '42701, 42748',
    id: 1,
    pricePerSquareFoot: '$81 - $106',
    unitsBuilt: 749,
    avgCompletionTime: '3 - 6 months'
  },
  '2': {
    owner: 'Jeff Hilshire',
    companyName: 'Hilshire Construction',
    type: 'Residential',
    founded: '2001',
    rating: '90%',
    locations: '42701, 42748',
    id: 2,
    pricePerSquareFoot: '$103 - $128',
    unitsBuilt: 657,
    avgCompletionTime: '3 - 6 months'
  },
  '3': {
    owner: 'Bobby Jones',
    companyName: 'BJ’s Homes, Inc.',
    type: 'Residential',
    founded: '2004',
    rating: '93%',
    locations: '42701, 42740',
    id: 3,
    pricePerSquareFoot: '$128 - $153',
    unitsBuilt: 99,
    avgCompletionTime: '5 - 8 months'
  },
  '4': {
    owner: 'Larry Finesse',
    companyName: 'Smooth Operators',
    type: 'Commercial',
    founded: '2008',
    rating: '95%',
    locations: '42701, 42740',
    id: 4,
    pricePerSquareFoot: '$158 - $183',
    unitsBuilt: 123,
    avgCompletionTime: '4 - 7 months'
  },
  '5': {
    owner: 'Dave Bronder',
    companyName: 'Steel Erectors',
    type: 'Residential',
    founded: '2009',
    rating: '96%',
    locations: '42701, 42740',
    id: 5,
    pricePerSquareFoot: '$79 - $104',
    unitsBuilt: 21,
    avgCompletionTime: '3 - 6 months'
  },
  '6': {
    owner: 'Phil Hustle',
    companyName: 'Quality Homes, LLC.',
    type: 'Residential',
    founded: '2008',
    rating: '93%',
    locations: '42701, 40160',
    id: 6,
    pricePerSquareFoot: '$144 - $169',
    unitsBuilt: 296,
    avgCompletionTime: '8 - 11 months'
  },
  '7': {
    owner: 'Mike Mendu',
    companyName: 'High Rise Ceilings',
    type: 'Residential',
    founded: '2004',
    rating: '91%',
    locations: '42701, 40160',
    id: 7,
    pricePerSquareFoot: '$140 - $165',
    unitsBuilt: 832,
    avgCompletionTime: '4 - 7 months'
  },
  '8': {
    owner: 'Paul Smith',
    companyName: 'Smith Brothers, LLC',
    type: 'Commercial',
    founded: '1996',
    rating: '96%',
    locations: '42701, 40160',
    id: 8,
    pricePerSquareFoot: '$133 - $158',
    unitsBuilt: 886,
    avgCompletionTime: '4 - 7 months'
  },
  '9': {
    owner: 'Maggie Henry',
    companyName: 'M&M Homes, Inc.',
    type: 'Residential',
    founded: '1992',
    rating: '90%',
    locations: '42701, 40160',
    id: 9,
    pricePerSquareFoot: '$89 - $114',
    unitsBuilt: 881,
    avgCompletionTime: '7 - 10 months'
  },
  '10': {
    owner: 'Arnold Trent',
    companyName: 'Arnold’s Custom Homes',
    type: 'Residential',
    founded: '1998',
    rating: '85%',
    locations: '42701, 40160',
    id: 10,
    pricePerSquareFoot: '$121 - $146',
    unitsBuilt: 817,
    avgCompletionTime: '6 - 9 months'
  },
  '11': {
    owner: 'Carl Coolidge',
    companyName: 'Builder Pros',
    type: 'Residential',
    founded: '1990',
    rating: '82%',
    locations: '42701, 40175',
    id: 11,
    pricePerSquareFoot: '$98 - $123',
    unitsBuilt: 705,
    avgCompletionTime: '7 - 10 months'
  },
  '12': {
    owner: 'Steven South',
    companyName: 'NSEW, Inc.',
    type: 'Residential',
    founded: '1997',
    rating: '88%',
    locations: '42701, 40175',
    id: 12,
    pricePerSquareFoot: '$80 - $105',
    unitsBuilt: 286,
    avgCompletionTime: '8 - 11 months'
  },
  '13': {
    owner: 'Sam Quick',
    companyName: 'Quick Homes',
    type: 'Residential',
    founded: '1999',
    rating: '91%',
    locations: '42701, 40175',
    id: 13,
    pricePerSquareFoot: '$153 - $178',
    unitsBuilt: 520,
    avgCompletionTime: '4 - 7 months'
  },
  '14': {
    owner: 'Jon Jacobs',
    companyName: 'JJ’s TownHomes',
    type: 'Multi-Unit',
    founded: '2004',
    rating: '93%',
    locations: '42701, 40175',
    id: 14,
    pricePerSquareFoot: '$160 - $185',
    unitsBuilt: 257,
    avgCompletionTime: '7 - 10 months'
  },
  '15': {
    owner: 'Mick Michaels',
    companyName: '4 Seasons',
    type: ' Multi-Unit',
    founded: '2008',
    rating: '97%',
    locations: '42701, 40160',
    id: 15,
    pricePerSquareFoot: '$118 - $143',
    unitsBuilt: 550,
    avgCompletionTime: '6 - 9 months'
  },
  '16': {
    owner: 'Sam Samuels',
    companyName: 'Grove Homes',
    type: 'Residential',
    founded: '2014',
    rating: '95%',
    locations: '40175, 40160',
    id: 16,
    pricePerSquareFoot: '$101 - $126',
    unitsBuilt: 194,
    avgCompletionTime: '7 - 10 months'
  },
  '17': {
    owner: 'Barry White',
    companyName: 'Deluxe Duplos',
    type: 'Multi-Unit',
    founded: '2018',
    rating: '98%',
    locations: '42701, 40175',
    id: 17,
    pricePerSquareFoot: '$136 - $161',
    unitsBuilt: 957,
    avgCompletionTime: '8 - 11 months'
  },
  '18': {
    owner: 'Andy White',
    companyName: 'A&W Custom Homes',
    type: 'Residential',
    founded: '2000',
    rating: '90%',
    locations: '42701, 40175',
    id: 18,
    pricePerSquareFoot: '$166 - $191',
    unitsBuilt: 458,
    avgCompletionTime: '7 - 10 months'
  },
  '19': {
    owner: 'Josh Fentle',
    companyName: 'Hardin County Homes',
    type: 'Residential',
    founded: '1988',
    rating: '97%',
    locations: '42701, 40160',
    id: 19,
    pricePerSquareFoot: '$136 - $161',
    unitsBuilt: 802,
    avgCompletionTime: '3 - 6 months'
  },
  '20': {
    owner: 'Perry Finite',
    companyName: 'Contractor Services',
    type: 'Residential',
    founded: '1985',
    rating: '90%',
    locations: '42701, 40175',
    id: 20,
    pricePerSquareFoot: '$174 - $199',
    unitsBuilt: 394,
    avgCompletionTime: '8 - 11 months'
  },
  '21': {
    owner: 'Frank Thomas',
    companyName: 'High Pitch, Inc.',
    type: 'Residential',
    founded: '1998',
    rating: '90%',
    locations: '42701, 40160',
    id: 21,
    pricePerSquareFoot: '$77 - $102',
    unitsBuilt: 776,
    avgCompletionTime: '6 - 9 months'
  },
  '22': {
    owner: 'Alex Tringle',
    companyName: 'Homes by Alex',
    type: 'Residential',
    founded: '2010',
    rating: '98%',
    locations: '42701, 40160',
    id: 22,
    pricePerSquareFoot: '$126 - $151',
    unitsBuilt: 576,
    avgCompletionTime: '3 - 6 months'
  },
  '23': {
    owner: 'Zack McMann',
    companyName: 'Master Builders, Inc.',
    type: 'Commercial',
    founded: '2002',
    rating: '90%',
    locations: '42701, 42748',
    id: 23,
    pricePerSquareFoot: '$117 - $142',
    unitsBuilt: 481,
    avgCompletionTime: '6 - 9 months'
  }
}

function randomPricePerSquareFoot() {
  const start = 75 + Math.floor(Math.random() * 100)
  const end = start + 25
  return `$${start} - $${end}`
}

function randomNumberOfUnitsBuilt() {
  return 1 + Math.floor(Math.random() * 999)
}

function randomAvgCompletionTime() {
  const start = 3 + Math.floor(Math.random() * 6)
  const end = start + 3

  return `${start} - ${end} months`
}

const builders = Object.values(buildersById)

export { buildersById, builders }