class BlogsController < ApplicationController
  # GET /blogs
  # GET /blogs.json
  def index
    @blogs = Blog.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @blogs }
    end
  end

  # GET /blogs/1.json
  def show
    @blog = Blog.find(params[:id])

    respond_to do |format|
      format.json { render json: @blog }
    end
  end

  # POST /blogs.json
  def create
    params[:blog][:user_id] = User.first.try(:id)
    @blog = Blog.new(params[:blog])

    respond_to do |format|
      if @blog.save
        format.json { render json: @blog, status: :created, location: @blog }
      else
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /blogs/1.json
  def update
    @blog = Blog.find(params[:id])

    respond_to do |format|
      if @blog.update_attributes(params[:blog])
        format.json { render json: nil, status: :ok }
      else
        format.json { render json: @blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blogs/1.json
  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy

    respond_to do |format|
      format.json { render json: nil, status: :ok }
    end
  end
end
