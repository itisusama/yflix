import { VideoDetails } from "./model.js";

export const addData = async (req, res) => {
  try {
   
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getData = async (_, res) => {
  try {
    
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateData = async (req, res) => {
  try {
    
  } catch (error) {
    console.error("❌ Error updating data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteData = async (req, res) => {
  try {
    
    
  } catch (error) {
    console.error("❌ Error deleting data:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
