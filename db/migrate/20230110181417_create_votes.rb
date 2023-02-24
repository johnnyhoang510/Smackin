class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false
      t.boolean :has_voted, null:false, default: false
      t.timestamps
    end

    add_index :votes, :user_id
    add_index :votes, :review_id
  end
end
