PostType.create!(name: "post", aspects: {"title" => "text", "body" => "textarea"})
PostType.create!(name: "page", aspects: {"title" => "text", "body" => "textarea"})
User.create!(name: "Ryan Bahniuk", email: "ryan.bahniuk@gmail.com", rights: "admin", password: "password")
