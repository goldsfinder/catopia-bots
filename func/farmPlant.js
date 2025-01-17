const { default: axios } = require("axios");
const {
  validateToken,
} = require("./CheckValidToken");
const { getLand, getPlantInfo, harvestPlant } = require("./repo");
const { buyPlant } = require("./buyPlant");

exports.farmPlant = async () => {
  const tokens = await validateToken();

  for (const token of tokens) {
    const harvest = await harvestPlant(token);

    if (harvest?.gold) {
      console.log(`[ Running ] : GOLD: ${harvest?.gold} Harvested from Land`);
    } else {
      console.log(harvest);
    }

    const land = await getLand(token);
    if (!land) {
      console.log(`[ BOT ] : cant get land info ${token.token}`);
      return;
    }
    if (land.emptyLand.length == 0) {
      console.log(`[ BOT ] : no empty land ${token.token}`);
      return;
    }
    const plant = await getPlantInfo(token);

    if (!plant) {
      console.log(`[ BOT ] : cant get plant info ${token.token}`);
      return;
    }
    if (plant.length < land.emptyLand.length) {
      for (const buy of land.emptyLand) {
        try {
          await buyPlant();
          console.log(`[ BOT ] : Buy Plant ...`);
        } catch (error) {
          console.log(error.message);
        }
      }
    }

    const checkUpdatePlant = await getPlantInfo(token);

    for (let i = 0; i < Math.min(land.emptyLand.length, 4); i++) {
      const farm = land.emptyLand[i];
      farm.checkUpdatePlant = checkUpdatePlant[i];

      try {
        await axios.post(
          `https://api.catopia.io/api/v1/players/plant`,
          {
            plantId: checkUpdatePlant[i].id,
            landId: farm.id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
        console.log(
          `${checkUpdatePlant[i].name} planted to Land [ ${farm.id} ]`
        );
        console.log(`[ BOT ] : Wait 10 minutes for Growing...`);
      } catch (error) {
        console.log(error.message);
      }
    }
    console.log(`[ BOT ] : Wait 10 minutes for Growing...`);
    await delay(10);

    const nextHarvest = await axios.post(
      "https://api.catopia.io/api/v1/players/plant/harvestAll",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      }
    );

    console.log(
      `[ Running ] : GOLD: ${nextHarvest.data.data.gold} Harvested from Land`
    );
  }
};

function delay(minutes) {
  return new Promise((resolve) => setTimeout(resolve, minutes * 60000));
}
