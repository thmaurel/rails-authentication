class CreateMonuments < ActiveRecord::Migration[7.1]
  def change
    create_table :monuments do |t|
      t.string :name
      t.string :address
      t.date :opening_date

      t.timestamps
    end
  end
end
