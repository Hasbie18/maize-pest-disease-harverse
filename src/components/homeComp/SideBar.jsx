import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/4 bg-gray-100 p-4">
      <h2 className="font-bold text-lg mb-4">Filter</h2>
      {/* Kategori */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Kategori</h3>
        <select className="w-full p-2 border rounded-md">
          <option>Wanita</option>
          <option>Pria</option>
        </select>
      </div>
      {/* Harga */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Harga Barang</h3>
        <input type="range" min="50" max="140" className="w-full"/>
        <div className="flex justify-between text-sm mt-2">
          <span>50 BYN</span>
          <span>140 BYN</span>
        </div>
      </div>
      {/* Ukuran */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Ukuran</h3>
        <div className="grid grid-cols-3 gap-2">
          <button className="border p-2">42</button>
          <button className="border p-2">44</button>
          <button className="border p-2">46</button>
          <button className="border p-2">48</button>
          <button className="border p-2">50</button>
        </div>
      </div>
      {/* Material */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Material</h3>
        <select className="w-full p-2 border rounded-md">
          <option>Kapas</option>
          <option>Wol</option>
        </select>
      </div>
      {/* Warna */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Warna</h3>
        <div className="flex flex-wrap gap-2">
          <button className="w-6 h-6 rounded-full bg-black border"></button>
          <button className="w-6 h-6 rounded-full bg-gray-500 border"></button>
          <button className="w-6 h-6 rounded-full bg-white border"></button>
        </div>
      </div>
      {/* Print */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Motif</h3>
        <div className="flex flex-wrap gap-2">
          <button className="border p-2">Geometri</button>
          <button className="border p-2">Bunga</button>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded-md">Terapkan</button>
    </aside>
  );
};

export default Sidebar;
