ActiveAdmin.register Banner do
  permit_params :title, :subtitle, :image_url, :cta_url, :placement, :active, :start_date, :end_date, :priority, :category_id

  index do
    selectable_column
    id_column
    column :title
    column :placement do |b|
      status_tag b.placement, class: 'important'
    end
    column :active
    column :priority
    column "Validade" do |b|
      if b.start_date && b.end_date
        "#{b.start_date.strftime('%d/%m')} até #{b.end_date.strftime('%d/%m')}"
      else
        "Sempre Ativo"
      end
    end
    actions
  end

  filter :title
  filter :placement, as: :select, collection: Banner.placements
  filter :active
  filter :category

  form do |f|
    f.inputs "Conteúdo do Banner" do
      f.input :title, placeholder: "Ex: Promoção de Verão"
      f.input :subtitle, placeholder: "Ex: Ganhe 20% de desconto em softwares de IA"
      f.input :image_url, hint: "Use uma URL de imagem (ex: Unsplash)"
      f.input :cta_url, label: "Link de Destino (CTA)"
    end
    
    f.inputs "Configurações Inteligentes" do
      f.input :placement, as: :select, collection: Banner.placements.keys
      f.input :category, hint: "Opcional: Exibir apenas nesta categoria"
      f.input :priority, hint: "Números maiores aparecem primeiro"
      f.input :active
    end

    f.inputs "Agendamento de Campanha" do
      f.input :start_date, as: :datepicker
      f.input :end_date, as: :datepicker
    end
    f.actions
  end
end
