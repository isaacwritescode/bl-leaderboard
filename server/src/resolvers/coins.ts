import { Coins } from "../entities/Coins";
import { Arg, Ctx, Field, InputType, Query, Resolver } from "type-graphql";
import { Context } from "types";

@InputType()
class CoinOwner {
  @Field()
  user_ID: Number;
}

@Resolver()
export class CoinsResolver {
  @Query(() => [Coins])
  async allCoins(@Ctx() { db }: Context): Promise<Coins> {
    const coins = db.collection("coins");

    return (await coins.find({}, { sort: { points: -1 } }).toArray()) as any;
  }

  @Query(() => Coins)
  async myCoins(@Arg("options") options: CoinOwner, @Ctx() { db }: Context) {
    const coins = db.collection("coins");

    const prefs = {
      projection: { user_ID: 1, points: 1 },
    };

    return await coins.findOne({ user_ID: options.user_ID }, prefs);
  }
}
