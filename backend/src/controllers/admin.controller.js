import Song from "../models/song.model.js";
import Album from "../models/album.model.js";
export const createSong = async (req, res) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      res.status(400).json({ message: "Please upload all files" });
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const song = await Song.create({
      title,
      artist,
      albumId: albumId || null,
      duration,
      audioUrl,
      imageUrl,
    });

    await song.save();

    if (albumId) {
      await Album.findByIdAndUpdate(albumId, { $push: { songs: song._id } });
    }

    res.status(201).json({ message: "Song created successfully", data: song });
  } catch (error) {
    console.log("Error in createSong controller", error);
    res.status(500).json({ message: "Internal Server error", error: error });
  }
};
