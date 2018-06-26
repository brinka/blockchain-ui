export function getItemById(id) {
  if (id !== "52983465-23485762395871-315-13478561-4378") return null;
  return {
    name: 'Paralen',
    id,
    events: [{
      name: 'Manufactured',
      place: 'London',
      isotime: '2018-06-10T10:08:44.692Z',
      company: 'Novartis',
      comment: 'Ready for transport'
    }, {
      name: 'Transport',
      place: 'London',
      isotime: '2018-06-12T20:46:58.692Z',
      company: 'DHL',
      comment: 'Sorting center'
    }, {
      name: 'Transport',
      place: 'Hamburg',
      isotime: '2018-06-13T06:12:31.692Z',
      company: 'DHL',
      comment: 'Warehouse'
    }, {
      name: 'Delivered',
      place: 'Prague',
      isotime: '2018-06-22T12:01:37.692Z',
      company: 'DHL',
      comment: 'Delivered to HackPrague 2018'
    }]
  }
}