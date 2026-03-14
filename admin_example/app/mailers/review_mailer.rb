class ReviewMailer < ApplicationMailer
  default from: 'no-reply@legaltechreview.com.br'

  def approved_email(review)
    @review = review
    @user = review.user
    @product = review.product

    mail(to: @user.email, subject: "Sua avaliação de #{@product.name} foi aprovada! ⚖️")
  end
end
