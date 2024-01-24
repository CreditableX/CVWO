class Api::V1::CommentsController < ApplicationController
  before_action :set_post
  before_action :set_comment, only: %i[ show update destroy ]


  # GET /comments
  def index
    #comment = Comment.all
    @comments = @post.comments.order(created_at: :desc)

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = @post.comments.new(comment_params)
    # @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: api_v1_post_comment_url(@comment.post, @comment)
    else
      render json:{meessage: "test"}, status: :unprocessable_entity
      # render json: @comment.errors, status: :unprocessable_entity
      
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      #@comment = Comment.find(id: params[:id])
      @comment = @post.comments.find_by(id: params[:id])
      render json: { error: 'Comment not found' }, status: :not_found unless @comment
    end

    def set_post
      @post = Post.find_by(id: params[:post_id])
      render json: { error: 'Post not found' }, status: :not_found unless @post
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:body, :post_id)
    end
end
