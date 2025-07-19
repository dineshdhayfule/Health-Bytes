// MongoDB initialization script
db = db.getSiblingDB('healthbites');

// Create collections
db.createCollection('profiles');
db.createCollection('dailymealplans');
db.createCollection('exercises');
db.createCollection('recipes');

// Create indexes for better performance
db.profiles.createIndex({ "email": 1 }, { unique: true, sparse: true });
db.dailymealplans.createIndex({ "user": 1, "date": 1 }, { unique: true });
db.dailymealplans.createIndex({ "date": 1 });

print('Database initialized successfully!');
