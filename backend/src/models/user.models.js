const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    profilImg: { type: String, required: false },
    bannerImg: { type: String, required: false },
  },
  { _id: false }
);

const UserProfileSchema = new Schema(
  {
    biography: { type: String, required: false },
    images: ImageSchema,
  },
  { _id: false }
);

const UserSchema = new Schema({
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: UserProfileSchema,
});

module.exports = mongoose.model('User', UserSchema);
