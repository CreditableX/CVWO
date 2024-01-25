class AddFlairToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :flair, :string
  end
end
