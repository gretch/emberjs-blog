App.NewBlogView = Ember.View.extend({
  tagName:      'form',
  templateName: 'app/templates/blogs/edit',

  init: function() {
    this._super();
    this.set("blog", App.Blog.create());
  },

  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

  cancelForm: function() {
    this.get("parentView").hideNew();
  },

  submit: function(event) {
    var self = this;
    var blog = this.get("blog");

    event.preventDefault();

    blog.saveResource()
      .fail( function(e) {
        App.displayError(e);
      })
      .done(function() {
        App.blogsController.pushObject(blog);
        self.get("parentView").hideNew();
      });
  }
});