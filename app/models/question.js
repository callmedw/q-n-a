import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  topic: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
