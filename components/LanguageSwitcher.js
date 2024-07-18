import { useRouter } from "next/router";
import React from "react";

function LanguageSwitcher() {
  const handleClick = (l = () => {
    push("/", undefined, { locale: l });
  });
  const { locale, locales, push } = useRouter();
  return (
    <div>
      <div>
        <h1> {locale} </h1>
      </div>
      <div>
        <h2>Chose your locale</h2>
        {locales.map((l) => (
          <button key={l} onClick={handleClick(l)}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
