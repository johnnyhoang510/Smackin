# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  phone_number :string           not null
#  category     :string           not null
#  website      :string
#  lat          :decimal(, )      not null
#  lng          :decimal(, )      not null
#  price        :string
#  hours        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
