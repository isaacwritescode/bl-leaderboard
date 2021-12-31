import { Level } from "../entities/level";
import { Arg, Ctx, Field, InputType, Query, Resolver } from "type-graphql";
import { Context } from "types";

@InputType()
class Identity {
  @Field()
  user_ID: Number;
}

@Resolver()
export class LevelResolver {
  @Query(() => [Level])
  async allLevel(@Ctx() { db }: Context): Promise<Level> {
    const level = db.collection("level");

    return (await level.find({}, { sort: { xp: -1 } }).toArray()) as any;
  }

  @Query(() => Level)
  async myLevel(@Arg("options") options: Identity, @Ctx() { db }: Context) {
    const level = db.collection("level");

    const prefs = {
      projection: { user_ID: 1, xp: 1 },
    };

    return await level.findOne({ user_ID: options.user_ID }, prefs);
  }
}
