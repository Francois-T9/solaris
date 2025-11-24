import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import dotenv from "dotenv";
dotenv.config();
async function main() {
  const fetchManufacturers = async () => {
    try {
      const apiResponse = await fetch(
        `https://hub.juheapi.com/ev-spec/v1/brands?apikey=${process.env.EV_API_KEY}`,
        {
          method: "GET",
        }
      );
      if (apiResponse.status == 200) {
        const data = await apiResponse.json();

        for (let brand of data.data.brands) {
          await prisma.manufacturer.upsert({
            where: { name: brand },
            update: {},
            create: {
              name: brand,
            },
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  fetchManufacturers();
}

main()
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
