ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    columns do
      column do
        panel "Últimos Produtos (Pendentes)" do
          ul do
            Product.pending.limit(5).map do |product|
              li link_to(product.name, admin_product_path(product))
            end
          end
        end
      end

      column do
        panel "Últimas Reviews" do
          ul do
            Review.pending.limit(5).map do |review|
              li link_to("#{review.product.name} - #{review.rating} ⭐", admin_review_path(review))
            end
          end
        end
      end
    end

    columns do
      column do
        panel "Métricas do Sistema" do
          div do
            table do
              tr do
                th "Total de Usuários"
                td User.count
              end
              tr do
                th "Softwares Aprovados"
                td Product.approved.count
              end
              tr do
                th "Total de Categorias"
                td Category.count
              end
            end
          end
        end
      end
    end
  end
end
