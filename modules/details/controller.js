import { VideoDetails } from "./model.js";

export const addData = async (req, res) => {
  try {
    const body = req.body;

    // Check duplicate by link
    const exists = await VideoDetails.findOne({ link: body.link });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Duplicate record! This video already exists.",
      });
    }

    const data = await VideoDetails.create(body);

    return res
      .status(200)
      .json({ success: true, message: "Data Added successfully", data: data });
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getData = async (_, res) => {
  try {
    const data = await VideoDetails.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({
        success: true,
        message: "Data fetched successfully",
        data: data,
      });
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedData = await VideoDetails.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedData) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: updatedData,
    });
  } catch (error) {
    console.error("❌ Error updating data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await VideoDetails.findByIdAndDelete(id);

    if (!deletedData) {
      return res.status(404).json({
        success: false,
        message: "Record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (error) {
    console.error("❌ Error deleting data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
