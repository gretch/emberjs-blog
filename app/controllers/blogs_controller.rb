class BlogsController < ApplicationController
  before_filter :authenticate_user!
  before_filter :get_blog, :only => [:show, :update, :destroy]
  before_filter :get_blogs, :only => [:index]

  respond_to :json, :html

  def index
    respond_with(@blogs)
  end

  def show
    respond_with(@blog)
  end

  def create
    params[:blog][:user_id] = current_user.id
    @blog = Blog.new(params[:blog])

    respond_to do |format|
      if @blog.save
        format.json { render json: @blog, status: :created, location: @blog }
      else
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @blog.update_attributes(params[:blog])
        format.json { render json: nil, status: :ok }
      else
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @blog.destroy

    respond_to do |format|
      format.json { render json: nil, status: :ok }
    end
  end

  private
  def get_blog
    @blog = Blog.find(params[:id])
  end

  def get_blogs
    @blogs = Blog.all
  end
end
