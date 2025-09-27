Table users {
  userId varchar [pk]           // Better Auth uses string IDs (UUID/nanoid)
  email varchar [unique]        // Primary identifier
  name varchar                  // Display name
  avatar_url varchar            // Profile picture
  email_verified boolean        // OAuth verification status
  created_at timestamp          // Account creation
  updated_at timestamp          // Last modification
}

Table user_profiles {
  profileId integer [pk]        // Internal primary key
  userId varchar [unique]       // One profile per user
  age integer                   // For age-appropriate suggestions
  birthday date                 // For birthday features, zodiac matching
  height decimal(5,2)           // Precise measurements (175.50 cm)
  weight decimal(5,2)           // For fit recommendations
  gender varchar(20)            // Sizing and style preferences
  body_type_id integer          // Reference to body_types
  fav_color varchar(7)          // Hex color (#FF5733)
  style_preference_ids integer[] // Array of preferred styles
}

Table body_types {
  body_type_id integer [pk]
  body_type varchar(50) [unique]     // 'Apple', 'Hourglass', 'Rectangle'
}

Table fashion_styles {
  style_id integer [pk]
  name varchar(50) [unique]     // 'Bohemian', 'Minimalist', 'Streetwear'
  description text
}

Table clothing_categories {
  category_id integer [pk]
  name varchar(50) [unique]     // 'Top', 'Bottom', 'Footwear'
}

Table images {
  image_id integer [pk]
  original_url varchar(500)     // Raw uploaded image
  processed_url varchar(500)    // After AI background removal
  thumbnail_url varchar(500)    // Performance optimization
  alt_text varchar(200)         // Accessibility
  file_size integer             // Storage optimization
  width integer                 // Responsive design
  height integer                // Aspect ratio calculations
  format varchar(10)            // 'jpg', 'png', 'webp'
  uploaded_at timestamp
}

Table outfits {
  outfit_id integer [pk]
  name varchar(100)
  description text
  primary_image_id integer      // Main outfit photo
  category_id integer           // Top, Bottom, Full Outfit, etc.
  style_ids integer[]           // Can be multiple styles
  suitable_body_types integer[] // Works for multiple body types
  color_palette jsonb           // Dominant colors
  tags varchar[]                // Search tags
  weather_conditions varchar[]  // 'sunny', 'rainy', 'cold'
}

Table saved_outfits {
  saved_id integer [pk]
  user_id varchar
  outfit_id integer
  is_favorite boolean           // Favorites vs regular saves
  saved_at timestamp

  UNIQUE(user_id, outfit_id)    // Prevent duplicate saves
}

Table social_shares {
  share_id integer [pk]
  user_id varchar
  outfit_id integer             // Can be null
  digital_outfit_id integer     // Can be null
  platform varchar(20)         // 'instagram', 'facebook', 'twitter'
  share_url varchar(500)        // Generated share link
  shared_at timestamp
}

