App.ShowBlogView = Ember.View.extend({
  templateName: 'app/templates/blogs/show',
  classNames:   ['show-blog'],
  tagName:      'tr',

  doubleClick: function() {
    this.showEdit();
  },

  showEdit: function() {
    this.set('isEditing', true);
  },

  hideEdit: function() {
    this.set('isEditing', false);
  },

  destroyRecord: function() {
    var blog = this.get("blog");

    blog.destroyResource()
      .fail( function(e) {
        App.displayError(e);
      })
      .done(function() {
        App.blogsController.removeObject(blog);
      });
  }
});