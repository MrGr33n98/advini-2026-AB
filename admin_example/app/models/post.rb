class Post < ApplicationRecord
  belongs_to :user

  scope :published, -> { where.not(published_at: nil) }
  scope :unpublished, -> { where(published_at: nil) }

  def self.ransackable_attributes(_auth_object = nil)
    %w[user_id title body] # Allow searching by user_id, title and body
  end

  def self.ransackable_associations(_auth_object = nil)
    [] # We don't have any searchable associations in this case
  end
end
