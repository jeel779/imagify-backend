const registerUser = async (req, res) => {
  try {
    const { name } = req.body;
    const token = "mock-jwt-token-value";
    res.json({
      success: true,
      token,
      user: { name: name || "Demo User" }
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const token = "mock-jwt-token-value";
    const name = email ? email.split("@")[0] : "Demo User";
    res.json({
      success: true,
      token,
      user: { name }
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const userCredits = async (req, res) => {
  try {
    res.json({
      success: true,
      credits: 9999,
      user: {
        name: "Demo User",
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, userCredits };