let fastestTime = null;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { time } = req.body;

    // If this is the first time or the new time is faster
    if (fastestTime === null || time < fastestTime) {
      fastestTime = time;
    }

    res.status(200).json({ fastestTime });
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
