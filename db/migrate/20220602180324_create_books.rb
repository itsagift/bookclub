class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :likes, default: 0
      t.integer :club_id
      t.string :library_url

      t.timestamps
    end
  end
end
