# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Create admin user for all environments
AdminUser.find_or_create_by!(email: 'admin@example.com') do |admin|
  admin.password = 'password'
  admin.password_confirmation = 'password'
end

if Rails.env.development?
  User.create(email: 'test1@example.com', name: 'test1', password_digest: 'password',
              password_confirmation: 'password')
  User.create(email: 'test2@example.com', name: 'test2', password_digest: 'password',
              password_confirmation: 'password')

  3.times do |i|
    Post.create(title: "Title #{i}", body: "Body #{i} words goes here idk...", user_id: User.first.id)
    Post.create(title: "Title #{i}", body: "Body #{i} words goes here idk...", user_id: User.second.id)
  end
end
