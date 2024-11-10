import React, { useState } from 'react';

// Lista de regalos TikTok
const tiktokGifts = [
  { name: "Rosa", image: "https://via.placeholder.com/50?text=Rosa", value: "rose" },
  { name: "Panda", image: "https://via.placeholder.com/50?text=Panda", value: "panda" },
  { name: "Coche", image: "https://via.placeholder.com/50?text=Coche", value: "car" },
  // Más regalos...
];

const AlertSettings = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all"); // 'all', 'kick', 'twitch', 'tiktok'
  const [alertSettings, setAlertSettings] = useState({
    followers: false,
    subscriptions: false,
    donations: false,
    raid: false,
    giftedSubs: false,
    tiktokGifts: [],
  });

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleAlertToggle = (alertType) => {
    setAlertSettings({
      ...alertSettings,
      [alertType]: !alertSettings[alertType],
    });
  };

  const handleTikTokGiftSelect = (gift) => {
    const updatedGifts = alertSettings.tiktokGifts.includes(gift.value)
      ? alertSettings.tiktokGifts.filter(g => g !== gift.value)
      : [...alertSettings.tiktokGifts, gift.value];

    setAlertSettings({
      ...alertSettings,
      tiktokGifts: updatedGifts,
    });
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Configuración de Alertas</h2>

      {/* Filtros de Plataforma */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Selecciona la plataforma para las alertas</label>
        <div className="flex space-x-4">
          <button
            onClick={() => handlePlatformChange('all')}
            className={`py-2 px-4 rounded-md ${selectedPlatform === 'all' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
          >
            Todas
          </button>
          <button
            onClick={() => handlePlatformChange('kick')}
            className={`py-2 px-4 rounded-md ${selectedPlatform === 'kick' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
          >
            Kick
          </button>
          <button
            onClick={() => handlePlatformChange('twitch')}
            className={`py-2 px-4 rounded-md ${selectedPlatform === 'twitch' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
          >
            Twitch
          </button>
          <button
            onClick={() => handlePlatformChange('tiktok')}
            className={`py-2 px-4 rounded-md ${selectedPlatform === 'tiktok' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
          >
            TikTok
          </button>
        </div>
      </div>

      {/* Sección de alertas */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            id="followers"
            checked={alertSettings.followers}
            onChange={() => handleAlertToggle('followers')}
            className="w-5 h-5"
          />
          <label htmlFor="followers" className="text-lg">Alerta de Nuevo Seguidor</label>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            id="subscriptions"
            checked={alertSettings.subscriptions}
            onChange={() => handleAlertToggle('subscriptions')}
            className="w-5 h-5"
          />
          <label htmlFor="subscriptions" className="text-lg">Alerta de Nueva Suscripción</label>
        </div>

        {/* Donaciones solo para Kick y Twitch */}
        {(selectedPlatform === 'kick' || selectedPlatform === 'twitch' || selectedPlatform === 'all') && (
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="donations"
              checked={alertSettings.donations}
              onChange={() => handleAlertToggle('donations')}
              className="w-5 h-5"
            />
            <label htmlFor="donations" className="text-lg">Alerta de Donaciones</label>
          </div>
        )}

        {/* Raids y Sub Regaladas */}
        {(selectedPlatform === 'kick' || selectedPlatform === 'twitch' || selectedPlatform === 'all') && (
          <>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="raid"
                checked={alertSettings.raid}
                onChange={() => handleAlertToggle('raid')}
                className="w-5 h-5"
              />
              <label htmlFor="raid" className="text-lg">Alerta de Raid</label>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="giftedSubs"
                checked={alertSettings.giftedSubs}
                onChange={() => handleAlertToggle('giftedSubs')}
                className="w-5 h-5"
              />
              <label htmlFor="giftedSubs" className="text-lg">Alerta de Subs Regaladas</label>
            </div>
          </>
        )}

        {/* Sección de Regalos TikTok */}
        {selectedPlatform === 'tiktok' || selectedPlatform === 'all' ? (
          <div>
            <h3 className="text-xl font-semibold mt-6 mb-4">Regalos TikTok</h3>
            <div className="grid grid-cols-3 gap-4">
              {tiktokGifts.map((gift) => (
                <div key={gift.value} className="flex items-center space-x-2">
                  <img src={gift.image} alt={gift.name} className="w-8 h-8" />
                  <button
                    onClick={() => handleTikTokGiftSelect(gift)}
                    className={`py-2 px-4 rounded-md ${alertSettings.tiktokGifts.includes(gift.value) ? 'bg-blue-500 text-white' : 'bg-white border'}`}
                  >
                    {gift.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AlertSettings;
