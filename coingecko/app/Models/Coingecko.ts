import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Coingecko extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public coin: string;

  @column()
  public symbol: string;

  @column()
  public name: string;

  @column()
  public platform: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
