
puts 'Creating  users'
u1 = User.create(username: "user1", email: "user1@example.com", password:"123", password_confirmation:"123")
u2 = User.create(username: "user2", email: "user2@example.com", password:"1234", password_confirmation:"1234")
u3 = User.create(username: "user3", email: "user3@example.com", password:"12345", password_confirmation:"12345")
u4 = User.create(username: "user4", email: "user4@example.com", password:"123456", password_confirmation:"123456")
u5 = User.create(username: "user5", email: "user5@example.com", password:"1234567", password_confirmation:"1234567")


puts 'Creating Clubs'
c1 = Club.create(name: "Goose's Digest", description:"All genres welcome")
c2 = Club.create(name: "Banned Books For Rebel Geese", description: "First rule of Banned Books For Rebel Geese, never talk about Banned Books For Rebel Geese")

puts 'Creating Memberships'
m1 = Membership.create(user_id: u1.id, club_id: c1.id, admin: true)
m2 = Membership.create(user_id: u2.id, club_id: c2.id, admin: true)
m3 = Membership.create(user_id: u3.id, club_id: c1.id, admin: false)
m4 = Membership.create(user_id: u4.id, club_id: c1.id, admin: false)
m5 = Membership.create(user_id: u5.id, club_id: c1.id, admin: false)
m6 = Membership.create(user_id: u5.id, club_id: c2.id, admin: false)
m7 = Membership.create(user_id: u3.id, club_id: c2.id, admin: false)
puts 'Seeding done'