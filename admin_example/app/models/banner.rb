class Banner < ApplicationRecord
  # Definimos onde o banner pode aparecer
  enum placement: { home_top: 0, home_middle: 1, sidebar: 2, category_page: 3 }
  
  belongs_to :category, optional: true

  validates :title, :image_url, :placement, presence: true
  
  # Escopo para pegar apenas banners que estão no período de validade e ativos
  scope :active_now, -> {
    where(active: true)
    .where('start_date <= ? OR start_date IS NULL', Time.current)
    .where('end_date >= ? OR end_date IS NULL', Time.current)
    .order(priority: :desc)
  }
end
