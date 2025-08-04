'use client';
import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({});

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('送信データ:', formData);
    alert('フォームを送信しました！');
  };

  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>🧠 プロファイルシート</h1>

      <div>
        <h2>基本情報</h2>
        <input placeholder="氏名" onChange={e => handleChange('name', e.target.value)} style={inputStyle} />
        <input placeholder="役職／立場" onChange={e => handleChange('position', e.target.value)} style={inputStyle} />
        <input placeholder="関係性" onChange={e => handleChange('relationship', e.target.value)} style={inputStyle} />
        <input placeholder="初対面日／接点開始時期" onChange={e => handleChange('start_date', e.target.value)} style={inputStyle} />
      </div>

      <div>
        <h2>観察メモ①</h2>
        <textarea placeholder="性格・行動傾向" onChange={e => handleChange('observation1', e.target.value)} style={inputStyle} />
      </div>

      <div>
        <h2>観察メモ②</h2>
        <textarea placeholder="やる気スイッチ・地雷" onChange={e => handleChange('observation2', e.target.value)} style={inputStyle} />
      </div>

      <div>
        <h2>会話ログ</h2>
        <textarea placeholder="印象に残った会話" onChange={e => handleChange('conversation_log', e.target.value)} style={inputStyle} />
      </div>

      <div>
        <h2>対応のポイント</h2>
        <textarea placeholder="対応時の注意点など" onChange={e => handleChange('response_tips', e.target.value)} style={inputStyle} />
      </div>

      <div>
        <h2>関係性の目標</h2>
        {[
          '信頼構築',
          '成約・提案の精度向上',
          '課題解決のパートナーとしての関係',
          'チームワーク改善'
        ].map(item => (
          <label key={item} style={{ display: 'block', margin: '4px 0' }}>
            <input type="checkbox" onChange={e => handleChange(item, e.target.checked)} /> {item}
          </label>
        ))}
      </div>

      <button onClick={handleSubmit} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', borderRadius: 4 }}>
        送信
      </button>
    </main>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.5rem',
  margin: '0.5rem 0',
  border: '1px solid #ccc',
  borderRadius: '4px'
};
export default function Home() {
  return (
    <main>
      <h1>プロファイルフォームへようこそ！</h1>
      {/* ここにフォームやリンクなどを追記できます */}
    </main>
  );
}
