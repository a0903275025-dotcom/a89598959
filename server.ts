import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <body style="background:#050505;color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;margin:0;">
      <h1 style="font-size:5rem;font-weight:bold;margin:0;background:linear-gradient(to right, #fff, #666);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">ApexAds AI</h1>
      <p style="font-size:1.5rem;opacity:0.6;margin-top:10px;">旗艦影音生成系統：已成功連線</p>
      <div style="margin-top:30px;padding:30px;border:1px solid #333;border-radius:20px;background:#111;text-align:center;min-width:300px;">
        <p style="color:#10b981;font-weight:bold;">● 伺服器狀態：運作中</p>
        <p style="color:#3b82f6;font-weight:bold;">● 雲端引擎：Node.js 22</p>
      </div>
    </body>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('🚀 ApexAds AI Online');
});
