# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  zip_code        :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    attr_reader :password

    validates :first_name, :last_name, :zip_code, presence: true
    validates :zip_code, numericality: { only_numeric: true, message: "is invalid. Please only use numeric values." }
    validates :password_digest, presence: { message: 'Password can\'t be blank' }
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, presence: true, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create, message: 'is invalid. Please make sure it is in the correct format. (ex: "bob@email.com")' }

    after_initialize :ensure_session_token

    has_many :reviews,
        foreign_key: :user_id,
        class_name: :Review

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def set_num_reviews
        numReviews = {
            1=>0,
            2=>0,
            3=>0,
            4=>0,
            5=>0
        }

        self.reviews.each do |review|
            numReviews[review.rating] += 1
        end

        self.num_reviews = numReviews
        self.save!
    end
end
