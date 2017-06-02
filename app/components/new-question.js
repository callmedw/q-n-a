import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        date: this.get('date') ? this.get('date'): "",
        author: this.get('author') ? this.get('author'): "",
        content: this.get('content') ? this.get('content'): "",
        topic: this.get('topic') ? this.get('topic'): "",
        notes: this.get('notes') ? this.get('notes'): ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
