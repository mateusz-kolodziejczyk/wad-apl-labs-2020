import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PersonSchema = new Schema({

  birthday: { type: String},
  known_for_department: { type: String },
  deathday: { type: String },
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  also_known_as: [{ type: String}],
  gender: { type: Number },
  biography: { type: String },
  popularity: { type: Number },
  place_of_bith: { type: String },
  profile_path: { type: Number },
  adult: { type: Boolean },
  imdb_id: { type: String },
  homepage: { type: String},
});

PersonSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('People', PersonSchema);


