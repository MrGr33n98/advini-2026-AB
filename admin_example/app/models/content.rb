class Content < ApplicationRecord
  enum content_type: { article: 0, guide: 1, ebook: 2, material: 3 }
  enum status: { draft: 0, published: 1, archived: 2 }

  validates :title, :body, presence: true
end
