class BooksController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  

  def index
    books = Book.all
    render json: books
  end

  def update
    book = Book.find_by(id: params[:id])
    book.update(book_params)
    render json: book
  end

  def destroy
    book = Book.find_by(id: params[:id])
    book.destroy
    head :no_content
  end

  private

  def book_params
    params.permit(:likes)
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
