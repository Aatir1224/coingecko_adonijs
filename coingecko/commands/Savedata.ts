import { BaseCommand } from "@adonisjs/core/build/standalone";
import Coingecko from "App/Models/Coingecko";
import axios from "axios";
export default class Savedata extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = "savedata";

  /**
   * Command description is displayed in the "help" output
   */
  public static description = "";

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  };

  public async run() {
    let count = 0;
    try {
      const coinsData: any = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list?include_platform=true"
      );
      for (const coinData of coinsData.data) {
        count += 1;
        const { id, symbol, name, platforms } = coinData;
        console.log(`Running for count ${count} for id : ${id}`);

        await Coingecko.create({
          coin: id,
          symbol,
          name,
          platform:
            Object.keys(platforms).length > 0 ? JSON.stringify(platforms) : "",
        });
      }
    } catch (err) {
      this.logger.error(err);
    }
  }
}
