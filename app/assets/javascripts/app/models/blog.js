App.Blog = Ember.Resource.extend({
  resourceUrl:        '/blogs',
  resourceName:       'blog',
  resourceProperties: ['title', 'body'],

  validate: function() {
    if (this.get('title') === undefined || this.get('title') === '' ||
        this.get('body') === undefined  || this.get('body') === '') {
      return 'Blog post require a title and a body.';
    }
  }
});
