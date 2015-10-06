class AddSpacesToBenches < ActiveRecord::Migration
  def change
    add_column :benches, :spaces, :integer, null: false
  end
end
