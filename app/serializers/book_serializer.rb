class BooksSerializer < ActiveModel::Serializer
  attributes :id, :title, :author
end
