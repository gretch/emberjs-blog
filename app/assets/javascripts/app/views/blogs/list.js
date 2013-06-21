App.ListBlogsView = Ember.View.extend({
  templateName:    'app/templates/blogs/list',
  blogsBinding: 'App.blogsController',

  showNew: function() {
    this.set('isNewVisible', true);
  },

  hideNew: function() {
    this.set('isNewVisible', false);
  },

  refreshListing: function() {
    App.blogsController.findAll();
  }
});