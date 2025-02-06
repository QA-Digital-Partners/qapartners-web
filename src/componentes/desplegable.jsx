import React, { useEffect, useState } from "react";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Envolvemos tanto el texto como el menú dentro del mismo contenedor
    <div
      className="relative inline-block text-left w-full h-full"
      // Solo se abre el menú al hacer hover sobre el contenedor completo
      onMouseEnter={() => setIsOpen(true)}
      // Solo se cierra cuando el mouse salga del área completa (texto + menú)
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Texto sobre el que se hace hover */}
      <div className="cursor-pointer">
        <span className="text-blue-500">Hover over me</span>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute left-0 mt-0 w-48 bg-white border rounded-lg shadow-lg">
          <ul className="py-1">
            <li
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Option 1
            </li>
            <li
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Option 2
            </li>
            <li
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const ShowUpElements = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.show-up2'); // Selecciona los elementos

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añade la clase 'visible'
          }
        });
      },
      { threshold: 0.1 } // Detecta cuando al menos el 10% del elemento es visible
    );

    elements.forEach((el) => observer.observe(el)); // Observa todos los elementos

    return () => observer.disconnect(); // Limpia el observer al desmontar
  }, []);

  return (
    <div>
      <h1>Scroll to see the elements appear!</h1>
      <div className="show-up2 bg-emerald-100">Element 1</div>
      <div className="show-up2 bg-stone-400">Element 2</div>
      <div className="show-up2 bg-red-500">Element 3</div>
    </div>
  );
};
