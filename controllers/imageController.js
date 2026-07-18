import FormData from 'form-data';
import axios from 'axios';

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.json({ success: false, message: "Prompt is missing" });
    }

    const formData = new FormData();
    formData.append('prompt', prompt);

    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
      headers: {
        'x-api-key': process.env.CLIPDROP_API_KEY,
      },
      responseType: 'arraybuffer'
    });

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    res.json({
      success: true,
      message: 'Image generated successfully',
      creditBalance: 9998, // Dummy credit balance after generating
      resultImage
    });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};