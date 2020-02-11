class AddContactInfoToRequests < ActiveRecord::Migration[6.0]
  def change
    add_column :requests, :contact_info, :string
  end
end
