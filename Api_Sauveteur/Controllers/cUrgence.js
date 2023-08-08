const Urgence = require("../Models/mUrgence");

exports.createUrgence = (req, res, next) => {
  const urgenceObject = req.body;
  delete urgenceObject._id;
  const urgence = new Urgence({
    ...urgenceObject,
    userId: req.auth.userId,
  });
  urgence
    .save()
    .then(() => {
      res.status(201).json({ message: "Urgence créée !" });
    })
    .catch((error) => res.status(400).json({ error: error }));
};

exports.getAllUrgence = (req, res, next) => {
  Urgence.find()
    .then((urgences) => res.status(200).send(urgences))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyUrgence = (req, res, next) => {
  const urgenceObject = req.body;
  delete urgenceObject._id;
  Urgence.findOne({ _id: req.params.id })
    .then((urgence) => {
      if (urgence.userId !== req.auth.userId) {
        res.status(401).json({ message: "Modification non autorisé !" });
      } else {
        Urgence.updateOne(
          { _id: req.params.id },
          { ...urgenceObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "urgence traitée" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => res.status(401).json({ error }));
};

exports.deleteUrgence = (req, res, next) => {
  Urgence.findOne({ _id: req.params.id })
    .then((urgence) => {
      if (urgence.userId !== req.auth.userId) {
        res.status(401).json({ message: "Suppression non authorisé" });
      } else {
        Urgence.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Urgence Supprimé !" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => res.status(401).json({ error }));
};
