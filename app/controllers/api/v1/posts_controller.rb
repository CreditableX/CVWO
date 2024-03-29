class Api::V1::PostsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    if params[:flair].present?
      @posts = Post.where(flair: params[:flair]).order(created_at: :desc)
    else
      @posts = Post.order(created_at: :desc)
    end

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      # cannot render @post as we are now in /api/v1/posts
      render json: @post, status: :created, location: api_v1_post_url(@post)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :body, :flair, :user_id)
    end
end
