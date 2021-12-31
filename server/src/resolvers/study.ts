import { Study } from "../entities/Study";
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";
import { Context } from "types";

@InputType()
class Options {
  @Field()
  sort!: string;
}

@Resolver()
export class StudyResolver {
  @Mutation(() => [Study])
  async allStudy(@Arg("options") options: Options, @Ctx() { db }: Context) {
    const study = db.collection("study");

    return await study
      .find(
        {},
        {
          sort: { [options.sort]: -1 },
        }
      )
      .toArray();
  }
}
