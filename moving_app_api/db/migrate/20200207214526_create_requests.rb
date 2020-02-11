class CreateRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :requests do |t|
      t.string :contact
      t.string :address
      t.datetime :start_at
      t.boolean :truck
      t.integer :helper

      t.timestamps
    end
  end
end
