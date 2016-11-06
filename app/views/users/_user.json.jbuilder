json.extract! user, :id, :title, :description, :address, :latitude, :longitude, :created_at, :updated_at
json.url user_url(user, format: :json)