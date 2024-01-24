class Post < ApplicationRecord
    # post and comment relation
    has_many :comments, dependent: :destroy
end
