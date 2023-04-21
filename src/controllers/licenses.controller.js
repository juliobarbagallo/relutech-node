import License from '../models/License';
import User from '../models/User';

export const createLicense = async (req, res) => {
  const { id, software, assignedTo } = req.body;
  const user = await User.findOne({ email: assignedTo });
  if (!user) {
    return res.status(400).json({ message: 'User not found.' });
  }
  const newLicense = new License({ id, software, assignedTo: user.email });
  const licenseSaved = await newLicense.save();
  user.licenses.push(newLicense);
  await user.save();
  res.status(201).json(licenseSaved);
};

export const getLicenses = async (req, res) => {
  const licenses = await License.find();
  res.json(licenses);
};

export const getLicenseById = async (req, res) => {
  const license = await License.findById(req.params.licenseId);
  res.status(200).json(license);
};

export const updateLicenseById = async (req, res) => {
  const updatedLicense = await License.findByIdAndUpdate(
    req.params.licenseId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedLicense);
};

export const deleteLicenseById = async (req, res) => {
  const { licenseId } = req.params;
  const deletedLicense = await License.findByIdAndDelete(licenseId);
  res.status(204).json();
};
