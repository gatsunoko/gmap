class MapController < ApplicationController
  def index
  	@users = User.all
  	@hash = Gmaps4rails.build_markers(@users) do |user, marker|
  		marker.lat user.latitude
  		marker.lng user.longitude
  		marker.infowindow render_to_string(:partial => "/users/my_template", :locals => { :object => user})
  		marker.json({title: user.title})
  	end
  end
end
