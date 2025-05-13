import React, { useState } from "react";
const data = {
  "Astım": "• Beta-2 agonist (Salbutamol 2.5 mg nebülize)\n• Sistemik steroid (Metilprednizolon 40-60 mg IV)\n• Oksijen takviyesi, SpO2 > 92% hedeflenir\n• Gerekirse ipratropium ve magnezyum sülfat",
  "KOAH": "• Salbutamol + ipratropium nebülize\n• Sistemik steroid (Prednizolon 40 mg PO)\n• Oksijen: SpO2 88-92%\n• Gerekirse antibiyotik",
  "Hipertansiyon": "• Kaptopril 25 mg PO\n• Labetalol 20 mg IV\n• Nitrogliserin IV (AKS varsa)",
  "Hipoglisemi": "• Bilinç açık: glukoz ağızdan\n• Bilinç kapalı: %50 dekstroz IV veya glukagon IM",
  "İshal": "• ORS, sıvı\n• Parasetamol\n• Probiyotik\n• Azitromisin gerekirse",
  "Epistaksis": "• Baş öne eğik\n• Burun kanatlarına baskı\n• Adrenalin/lidokain topikal",
  "Göğüs Ağrısı": "• EKG, troponin\n• MONA\n• D-dimer, akciğer grafisi",
  "Konvülziyon": "• Diazepam 5-10 mg IV\n• Midazolam IM\n• Postiktal fazda izlem",
  "Ateş": "• Parasetamol\n• Sepsis düşün\n• Kaynak araştır",
  "Ajitasyon": "• Haloperidol 5-10 mg IM\n• Midazolam IM\n• Hipoksi, glukoz kontrolü",
  "Baş Dönmesi": "• Ortostatik test\n• Dix-Hallpike\n• EKG, BT gerekirse"
};

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>Acil Karar Rehberi</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 20 }}>
        {Object.keys(data).map(key => (
          <button key={key} onClick={() => setSelected(key)}>{key}</button>
        ))}
      </div>
      {selected && (
        <div style={{ whiteSpace: 'pre-line', marginTop: 20 }}>
          <h2>{selected}</h2>
          <p>{data[selected]}</p>
        </div>
      )}
    </div>
  );
}

export default App;
