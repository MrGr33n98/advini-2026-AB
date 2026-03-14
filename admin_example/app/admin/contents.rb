ActiveAdmin.register Content do
  permit_params :title, :body, :content_type, :status

  scope :all, default: true
  scope :artigos, -> { where(content_type: :article) }
  scope :guias, -> { where(content_type: :guide) }
  scope :published, -> { where(status: :published) }

  index do
    selectable_column
    id_column
    column :title
    column :content_type do |c|
      status_tag c.content_type
    end
    column :status do |c|
      status_tag c.status
    end
    actions
  end
end
