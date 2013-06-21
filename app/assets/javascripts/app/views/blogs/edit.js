App.EditBlogView = Ember.View.extend({
  tagName:      'form',
  templateName: 'app/templates/blogs/edit',

  init: function() {
    this._super();

    // Create a new blog that's a duplicate of the blog in the parentView;
    // Changes made to the duplicate won't be applied to the original unless
    // everything goes well in submitForm()
    this.set("blog", this.get('parentView').get('blog').copy());
  },

  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

  cancelForm: function() {
    this.get("parentView").hideEdit();
  },

  submit: function(event) {
    var self = this;
    var blog = this.get("blog");

    event.preventDefault();

    blog.saveResource()
      .fail( function(e) {
        App.displayError(e);
      })
      .done( function() {
        var parentView = self.get("parentView");
        parentView.get("blog").duplicateProperties(blog);
        parentView.hideEdit();
      });
  }
});