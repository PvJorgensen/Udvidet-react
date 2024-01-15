import { useState } from 'react';
import style from './hilsen.module.scss';

export const Hilsen = () => {
  // Tilføj useState til at håndtere navnet
  const [hilsen, setHilsen] = useState("Send en hilsen til");

  // Funktion til at opdatere værdien af hilsen
  const handleInputChange = (event) => {
    setHilsen("Send en hilsen til " + event.target.value);
  };

  return (
    <>
      <h1>Skriv din Hilsen</h1>
      <div className={style.wrapper}>
        {/* Input-feltet, der opdaterer hilsen-værdien */}
        <input type="text" placeholder="Indtast navn" onChange={handleInputChange}
        />

        {/* Textarea, der viser den aktuelle hilsen-værdi */}
        <textarea value={hilsen} readOnly cols="30" rows="10"></textarea>
      </div>
    </>
  );
};
