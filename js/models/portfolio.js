App.Portfolio = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string')
});

var Portfolio = [
 {
   id: 1,
   name: 'Rynoq',
   url: 'http://rynoq.com'
 },
 {
   id: 2,
   name: 'edPeople',
   url: 'http://edpeople.herokuapp.com'
 },
 {
   id: 3,
   name: 'Flosswords',
   url: 'http://flosswords.com/'
 },
 {
   id: 4,
   name: 'Crowded Lands',
   url: 'http://crowded-lands.herokuapp.com'
 }
];