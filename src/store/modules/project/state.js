/* ============
 * State of the account module
 * ============
 *
 * The initial state of the account module.
 */

const Charlatan = require('charlatan');
const moment = require('moment');


Charlatan.setLocale('en');

const fakeDeals = [];
const processSteps = ['Prospect', 'Initial Analysis', 'Due Diligence', 'Phase 1', 'Phase 2', 'Integration'];
const percentProcess = ['20%', '40%', '50%', '60%', '80%', '100%'];
const statusList = ['NBO', 'InfoMemo', 'NDA', 'Teaser', 'Dropped'];
const statusColor = ['bg-pink-800', 'bg-pink-600', 'bg-pink-400', 'bg-pink-300', 'bg-warning-300'];
const userType = ['Buyer', 'Legal', 'Advisor'];


for (let i = 1; i < 9; i += 1) {
  const fakeBuyers = [];
  let currentStatus = 0;
  const positionInProcessIndex = Charlatan.Number.between(0, processSteps.length - 1);

  for (let j = 0; j < 20; j += 1) {
    const contact = Charlatan.Name.name();

    let offerPrice = '';

    if (j === 7) currentStatus += 1;

    if (j > 7 && Math.random() > 0.5) currentStatus += 1;

    if (currentStatus > statusList.length - 1) currentStatus = statusList.length - 1;

    if (currentStatus === 0) {
      offerPrice = `${Charlatan.Number.between(100, 150)} m€`;
    }

    const fakeContacts = [];
    for (let k = 0; k < 20; k += 1) {
      const buyerContact = {
        lastConnectionDate: moment(Charlatan.Date.backward(4)).fromNow(),
        company: Charlatan.Company.name(),
        firstName: Charlatan.Name.firstName(),
        lastName: Charlatan.Name.lastName(),
        phone: Charlatan.PhoneNumber.cellPhone(),
        email: Charlatan.Internet.email(),
        city: Charlatan.Address.city(),
        country: Charlatan.Address.country(),
        isNew: Math.random() >= 0.5,
        type: userType[Math.floor(Math.random() * (3))],
      };

      fakeContacts.push(buyerContact);
    }


    const buyer = {
      id: j + 1,
      name: Charlatan.Company.name(),
      contact,
      contacts: fakeContacts,
      email: Charlatan.Internet.email(contact),
      status: statusList[currentStatus],
      statusColor: statusColor[currentStatus],
      todoCount: Charlatan.Helpers.rand(0, 6),
      positionInProcess: Charlatan.Helpers.sample(['Phase 1', 'Phase 2']),
      offerPrice,
      valuation: `${Charlatan.Number.between(760, 950)} m€`,
      nextMeetingDate: moment(Charlatan.Date.forward(5)).fromNow(),
      nextMeetingWith: Charlatan.Name.name(),
    };

    fakeBuyers.push(buyer);
  }

  const deal = {
    id: i,
    name: Charlatan.Company.name(),
    tagline: Charlatan.Company.catchPhrase(),
    dealLead: Charlatan.Name.name(),
    revenues: `${Charlatan.Number.between(100, 850)} mUSD`,
    typeOfBusiness: Charlatan.Helpers.sample(['Industry', 'Pharma', 'Utilities', 'Telco']),
    outstandingQuestions: Charlatan.Number.between(10, 30),
    unscheduledMeetings: Charlatan.Number.between(3, 10),
    positionInProcess: processSteps[positionInProcessIndex],
    percentInProcess: percentProcess[positionInProcessIndex],
    status: Charlatan.Helpers.sample(['border-left-lg border-left-primary', 'border-left-lg border-left-danger', 'border-left-lg border-left-success', 'border-left-lg border-left-info']),
    buyers: fakeBuyers,
  };

  if (i === 1) {
    deal.name = 'ACME corp';
  }

  fakeDeals.push(deal);
}

const fakeTargets = [];

for (let i = 1; i < 9; i += 1) {
  const keyInfoNum = 3;
  const keyInfos = [];

  for (let j = 0; j < keyInfoNum; j += 1) {
    const fakeKeyInfo = {
      line: Charlatan.Company.catchPhrase(),
    };

    keyInfos.push(fakeKeyInfo);
  }

  const target = {
    tagline: Charlatan.Company.catchPhrase(),
    revenues: `${Charlatan.Number.between(100, 850)} mUSD`,
    recommended: Math.random() >= 0.5,
    rating: Charlatan.Number.between(2, 5),
    keyInfos,
  };

  fakeTargets.push(target);
}

export default {
  deals: fakeDeals,
  targets: fakeTargets,
};
