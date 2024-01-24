class AddUserIdToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :user_id, :integer
    add_column :comments, :user_id, :integer
  end
end
